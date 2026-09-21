import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const aaSource = await readFile(new URL('../server/artificial-analysis-intelligence.js', import.meta.url), 'utf8');
const managerSource = await readFile(new URL('../server/ai-provider-manager.js', import.meta.url), 'utf8');
const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');

test('Artificial Analysis stays server-side and uses the current free v2 catalog endpoint', () => {
  assert.match(aaSource, /https:\/\/artificialanalysis\.ai\/api\/v2/);
  assert.match(aaSource, /language\/models\/free/);
  assert.match(aaSource, /'x-api-key'/);
});

test('Artificial Analysis supports two credential slots and legacy hyphen aliases', () => {
  assert.match(aaSource, /process\.env\.ARTIFICIAL_ANALYSIS_API_KEY/);
  assert.match(aaSource, /process\.env\.ARTIFICIAL_ANALYSIS_API_KEY_2/);
  assert.match(aaSource, /process\.env\['ARTIFICIAL-ANALYSIS_API_KEY'\]/);
  assert.match(aaSource, /process\.env\['ARTIFICIAL-ANALYSIS_API_KEY_2'\]/);
});

test('Artificial Analysis is a benchmark router, not an employee-role analyzer', () => {
  assert.match(aaSource, /benchmarkForModel/);
  assert.match(aaSource, /benchmarkBoost/);
  assert.doesNotMatch(aaSource, /employee|role compatibility|hiring|promotion/i);
});

test('provider discovery incorporates benchmark signals but retains local scoring', () => {
  assert.match(managerSource, /scoreGemini\(model\)/);
  assert.match(managerSource, /scoreGroq\(model\)/);
  assert.match(managerSource, /scoreMistral\(model\)/);
  assert.match(managerSource, /benchmarkBoost/);
});

test('health diagnostics expose benchmark routing state', () => {
  assert.match(serverSource, /benchmarkRouting: diagnostics\.artificialAnalysis/);
});


test('Artificial Analysis collapses concurrent benchmark callers onto one in-flight catalog refresh', () => {
  assert.match(aaSource, /let inFlightCatalog = null/);
  assert.match(aaSource, /if \(inFlightCatalog\) return inFlightCatalog/);
  assert.match(aaSource, /inFlightCatalog = refreshCatalog\(\)/);
});

test('Artificial Analysis backs off after a free-tier 429 instead of cycling credential slots', () => {
  assert.match(aaSource, /RATE_LIMIT_COOLDOWN_MS/);
  assert.match(aaSource, /Number\(error\?\.status\) === 429/);
  assert.match(aaSource, /retryAfterAt > now/);
  assert.match(aaSource, /retryAfterAt: retryAfterAt \|\| null/);
});
