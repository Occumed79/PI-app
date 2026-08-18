import 'dotenv/config';

const DEFAULT_GEMINI_MODEL = 'gemini-3.6-flash';
const DEFAULT_GROQ_MODEL = 'openai/gpt-oss-20b';

const retiredGeminiModels = new Set([
  'gemini-2.0-flash',
]);

const retiredGroqModels = new Set([
  'llama-3.1-8b-instant',
  'llama-3.3-70b-versatile',
]);

const configuredGeminiModel = String(process.env.GEMINI_MODEL || '').trim();
if (!configuredGeminiModel || retiredGeminiModels.has(configuredGeminiModel)) {
  process.env.GEMINI_MODEL = DEFAULT_GEMINI_MODEL;
}

const configuredGroqModel = String(process.env.GROQ_MODEL || '').trim();
if (!configuredGroqModel || retiredGroqModels.has(configuredGroqModel)) {
  process.env.GROQ_MODEL = DEFAULT_GROQ_MODEL;
}

const primaryGeminiKey = String(process.env.GEMINI_API_KEY || '').trim();
const secondaryGeminiKey = String(process.env.GEMINI_API_KEY_2 || '').trim();

if (!primaryGeminiKey && secondaryGeminiKey) {
  process.env.GEMINI_API_KEY = secondaryGeminiKey;
}

const activePrimaryGeminiKey = String(process.env.GEMINI_API_KEY || '').trim();
const hasDistinctSecondaryGeminiKey = Boolean(
  secondaryGeminiKey && secondaryGeminiKey !== activePrimaryGeminiKey
);

const nativeFetch = globalThis.fetch.bind(globalThis);

function geminiRequestUrl(input) {
  try {
    const value = typeof input === 'string'
      ? input
      : input instanceof URL
        ? input.toString()
        : input?.url;
    if (!value) return null;
    const url = new URL(value);
    return url.hostname === 'generativelanguage.googleapis.com' ? url : null;
  } catch {
    return null;
  }
}

globalThis.fetch = async function fetchWithGeminiKeyFallback(input, init) {
  const response = await nativeFetch(input, init);
  if (response.ok || !hasDistinctSecondaryGeminiKey) return response;

  const url = geminiRequestUrl(input);
  if (!url || url.searchParams.get('key') !== activePrimaryGeminiKey) return response;

  const retryUrl = new URL(url);
  retryUrl.searchParams.set('key', secondaryGeminiKey);

  console.warn(`Gemini request returned ${response.status}; retrying with GEMINI_API_KEY_2.`);
  return nativeFetch(retryUrl, init);
};
