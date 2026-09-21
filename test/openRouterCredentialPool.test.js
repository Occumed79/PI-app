import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../server/ai-provider-manager.js', import.meta.url), 'utf8');

test('OpenRouter supports two server-side credential slots', () => {
  assert.match(source, /process\.env\.OPENROUTER_API_KEY/);
  assert.match(source, /process\.env\.OPENROUTER_API_KEY_2/);
  assert.match(source, /function openRouterKeys\(\)/);
});

test('OpenRouter stays on the free router for zero-cost operation', () => {
  assert.match(source, /const OPENROUTER_AUTO_MODEL = 'openrouter\/free'/);
});

test('OpenRouter retries a second credential on retryable credential or quota failure', () => {
  assert.match(source, /for \(let keyIndex = 0; keyIndex < keys\.length; keyIndex \+= 1\)/);
  assert.match(source, /isRetryableCredentialError\(error\)/);
});

test('OpenRouter uses current optional attribution header names', () => {
  assert.match(source, /headers\['HTTP-Referer'\]/);
  assert.match(source, /headers\['X-Title'\]/);
  assert.doesNotMatch(source, /X-OpenRouter-Title/);
});
