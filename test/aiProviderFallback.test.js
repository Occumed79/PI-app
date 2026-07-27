import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');
const chatSource = await readFile(new URL('../src/components/AITab.jsx', import.meta.url), 'utf8');
const readmeSource = await readFile(new URL('../README.md', import.meta.url), 'utf8');

test('auto mode keeps Gemini, Groq, and OpenRouter in that order', () => {
  assert.match(
    serverSource,
    /LIVE_AI_PROVIDERS\s*=\s*Object\.freeze\(\['gemini',\s*'groq',\s*'openrouter'\]\)/
  );
  assert.match(serverSource, /function getProviderOrder\(\)/);
  assert.match(serverSource, /return \[\.\.\.LIVE_AI_PROVIDERS\]/);
});

test('OpenRouter is a real server-side chat and scenario provider', () => {
  assert.match(serverSource, /process\.env\.OPENROUTER_API_KEY/);
  assert.match(serverSource, /process\.env\.OPENROUTER_MODEL \|\| 'openrouter\/free'/);
  assert.match(serverSource, /https:\/\/openrouter\.ai\/api\/v1\/chat\/completions/);
  assert.match(serverSource, /openrouter:\s*callOpenRouterForScenario/);
  assert.match(serverSource, /openrouter:\s*callOpenRouterChat/);
});

test('the chat client accepts and identifies OpenRouter replies', () => {
  assert.match(chatSource, /\['gemini',\s*'groq',\s*'openrouter'\]\.includes\(data\.source\)/);
  assert.match(chatSource, /source === 'openrouter'/);
  assert.match(chatSource, /Live AI · OpenRouter/);
  assert.match(chatSource, /!\['error',\s*'welcome'\]\.includes\(message\.source\)/);
});

test('health and deployment docs expose the third live fallback', () => {
  assert.match(serverSource, /providerConfigured:\s*configuredProviderMap\(\)/);
  assert.match(serverSource, /fallbackOrder:\s*getFallbackOrder\(\)/);
  assert.match(readmeSource, /Gemini[\s\S]*Groq[\s\S]*OpenRouter/);
  assert.match(readmeSource, /OPENROUTER_API_KEY=your_complete_sk-or-v1_key/);
  assert.match(readmeSource, /OPENROUTER_MODEL=openrouter\/free/);
});

test('provider errors redact the OpenRouter secret', () => {
  assert.match(
    serverSource,
    /process\.env\.GEMINI_API_KEY,[\s\S]*process\.env\.GROQ_API_KEY,[\s\S]*process\.env\.OPENROUTER_API_KEY/
  );
});
