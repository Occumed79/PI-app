import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { checkDatabaseConnection, pool } from './db.js';
import {
  PRIMARY_PROVIDER_ORDER,
  callCloudflareChat,
  callPrimaryPool,
  callPrimaryProvider,
  callRoleIntelligenceEnsemble,
  configuredProviderMap,
  getProviderDiagnostics,
  refreshProviderCapabilities,
  sanitizeProviderError,
} from './ai-provider-manager.js';
import {
  buildCloudflareIntelligence,
  runCloudflareCritic,
} from './cloudflare-intelligence.js';
import {
  buildExternalWebResearch,
  getWebResearchDiagnostics,
} from './web-research.js';
import {
  ROLE_BY_ID,
  deriveAdjacentRolePull,
  deriveRoleInteraction,
} from '../src/data/roleIntelligence.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;
const clientOrigin = process.env.CLIENT_ORIGIN || '*';

app.disable('x-powered-by');
app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '2mb' }));

function safeArray(value, limit = 12) {
  return Array.isArray(value) ? value.filter(Boolean).slice(0, limit) : [];
}

function normalizeOverlayIds(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(
    value
      .map(item => String(item || '').trim())
      .filter(item => item && item.length <= 100 && /^[a-z0-9-]+$/i.test(item))
  )].slice(0, 50);
}

function normalizeLifeLensMode(value) {
  return value === 'authorized' ? 'authorized' : 'hypothetical';
}

function compactConversation(messages, limit = 16) {
  return safeArray(messages, 100)
    .filter(message => message && typeof message.content === 'string' && ['user', 'assistant'].includes(message.role))
    .map(message => ({ role: message.role, content: message.content.slice(0, 12000) }))
    .slice(-limit);
}

function parseJsonText(text) {
  const cleaned = String(text || '')
    .replace(/^\`\`\`json\s*/i, '')
    .replace(/^\`\`\`\s*/i, '')
    .replace(/\`\`\`$/i, '')
    .trim();
  return JSON.parse(cleaned);
}

function scenarioPrompt({ scenario, employeeProfile, analysisGoal, cloudflareContext = '' }) {
  return `You are a PI crosswalk analyst for a single-user internal behavioral translation workspace.

Strict rules:
- Treat completed Predictive Index profile and factor data as the source assessment.
- Treat Big Five, HEXACO, Hogan, EQ-i, DISC, and other outputs as PI-derived translations unless separate assessment data is explicitly supplied.
- Treat explicitly supplied life, health, family, immigration, neurodiversity, stress, or environmental variables as context overlays that may amplify, suppress, mask, or bend the visible PI presentation.
- Never infer that a context overlay exists. Only use an overlay when it is explicitly included in the employee record or scenario.
- Never claim that a translated score was independently administered or directly measured.
- Separate baseline PI facts, overlay effects, and cross-framework interpretations.
- Explain which PI factors and selected overlays drive an interpretation.
- Do not diagnose or infer protected/private traits.
- Use cautious, practical language.

${cloudflareContext ? `${cloudflareContext}\n\n` : ''}Return ONLY valid JSON with exactly these keys:
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
  const overlays = safeArray(employeeProfile?.contextOverlays, 50);
  return {
    summary: `Interpret this situation from the completed ${profileName} PI result first${overlays.length ? `, then apply the ${overlays.length} explicitly selected context overlay${overlays.length === 1 ? '' : 's'}` : ''}.`,
    sourcePiSignals: [
      `Dominance: ${factors.dominance ?? 'not entered'}`,
      `Extraversion: ${factors.extraversion ?? 'not entered'}`,
      `Patience: ${factors.patience ?? 'not entered'}`,
      `Formality: ${factors.formality ?? 'not entered'}`,
    ],
    crosswalkInterpretations: [
      'Use the strongest PI factor highs and lows to explain likely correspondences in the selected framework.',
      overlays.length
        ? 'Keep the baseline PI result visible beside the context-bent presentation.'
        : 'Keep the PI result visible beside every translated framework output.',
    ],
    alternativeExplanations: [
      'Role demands, workload, environment, life variables, and current circumstances may explain behavior that differs from the reference PI pattern.',
    ],
    limitations: [
      'No translated framework output should be treated as a separately completed assessment unless separate results are entered.',
      'No life, health, neurodiversity, immigration, family, or stress overlay should be inferred unless explicitly supplied.',
    ],
    practicalApplications: [
      'Compare the directional crosswalk against observed work examples before relying on it.',
    ],
    followUpQuestions: [
      'Which PI factors are most extreme?',
      'Which selected context variable is most relevant to the current behavior?',
    ],
    confidenceNote: 'Built-in fallback used because all configured live AI providers were unavailable or returned an unusable response.',
  };
}

function fallbackChatReply({ messages, providerErrors }) {
  const lastUserMessage = [...(messages || [])].reverse().find(message => message?.role === 'user')?.content || 'the submitted question';
  const errorSummary = providerErrors.length
    ? providerErrors.map(error => `- ${error}`).join('\n')
    : '- No provider response was returned.';
  return `The PI app server received your question, but no configured live AI provider completed successfully.\n\nQuestion: ${lastUserMessage}\n\nProvider details:\n${errorSummary}`;
}

function latestUserText(messages = []) {
  return [...messages].reverse().find(message => message?.role === 'user')?.content || '';
}

function employeeProfileAsEmployee(employeeProfile = {}) {
  const factors = employeeProfile?.factors || employeeProfile || {};
  return {
    name: employeeProfile?.name || employeeProfile?.employeeName || 'Selected employee',
    piProfileId: employeeProfile?.piProfileId || employeeProfile?.profileId || employeeProfile?.baseProfile?.id,
    profileId: employeeProfile?.profileId || employeeProfile?.piProfileId || employeeProfile?.baseProfile?.id,
    dominance: factors.dominance,
    extraversion: factors.extraversion,
    patience: factors.patience,
    formality: factors.formality,
    contextOverlays: employeeProfile?.contextOverlays || [],
  };
}

function buildRoleGrounding(employee, roleId) {
  const role = ROLE_BY_ID[String(roleId || '').trim()];
  if (!role) return null;

  const interaction = deriveRoleInteraction(employee, role);
  const adjacentRoles = deriveAdjacentRolePull(employee, role, 4).map(item => ({
    roleId: item.roleId,
    title: item.title,
    pull: item.pull,
    roleSimilarity: item.roleSimilarity,
    delta: item.delta,
    evidenceConfidence: item.evidenceConfidence,
  }));

  return {
    role: {
      id: role.id,
      title: role.title,
      family: role.family,
      level: role.level,
      purpose: role.purpose,
      behavioralBands: role.behavioralBands,
      signature: role.signature,
      workValues: role.workValues,
    },
    employeeFactors: interaction.factors,
    directionalPreferences: interaction.preferences,
    directionalWorkValues: interaction.workValues,
    factorSignals: interaction.factorSignals,
    components: interaction.components,
    capacityTensions: interaction.capacityTensions,
    inversionRisk: interaction.inversionRisk,
    inversionSignals: interaction.inversionSignals.slice(0, 4),
    evidenceConfidence: interaction.evidenceConfidence,
    evidence: interaction.evidence.map(source => ({
      id: source.id,
      label: source.label,
      kind: source.kind,
      note: source.note,
      authority: source.authority,
      directness: source.directness,
      public: source.public,
      url: source.public ? source.url || null : null,
    })),
    adjacentRoles,
  };
}

function roleGroundingSystemText(grounding, activeContextCategory = '', lifeLensMode = 'hypothetical') {
  if (!grounding) return '';

  const normalizedLifeLensMode = normalizeLifeLensMode(lifeLensMode);
  const lifeLensInstruction = normalizedLifeLensMode === 'authorized'
    ? `USER-DESIGNATED AUTHORIZED CONTEXT: The user has designated the ${String(activeContextCategory || 'selected')} category as authorized for contextual interpretation. The app does not independently verify employee authorization. Do not state or imply employee authorization unless separately supported by provided data, do not turn the category into a diagnosis or medical record, and do not infer facts beyond the supplied category.`
    : `HYPOTHETICAL CONTEXT EXPLORATION: The ${String(activeContextCategory || 'selected')} category is a what-if lens only. Never infer that the selected employee has this condition or life context.`;

  return `AUTHORITATIVE ROLE-INTELLIGENCE GROUNDING
The following structured values come from the app's deterministic person × role engine and evidence catalog. Use them as the baseline. Do not silently replace them with your own score.

${JSON.stringify(grounding, null, 2)}

GROUNDING RULES:
- The PI factors are completed source-assessment inputs.
- Directional preferences and work values are model-derived projections from those PI factors, not separately administered measurements.
- Component values describe modeled interaction with this role. They are not measured performance, productivity, competence, hireability, or promotion scores.
- Capacity tensions distinguish directional PI-derived work-style pull that may be underused from role demands that may create operating pressure. They are descriptive hypotheses, not ability measures, failure predictions, staffing recommendations, or promotion signals.
- Evidence sources marked as external analogues support role-demand modeling but do not mean the Occu-Med role is identical to the external occupation.
- Adjacent-role pull is descriptive exploration only, not a staffing or promotion recommendation.
- Do not expose or invent an overall employment verdict.
- Sensitive life-context information must not alter the baseline role interaction.
- Active context lens, when present, is explanatory only: ${String(activeContextCategory || 'none')}.
- The Life Lens permission mode does not change deterministic baseline compatibility, component values, evidence confidence, adjacent-role pull, or orbit geometry.
${lifeLensInstruction}`;
}

const ROLE_QUERY_ALIASES = Object.freeze({
  'examqa-analyst': ['examqa analyst', 'exam qa analyst', 'examqa'],
  'exam-review': ['subject matter expert exam review', 'subject matter expert', 'exam review', 'sme'],
  'examqa-manager': ['examqa manager', 'exam qa manager'],
  'examqa-director': ['examqa director', 'exam qa director'],
  'network-management': ['network management analyst', 'network analyst', 'network management'],
  'network-management-director': ['network management director', 'network director'],
  'provider-relations': ['provider relations analyst', 'provider relations'],
  'provider-relations-manager': ['provider relations manager'],
  'scheduling': ['scheduling analyst', 'scheduling'],
  'scheduling-manager': ['scheduling manager'],
  'client-accounts': ['client account manager', 'client accounts'],
  'operations-director': ['operations director'],
  'finance-analyst': ['finance analyst', 'finance'],
  'fitness-for-duty': ['fitness for duty analyst', 'fitness for duty'],
});

function normalizedRoleQuery(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function mentionedComparisonRoleIds(query, selectedRoleId, limit = 3) {
  const text = normalizedRoleQuery(query);
  if (!text) return [];

  const matches = [];
  for (const role of Object.values(ROLE_BY_ID)) {
    if (role.id === selectedRoleId) continue;
    const aliases = [
      role.title,
      role.shortTitle,
      role.id,
      ...(ROLE_QUERY_ALIASES[role.id] || []),
    ]
      .map(normalizedRoleQuery)
      .filter(alias => alias.length >= 3);

    const matchedAlias = aliases
      .filter(alias => text.includes(alias))
      .sort((a, b) => b.length - a.length)[0];

    if (matchedAlias) matches.push({ roleId: role.id, alias: matchedAlias });
  }

  matches.sort((a, b) => b.alias.length - a.alias.length || a.roleId.localeCompare(b.roleId));

  const selected = [];
  const claimedAliases = [];
  for (const match of matches) {
    if (claimedAliases.some(existing => existing.includes(match.alias) && existing !== match.alias)) {
      continue;
    }
    selected.push(match.roleId);
    claimedAliases.push(match.alias);
    if (selected.length >= Math.max(1, limit)) break;
  }
  return selected;
}

function buildComparisonRoleGrounding(employee, roleId) {
  const role = ROLE_BY_ID[roleId];
  if (!role) return null;
  const interaction = deriveRoleInteraction(employee, role);
  return {
    role: {
      id: role.id,
      title: role.title,
      family: role.family,
      level: role.level,
      purpose: role.purpose,
      behavioralBands: role.behavioralBands,
      signature: role.signature,
      workValues: role.workValues,
    },
    factorSignals: interaction.factorSignals,
    components: interaction.components,
    capacityTensions: interaction.capacityTensions,
    inversionRisk: interaction.inversionRisk,
    inversionSignals: interaction.inversionSignals.slice(0, 3),
    evidenceConfidence: interaction.evidenceConfidence,
    evidence: interaction.evidence.map(source => ({
      id: source.id,
      label: source.label,
      kind: source.kind,
      note: source.note,
      authority: source.authority,
      directness: source.directness,
    })),
  };
}

function comparisonGroundingSystemText(comparisons = []) {
  if (!comparisons.length) return '';
  return `EXPLICITLY MENTIONED COMPARISON ROLE GROUNDING
These roles were explicitly named in the user's question. Compare them using these deterministic employee × role calculations rather than model memory.

${JSON.stringify(comparisons, null, 2)}

COMPARISON RULES:
- Compare specific dimensions and evidence; do not declare a winner, best role, promotion target, or employment decision.
- Preserve important tradeoffs and uncertainty.
- Evidence confidence is confidence in the modeled role evidence bundle, not confidence in employee performance.`;
}

async function cloudflareEmergencyReply({ system, messages, jsonMode = false, maxTokens = 1800 }) {
  try {
    const result = await callCloudflareChat({
      system,
      messages,
      temperature: jsonMode ? 0.2 : 0.45,
      maxTokens,
      jsonMode,
    });
    return result?.reply
      ? { provider: 'cloudflare', reply: result.reply, model: result.model, keySlot: result.accountSlot, errors: [] }
      : null;
  } catch (error) {
    return { provider: null, reply: null, model: null, keySlot: null, errors: [`cloudflare: ${sanitizeProviderError(error.message)}`] };
  }
}

async function refineWithCritic({
  primaryProvider,
  primaryModel,
  system,
  messages,
  query,
  draft,
  semanticContext,
  jsonMode = false,
  maxTokens = 1800,
}) {
  const critic = await runCloudflareCritic({
    query,
    draft,
    semanticContext,
  });

  const critique = critic?.critique;
  const hasMaterialIssue = Boolean(
    critique?.materialIssue ||
    (Array.isArray(critique?.issues) && critique.issues.length) ||
    (Array.isArray(critique?.missingAlternatives) && critique.missingAlternatives.length)
  );

  if (!hasMaterialIssue || !primaryProvider || primaryProvider === 'cloudflare') {
    return {
      reply: draft,
      criticApplied: false,
      criticMetadata: critic?.metadata || null,
      model: primaryModel,
    };
  }

  try {
    const refinementMessages = [
      ...messages,
      { role: 'assistant', content: draft },
      {
        role: 'user',
        content: `Internally refine your previous answer using this independent review. Do not mention the review, the critic, Cloudflare, routing, or internal architecture. Preserve correct material and fix only genuine issues.\n\nIndependent review:\n${JSON.stringify(critique, null, 2)}`,
      },
    ];
    const refined = await callPrimaryProvider(primaryProvider, {
      system,
      messages: refinementMessages,
      temperature: jsonMode ? 0.2 : 0.35,
      maxTokens,
      jsonMode,
    });
    return {
      reply: refined?.reply || draft,
      criticApplied: Boolean(refined?.reply),
      criticMetadata: critic?.metadata || null,
      model: refined?.model || primaryModel,
    };
  } catch {
    return {
      reply: draft,
      criticApplied: false,
      criticMetadata: critic?.metadata || null,
      model: primaryModel,
    };
  }
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
    contextOverlays: normalizeOverlayIds(body.contextOverlays),
    contextNotes: String(body.contextNotes || '').trim().slice(0, 12000),
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
    contextOverlays: Array.isArray(row.context_overlays) ? row.context_overlays : [],
    contextNotes: row.context_notes || '',
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

const employeeSelect = `
  id, name, position, department, pi_profile_id,
  dominance, extraversion, patience, formality,
  assessment_date, notes, context_overlays, context_notes,
  created_at, updated_at
`;

app.get('/api/health', (_req, res) => {
  const diagnostics = getProviderDiagnostics();
  res.json({
    ok: true,
    service: 'pi-crosswalk-intelligence',
    environment: process.env.NODE_ENV || 'development',
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    aiConfigured: PRIMARY_PROVIDER_ORDER.some(provider => diagnostics.configured[provider]) || diagnostics.configured.cloudflare,
    providerConfigured: diagnostics.configured,
    providerKeyCounts: diagnostics.keyCounts,
    fallbackOrder: [...PRIMARY_PROVIDER_ORDER, 'cloudflare-emergency', 'built-in-fallback'],
    providerMode: 'self-healing-capability-routing',
    benchmarkRouting: diagnostics.artificialAnalysis,
    cloudflareMode: 'parallel-semantic-retrieval-rerank-classification-and-critic',
    webResearch: getWebResearchDiagnostics(),
    models: diagnostics.models,
    modelDiscovery: {
      discoveredAt: diagnostics.discoveredAt,
      errors: diagnostics.discoveryErrors,
    },
  });
});

app.post('/api/ai/provider-refresh', async (_req, res) => {
  try {
    const diagnostics = await refreshProviderCapabilities({ force: true });
    res.json({ ok: true, diagnostics });
  } catch (error) {
    res.status(500).json({ ok: false, message: sanitizeProviderError(error.message) });
  }
});

app.get('/api/db/health', async (_req, res) => {
  const result = await checkDatabaseConnection();
  res.status(result.ok ? 200 : result.configured ? 500 : 503).json(result);
});

app.get('/api/employees', async (_req, res) => {
  if (!requireDatabase(res)) return;
  try {
    const result = await pool.query(`
      select ${employeeSelect}
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
       (name, position, department, pi_profile_id, dominance, extraversion, patience, formality, assessment_date, notes, context_overlays, context_notes)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11::jsonb,$12)
       returning ${employeeSelect}`,
      [
        employee.name,
        employee.position,
        employee.department,
        employee.piProfileId,
        employee.dominance,
        employee.extraversion,
        employee.patience,
        employee.formality,
        employee.assessmentDate,
        employee.notes,
        JSON.stringify(employee.contextOverlays),
        employee.contextNotes,
      ]
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
         assessment_date=$9, notes=$10, context_overlays=$11::jsonb, context_notes=$12
       where id=$13
       returning ${employeeSelect}`,
      [
        employee.name,
        employee.position,
        employee.department,
        employee.piProfileId,
        employee.dominance,
        employee.extraversion,
        employee.patience,
        employee.formality,
        employee.assessmentDate,
        employee.notes,
        JSON.stringify(employee.contextOverlays),
        employee.contextNotes,
        req.params.id,
      ]
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

  const query = scenario.trim();
  let intelligence = { plan: { complexity: 'medium', needsCritic: false }, context: '', metadata: { used: false }, lenses: [] };
  try {
    intelligence = await buildCloudflareIntelligence({
      query,
      employees: [employeeProfileAsEmployee(employeeProfile || {})],
    });
  } catch (error) {
    intelligence.metadata = { used: false, warning: sanitizeProviderError(error.message) };
  }

  const prompt = scenarioPrompt({
    scenario: query,
    employeeProfile: employeeProfile || {},
    analysisGoal: analysisGoal || '',
    cloudflareContext: intelligence.context,
  });

  let attempt = await callPrimaryPool({
    system: 'Return only valid JSON and preserve the PI-baseline, explicit-context-overlay, and crosswalk distinction.',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2,
    maxTokens: 1800,
    jsonMode: true,
    preferredProvider: intelligence.plan?.preferredPrimary,
  });

  if (!attempt.reply) {
    const emergency = await cloudflareEmergencyReply({
      system: 'Return only valid JSON and preserve the PI-baseline, explicit-context-overlay, and crosswalk distinction.',
      messages: [{ role: 'user', content: prompt }],
      jsonMode: true,
      maxTokens: 1800,
    });
    if (emergency?.reply) attempt = { ...emergency, errors: [...(attempt.errors || []), ...(emergency.errors || [])] };
    else attempt.errors = [...(attempt.errors || []), ...(emergency?.errors || [])];
  }

  let finalReply = attempt.reply;
  let criticApplied = false;
  let criticMetadata = null;

  if (finalReply && intelligence.plan?.needsCritic) {
    const refined = await refineWithCritic({
      primaryProvider: attempt.provider,
      primaryModel: attempt.model,
      system: 'Return only valid JSON and preserve the PI-baseline, explicit-context-overlay, and crosswalk distinction.',
      messages: [{ role: 'user', content: prompt }],
      query,
      draft: finalReply,
      semanticContext: intelligence.context,
      jsonMode: true,
      maxTokens: 1800,
    });
    finalReply = refined.reply;
    criticApplied = refined.criticApplied;
    criticMetadata = refined.criticMetadata;
  }

  let analysis = null;
  if (finalReply) {
    try {
      analysis = parseJsonText(finalReply);
    } catch {
      analysis = null;
    }
  }
  analysis ||= fallbackScenarioAnalysis({ employeeProfile: employeeProfile || {} });

  res.json({
    ok: true,
    source: finalReply ? (attempt.provider || 'cloudflare') : 'fallback',
    model: attempt.model || null,
    providerErrors: attempt.errors || [],
    cloudflare: {
      ...intelligence.metadata,
      lenses: intelligence.lenses,
      plan: intelligence.plan,
      criticApplied,
      critic: criticMetadata,
    },
    analysis,
  });
});


app.post('/api/ai/role-intelligence', async (req, res) => {
  const { system, messages, employees, roleId, activeContextCategory, lifeLensMode } = req.body || {};
  if (!Array.isArray(messages)) {
    return res.status(400).json({ ok: false, message: 'messages array required' });
  }

  const conversation = compactConversation(messages, 16);
  if (!conversation.some(message => message.role === 'user')) {
    return res.status(400).json({ ok: false, message: 'At least one user message is required.' });
  }

  const query = latestUserText(conversation);
  const employeeContext = safeArray(employees, 6);
  const selectedEmployee = employeeContext[0] || null;

  let roleGrounding = null;
  let comparisonGroundings = [];
  if (roleId) {
    const normalizedRoleId = String(roleId).trim();
    if (!ROLE_BY_ID[normalizedRoleId]) {
      return res.status(400).json({ ok: false, message: 'Unknown Role Intelligence role.' });
    }
    if (!selectedEmployee) {
      return res.status(400).json({ ok: false, message: 'A selected employee is required for grounded role analysis.' });
    }
    roleGrounding = buildRoleGrounding(selectedEmployee, normalizedRoleId);
    comparisonGroundings = mentionedComparisonRoleIds(query, normalizedRoleId, 3)
      .map(comparisonRoleId => buildComparisonRoleGrounding(selectedEmployee, comparisonRoleId))
      .filter(Boolean);
  }

  let intelligence = { context: '', metadata: { used: false }, lenses: [] };
  try {
    intelligence = await buildCloudflareIntelligence({
      query,
      employees: employeeContext,
    });
  } catch (error) {
    intelligence.metadata = {
      used: false,
      warning: sanitizeProviderError(error.message),
    };
  }

  const roleWebResearch = await buildExternalWebResearch({
    query,
    employees: employeeContext,
    hints: [
      roleGrounding?.role?.title,
      activeContextCategory,
      ...comparisonGroundings.map(item => item.role.title),
      ...(intelligence.lenses || []).map(item => item.lens),
    ].filter(Boolean),
    enabled: Boolean(intelligence.plan?.needsWebResearch),
  });

  const roleSystem = [
    String(system || ''),
    roleGroundingSystemText(roleGrounding, activeContextCategory, lifeLensMode),
    comparisonGroundingSystemText(comparisonGroundings),
    intelligence.context
      ? `AUXILIARY SEMANTIC LENS CONTEXT:\n${intelligence.context}`
      : '',
    roleWebResearch.context,
  ].filter(Boolean).join('\n\n');

  try {
    const result = await callRoleIntelligenceEnsemble({
      system: roleSystem,
      messages: conversation,
      temperature: 0.28,
      maxTokens: 3200,
      jsonMode: false,
    });

    if (!result?.reply) {
      return res.status(503).json({
        ok: false,
        message: 'No Role Intelligence analyzer completed successfully.',
        providerErrors: result?.errors || [],
      });
    }

    res.json({
      ok: true,
      reply: result.reply,
      consensusMode: result.consensusMode,
      consensus: result.consensus || null,
      analyzers: (result.analyzers || []).map(item => ({
        provider: item.provider,
        model: item.model,
        keySlot: item.keySlot,
      })),
      synthesizer: result.synthesizer || null,
      providerErrors: result.errors || [],
      evidence: intelligence.metadata || null,
      webResearch: {
        ...roleWebResearch.metadata,
        sources: roleWebResearch.sources.map(source => ({
          id: source.id,
          provider: source.provider,
          title: source.title,
          url: source.url,
          publishedAt: source.publishedAt,
        })),
      },
      roleGrounding: roleGrounding ? {
        roleId: roleGrounding.role.id,
        evidenceConfidence: roleGrounding.evidenceConfidence,
        sourceCount: roleGrounding.evidence.length,
        adjacentRoleIds: roleGrounding.adjacentRoles.map(item => item.roleId),
        comparisonRoleIds: comparisonGroundings.map(item => item.role.id),
      } : null,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: sanitizeProviderError(error.message),
    });
  }
});

app.post('/api/ai-chat', async (req, res) => {
  const { system, messages, employees } = req.body || {};
  if (!Array.isArray(messages)) return res.status(400).json({ ok: false, message: 'messages array required' });

  const compactMessages = compactConversation(messages, 16);
  if (!compactMessages.some(message => message.role === 'user')) {
    return res.status(400).json({ ok: false, message: 'At least one user message is required.' });
  }

  const query = latestUserText(compactMessages);
  const isHealthProbe = String(system || '').includes('provider health probe');
  let intelligence = {
    plan: { complexity: 'low', needsCritic: false, needsSemanticRetrieval: false, needsWebResearch: false, reason: 'Health probe or Cloudflare unavailable.' },
    lenses: [],
    context: '',
    metadata: { used: false },
  };

  if (!isHealthProbe) {
    try {
      intelligence = await buildCloudflareIntelligence({
        query,
        employees: safeArray(employees, 50),
      });
    } catch (error) {
      intelligence.metadata = { used: false, warning: sanitizeProviderError(error.message) };
    }
  }

  const webResearch = isHealthProbe
    ? {
        context: '',
        sources: [],
        metadata: { used: false, providers: [], sourceCount: 0, errors: [] },
      }
    : await buildExternalWebResearch({
        query,
        employees: safeArray(employees, 50),
        hints: (intelligence.lenses || []).map(item => item.lens),
        enabled: Boolean(intelligence.plan?.needsWebResearch),
      });

  const combinedResearchContext = [
    intelligence.context,
    webResearch.context,
  ].filter(Boolean).join('\n\n');

  const augmentedSystem = [
    String(system || '').trim(),
    combinedResearchContext,
  ].filter(Boolean).join('\n\n');

  let attempt = await callPrimaryPool({
    system: augmentedSystem,
    messages: compactMessages,
    temperature: 0.45,
    maxTokens: 1800,
    jsonMode: false,
    preferredProvider: isHealthProbe ? null : intelligence.plan?.preferredPrimary,
  });

  if (!attempt.reply) {
    const emergency = await cloudflareEmergencyReply({
      system: augmentedSystem,
      messages: compactMessages,
      maxTokens: 1800,
    });
    if (emergency?.reply) attempt = { ...emergency, errors: [...(attempt.errors || []), ...(emergency.errors || [])] };
    else attempt.errors = [...(attempt.errors || []), ...(emergency?.errors || [])];
  }

  if (!attempt.reply) {
    return res.json({
      ok: true,
      source: 'fallback',
      providerErrors: attempt.errors || [],
      cloudflare: {
        ...intelligence.metadata,
        lenses: intelligence.lenses,
        plan: intelligence.plan,
        criticApplied: false,
      },
      webResearch: {
        ...webResearch.metadata,
        sources: webResearch.sources.map(source => ({
          id: source.id,
          provider: source.provider,
          title: source.title,
          url: source.url,
          publishedAt: source.publishedAt,
        })),
      },
      reply: fallbackChatReply({ messages: compactMessages, providerErrors: attempt.errors || [] }),
    });
  }

  let finalReply = attempt.reply;
  let finalModel = attempt.model;
  let criticApplied = false;
  let criticMetadata = null;

  if (!isHealthProbe && intelligence.plan?.needsCritic) {
    const refined = await refineWithCritic({
      primaryProvider: attempt.provider,
      primaryModel: attempt.model,
      system: augmentedSystem,
      messages: compactMessages,
      query,
      draft: attempt.reply,
      semanticContext: combinedResearchContext,
      maxTokens: 1800,
    });
    finalReply = refined.reply;
    finalModel = refined.model || finalModel;
    criticApplied = refined.criticApplied;
    criticMetadata = refined.criticMetadata;
  }

  res.json({
    ok: true,
    source: attempt.provider,
    model: finalModel,
    keySlot: attempt.keySlot || null,
    providerErrors: attempt.errors || [],
    cloudflare: {
      ...intelligence.metadata,
      lenses: intelligence.lenses,
      plan: intelligence.plan,
      criticApplied,
      critic: criticMetadata,
    },
    webResearch: {
      ...webResearch.metadata,
      sources: webResearch.sources.map(source => ({
        id: source.id,
        provider: source.provider,
        title: source.title,
        url: source.url,
        publishedAt: source.publishedAt,
      })),
    },
    reply: finalReply,
  });
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
  refreshProviderCapabilities({ force: true })
    .then(diagnostics => {
      console.log('AI provider capabilities refreshed:', {
        configured: diagnostics.configured,
        keyCounts: diagnostics.keyCounts,
        models: diagnostics.models,
      });
    })
    .catch(error => {
      console.warn('Initial AI provider capability refresh failed:', sanitizeProviderError(error.message));
    });
});
