import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const webResearchSource = await readFile(new URL('../server/web-research.js', import.meta.url), 'utf8');
const intelligenceSource = await readFile(new URL('../server/cloudflare-intelligence.js', import.meta.url), 'utf8');
const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');
const tab3Source = await readFile(new URL('../src/components/AITab.jsx', import.meta.url), 'utf8');
const tab4Source = await readFile(new URL('../src/components/RoleIntelligenceTab.jsx', import.meta.url), 'utf8');

test('TinyFish and Keenable credentials stay server-side', () => {
  assert.match(webResearchSource, /process\.env\.TINYFISH_API_KEY/);
  assert.match(webResearchSource, /process\.env\.KEENABLE_API_KEY/);
  assert.doesNotMatch(tab3Source, /TINYFISH_API_KEY|KEENABLE_API_KEY|VITE_TINYFISH|VITE_KEENABLE/);
  assert.doesNotMatch(tab4Source, /TINYFISH_API_KEY|KEENABLE_API_KEY|VITE_TINYFISH|VITE_KEENABLE/);
});

test('web research uses the official authenticated search endpoints', () => {
  assert.match(webResearchSource, /https:\/\/api\.search\.tinyfish\.ai/);
  assert.match(webResearchSource, /https:\/\/api\.keenable\.ai\/v1\/search/);
  assert.match(webResearchSource, /'X-API-Key': apiKey/);
});

test('web research fans out to configured providers in parallel and survives one-provider failure', () => {
  assert.match(webResearchSource, /Promise\.allSettled\(tasks\)/);
  assert.match(webResearchSource, /if \(providers\.tinyfish\) tasks\.push\(tinyfishSearch/);
  assert.match(webResearchSource, /if \(providers\.keenable\) tasks\.push\(keenableSearch/);
  assert.match(webResearchSource, /mergeResults\(successful\)/);
});

test('external search queries strip employee identifiers and never serialize stored PI factors or notes', () => {
  assert.match(webResearchSource, /scrubEmployeeIdentifiers/);
  assert.match(webResearchSource, /employee\?\.name/);
  assert.doesNotMatch(webResearchSource, /employee\?\.dominance|employee\?\.extraversion|employee\?\.patience|employee\?\.formality/);
  assert.doesNotMatch(webResearchSource, /contextNotes|assessmentDate|PI notes/);
});

test('routing controller can request web research for conditions, lenses, and current external evidence', () => {
  assert.match(intelligenceSource, /needsWebResearch/);
  assert.match(intelligenceSource, /condition\|diagnosis/);
  assert.match(intelligenceSource, /life-experience lens/);
  assert.match(intelligenceSource, /unfamiliar condition\/term/);
});

test('Tab 3 and Tab 4 both inject conditional web research into their AI context', () => {
  assert.match(serverSource, /const roleWebResearch = await buildExternalWebResearch/);
  assert.match(serverSource, /const webResearch = isHealthProbe/);
  assert.match(serverSource, /enabled: Boolean\(intelligence\.plan\?\.needsWebResearch\)/);
  assert.match(serverSource, /roleWebResearch\.context/);
  assert.match(serverSource, /combinedResearchContext/);
});

test('web research is supporting context and cannot alter sensitive baseline compatibility', () => {
  assert.match(webResearchSource, /not employee facts and not a replacement for the deterministic PI\/role engine/);
  assert.match(webResearchSource, /Never use sensitive life-context research to raise\/lower baseline compatibility/);
  assert.match(webResearchSource, /Never treat search results as evidence that the selected employee has a condition/);
});

test('both AI tabs expose web research provenance without exposing secrets', () => {
  assert.match(tab3Source, /Web research ·/);
  assert.match(tab3Source, /data\.webResearch/);
  assert.match(tab4Source, /External web sources/);
  assert.match(tab4Source, /data\.webResearch\?\.providers/);
  assert.match(tab4Source, /data\.webResearch\?\.sources/);
});

test('Tab 3 gets enough request time for search plus model inference', () => {
  assert.match(tab3Source, /AbortSignal\.timeout\(120000\)/);
  assert.doesNotMatch(tab3Source, /timed out after 55 seconds/);
});

test('health diagnostics report web-research configuration without returning credentials', () => {
  assert.match(serverSource, /webResearch: getWebResearchDiagnostics\(\)/);
  assert.match(webResearchSource, /mode: 'conditional-parallel-search'/);
  assert.doesNotMatch(webResearchSource, /apiKey:\s*process\.env/);
});
