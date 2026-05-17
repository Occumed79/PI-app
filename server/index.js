import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { checkDatabaseConnection, pool } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;
const clientOrigin = process.env.CLIENT_ORIGIN || '*';
const aiProvider = (process.env.AI_PROVIDER || 'auto').toLowerCase();

app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '2mb' }));

function safeArray(value) {
  return Array.isArray(value) ? value.filter(Boolean).slice(0, 12) : [];
}

function getAiConfigured() {
  if (aiProvider === 'gemini') return Boolean(process.env.GEMINI_API_KEY);
  if (aiProvider === 'groq') return Boolean(process.env.GROQ_API_KEY);
  return Boolean(process.env.GEMINI_API_KEY || process.env.GROQ_API_KEY);
}

function fallbackScenarioAnalysis({ employeeProfile }) {
  const profileName = employeeProfile?.baseProfile?.name || 'the selected employee profile';
  const needs = safeArray(employeeProfile?.baseProfile?.needs);
  const includedLenses = safeArray(employeeProfile?.includedLenses);
  const estimatedLenses = safeArray(employeeProfile?.estimatedLenses);
  const unknownLenses = safeArray(employeeProfile?.unknownLenses);

  return {
    summary: `This scenario should be interpreted through ${profileName} with caution. The strongest starting point is to separate confirmed profile signals from estimates and unknowns.`,
    possibleExplanations: [
      `The behavior may reflect a mismatch between the situation and the person's known work-style needs${needs.length ? `, especially ${needs.slice(0, 3).join(', ')}` : ''}.`,
      'The reaction may be a response to ambiguity, workload, unclear authority, pace, communication style, or lack of psychological safety rather than a negative attitude.',
      'If several inputs are estimated or unknown, the safest explanation is that more context is needed before interpreting intent.',
    ],
    strongestProfileSignals: includedLenses.length
      ? includedLenses.map((lens) => `${lens} is included in the working profile and can be used as a stronger interpretation lens.`)
      : ['No lenses are marked as fully included, so this answer should stay conservative.'],
    estimatedOrUnknownFactors: [
      ...estimatedLenses.map((lens) => `${lens} is estimated, so it should be treated as a hypothesis.`),
      ...unknownLenses.slice(0, 5).map((lens) => `${lens} is unknown and should not be assumed.`),
    ],
    whatNotToAssume: [
      'Do not assume the person is difficult, lazy, resistant, incapable, or intentionally negative.',
      'Do not infer sensitive personal history, health status, identity, family background, or private life context from behavior.',
      'Do not treat an estimate as a confirmed fact.',
    ],
    supportiveManagerResponse: [
      'Ask a neutral question about what would make the situation clearer or easier to execute.',
      'Name the work expectation without attaching blame or character judgment.',
      'Offer structure, prioritization, examples, or written follow-up when ambiguity is present.',
    ],
    conversationScript: 'I want to understand what part of this situation is creating friction so we can make the work clearer. From your perspective, what would help you move forward confidently?',
    followUpQuestions: [
      'What information is currently unclear?',
      'What support would reduce friction or rework?',
      'Is the issue mainly pace, priority, communication, authority, workload, or process clarity?',
    ],
    confidenceNote: 'Fallback answer generated without AI because Gemini and Groq are not configured or both failed. Add rotated GEMINI_API_KEY and GROQ_API_KEY in Render for live AI analysis.',
  };
}

function scenarioPrompt({ scenario, employeeProfile, managerGoal }) {
  return `You are an expert workplace scenario coach for a support-first behavioral interpretation app.

Strict rules:
- Do not diagnose.
- Do not infer sensitive personal history, private identity, health status, family background, socioeconomic status, or other protected/private traits.
- Do not call the person difficult, lazy, resistant, toxic, incapable, or negative.
- Separate known facts from estimates and unknowns.
- Give multiple possible explanations.
- Use cautious language.
- Provide supportive manager actions.
- Include what not to assume.
- Write in plain workplace language.

Return ONLY valid JSON with exactly these keys:
summary: string
possibleExplanations: string[]
strongestProfileSignals: string[]
estimatedOrUnknownFactors: string[]
whatNotToAssume: string[]
supportiveManagerResponse: string[]
conversationScript: string
followUpQuestions: string[]
confidenceNote: string

Input:
${JSON.stringify({ scenario, managerGoal, employeeProfile }, null, 2)}`;
}

function parseJsonText(text) {
  const cleaned = String(text || '').replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```$/i, '').trim();
  return JSON.parse(cleaned);
}

async function callGeminiForScenario(payload) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: scenarioPrompt(payload) }] }],
      generationConfig: { temperature: 0.25, maxOutputTokens: 1600, responseMimeType: 'application/json' },
    }),
  });

  if (!response.ok) throw new Error(`Gemini request failed: ${response.status} ${await response.text()}`);
  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join('\n');
  if (!text) throw new Error('Gemini response did not include text output.');
  return parseJsonText(text);
}

async function callGroqForScenario(payload) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return null;

  const model = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      temperature: 0.25,
      max_tokens: 1600,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: 'Return only valid JSON. Follow all support-first workplace interpretation guardrails.' },
        { role: 'user', content: scenarioPrompt(payload) },
      ],
    }),
  });

  if (!response.ok) throw new Error(`Groq request failed: ${response.status} ${await response.text()}`);
  const data = await response.json();
  return parseJsonText(data.choices?.[0]?.message?.content);
}

async function tryProvider(providerName, fn, payload, errors) {
  try {
    const result = await fn(payload);
    if (result) return { provider: providerName, result };
  } catch (error) {
    errors.push(`${providerName}: ${error.message}`);
  }
  return null;
}

async function callAiForScenario(payload) {
  const errors = [];

  if (aiProvider === 'gemini') {
    const geminiOnly = await tryProvider('gemini', callGeminiForScenario, payload, errors);
    return geminiOnly || { provider: 'fallback', result: null, errors };
  }

  if (aiProvider === 'groq') {
    const groqOnly = await tryProvider('groq', callGroqForScenario, payload, errors);
    return groqOnly || { provider: 'fallback', result: null, errors };
  }

  const geminiFirst = await tryProvider('gemini', callGeminiForScenario, payload, errors);
  if (geminiFirst) return geminiFirst;

  const groqSecond = await tryProvider('groq', callGroqForScenario, payload, errors);
  if (groqSecond) return groqSecond;

  return { provider: 'fallback', result: null, errors };
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'human-systems-intelligence', environment: process.env.NODE_ENV || 'development', databaseConfigured: Boolean(process.env.DATABASE_URL), aiProvider, aiConfigured: getAiConfigured(), fallbackOrder: aiProvider === 'auto' ? ['gemini', 'groq', 'built-in-fallback'] : [aiProvider, 'built-in-fallback'] });
});

app.get('/api/db/health', async (_req, res) => {
  const result = await checkDatabaseConnection();
  res.status(result.ok ? 200 : result.configured ? 500 : 503).json(result);
});

app.post('/api/ai/scenario-analysis', async (req, res) => {
  const { scenario, employeeProfile, managerGoal } = req.body || {};
  if (!scenario || typeof scenario !== 'string' || scenario.trim().length < 8) return res.status(400).json({ ok: false, message: 'A scenario question of at least 8 characters is required.' });

  const aiAttempt = await callAiForScenario({ scenario: scenario.trim(), employeeProfile: employeeProfile || {}, managerGoal: managerGoal || '' });
  const analysis = aiAttempt.result || fallbackScenarioAnalysis({ employeeProfile: employeeProfile || {} });
  return res.json({ ok: true, source: aiAttempt.result ? aiAttempt.provider : 'fallback', providerErrors: aiAttempt.errors || [], analysis });
});

app.get('/api/profiles', async (_req, res) => {
  if (!pool) return res.status(503).json({ ok: false, message: 'DATABASE_URL is not configured on the Render service.' });
  try {
    const result = await pool.query(`select id, name, group_name, dominance, extraversion, patience, formality, summary, created_at, updated_at from profiles order by group_name, name`);
    return res.json({ ok: true, profiles: result.rows });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

app.post('/api/profiles', async (req, res) => {
  if (!pool) return res.status(503).json({ ok: false, message: 'DATABASE_URL is not configured on the Render service.' });
  const { name, groupName, dominance, extraversion, patience, formality, summary } = req.body || {};
  if (!name || !groupName) return res.status(400).json({ ok: false, message: 'name and groupName are required.' });
  try {
    const result = await pool.query(
      `insert into profiles (name, group_name, dominance, extraversion, patience, formality, summary) values ($1, $2, $3, $4, $5, $6, $7) returning id, name, group_name, dominance, extraversion, patience, formality, summary, created_at, updated_at`,
      [name, groupName, dominance ?? null, extraversion ?? null, patience ?? null, formality ?? null, summary ?? null]
    );
    return res.status(201).json({ ok: true, profile: result.rows[0] });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));
app.listen(port, () => console.log(`Human Systems Intelligence server running on port ${port}`));
