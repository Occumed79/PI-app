const ARTIFICIAL_ANALYSIS_BASE_URL = 'https://artificialanalysis.ai/api/v2';
const CATALOG_TTL_MS = 12 * 60 * 60 * 1000;
const RATE_LIMIT_COOLDOWN_MS = 6 * 60 * 60 * 1000;

let inFlightCatalog = null;
let retryAfterAt = 0;

let cache = {
  fetchedAt: 0,
  tier: null,
  intelligenceIndexVersion: null,
  models: [],
  keySlot: null,
  lastError: null,
};

function unique(values) {
  return [...new Set(values.map(value => String(value || '').trim()).filter(Boolean))];
}

function keys() {
  return unique([
    process.env.ARTIFICIAL_ANALYSIS_API_KEY,
    process.env.ARTIFICIAL_ANALYSIS_API_KEY_2,
    process.env['ARTIFICIAL-ANALYSIS_API_KEY'],
    process.env['ARTIFICIAL-ANALYSIS_API_KEY_2'],
  ]);
}

export function artificialAnalysisConfigured() {
  return keys().length > 0;
}

function normalizedModelName(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/^models\//, '')
    .replace(/^[a-z0-9_.-]+\//, '')
    .replace(/\b(openai|google|nvidia|mistral|mistralai|meta|deepseek|qwen|alibaba|anthropic|xai)\b/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\b(instruct|chat|latest|preview|experimental)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(value) {
  return new Set(normalizedModelName(value).split(' ').filter(Boolean));
}

function tokenSimilarity(left, right) {
  const a = tokens(left);
  const b = tokens(right);
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection += 1;
  const union = new Set([...a, ...b]).size;
  return union ? intersection / union : 0;
}

function candidateMatchScore(runtimeName, model) {
  const runtime = normalizedModelName(runtimeName);
  const name = normalizedModelName(model?.name);
  const slug = normalizedModelName(model?.slug);

  if (!runtime || (!name && !slug)) return 0;
  if (runtime === slug || runtime === name) return 1;
  if (runtime.includes(slug) || slug.includes(runtime)) return 0.96;
  if (runtime.includes(name) || name.includes(runtime)) return 0.94;

  const similarity = Math.max(
    tokenSimilarity(runtime, name),
    tokenSimilarity(runtime, slug)
  );

  // Prevent loose matches such as two unrelated "small" models.
  return similarity >= 0.55 ? similarity : 0;
}

async function fetchPage(apiKey, page) {
  const response = await fetch(
    `${ARTIFICIAL_ANALYSIS_BASE_URL}/language/models/free?page=${page}`,
    {
      headers: {
        'x-api-key': apiKey,
        Accept: 'application/json',
      },
      signal: AbortSignal.timeout(20000),
    }
  );

  const text = await response.text();
  if (!response.ok) {
    const error = new Error(`Artificial Analysis free model catalog ${response.status}: ${text || response.statusText}`);
    error.status = response.status;

    const retryAfter = Number(response.headers?.get?.('retry-after'));
    if (Number.isFinite(retryAfter) && retryAfter > 0) {
      error.retryAfterMs = retryAfter * 1000;
    }

    throw error;
  }

  return JSON.parse(text);
}

async function fetchCatalogWithKey(apiKey, keySlot) {
  const models = [];
  let page = 1;
  let tier = null;
  let intelligenceIndexVersion = null;

  // The current free response is paginated; cap defensively so a bad pagination
  // response cannot burn the daily allowance.
  for (let requestCount = 0; requestCount < 5; requestCount += 1) {
    const data = await fetchPage(apiKey, page);
    tier = data?.tier || tier;
    intelligenceIndexVersion = data?.intelligence_index_version ?? intelligenceIndexVersion;
    if (Array.isArray(data?.data)) models.push(...data.data);

    if (!data?.pagination?.has_more) break;
    page += 1;
  }

  if (!models.length) {
    throw new Error('Artificial Analysis returned an empty free model catalog.');
  }

  cache = {
    fetchedAt: Date.now(),
    tier,
    intelligenceIndexVersion,
    models,
    keySlot,
    lastError: null,
  };

  return cache;
}

async function refreshCatalog() {
  let lastError = null;
  const apiKeys = keys();

  for (let index = 0; index < apiKeys.length; index += 1) {
    try {
      const next = await fetchCatalogWithKey(apiKeys[index], index + 1);
      retryAfterAt = 0;
      return next;
    } catch (error) {
      lastError = error;

      // Free-tier quota is shared at the Artificial Analysis organization level.
      // A second key protects against a revoked credential, but retrying it after
      // an actual 429 would only waste another request.
      if (Number(error?.status) === 429 || /429/.test(String(error?.message || ''))) {
        retryAfterAt = Date.now() + Math.max(
          Number(error?.retryAfterMs) || 0,
          RATE_LIMIT_COOLDOWN_MS
        );
        break;
      }
    }
  }

  cache.lastError = String(lastError?.message || lastError || 'Artificial Analysis catalog refresh failed.');
  throw lastError || new Error(cache.lastError);
}

export async function getArtificialAnalysisCatalog({ force = false } = {}) {
  if (!artificialAnalysisConfigured()) return null;

  const now = Date.now();
  if (!force && cache.models.length && now - cache.fetchedAt < CATALOG_TTL_MS) {
    return cache;
  }

  // Never hammer a known-exhausted free quota, even when a capability refresh
  // is explicitly requested. Local model heuristics remain available.
  if (retryAfterAt > now) return null;

  // Every Gemini/Groq/Mistral candidate can ask for benchmark data at once.
  // Collapse those callers onto one catalog refresh so one model-discovery
  // cycle consumes only the catalog's actual pagination requests.
  if (inFlightCatalog) return inFlightCatalog;

  inFlightCatalog = refreshCatalog()
    .finally(() => {
      inFlightCatalog = null;
    });

  return inFlightCatalog;
}

export async function benchmarkForModel(runtimeModelName) {
  const catalog = await getArtificialAnalysisCatalog();
  if (!catalog?.models?.length) return null;

  const ranked = catalog.models
    .map(model => ({
      model,
      match: candidateMatchScore(runtimeModelName, model),
    }))
    .filter(item => item.match > 0)
    .sort((a, b) => b.match - a.match);

  const best = ranked[0];
  if (!best || best.match < 0.6) return null;

  return {
    matched: true,
    matchConfidence: Number(best.match.toFixed(3)),
    id: best.model.id,
    name: best.model.name,
    slug: best.model.slug,
    releaseDate: best.model.release_date || null,
    modelCreator: best.model.model_creator?.name || null,
    intelligenceIndex: Number(best.model.evaluations?.artificial_analysis_intelligence_index ?? 0),
    codingIndex: Number(best.model.evaluations?.artificial_analysis_coding_index ?? 0),
    agenticIndex: Number(best.model.evaluations?.artificial_analysis_agentic_index ?? 0),
    medianOutputTokensPerSecond: Number(best.model.performance?.median_output_tokens_per_second ?? 0),
    medianTimeToFirstTokenSeconds: Number(best.model.performance?.median_time_to_first_token_seconds ?? 0),
    medianTimeToFirstAnswerTokenSeconds: Number(best.model.performance?.median_time_to_first_answer_token_seconds ?? 0),
    medianEndToEndResponseTimeSeconds: Number(best.model.performance?.median_end_to_end_response_time_seconds ?? 0),
    intelligenceIndexVersion: catalog.intelligenceIndexVersion,
    tier: catalog.tier,
  };
}

export async function benchmarkBoost(runtimeModelName) {
  try {
    const benchmark = await benchmarkForModel(runtimeModelName);
    if (!benchmark) return { boost: 0, benchmark: null };

    // Capability should dominate. Speed is a modest tie-breaker only.
    const intelligence = Math.max(0, benchmark.intelligenceIndex);
    const agentic = Math.max(0, benchmark.agenticIndex);
    const speed = Math.max(0, benchmark.medianOutputTokensPerSecond);

    const boost =
      intelligence * 16 +
      agentic * 4 +
      Math.min(speed, 400) * 0.25;

    return { boost, benchmark };
  } catch {
    return { boost: 0, benchmark: null };
  }
}

export async function rankRuntimeModels(runtimeModelNames = []) {
  const rows = await Promise.all(
    runtimeModelNames.map(async model => ({
      model,
      ...(await benchmarkBoost(model)),
    }))
  );

  return rows.sort((a, b) => b.boost - a.boost);
}

export function getArtificialAnalysisDiagnostics() {
  return {
    configured: artificialAnalysisConfigured(),
    cachedModelCount: cache.models.length,
    tier: cache.tier,
    intelligenceIndexVersion: cache.intelligenceIndexVersion,
    fetchedAt: cache.fetchedAt || null,
    keySlot: cache.keySlot,
    lastError: cache.lastError,
    cacheTtlHours: CATALOG_TTL_MS / (60 * 60 * 1000),
    rateLimitCooldownHours: RATE_LIMIT_COOLDOWN_MS / (60 * 60 * 1000),
    retryAfterAt: retryAfterAt || null,
    refreshInFlight: Boolean(inFlightCatalog),
  };
}
