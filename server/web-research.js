const TINYFISH_SEARCH_URL = 'https://api.search.tinyfish.ai';
const KEENABLE_SEARCH_URL = 'https://api.keenable.ai/v1/search';
const DEFAULT_TIMEOUT_MS = 18000;
const MAX_RESULTS_PER_PROVIDER = 6;
const MAX_MERGED_RESULTS = 8;

function clean(value, limit = 4000) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, limit);
}

function unique(values = []) {
  return [...new Set(values.map(value => clean(value, 220)).filter(Boolean))];
}

function secretSafeError(error) {
  return clean(error?.message || error || 'Web research request failed.', 500)
    .replace(/sk-[a-z0-9_-]+/gi, '[redacted]')
    .replace(/keen_[a-z0-9_-]+/gi, '[redacted]');
}

function configuredProviders() {
  return {
    tinyfish: Boolean(process.env.TINYFISH_API_KEY),
    keenable: Boolean(process.env.KEENABLE_API_KEY),
  };
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^$()|[\]\\{}]/g, '\\$&');
}

function scrubEmployeeIdentifiers(query, employees = []) {
  let safe = String(query || '');

  const names = unique(
    employees.flatMap(employee => {
      const full = clean(employee?.name, 160);
      const parts = full.split(/\s+/).filter(part => part.length >= 3);
      return [full, ...parts];
    })
  ).sort((a, b) => b.length - a.length);

  for (const name of names) {
    safe = safe.replace(new RegExp('\\b' + escapeRegExp(name) + '\\b', 'gi'), ' ');
  }

  safe = safe
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, ' ')
    .replace(/\b[0-9a-f]{8}-[0-9a-f-]{27,}\b/gi, ' ')
    .replace(/\b(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return safe.slice(0, 900);
}

function researchQuery({ query, employees = [], hints = [] } = {}) {
  const base = scrubEmployeeIdentifiers(query, employees);
  const context = unique(hints).slice(0, 8);

  if (!context.length) return base;
  if (!base) return 'workplace implications and evidence for ' + context.join(', ');
  return base + ' — workplace evidence context: ' + context.join(', ');
}

async function tinyfishSearch(query) {
  const apiKey = process.env.TINYFISH_API_KEY;
  if (!apiKey) return { provider: 'tinyfish', results: [], configured: false };

  const url = new URL(TINYFISH_SEARCH_URL);
  url.searchParams.set('query', query);
  url.searchParams.set('domain_type', 'web');
  url.searchParams.set(
    'purpose',
    'Support an internal workplace behavioral-analysis assistant with current, source-backed context. Prefer authoritative medical, occupational-health, government, academic, and established professional sources.'
  );

  const response = await fetch(url, {
    headers: {
      'X-API-Key': apiKey,
      Accept: 'application/json',
    },
    signal: AbortSignal.timeout(DEFAULT_TIMEOUT_MS),
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error('TinyFish search ' + response.status + ': ' + (text || response.statusText));
  }

  const data = JSON.parse(text);
  const results = Array.isArray(data?.results) ? data.results : [];

  return {
    provider: 'tinyfish',
    configured: true,
    results: results.slice(0, MAX_RESULTS_PER_PROVIDER).map((item, index) => ({
      provider: 'tinyfish',
      providerRank: Number(item?.position) || index + 1,
      title: clean(item?.title || item?.site_name || 'Untitled source', 300),
      url: clean(item?.url, 1600),
      snippet: clean(item?.snippet, 1800),
      publishedAt: clean(item?.date || item?.published_at, 80) || null,
    })).filter(item => /^https?:\/\//i.test(item.url)),
  };
}

async function keenableSearch(query) {
  const apiKey = process.env.KEENABLE_API_KEY;
  if (!apiKey) return { provider: 'keenable', results: [], configured: false };

  const response = await fetch(KEENABLE_SEARCH_URL, {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      max_results: MAX_RESULTS_PER_PROVIDER,
      mode: 'pro',
    }),
    signal: AbortSignal.timeout(DEFAULT_TIMEOUT_MS),
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error('Keenable search ' + response.status + ': ' + (text || response.statusText));
  }

  const data = JSON.parse(text);
  const results = Array.isArray(data?.results) ? data.results : [];

  return {
    provider: 'keenable',
    configured: true,
    results: results.slice(0, MAX_RESULTS_PER_PROVIDER).map((item, index) => ({
      provider: 'keenable',
      providerRank: index + 1,
      title: clean(item?.title || item?.description || 'Untitled source', 300),
      url: clean(item?.url, 1600),
      snippet: clean(item?.snippet || item?.description, 1800),
      publishedAt: clean(item?.published_at, 80) || null,
    })).filter(item => /^https?:\/\//i.test(item.url)),
  };
}

function canonicalUrl(value) {
  try {
    const url = new URL(value);
    url.hash = '';
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => url.searchParams.delete(key));
    return url.toString().replace(/\/$/, '');
  } catch {
    return value;
  }
}

function mergeResults(providerResults = []) {
  const queues = providerResults
    .filter(item => Array.isArray(item?.results) && item.results.length)
    .map(item => [...item.results]);

  const merged = [];
  const seen = new Set();

  while (queues.some(queue => queue.length) && merged.length < MAX_MERGED_RESULTS) {
    for (const queue of queues) {
      const next = queue.shift();
      if (!next) continue;

      const key = canonicalUrl(next.url).toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push({ ...next, id: 'W' + (merged.length + 1) });

      if (merged.length >= MAX_MERGED_RESULTS) break;
    }
  }

  return merged;
}

function formatResearchContext(results = []) {
  if (!results.length) return '';

  const lines = [
    'LIVE EXTERNAL WEB RESEARCH',
    'The following public web results were retrieved for this question. They are supporting context, not employee facts and not a replacement for the deterministic PI/role engine.',
    '',
  ];

  for (const source of results) {
    lines.push('[' + source.id + '] ' + source.title);
    lines.push('Provider: ' + source.provider);
    if (source.publishedAt) lines.push('Published/date: ' + source.publishedAt);
    lines.push('URL: ' + source.url);
    if (source.snippet) lines.push('Search excerpt: ' + source.snippet);
    lines.push('');
  }

  lines.push(
    'WEB RESEARCH RULES:',
    '- Use web research only for public background knowledge, current information, occupational/work-design evidence, or clarification of a condition/lens term.',
    '- Never treat search results as evidence that the selected employee has a condition, diagnosis, disability, identity, family circumstance, or other private trait.',
    '- Never use sensitive life-context research to raise/lower baseline compatibility, rank employees, or make an employment decision.',
    '- Prefer authoritative sources when results conflict. Search excerpts can be incomplete; state uncertainty when a claim is not well supported.',
    '- When materially relying on a web result, cite its source ID such as [W1] in the answer.'
  );

  return lines.join('\n');
}

export function webResearchConfigured() {
  const providers = configuredProviders();
  return providers.tinyfish || providers.keenable;
}

export async function buildExternalWebResearch({
  query,
  employees = [],
  hints = [],
  enabled = true,
} = {}) {
  const providers = configuredProviders();
  const safeQuery = researchQuery({ query, employees, hints });

  if (!enabled || !safeQuery || (!providers.tinyfish && !providers.keenable)) {
    return {
      context: '',
      sources: [],
      metadata: {
        used: false,
        providers: [],
        configured: providers,
        errors: [],
      },
    };
  }

  const tasks = [];
  if (providers.tinyfish) tasks.push(tinyfishSearch(safeQuery));
  if (providers.keenable) tasks.push(keenableSearch(safeQuery));

  const settled = await Promise.allSettled(tasks);
  const successful = [];
  const errors = [];

  for (const item of settled) {
    if (item.status === 'fulfilled') successful.push(item.value);
    else errors.push(secretSafeError(item.reason));
  }

  const sources = mergeResults(successful);
  const usedProviders = unique(sources.map(source => source.provider));

  return {
    context: formatResearchContext(sources),
    sources,
    metadata: {
      used: sources.length > 0,
      providers: usedProviders,
      sourceCount: sources.length,
      configured: providers,
      errors,
    },
  };
}
