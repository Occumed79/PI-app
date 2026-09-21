import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const managerSource = await readFile(new URL('../server/ai-provider-manager.js', import.meta.url), 'utf8');
const intelligenceSource = await readFile(new URL('../server/cloudflare-intelligence.js', import.meta.url), 'utf8');
const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');
const chatSource = await readFile(new URL('../src/components/AITab.jsx', import.meta.url), 'utf8');
const scenarioSource = await readFile(new URL('../src/components/modes/AIScenarioCoach.jsx', import.meta.url), 'utf8');

test('primary provider pool remains Gemini, Groq, then OpenRouter', () => {
  assert.match(managerSource, /PRIMARY_PROVIDER_ORDER\s*=\s*Object\.freeze\(\['gemini',\s*'groq',\s*'openrouter'\]\)/);
});

test('Gemini and Groq support secondary credential failover', () => {
  assert.match(managerSource, /process\.env\.GEMINI_API_KEY_2/);
  assert.match(managerSource, /process\.env\.GROQ_API_KEY_2/);
  assert.match(managerSource, /geminiKeys\(\)/);
  assert.match(managerSource, /groqKeys\(\)/);
});

test('provider models are discovered dynamically instead of read from model env variables', () => {
  assert.match(managerSource, /generativelanguage\.googleapis\.com\/v1beta\/models\?pageSize=1000/);
  assert.match(managerSource, /api\.groq\.com\/openai\/v1\/models/);
  assert.doesNotMatch(managerSource, /process\.env\.GEMINI_MODEL/);
  assert.doesNotMatch(managerSource, /process\.env\.GROQ_MODEL/);
  assert.doesNotMatch(managerSource, /process\.env\.OPENROUTER_MODEL/);
});

test('OpenRouter uses the provider-managed free model router', () => {
  assert.match(managerSource, /OPENROUTER_AUTO_MODEL\s*=\s*'openrouter\/free'/);
  assert.match(managerSource, /openrouter\.ai\/api\/v1\/chat\/completions/);
});

test('Cloudflare uses both accounts and exposes reasoning, embedding, and reranking capabilities', () => {
  assert.match(managerSource, /process\.env\.CLOUDFLARE_API_TOKEN_2/);
  assert.match(managerSource, /process\.env\.CLOUDFLARE_ACCOUNT_ID_2/);
  assert.match(managerSource, /ai\/v1\/embeddings/);
  assert.match(managerSource, /ai\/v1\/chat\/completions/);
  assert.match(managerSource, /cloudflareRerank/);
  assert.match(managerSource, /models\/search/);
});

test('Cloudflare intelligence performs semantic retrieval, classification, and critic review', () => {
  assert.match(intelligenceSource, /semanticLensSelection/);
  assert.match(intelligenceSource, /classifyRequest/);
  assert.match(intelligenceSource, /runCloudflareCritic/);
  assert.match(intelligenceSource, /deriveLensProjection/);
});

test('NVIDIA Nemotron embedding is an optional additive retrieval path with Cloudflare preserved', () => {
  assert.match(managerSource, /NVIDIA_EMBED_MODEL\s*=\s*'nvidia\/nemotron-3-embed-1b'/);
  assert.match(managerSource, /export async function nvidiaEmbed/);
  assert.match(managerSource, /integrate\.api\.nvidia\.com\/v1\/embeddings/);
  assert.match(intelligenceSource, /cloudflareEmbed/);
  assert.match(intelligenceSource, /nvidiaEmbed/);
  assert.match(intelligenceSource, /Promise\.allSettled/);
  assert.match(intelligenceSource, /nvidiaEmbeddingModel/);
});

test('chat route supplies employee context and can accept Cloudflare emergency replies', () => {
  assert.match(chatSource, /employees,/);
  assert.match(chatSource, /source === 'cloudflare'/);
  assert.match(serverSource, /cloudflareEmergencyReply/);
  assert.match(serverSource, /buildCloudflareIntelligence/);
  assert.match(serverSource, /refineWithCritic/);
});

test('Scenario Coach no longer exposes provider keys or hard-codes provider models in the browser', () => {
  assert.doesNotMatch(scenarioSource, /VITE_GEMINI_API_KEY/);
  assert.doesNotMatch(scenarioSource, /VITE_GROQ_API_KEY/);
  assert.doesNotMatch(scenarioSource, /gemini-[0-9]/);
  assert.doesNotMatch(scenarioSource, /llama-[0-9]/);
  assert.match(scenarioSource, /\/api\/ai\/scenario-analysis/);
});

test('health endpoint reports self-healing provider diagnostics', () => {
  assert.match(serverSource, /providerMode:\s*'self-healing-capability-routing'/);
  assert.match(serverSource, /cloudflareMode:\s*'parallel-semantic-retrieval-rerank-classification-and-critic'/);
  assert.match(serverSource, /providerKeyCounts/);
  assert.match(serverSource, /modelDiscovery/);
});
