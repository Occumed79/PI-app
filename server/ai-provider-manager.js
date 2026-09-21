import 'dotenv/config';
import { benchmarkBoost, getArtificialAnalysisDiagnostics } from './artificial-analysis-intelligence.js';

const DISCOVERY_TTL_MS = 6 * 60 * 60 * 1000;
const DEFAULT_TIMEOUT_MS = 45000;
const OPENROUTER_AUTO_MODEL = 'openrouter/free';

const state = {
  gemini: { model: null, discoveredAt: 0, lastError: null },
  groq: { model: null, discoveredAt: 0, lastError: null },
  mistral: { model: null, discoveredAt: 0, lastError: null },
  cloudflare: {
    reasoning: { model: null, discoveredAt: 0, lastError: null },
    embedding: { model: null, discoveredAt: 0, lastError: null },
    rerank: { model: null, discoveredAt: 0, lastError: null },
  },
};

const rejectedCloudflareModels = {
  reasoning: new Set(),
  embedding: new Set(),
  rerank: new Set(),
};

let cloudflareRotation = 0;

function unique(values) {
  return [...new Set(values.map(value => String(value || '').trim()).filter(Boolean))];
}

function geminiKeys() {
  return unique([process.env.GEMINI_API_KEY, process.env.GEMINI_API_KEY_2]);
}

function groqKeys() {
  return unique([process.env.GROQ_API_KEY, process.env.GROQ_API_KEY_2]);
}

function openRouterKeys() {
  return unique([process.env.OPENROUTER_API_KEY, process.env.OPENROUTER_API_KEY_2]);
}

function mistralKeys() {
  return unique([
    process.env.MISTRAL_API_KEY,
    process.env.MISTRAL_API_KEY_2,
    process.env.MISTRAL_API_KEY_3,
    process.env.MISTRIAL_STUDUIO_API_KEY,
    process.env.MISTRIAL_STUDUIO_API_KEY_2,
    process.env.MISTRIAL_STUDUIO_API_KEY_3,
  ]);
}

function nvidiaKey() {
  return String(process.env.NVIDIA_API_KEY || '').trim();
}

function cloudflareAccounts() {
  const candidates = [
    {
      slot: 1,
      token: String(process.env.CLOUDFLARE_API_TOKEN || '').trim(),
      accountId: String(process.env.CLOUDFLARE_ACCOUNT_ID || '').trim(),
    },
    {
      slot: 2,
      token: String(process.env.CLOUDFLARE_API_TOKEN_2 || '').trim(),
      accountId: String(process.env.CLOUDFLARE_ACCOUNT_ID_2 || '').trim(),
    },
  ];
  return candidates.filter(item => item.token && item.accountId);
}

function allSecrets() {
  return unique([
    ...geminiKeys(),
    ...groqKeys(),
    ...mistralKeys(),
    process.env.NVIDIA_API_KEY,
    ...openRouterKeys(),
    process.env.CLOUDFLARE_API_TOKEN,
    process.env.CLOUDFLARE_API_TOKEN_2,
  ]);
}

export function sanitizeProviderError(message) {
  let text = String(message || 'Unknown provider error');
  for (const secret of allSecrets()) text = text.split(secret).join('[redacted]');
  return text.length > 1600 ? `${text.slice(0, 1600)}...` : text;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function responseError(response, prefix) {
  const body = await response.text();
  return new Error(`${prefix} ${response.status}: ${body || response.statusText}`);
}

function expired(entry) {
  return !entry.model || Date.now() - entry.discoveredAt > DISCOVERY_TTL_MS;
}

function isModelLifecycleError(error) {
  const text = String(error?.message || error || '').toLowerCase();
  return /model|deprecat|retir|not found|no such|invalid model|unsupported model|does not exist|5007|3042/.test(text);
}

function isRetryableCredentialError(error) {
  const text = String(error?.message || error || '').toLowerCase();
  return /401|403|408|409|429|500|502|503|504|quota|rate|capacity|timeout|unauthor|forbidden|exhaust/.test(text);
}

function parseVersionWeight(id) {
  const numbers = String(id || '').match(/\d+(?:\.\d+)?/g) || [];
  return numbers.slice(0, 2).reduce((sum, value, index) => sum + Number(value) * (index === 0 ? 30 : 3), 0);
}

function scoreGemini(model) {
  const id = String(model?.baseModelId || model?.name || '').replace(/^models\//, '').toLowerCase();
  const methods = Array.isArray(model?.supportedGenerationMethods) ? model.supportedGenerationMethods : [];
  if (!id.startsWith('gemini-') || !methods.includes('generateContent')) return Number.NEGATIVE_INFINITY;
  if (/embedding|image|imagen|tts|audio|live|robot|computer-use|aqa/.test(id)) return Number.NEGATIVE_INFINITY;

  let score = 0;
  const unstable = /preview|experimental|\bexp\b|latest/.test(id);
  score += unstable ? 0 : 1000;
  if (model?.thinking) score += 260;
  if (/flash/.test(id)) score += 220;
  if (/pro/.test(id)) score += 170;
  score += Math.min(Number(model?.inputTokenLimit || 0) / 10000, 180);
  score += Math.min(Number(model?.outputTokenLimit || 0) / 1000, 40);
  score += parseVersionWeight(id);
  return score;
}

async function listGeminiModels(apiKey) {
  const response = await fetchWithTimeout(
    'https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000',
    { headers: { 'x-goog-api-key': apiKey } },
    20000
  );
  if (!response.ok) throw await responseError(response, 'Gemini model discovery failed');
  const data = await response.json();
  return Array.isArray(data?.models) ? data.models : [];
}

async function resolveGeminiModel(force = false) {
  if (!force && !expired(state.gemini)) return state.gemini.model;
  const keys = geminiKeys();
  if (!keys.length) return null;

  let lastError = null;
  for (const key of keys) {
    try {
      const models = await listGeminiModels(key);
      const ranked = (await Promise.all(models.map(async model => {
        const localScore = scoreGemini(model);
        if (!Number.isFinite(localScore)) return { model, score: localScore, benchmark: null };
        const runtimeName = String(model?.baseModelId || model?.name || '').replace(/^models\//, '');
        const benchmarked = await benchmarkBoost(runtimeName);
        return {
          model,
          score: localScore + benchmarked.boost,
          benchmark: benchmarked.benchmark,
        };
      })))
        .filter(item => Number.isFinite(item.score))
        .sort((a, b) => b.score - a.score);
      const selected = ranked[0]?.model;
      if (!selected) throw new Error('Gemini returned no active generateContent model matching the production policy.');
      state.gemini = {
        model: String(selected.baseModelId || selected.name).replace(/^models\//, ''),
        discoveredAt: Date.now(),
        lastError: null,
      };
      return state.gemini.model;
    } catch (error) {
      lastError = error;
    }
  }
  state.gemini.lastError = sanitizeProviderError(lastError?.message);
  throw lastError || new Error('Gemini model discovery failed.');
}

function scoreGroq(model) {
  const id = String(model?.id || '').toLowerCase();
  if (!id || model?.active === false) return Number.NEGATIVE_INFINITY;
  if (/whisper|tts|speech|audio|guard|safety|moderation|prompt-guard/.test(id)) return Number.NEGATIVE_INFINITY;
  const context = Number(model?.context_window || 0);
  if (context && context < 8000) return Number.NEGATIVE_INFINITY;

  let score = 0;
  if (/gpt-oss/.test(id)) score += 500;
  if (/qwen/.test(id)) score += 430;
  if (/llama/.test(id)) score += 350;
  if (/reason|versatile/.test(id)) score += 180;
  if (/120b|70b|72b|32b|27b/.test(id)) score += 100;
  score += Math.min(context / 1000, 180);
  score += parseVersionWeight(id);
  return score;
}

async function listGroqModels(apiKey) {
  const response = await fetchWithTimeout(
    'https://api.groq.com/openai/v1/models',
    { headers: { Authorization: `Bearer ${apiKey}` } },
    20000
  );
  if (!response.ok) throw await responseError(response, 'Groq model discovery failed');
  const data = await response.json();
  return Array.isArray(data?.data) ? data.data : [];
}

async function resolveGroqModel(force = false) {
  if (!force && !expired(state.groq)) return state.groq.model;
  const keys = groqKeys();
  if (!keys.length) return null;

  let lastError = null;
  for (const key of keys) {
    try {
      const models = await listGroqModels(key);
      const ranked = (await Promise.all(models.map(async model => {
        const localScore = scoreGroq(model);
        if (!Number.isFinite(localScore)) return { model, score: localScore, benchmark: null };
        const benchmarked = await benchmarkBoost(model?.id);
        return {
          model,
          score: localScore + benchmarked.boost,
          benchmark: benchmarked.benchmark,
        };
      })))
        .filter(item => Number.isFinite(item.score))
        .sort((a, b) => b.score - a.score);
      if (!ranked.length) throw new Error('Groq returned no active chat-capable model matching the production policy.');
      state.groq = {
        model: ranked[0].model.id,
        discoveredAt: Date.now(),
        lastError: null,
      };
      return state.groq.model;
    } catch (error) {
      lastError = error;
    }
  }
  state.groq.lastError = sanitizeProviderError(lastError?.message);
  throw lastError || new Error('Groq model discovery failed.');
}

function cloudflareModelId(item) {
  return String(
    item?.name ||
    item?.id ||
    item?.model ||
    item?.model_id ||
    item?.properties?.name ||
    ''
  ).trim();
}

function cloudflareSearchText(item) {
  return [
    cloudflareModelId(item),
    item?.description,
    item?.task?.name,
    item?.task,
    item?.properties?.description,
    ...(Array.isArray(item?.tags) ? item.tags : []),
  ].filter(Boolean).join(' ').toLowerCase();
}

function scoreCloudflareModel(item, kind) {
  const id = cloudflareModelId(item);
  const text = cloudflareSearchText(item);
  if (!id || rejectedCloudflareModels[kind].has(id)) return Number.NEGATIVE_INFINITY;

  let score = 0;
  if (kind === 'embedding') {
    if (!/embed|bge/.test(text)) return Number.NEGATIVE_INFINITY;
    if (/bge-m3/.test(text)) score += 500;
    if (/multilingual|multi-lingual/.test(text)) score += 120;
  } else if (kind === 'rerank') {
    if (!/rerank/.test(text)) return Number.NEGATIVE_INFINITY;
    if (/bge-reranker/.test(text)) score += 500;
  } else {
    if (!/text generation|text-generation|reason|instruct|chat/.test(text)) return Number.NEGATIVE_INFINITY;
    if (/reasoning/.test(text)) score += 360;
    if (/function calling|function-calling|tool/.test(text)) score += 120;
    if (/gpt-oss/.test(text)) score += 200;
    if (/120b/.test(text)) score += 70;
    if (/20b/.test(text)) score += 40;
    if (/preview|experimental|deprecated/.test(text)) score -= 500;
  }
  return score + parseVersionWeight(id);
}

async function searchCloudflareModels(account, kind) {
  const params = new URLSearchParams({
    include_deprecated: 'false',
    hide_experimental: 'true',
    per_page: '100',
  });
  if (kind === 'embedding') params.set('search', 'embedding');
  if (kind === 'rerank') params.set('search', 'reranker');
  if (kind === 'reasoning') params.set('task', 'text-generation');

  const url = `https://api.cloudflare.com/client/v4/accounts/${account.accountId}/ai/models/search?${params.toString()}`;
  const response = await fetchWithTimeout(url, {
    headers: { Authorization: `Bearer ${account.token}` },
  }, 20000);
  if (!response.ok) throw await responseError(response, `Cloudflare ${kind} model discovery failed`);
  const data = await response.json();
  const result = Array.isArray(data?.result)
    ? data.result
    : Array.isArray(data?.result?.data)
      ? data.result.data
      : Array.isArray(data?.data)
        ? data.data
        : [];
  return result;
}

const CLOUDFLARE_DOCUMENTED_FALLBACKS = {
  reasoning: '@cf/openai/gpt-oss-20b',
  embedding: '@cf/baai/bge-m3',
  rerank: '@cf/baai/bge-reranker-base',
};

async function resolveCloudflareModel(kind, force = false, accountOverride = null) {
  const entry = state.cloudflare[kind];
  if (!force && !expired(entry)) return entry.model;
  const accounts = accountOverride ? [accountOverride] : cloudflareAccounts();
  if (!accounts.length) return null;

  let lastError = null;
  for (const account of accounts) {
    try {
      const models = await searchCloudflareModels(account, kind);
      const ranked = models
        .map(model => ({ model, score: scoreCloudflareModel(model, kind) }))
        .filter(item => Number.isFinite(item.score))
        .sort((a, b) => b.score - a.score);
      const selectedId = cloudflareModelId(ranked[0]?.model);
      const model = selectedId || CLOUDFLARE_DOCUMENTED_FALLBACKS[kind];
      state.cloudflare[kind] = { model, discoveredAt: Date.now(), lastError: null };
      return model;
    } catch (error) {
      lastError = error;
    }
  }

  const fallback = CLOUDFLARE_DOCUMENTED_FALLBACKS[kind];
  state.cloudflare[kind] = {
    model: fallback,
    discoveredAt: Date.now(),
    lastError: sanitizeProviderError(lastError?.message),
  };
  return fallback;
}

function extractOpenAiCompatibleText(data) {
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content === 'string') return content.trim();
  if (Array.isArray(content)) {
    return content.map(part => typeof part === 'string' ? part : part?.text || '').join('\n').trim();
  }
  return '';
}

function toGeminiContents(messages) {
  const firstUserIndex = messages.findIndex(message => message.role === 'user');
  const usable = firstUserIndex >= 0 ? messages.slice(firstUserIndex) : [];
  const contents = [];
  for (const message of usable) {
    const role = message.role === 'assistant' ? 'model' : 'user';
    const previous = contents[contents.length - 1];
    if (previous?.role === role) previous.parts[0].text += `\n\n${message.content}`;
    else contents.push({ role, parts: [{ text: message.content }] });
  }
  return contents;
}

async function callGeminiOnce(apiKey, model, { system, messages, temperature, maxTokens, jsonMode }) {
  const contents = toGeminiContents(messages);
  if (!contents.length) throw new Error('Gemini requires at least one user message.');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const response = await fetchWithTimeout(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      system_instruction: system ? { parts: [{ text: String(system).slice(0, 90000) }] } : undefined,
      contents,
      generationConfig: {
        temperature,
        maxOutputTokens: maxTokens,
        ...(jsonMode ? { responseMimeType: 'application/json' } : {}),
      },
    }),
  });
  if (!response.ok) throw await responseError(response, `Gemini ${model}`);
  const data = await response.json();
  const reply = data.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('\n').trim();
  if (!reply) throw new Error(`Gemini ${model} returned no usable text.`);
  return reply;
}

async function callGemini(options) {
  const keys = geminiKeys();
  if (!keys.length) return null;
  let model = await resolveGeminiModel(false);
  let lastError = null;

  for (let modelAttempt = 0; modelAttempt < 2; modelAttempt += 1) {
    for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
      try {
        const reply = await callGeminiOnce(keys[keyIndex], model, options);
        return { reply, model, keySlot: keyIndex + 1 };
      } catch (error) {
        lastError = error;
        if (!isRetryableCredentialError(error) && !isModelLifecycleError(error)) break;
      }
    }
    if (modelAttempt === 0 && isModelLifecycleError(lastError)) {
      model = await resolveGeminiModel(true);
      continue;
    }
    break;
  }
  throw lastError || new Error('Gemini request failed.');
}

async function callGroqOnce(apiKey, model, { system, messages, temperature, maxTokens, jsonMode }) {
  const allMessages = system
    ? [{ role: 'system', content: String(system).slice(0, 90000) }, ...messages]
    : messages;
  const response = await fetchWithTimeout('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      temperature,
      max_tokens: maxTokens,
      ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
      messages: allMessages,
    }),
  });
  if (!response.ok) throw await responseError(response, `Groq ${model}`);
  const data = await response.json();
  const reply = extractOpenAiCompatibleText(data);
  if (!reply) throw new Error(`Groq ${model} returned no usable text.`);
  return reply;
}

async function callGroq(options) {
  const keys = groqKeys();
  if (!keys.length) return null;
  let model = await resolveGroqModel(false);
  let lastError = null;

  for (let modelAttempt = 0; modelAttempt < 2; modelAttempt += 1) {
    for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
      try {
        const reply = await callGroqOnce(keys[keyIndex], model, options);
        return { reply, model, keySlot: keyIndex + 1 };
      } catch (error) {
        lastError = error;
        if (!isRetryableCredentialError(error) && !isModelLifecycleError(error)) break;
      }
    }
    if (modelAttempt === 0 && isModelLifecycleError(lastError)) {
      model = await resolveGroqModel(true);
      continue;
    }
    break;
  }
  throw lastError || new Error('Groq request failed.');
}


function scoreMistral(model) {
  const id = String(model?.id || model?.name || '').toLowerCase();
  if (!id) return Number.NEGATIVE_INFINITY;
  if (/embed|ocr|moderation|classifier|voxtral|codestral-embed/.test(id)) return Number.NEGATIVE_INFINITY;

  let score = 0;
  if (/mistral-medium/.test(id)) score += 1200;
  if (/mistral-small-4/.test(id)) score += 1150;
  if (/mistral-large/.test(id)) score += 1050;
  if (/mistral-small/.test(id)) score += 900;
  if (/ministral-14b/.test(id)) score += 650;
  if (/ministral-8b/.test(id)) score += 550;
  if (/ministral-3b/.test(id)) score += 450;
  if (/preview|experimental|deprecated/.test(id)) score -= 600;
  score += parseVersionWeight(id);
  return score;
}

async function listMistralModels(apiKey) {
  const response = await fetchWithTimeout(
    'https://api.mistral.ai/v1/models',
    { headers: { Authorization: `Bearer ${apiKey}` } },
    20000
  );
  if (!response.ok) throw await responseError(response, 'Mistral model discovery failed');
  const data = await response.json();
  return Array.isArray(data?.data) ? data.data : [];
}

async function resolveMistralModel(force = false) {
  if (!force && !expired(state.mistral)) return state.mistral.model;
  const keys = mistralKeys();
  if (!keys.length) return null;

  let lastError = null;
  for (const key of keys) {
    try {
      const models = await listMistralModels(key);
      const ranked = (await Promise.all(models.map(async model => {
        const localScore = scoreMistral(model);
        if (!Number.isFinite(localScore)) return { model, score: localScore, benchmark: null };
        const runtimeName = String(model?.id || model?.name || '');
        const benchmarked = await benchmarkBoost(runtimeName);
        return {
          model,
          score: localScore + benchmarked.boost,
          benchmark: benchmarked.benchmark,
        };
      })))
        .filter(item => Number.isFinite(item.score))
        .sort((a, b) => b.score - a.score);
      if (!ranked.length) throw new Error('Mistral returned no active chat-capable model matching the Role Intelligence policy.');
      state.mistral = {
        model: String(ranked[0].model.id || ranked[0].model.name),
        discoveredAt: Date.now(),
        lastError: null,
      };
      return state.mistral.model;
    } catch (error) {
      lastError = error;
    }
  }
  state.mistral.lastError = sanitizeProviderError(lastError?.message);
  throw lastError || new Error('Mistral model discovery failed.');
}

async function callMistralOnce(apiKey, model, { system, messages, temperature, maxTokens, jsonMode }) {
  const allMessages = system
    ? [{ role: 'system', content: String(system).slice(0, 120000) }, ...messages]
    : messages;
  const response = await fetchWithTimeout('https://api.mistral.ai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      messages: allMessages,
      temperature,
      max_tokens: maxTokens,
      ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
    }),
  }, 65000);
  if (!response.ok) throw await responseError(response, `Mistral ${model}`);
  const data = await response.json();
  const reply = extractOpenAiCompatibleText(data);
  if (!reply) throw new Error(`Mistral ${model} returned no usable text.`);
  return reply;
}

async function callMistral(options) {
  const keys = mistralKeys();
  if (!keys.length) return null;
  let model = await resolveMistralModel(false);
  let lastError = null;

  for (let modelAttempt = 0; modelAttempt < 2; modelAttempt += 1) {
    for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
      try {
        const reply = await callMistralOnce(keys[keyIndex], model, options);
        return { reply, model, keySlot: keyIndex + 1 };
      } catch (error) {
        lastError = error;
        if (!isRetryableCredentialError(error) && !isModelLifecycleError(error)) break;
      }
    }
    if (modelAttempt === 0 && isModelLifecycleError(lastError)) {
      model = await resolveMistralModel(true);
      continue;
    }
    break;
  }
  throw lastError || new Error('Mistral request failed.');
}

function openRouterHeaders(apiKey) {
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };
  const referer = process.env.OPENROUTER_SITE_URL || process.env.CLIENT_ORIGIN || '';
  if (referer && referer !== '*') headers['HTTP-Referer'] = referer;
  headers['X-Title'] = process.env.OPENROUTER_APP_NAME || 'PI Crosswalk Intelligence';
  return headers;
}

async function callOpenRouter({ system, messages, temperature, maxTokens, jsonMode }) {
  const keys = openRouterKeys();
  if (!keys.length) return null;

  const allMessages = system
    ? [{ role: 'system', content: String(system).slice(0, 90000) }, ...messages]
    : messages;

  let lastError = null;
  for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
    try {
      const response = await fetchWithTimeout('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: openRouterHeaders(keys[keyIndex]),
        body: JSON.stringify({
          model: OPENROUTER_AUTO_MODEL,
          temperature,
          max_tokens: maxTokens,
          ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
          messages: allMessages,
        }),
      }, 55000);

      if (!response.ok) throw await responseError(response, 'OpenRouter free router');

      const data = await response.json();
      const reply = extractOpenAiCompatibleText(data);
      if (!reply) throw new Error('OpenRouter free router returned no usable text.');

      return {
        reply,
        model: data?.model || OPENROUTER_AUTO_MODEL,
        keySlot: keyIndex + 1,
      };
    } catch (error) {
      lastError = error;
      if (!isRetryableCredentialError(error)) break;
    }
  }

  throw lastError || new Error('OpenRouter free router request failed.');
}


const NVIDIA_ROLE_MODEL = 'nvidia/nemotron-3-ultra-550b-a55b';

async function callNvidiaRoleReasoner({
  system = '',
  messages = [],
  temperature = 0.35,
  maxTokens = 3200,
  jsonMode = false,
} = {}) {
  const key = nvidiaKey();
  if (!key) return null;
  const allMessages = system
    ? [{ role: 'system', content: String(system).slice(0, 120000) }, ...messages]
    : messages;

  const response = await fetchWithTimeout('https://integrate.api.nvidia.com/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: NVIDIA_ROLE_MODEL,
      messages: allMessages,
      temperature,
      top_p: 0.95,
      max_tokens: maxTokens,
      stream: false,
      chat_template_kwargs: { enable_thinking: true },
      ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
    }),
  }, 75000);
  if (!response.ok) throw await responseError(response, `NVIDIA ${NVIDIA_ROLE_MODEL}`);
  const data = await response.json();
  const reply = extractOpenAiCompatibleText(data);
  if (!reply) throw new Error(`NVIDIA ${NVIDIA_ROLE_MODEL} returned no usable text.`);
  return { reply, model: NVIDIA_ROLE_MODEL, keySlot: 1 };
}

function roleAnalyzerRecord(provider, result) {
  return result?.reply ? {
    provider,
    model: result.model,
    keySlot: result.keySlot || 1,
    reply: result.reply,
  } : null;
}

export async function callRoleIntelligenceEnsemble({
  system = '',
  messages = [],
  temperature = 0.3,
  maxTokens = 3200,
  jsonMode = false,
} = {}) {
  const analyzerPrompt = `${system}

ROLE INTELLIGENCE ANALYZER RULES:
- Analyze independently. Do not assume another model's conclusion.
- Separate documented inputs from interpretation.
- Do not make hiring, firing, promotion, compensation, or other employment decisions.
- Do not use health, disability, family, immigration, identity, neurodivergence, or other sensitive life-context data to change baseline role compatibility.
- Preserve uncertainty and identify competing explanations when evidence supports them.`;

  const [nvidiaSettled, mistralSettled] = await Promise.allSettled([
    callNvidiaRoleReasoner({ system: analyzerPrompt, messages, temperature, maxTokens, jsonMode }),
    callMistral({ system: analyzerPrompt, messages, temperature, maxTokens, jsonMode }),
  ]);

  const analyzers = [];
  const errors = [];

  if (nvidiaSettled.status === 'fulfilled') {
    const record = roleAnalyzerRecord('nvidia', nvidiaSettled.value);
    if (record) analyzers.push(record);
  } else {
    errors.push(`nvidia: ${sanitizeProviderError(nvidiaSettled.reason?.message)}`);
  }

  if (mistralSettled.status === 'fulfilled') {
    const record = roleAnalyzerRecord('mistral', mistralSettled.value);
    if (record) analyzers.push(record);
  } else {
    errors.push(`mistral: ${sanitizeProviderError(mistralSettled.reason?.message)}`);
  }

  // If one specialist is unavailable, add a genuinely separate model family rather than
  // letting the surviving specialist become the sole analyst.
  if (analyzers.length < 2) {
    const fallback = await callPrimaryPool({
      system: analyzerPrompt,
      messages,
      temperature,
      maxTokens,
      jsonMode,
      preferredProvider: 'groq',
    });
    if (fallback?.reply) {
      analyzers.push(roleAnalyzerRecord(fallback.provider, fallback));
    }
    errors.push(...(fallback?.errors || []));
  }

  if (!analyzers.length) {
    return { reply: null, analyzers: [], synthesizer: null, errors };
  }

  if (analyzers.length === 1) {
    return {
      reply: analyzers[0].reply,
      analyzers,
      synthesizer: null,
      consensusMode: 'single-survivor-fallback',
      errors,
    };
  }

  const synthesisMessages = [{
    role: 'user',
    content: `The independent Role Intelligence analyses below were generated from the same evidence.

Do not simply choose a winner or average them. Reconcile points that are genuinely compatible, preserve material disagreements, identify unsupported leaps, and give the user one clear evidence-aware answer. Do not reveal chain-of-thought. Do not use sensitive life-context variables to alter baseline employment compatibility.

ANALYSES:
${analyzers.map((item, index) => `ANALYST ${index + 1} (${item.provider} / ${item.model}):
${item.reply}`).join('\n\n')}`,
  }];

  const synthesis = await callPrimaryPool({
    system: 'You are the independent synthesis layer for a multi-model Role Intelligence system.',
    messages: synthesisMessages,
    temperature: 0.2,
    maxTokens,
    jsonMode,
    preferredProvider: 'groq',
  });

  return {
    reply: synthesis?.reply || analyzers.map(item => item.reply).join('\n\n---\n\n'),
    analyzers,
    synthesizer: synthesis?.reply ? {
      provider: synthesis.provider,
      model: synthesis.model,
      keySlot: synthesis.keySlot,
    } : null,
    consensusMode: synthesis?.reply ? 'independent-analysis-plus-third-party-synthesis' : 'parallel-analysis-no-synthesizer',
    errors: [...errors, ...(synthesis?.errors || [])],
  };
}

export const PRIMARY_PROVIDER_ORDER = Object.freeze(['gemini', 'groq', 'openrouter']);

export function configuredProviderMap() {
  return {
    gemini: geminiKeys().length > 0,
    groq: groqKeys().length > 0,
    mistral: mistralKeys().length > 0,
    nvidia: Boolean(nvidiaKey()),
    openrouter: openRouterKeys().length > 0,
    cloudflare: cloudflareAccounts().length > 0,
  };
}

export function providerKeyCounts() {
  return {
    gemini: geminiKeys().length,
    groq: groqKeys().length,
    mistral: mistralKeys().length,
    nvidia: nvidiaKey() ? 1 : 0,
    openrouter: openRouterKeys().length,
    cloudflare: cloudflareAccounts().length,
  };
}

export async function callPrimaryProvider(provider, {
  system = '',
  messages = [],
  temperature = 0.45,
  maxTokens = 1800,
  jsonMode = false,
} = {}) {
  const options = { system, messages, temperature, maxTokens, jsonMode };
  if (provider === 'gemini') return callGemini(options);
  if (provider === 'groq') return callGroq(options);
  if (provider === 'openrouter') return callOpenRouter(options);
  throw new Error(`Unknown primary AI provider: ${provider}`);
}

export async function callPrimaryPool(options = {}) {
  const errors = [];
  const preferredProvider = ['gemini', 'groq'].includes(options?.preferredProvider)
    ? options.preferredProvider
    : null;
  const providerOrder = preferredProvider
    ? [preferredProvider, ...PRIMARY_PROVIDER_ORDER.filter(provider => provider !== preferredProvider)]
    : [...PRIMARY_PROVIDER_ORDER];

  for (const provider of providerOrder) {
    if (!configuredProviderMap()[provider]) {
      errors.push(`${provider}: no API key configured.`);
      continue;
    }
    try {
      const result = await callPrimaryProvider(provider, options);
      if (result?.reply) return { provider, ...result, errors, providerOrder };
      errors.push(`${provider}: no response.`);
    } catch (error) {
      errors.push(`${provider}: ${sanitizeProviderError(error.message)}`);
    }
  }
  return {
    provider: null,
    reply: null,
    model: null,
    keySlot: null,
    errors,
    providerOrder,
  };
}

function orderedCloudflareAccounts() {
  const accounts = cloudflareAccounts();
  if (!accounts.length) return [];
  const start = cloudflareRotation % accounts.length;
  cloudflareRotation = (cloudflareRotation + 1) % Number.MAX_SAFE_INTEGER;
  return [...accounts.slice(start), ...accounts.slice(0, start)];
}

async function withCloudflareAccount(kind, operation) {
  const accounts = orderedCloudflareAccounts();
  if (!accounts.length) return null;
  let lastError = null;

  for (const account of accounts) {
    let model = await resolveCloudflareModel(kind, false, account);
    for (let modelAttempt = 0; modelAttempt < 2; modelAttempt += 1) {
      try {
        const value = await operation(account, model);
        return { ...value, model, accountSlot: account.slot };
      } catch (error) {
        lastError = error;
        if (modelAttempt === 0 && (isModelLifecycleError(error) || /403|5035/.test(String(error?.message)))) {
          rejectedCloudflareModels[kind].add(model);
          model = await resolveCloudflareModel(kind, true, account);
          continue;
        }
        break;
      }
    }
  }
  throw lastError || new Error(`Cloudflare ${kind} request failed.`);
}

export async function callCloudflareChat({
  system = '',
  messages = [],
  temperature = 0.2,
  maxTokens = 900,
  jsonMode = false,
} = {}) {
  return withCloudflareAccount('reasoning', async (account, model) => {
    const allMessages = system
      ? [{ role: 'system', content: String(system).slice(0, 90000) }, ...messages]
      : messages;
    const response = await fetchWithTimeout(
      `https://api.cloudflare.com/client/v4/accounts/${account.accountId}/ai/v1/chat/completions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${account.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages: allMessages,
          temperature,
          max_tokens: maxTokens,
          ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
        }),
      },
      50000
    );
    if (!response.ok) throw await responseError(response, `Cloudflare reasoning ${model}`);
    const data = await response.json();
    const reply = extractOpenAiCompatibleText(data);
    if (!reply) throw new Error(`Cloudflare reasoning ${model} returned no usable text.`);
    return { reply };
  });
}

export async function cloudflareEmbed(texts = []) {
  const input = Array.isArray(texts) ? texts.filter(Boolean) : [texts].filter(Boolean);
  if (!input.length) return null;
  return withCloudflareAccount('embedding', async (account, model) => {
    const response = await fetchWithTimeout(
      `https://api.cloudflare.com/client/v4/accounts/${account.accountId}/ai/v1/embeddings`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${account.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model, input }),
      },
      45000
    );
    if (!response.ok) throw await responseError(response, `Cloudflare embedding ${model}`);
    const data = await response.json();
    const vectors = Array.isArray(data?.data)
      ? data.data.map(item => item?.embedding).filter(Array.isArray)
      : [];
    if (vectors.length !== input.length) throw new Error(`Cloudflare embedding ${model} returned ${vectors.length}/${input.length} vectors.`);
    return { vectors };
  });
}

export async function cloudflareRerank(query, contexts = [], topK = 8) {
  const usable = contexts
    .map((item, index) => ({
      index,
      text: typeof item === 'string' ? item : item?.text || '',
      meta: typeof item === 'string' ? null : item?.meta || null,
    }))
    .filter(item => item.text);
  if (!query || !usable.length) return null;

  return withCloudflareAccount('rerank', async (account, model) => {
    const response = await fetchWithTimeout(
      `https://api.cloudflare.com/client/v4/accounts/${account.accountId}/ai/run/${model}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${account.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          top_k: Math.max(1, Math.min(Number(topK) || 8, usable.length)),
          contexts: usable.map(item => ({ text: item.text })),
        }),
      },
      45000
    );
    if (!response.ok) throw await responseError(response, `Cloudflare reranker ${model}`);
    const data = await response.json();
    const rows = Array.isArray(data?.result?.response)
      ? data.result.response
      : Array.isArray(data?.result)
        ? data.result
        : [];
    const ranked = rows.map(row => {
      const localIndex = Number(row?.id ?? row?.index);
      const candidate = usable[localIndex];
      return candidate ? {
        index: candidate.index,
        score: Number(row?.score ?? row?.relevance_score ?? 0),
        text: candidate.text,
        meta: candidate.meta,
      } : null;
    }).filter(Boolean);
    return { ranked };
  });
}

export async function refreshProviderCapabilities({ force = true } = {}) {
  const tasks = [];
  if (geminiKeys().length) tasks.push(resolveGeminiModel(force).catch(error => ({ error: sanitizeProviderError(error.message) })));
  if (groqKeys().length) tasks.push(resolveGroqModel(force).catch(error => ({ error: sanitizeProviderError(error.message) })));
  if (mistralKeys().length) tasks.push(resolveMistralModel(force).catch(error => ({ error: sanitizeProviderError(error.message) })));
  if (cloudflareAccounts().length) {
    for (const kind of ['reasoning', 'embedding', 'rerank']) {
      tasks.push(resolveCloudflareModel(kind, force).catch(error => ({ error: sanitizeProviderError(error.message) })));
    }
  }
  await Promise.all(tasks);
  return getProviderDiagnostics();
}

export function getProviderDiagnostics() {
  return {
    configured: configuredProviderMap(),
    keyCounts: providerKeyCounts(),
    primaryOrder: [...PRIMARY_PROVIDER_ORDER],
    artificialAnalysis: getArtificialAnalysisDiagnostics(),
    models: {
      gemini: state.gemini.model,
      groq: state.groq.model,
      mistral: state.mistral.model,
      nvidiaRole: NVIDIA_ROLE_MODEL,
      openrouter: OPENROUTER_AUTO_MODEL,
      cloudflare: {
        reasoning: state.cloudflare.reasoning.model,
        embedding: state.cloudflare.embedding.model,
        rerank: state.cloudflare.rerank.model,
      },
    },
    discoveredAt: {
      gemini: state.gemini.discoveredAt || null,
      groq: state.groq.discoveredAt || null,
      mistral: state.mistral.discoveredAt || null,
      cloudflare: {
        reasoning: state.cloudflare.reasoning.discoveredAt || null,
        embedding: state.cloudflare.embedding.discoveredAt || null,
        rerank: state.cloudflare.rerank.discoveredAt || null,
      },
    },
    discoveryErrors: {
      gemini: state.gemini.lastError,
      groq: state.groq.lastError,
      mistral: state.mistral.lastError,
      cloudflare: {
        reasoning: state.cloudflare.reasoning.lastError,
        embedding: state.cloudflare.embedding.lastError,
        rerank: state.cloudflare.rerank.lastError,
      },
    },
  };
}
