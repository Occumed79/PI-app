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

app.disable('x-powered-by');
app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '2mb' }));

function safeArray(value, limit = 12) {
  return Array.isArray(value) ? value.filter(Boolean).slice(0, limit) : [];
}

function sanitizeProviderError(message) {
  let text = String(message || 'Unknown provider error');
  for (const secret of [process.env.GEMINI_API_KEY, process.env.GROQ_API_KEY].filter(Boolean)) {
    text = text.split(secret).join('[redacted]');
  }
  return text.length > 1200 ? `${text.slice(0, 1200)}...` : text;
}

function getAiConfigured() {
  if (aiProvider === 'gemini') return Boolean(process.env.GEMINI_API_KEY);
  if (aiProvider === 'groq') return Boolean(process.env.GROQ_API_KEY);
  return Boolean(process.env.GEMINI_API_KEY || process.env.GROQ_API_KEY);
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 30000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

function parseJsonText(text) {
  const cleaned = String(text || '')
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```$/i, '')
    .trim();
  return JSON.parse(cleaned);
}

function scenarioPrompt({ scenario, employeeProfile, analysisGoal }) {
  return `You are a PI crosswalk analyst for a single-user internal behavioral translation workspace.

Strict rules:
- Treat completed Predictive Index profile and factor data as the source assessment.
- Treat Big Five, HEXACO, Hogan, EQ-i, DISC, and other outputs as PI-derived translations unless separate assessment data is explicitly supplied.
- Never claim that a translated score was independently administered or directly measured.
- Separate source PI facts from translated interpretations.
- Explain which PI factors drive an interpretation.
- Do not diagnose or infer protected/private traits.
- Use cautious, practical language.

Return ONLY valid JSON with exactly these keys:
summary: string
sourcePiSignals: string[]
crosswalkInterpretations: string[]
alternativeExplanations: string[]
limitations: string[]
practicalApplications: string[]
followUpQuestions: string[]
confidenceNote: string

Input:
${JSON.stringify({ scenario, analysisGoal, employeeProfile }, null, 2)}`;
}

function fallbackScenarioAnalysis({ employeeProfile }) {
  const profileName = employeeProfile?.baseProfile?.name || employeeProfile?.profileName || 'the selected PI profile';
  const factors = employeeProfile?.factors || {};
  return {
    summary: `Interpret this situation from the completed ${profileName} PI result first, then use other frameworks only as directional translations.`,
    sourcePiSignals: [
      `Dominance: ${factors.dominance ?? 'not entered'}`,
      `Extraversion: ${factors.extraversion ?? 'not entered'}`,
      `Patience: ${factors.patience ?? 'not entered'}`,
      `Formality: ${factors.formality ?? 'not entered'}`,
    ],
    crosswalkInterpretations: [
      'Use the strongest PI factor highs and lows to explain likely correspondences in the selected framework.',
      'Keep the PI result visible beside every translated framework output.',
    ],
    alternativeExplanations: [
      'Role demands, workload, environment, and current circumstances may explain behavior that differs from the reference PI pattern.',
    ],
    limitations: [
      'No translated framework output should be treated as a separately completed assessment unless separate results are entered.',
    ],
    practicalApplications: [
      'Compare the directional crosswalk against observed work examples before relying on it.',
    ],
    followUpQuestions: [
      'Which PI factors are most extreme?',
      'Which translated framework is most relevant to the question?',
    ],
    confidenceNote: 'Built-in fallback used because an external AI provider was unavailable or returned an unusable response.',
  };
}

async function callGeminiForScenario(payload) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetchWithTimeout(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: scenarioPrompt(payload) }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 1600,
        responseMimeType: 'application/json',
      },
    }),
  });
  if (!response.ok) throw new Error(`Gemini request failed: ${response.status} ${await response.text()}`);
  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('\n');
  if (!text) throw new Error('Gemini response did not include text output.');
  return parseJsonText(text);
}

async function callGroqForScenario(payload) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return null;
  const model = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';
  const response = await fetchWithTimeout('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      max_tokens: 1600,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: 'Return only valid JSON and preserve the PI-source-versus-crosswalk distinction.' },
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
    return (await tryProvider('gemini', callGeminiForScenario, payload, errors)) || { provider: 'fallback', result: null, errors };
  }
  if (aiProvider === 'groq') {
    return (await tryProvider('groq', callGroqForScenario, payload, errors)) || { provider: 'fallback', result: null, errors };
  }
  const gemini = await tryProvider('gemini', callGeminiForScenario, payload, errors);
  if (gemini) return gemini;
  const groq = await tryProvider('groq', callGroqForScenario, payload, errors);
  if (groq) return groq;
  return { provider: 'fallback', result: null, errors };
}

function fallbackChatReply({ messages, providerErrors }) {
  const lastUserMessage = [...(messages || [])].reverse().find(message => message?.role === 'user')?.content || 'the submitted question';
  const errorSummary = providerErrors.length
    ? providerErrors.map(error => `- ${error}`).join('\n')
    : '- No provider response was returned.';
  return `The PI app server received your question, but the external AI provider did not complete successfully.\n\nQuestion: ${lastUserMessage}\n\nProvider details:\n${errorSummary}`;
}

function requireDatabase(res) {
  if (pool) return true;
  res.status(503).json({ ok: false, message: 'DATABASE_URL is not configured on the Render service.' });
  return false;
}

function numericFactor(value, label) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0 || number > 100) {
    throw new Error(`${label} must be a number from 0 to 100.`);
  }
  return number;
}

function validateEmployeePayload(body = {}) {
  const name = String(body.name || '').trim();
  const piProfileId = String(body.piProfileId || '').trim();
  if (!name) throw new Error('Employee name is required.');
  if (!piProfileId) throw new Error('A completed PI profile is required.');
  return {
    name,
    position: String(body.position || '').trim(),
    department: String(body.department || '').trim(),
    piProfileId,
    dominance: numericFactor(body.dominance, 'Dominance'),
    extraversion: numericFactor(body.extraversion, 'Extraversion'),
    patience: numericFactor(body.patience, 'Patience'),
    formality: numericFactor(body.formality, 'Formality'),
    assessmentDate: body.assessmentDate ? String(body.assessmentDate).slice(0, 10) : null,
    notes: String(body.notes || '').trim(),
  };
}

function employeeRow(row) {
  return {
    id: row.id,
    name: row.name,
    position: row.position || '',
    department: row.department || '',
    piProfileId: row.pi_profile_id,
    profileId: row.pi_profile_id,
    dominance: Number(row.dominance),
    extraversion: Number(row.extraversion),
    patience: Number(row.patience),
    formality: Number(row.formality),
    assessmentDate: row.assessment_date || null,
    notes: row.notes || '',
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'pi-crosswalk-intelligence',
    environment: process.env.NODE_ENV || 'development',
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    aiProvider,
    aiConfigured: getAiConfigured(),
    fallbackOrder: aiProvider === 'auto' ? ['gemini', 'groq', 'built-in-fallback'] : [aiProvider, 'built-in-fallback'],
  });
});

app.get('/api/db/health', async (_req, res) => {
  const result = await checkDatabaseConnection();
  res.status(result.ok ? 200 : result.configured ? 500 : 503).json(result);
});

app.get('/api/employees', async (_req, res) => {
  if (!requireDatabase(res)) return;
  try {
    const result = await pool.query(`
      select id, name, position, department, pi_profile_id,
             dominance, extraversion, patience, formality,
             assessment_date, notes, created_at, updated_at
      from employee_pi_profiles
      order by lower(name), created_at
    `);
    res.json({ ok: true, employees: result.rows.map(employeeRow) });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

app.post('/api/employees', async (req, res) => {
  if (!requireDatabase(res)) return;
  try {
    const employee = validateEmployeePayload(req.body);
    const result = await pool.query(
      `insert into employee_pi_profiles
       (name, position, department, pi_profile_id, dominance, extraversion, patience, formality, assessment_date, notes)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       returning id, name, position, department, pi_profile_id, dominance, extraversion, patience, formality, assessment_date, notes, created_at, updated_at`,
      [employee.name, employee.position, employee.department, employee.piProfileId, employee.dominance, employee.extraversion, employee.patience, employee.formality, employee.assessmentDate, employee.notes]
    );
    res.status(201).json({ ok: true, employee: employeeRow(result.rows[0]) });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

app.put('/api/employees/:id', async (req, res) => {
  if (!requireDatabase(res)) return;
  try {
    const employee = validateEmployeePayload(req.body);
    const result = await pool.query(
      `update employee_pi_profiles set
         name=$1, position=$2, department=$3, pi_profile_id=$4,
         dominance=$5, extraversion=$6, patience=$7, formality=$8,
         assessment_date=$9, notes=$10
       where id=$11
       returning id, name, position, department, pi_profile_id, dominance, extraversion, patience, formality, assessment_date, notes, created_at, updated_at`,
      [employee.name, employee.position, employee.department, employee.piProfileId, employee.dominance, employee.extraversion, employee.patience, employee.formality, employee.assessmentDate, employee.notes, req.params.id]
    );
    if (!result.rowCount) return res.status(404).json({ ok: false, message: 'Employee PI profile not found.' });
    res.json({ ok: true, employee: employeeRow(result.rows[0]) });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
});

app.delete('/api/employees/:id', async (req, res) => {
  if (!requireDatabase(res)) return;
  try {
    const result = await pool.query('delete from employee_pi_profiles where id=$1 returning id', [req.params.id]);
    if (!result.rowCount) return res.status(404).json({ ok: false, message: 'Employee PI profile not found.' });
    res.json({ ok: true, id: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

app.get('/api/profiles', async (_req, res) => {
  if (!requireDatabase(res)) return;
  try {
    const result = await pool.query('select id, name, group_name, dominance, extraversion, patience, formality, summary, created_at, updated_at from profiles order by group_name, name');
    res.json({ ok: true, profiles: result.rows });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

app.post('/api/profiles', async (req, res) => {
  if (!requireDatabase(res)) return;
  const { name, groupName, dominance, extraversion, patience, formality, summary } = req.body || {};
  if (!name || !groupName) return res.status(400).json({ ok: false, message: 'name and groupName are required.' });
  try {
    const result = await pool.query(
      `insert into profiles (name, group_name, dominance, extraversion, patience, formality, summary)
       values ($1,$2,$3,$4,$5,$6,$7)
       on conflict (name) do update set group_name=excluded.group_name, dominance=excluded.dominance,
         extraversion=excluded.extraversion, patience=excluded.patience,
         formality=excluded.formality, summary=excluded.summary
       returning id, name, group_name, dominance, extraversion, patience, formality, summary, created_at, updated_at`,
      [name, groupName, dominance ?? null, extraversion ?? null, patience ?? null, formality ?? null, summary ?? null]
    );
    res.status(201).json({ ok: true, profile: result.rows[0] });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

app.post('/api/ai/scenario-analysis', async (req, res) => {
  const { scenario, employeeProfile, analysisGoal } = req.body || {};
  if (!scenario || typeof scenario !== 'string' || scenario.trim().length < 8) {
    return res.status(400).json({ ok: false, message: 'A scenario question of at least 8 characters is required.' });
  }
  const aiAttempt = await callAiForScenario({ scenario: scenario.trim(), employeeProfile: employeeProfile || {}, analysisGoal: analysisGoal || '' });
  const analysis = aiAttempt.result || fallbackScenarioAnalysis({ employeeProfile: employeeProfile || {} });
  res.json({ ok: true, source: aiAttempt.result ? aiAttempt.provider : 'fallback', providerErrors: aiAttempt.errors || [], analysis });
});

app.post('/api/ai-chat', async (req, res) => {
  const { system, messages } = req.body || {};
  if (!Array.isArray(messages)) return res.status(400).json({ ok: false, message: 'messages array required' });

  const providerErrors = [];
  const compactMessages = messages
    .filter(message => message && typeof message.content === 'string' && ['user', 'assistant'].includes(message.role))
    .map(message => ({ ...message, content: message.content.slice(0, 12000) }))
    .slice(-8);

  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey && aiProvider !== 'groq') {
    try {
      const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(geminiKey)}`;
      const contents = compactMessages.map(message => ({ role: message.role === 'assistant' ? 'model' : 'user', parts: [{ text: message.content }] }));
      const response = await fetchWithTimeout(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: system ? { parts: [{ text: String(system).slice(0, 60000) }] } : undefined,
          contents,
          generationConfig: { temperature: 0.35, maxOutputTokens: 1400 },
        }),
      });
      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('\n').trim();
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

  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey && aiProvider !== 'gemini') {
    try {
      const model = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';
      const allMessages = system ? [{ role: 'system', content: String(system).slice(0, 60000) }, ...compactMessages] : compactMessages;
      const response = await fetchWithTimeout('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, temperature: 0.35, max_tokens: 1400, messages: allMessages }),
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

  res.json({ ok: true, source: 'fallback', providerErrors, reply: fallbackChatReply({ messages: compactMessages, providerErrors }) });
});

app.get('/api/hsi/mappings', async (_req, res) => {
  if (!requireDatabase(res)) return;
  try {
    const result = await pool.query('select lens_id, profile_id, output_text, fields_raw, fields, notes, status, updated_at from hsi_mappings');
    const mappings = {};
    for (const row of result.rows) {
      mappings[`${row.lens_id}__${row.profile_id}`] = {
        outputText: row.output_text || '',
        fieldsRaw: row.fields_raw || '',
        fields: row.fields || {},
        notes: row.notes || '',
        status: row.status || 'unmapped',
        updatedAt: row.updated_at,
      };
    }
    res.json({ ok: true, mappings });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

app.put('/api/hsi/mappings/:lensId/:profileId', async (req, res) => {
  if (!requireDatabase(res)) return;
  const { lensId, profileId } = req.params;
  const { outputText, fieldsRaw, fields, notes, status } = req.body || {};
  try {
    await pool.query(
      `insert into hsi_mappings (lens_id, profile_id, output_text, fields_raw, fields, notes, status)
       values ($1,$2,$3,$4,$5,$6,$7)
       on conflict (lens_id, profile_id) do update set
         output_text=excluded.output_text, fields_raw=excluded.fields_raw,
         fields=excluded.fields, notes=excluded.notes, status=excluded.status,
         updated_at=now()`,
      [lensId, profileId, outputText || null, fieldsRaw || null, JSON.stringify(fields || {}), notes || null, status || 'unmapped']
    );
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

app.post('/api/hsi/mappings/bulk', async (req, res) => {
  if (!requireDatabase(res)) return;
  const { mappings } = req.body || {};
  if (!mappings || typeof mappings !== 'object') return res.status(400).json({ ok: false, message: 'mappings object required.' });

  let inserted = 0;
  const client = await pool.connect();
  try {
    await client.query('begin');
    for (const [key, value] of Object.entries(mappings)) {
      const [lensId, profileId] = key.split('__');
      if (!lensId || !profileId) continue;
      const result = await client.query(
        `insert into hsi_mappings (lens_id, profile_id, output_text, fields_raw, fields, notes, status)
         values ($1,$2,$3,$4,$5,$6,$7)
         on conflict (lens_id, profile_id) do nothing`,
        [lensId, profileId, value.outputText || null, value.fieldsRaw || null, JSON.stringify(value.fields || {}), value.notes || null, value.status || 'draft']
      );
      inserted += result.rowCount;
    }
    await client.query('commit');
    res.json({ ok: true, inserted });
  } catch (error) {
    await client.query('rollback');
    res.status(500).json({ ok: false, message: error.message });
  } finally {
    client.release();
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

app.listen(port, () => {
  console.log(`PI Crosswalk Intelligence server running on port ${port}`);
});
