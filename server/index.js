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

app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '2mb' }));

function safeArray(value) {
  return Array.isArray(value) ? value.filter(Boolean).slice(0, 12) : [];
}

function fallbackScenarioAnalysis({ scenario, employeeProfile }) {
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
    conversationScript: `I want to understand what part of this situation is creating friction so we can make the work clearer. From your perspective, what would help you move forward confidently?`,
    followUpQuestions: [
      'What information is currently unclear?',
      'What support would reduce friction or rework?',
      'Is the issue mainly pace, priority, communication, authority, workload, or process clarity?',
    ],
    confidenceNote: 'Fallback answer generated without AI because OPENAI_API_KEY is not configured. Add OPENAI_API_KEY in Render for full AI scenario analysis.',
  };
}

function getScenarioSchema() {
  return {
    type: 'object',
    additionalProperties: false,
    properties: {
      summary: { type: 'string' },
      possibleExplanations: { type: 'array', items: { type: 'string' } },
      strongestProfileSignals: { type: 'array', items: { type: 'string' } },
      estimatedOrUnknownFactors: { type: 'array', items: { type: 'string' } },
      whatNotToAssume: { type: 'array', items: { type: 'string' } },
      supportiveManagerResponse: { type: 'array', items: { type: 'string' } },
      conversationScript: { type: 'string' },
      followUpQuestions: { type: 'array', items: { type: 'string' } },
      confidenceNote: { type: 'string' },
    },
    required: [
      'summary',
      'possibleExplanations',
      'strongestProfileSignals',
      'estimatedOrUnknownFactors',
      'whatNotToAssume',
      'supportiveManagerResponse',
      'conversationScript',
      'followUpQuestions',
      'confidenceNote',
    ],
  };
}

async function callOpenAIForScenario({ scenario, employeeProfile, managerGoal }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.OPENAI_MODEL || 'gpt-4.1-mini';
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      store: false,
      temperature: 0.25,
      max_output_tokens: 1600,
      instructions: `You are an expert workplace scenario coach for a support-first behavioral interpretation app. You receive a working employee profile with known, estimated, unknown, included, and excluded inputs. Your job is to analyze the scenario without judging the employee. Strict rules: do not diagnose; do not infer sensitive personal history, private identity, health status, family background, socioeconomic status, or other protected/private traits; do not call the person difficult, lazy, resistant, toxic, incapable, or negative; separate known facts from estimates and unknowns; give multiple possible explanations; use cautious language; provide supportive manager actions; include what not to assume; write in plain workplace language.`,
      input: [
        {
          role: 'user',
          content: [
            {
              type: 'input_text',
              text: JSON.stringify({
                scenario,
                managerGoal,
                employeeProfile,
                requestedOutput: 'Return structured JSON with nonjudgmental explanations, profile signals, unknowns, manager response, script, and follow-up questions.',
              }),
            },
          ],
        },
      ],
      text: {
        format: {
          type: 'json_schema',
          name: 'scenario_analysis',
          strict: true,
          schema: getScenarioSchema(),
        },
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`OpenAI request failed: ${response.status} ${details}`);
  }

  const data = await response.json();
  const textOutput = data.output_text || data.output?.flatMap((item) => item.content || []).find((content) => content.type === 'output_text')?.text;
  if (!textOutput) throw new Error('OpenAI response did not include output_text.');
  return JSON.parse(textOutput);
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'human-systems-intelligence',
    environment: process.env.NODE_ENV || 'development',
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    aiConfigured: Boolean(process.env.OPENAI_API_KEY),
  });
});

app.get('/api/db/health', async (_req, res) => {
  const result = await checkDatabaseConnection();
  res.status(result.ok ? 200 : result.configured ? 500 : 503).json(result);
});

app.post('/api/ai/scenario-analysis', async (req, res) => {
  const { scenario, employeeProfile, managerGoal } = req.body || {};

  if (!scenario || typeof scenario !== 'string' || scenario.trim().length < 8) {
    return res.status(400).json({ ok: false, message: 'A scenario question of at least 8 characters is required.' });
  }

  try {
    const aiResult = await callOpenAIForScenario({ scenario: scenario.trim(), employeeProfile: employeeProfile || {}, managerGoal: managerGoal || '' });
    const analysis = aiResult || fallbackScenarioAnalysis({ scenario, employeeProfile: employeeProfile || {} });
    return res.json({ ok: true, source: aiResult ? 'openai' : 'fallback', analysis });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

app.get('/api/profiles', async (_req, res) => {
  if (!pool) {
    return res.status(503).json({
      ok: false,
      message: 'DATABASE_URL is not configured on the Render service.',
    });
  }

  try {
    const result = await pool.query(
      `select id, name, group_name, dominance, extraversion, patience, formality, summary, created_at, updated_at
       from profiles
       order by group_name, name`
    );

    return res.json({ ok: true, profiles: result.rows });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

app.post('/api/profiles', async (req, res) => {
  if (!pool) {
    return res.status(503).json({
      ok: false,
      message: 'DATABASE_URL is not configured on the Render service.',
    });
  }

  const { name, groupName, dominance, extraversion, patience, formality, summary } = req.body || {};

  if (!name || !groupName) {
    return res.status(400).json({ ok: false, message: 'name and groupName are required.' });
  }

  try {
    const result = await pool.query(
      `insert into profiles (name, group_name, dominance, extraversion, patience, formality, summary)
       values ($1, $2, $3, $4, $5, $6, $7)
       returning id, name, group_name, dominance, extraversion, patience, formality, summary, created_at, updated_at`,
      [name, groupName, dominance ?? null, extraversion ?? null, patience ?? null, formality ?? null, summary ?? null]
    );

    return res.status(201).json({ ok: true, profile: result.rows[0] });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Human Systems Intelligence server running on port ${port}`);
});
