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

function sanitizeProviderError(message) {
  let text = String(message || 'Unknown provider error');
  for (const secret of [process.env.GEMINI_API_KEY, process.env.GROQ_API_KEY].filter(Boolean)) {
    text = text.split(secret).join('[redacted]');
  }
  return text.length > 1200 ? `${text.slice(0, 1200)}...` : text;
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
    errors.push(`${providerName}: ${sanitizeProviderError(error.message)}`);
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

function fallbackChatReply({ messages, providerErrors }) {
  const lastUserMessage = [...(messages || [])].reverse().find((m) => m?.role === 'user')?.content || 'your question';
  const errorSummary = providerErrors.length
    ? providerErrors.map((error) => `- ${error}`).join('\n')
    : '- No provider response was returned.';

  return `I reached the PI app server, but the external AI provider call did not complete successfully.

Your question was: ${lastUserMessage}

Provider details:
${errorSummary}

This means the app is running, but Gemini/Groq is rejecting, timing out, or returning an unusable response. Check the provider error above, then update the Render environment variable or model name if needed.`;
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

// ── AI Chat endpoint ──────────────────────────────────────────────────────
app.post('/api/ai-chat', async (req, res) => {
  const { system, messages } = req.body || {};
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ ok: false, message: 'messages array required' });

  const providerErrors = [];
  const compactMessages = messages
    .filter((m) => m && typeof m.content === 'string' && ['user', 'assistant'].includes(m.role))
    .slice(-8);

  // Try Gemini first
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey && aiProvider !== 'groq') {
    try {
      const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(geminiKey)}`;
      const contents = compactMessages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }));
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: system ? { parts: [{ text: system }] } : undefined,
          contents,
          generationConfig: { temperature: 0.4, maxOutputTokens: 1200 },
        }),
      });
      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('\n').trim();
        if (reply) return res.json({ ok: true, source: 'gemini', reply });
        providerErrors.push('Gemini returned 200 but did not include a usable text reply.');
      } else {
        providerErrors.push(`Gemini ${response.status}: ${sanitizeProviderError(await response.text())}`);
      }
    } catch (error) {
      providerErrors.push(`Gemini exception: ${sanitizeProviderError(error.message)}`);
    }
  } else if (aiProvider !== 'groq') {
    providerErrors.push('Gemini skipped: GEMINI_API_KEY is missing.');
  }

  // Try Groq
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey && aiProvider !== 'gemini') {
    try {
      const model = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';
      const allMessages = system ? [{ role: 'system', content: system }, ...compactMessages] : compactMessages;
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, temperature: 0.4, max_tokens: 1200, messages: allMessages }),
      });
      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content?.trim();
        if (reply) return res.json({ ok: true, source: 'groq', reply });
        providerErrors.push('Groq returned 200 but did not include a usable text reply.');
      } else {
        providerErrors.push(`Groq ${response.status}: ${sanitizeProviderError(await response.text())}`);
      }
    } catch (error) {
      providerErrors.push(`Groq exception: ${sanitizeProviderError(error.message)}`);
    }
  } else if (aiProvider !== 'gemini') {
    providerErrors.push('Groq skipped: GROQ_API_KEY is missing.');
  }

  return res.json({
    ok: true,
    source: 'fallback',
    providerErrors,
    reply: fallbackChatReply({ messages: compactMessages, providerErrors }),
  });
});

// ─── HSI Mappings API ───────────────────────────────────────────────────────

// GET all mappings
app.get('/api/hsi/mappings', async (_req, res) => {
  if (!pool) return res.status(503).json({ ok: false, message: 'DATABASE_URL not configured.' });
  try {
    const result = await pool.query(
      `select lens_id, profile_id, output_text, fields_raw, fields, notes, status, updated_at from hsi_mappings`
    );
    // Convert to { "lensId__profileId": {...} } format
    const mappings = {};
    for (const row of result.rows) {
      const key = `${row.lens_id}__${row.profile_id}`;
      mappings[key] = {
        outputText: row.output_text || '',
        fieldsRaw: row.fields_raw || '',
        fields: row.fields || {},
        notes: row.notes || '',
        status: row.status || 'unmapped',
        updatedAt: row.updated_at,
      };
    }
    return res.json({ ok: true, mappings });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// PUT upsert a single mapping
app.put('/api/hsi/mappings/:lensId/:profileId', async (req, res) => {
  if (!pool) return res.status(503).json({ ok: false, message: 'DATABASE_URL not configured.' });
  const { lensId, profileId } = req.params;
  const { outputText, fieldsRaw, fields, notes, status } = req.body || {};
  try {
    await pool.query(
      `insert into hsi_mappings (lens_id, profile_id, output_text, fields_raw, fields, notes, status)
       values ($1, $2, $3, $4, $5, $6, $7)
       on conflict (lens_id, profile_id) do update set
         output_text = excluded.output_text,
         fields_raw = excluded.fields_raw,
         fields = excluded.fields,
         notes = excluded.notes,
         status = excluded.status,
         updated_at = now()`,
      [lensId, profileId, outputText || null, fieldsRaw || null, JSON.stringify(fields || {}), notes || null, status || 'unmapped']
    );
    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// POST bulk upsert (for seeding)
app.post('/api/hsi/mappings/bulk', async (req, res) => {
  if (!pool) return res.status(503).json({ ok: false, message: 'DATABASE_URL not configured.' });
  const { mappings } = req.body || {};
  if (!mappings || typeof mappings !== 'object') return res.status(400).json({ ok: false, message: 'mappings object required.' });
  
  let inserted = 0;
  const entries = Object.entries(mappings);
  
  try {
    for (const [key, val] of entries) {
      const [lensId, profileId] = key.split('__');
      if (!lensId || !profileId) continue;
      await pool.query(
        `insert into hsi_mappings (lens_id, profile_id, output_text, fields_raw, fields, notes, status)
         values ($1, $2, $3, $4, $5, $6, $7)
         on conflict (lens_id, profile_id) do nothing`,
        [lensId, profileId, val.outputText || null, val.fieldsRaw || null, JSON.stringify(val.fields || {}), val.notes || null, val.status || 'draft']
      );
      inserted++;
    }
    return res.json({ ok: true, inserted });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

app.listen(port, () => console.log(`Human Systems Intelligence server running on port ${port}`));
