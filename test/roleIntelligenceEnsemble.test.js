import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const managerSource = await readFile(new URL('../server/ai-provider-manager.js', import.meta.url), 'utf8');
const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');
const roleUiSource = await readFile(new URL('../src/components/RoleIntelligenceTab.jsx', import.meta.url), 'utf8');
const roleEngineSource = await readFile(new URL('../src/data/roleIntelligence.js', import.meta.url), 'utf8');
const roleCatalogSource = await readFile(new URL('../src/data/roleIntelligenceRoles.js', import.meta.url), 'utf8');
const refractionSource = await readFile(new URL('../src/components/PatternRefraction.jsx', import.meta.url), 'utf8');

test('Role Intelligence uses two independent specialist analyzers before synthesis', () => {
  assert.match(managerSource, /Promise\.allSettled\(\[\s*callNvidiaRoleReasoner/);
  assert.match(managerSource, /callMistral\(/);
  assert.match(managerSource, /independent-analysis-plus-third-party-synthesis/);
});

test('Mistral supports three credential slots and the legacy variable aliases supplied for this prototype', () => {
  assert.match(managerSource, /process\.env\.MISTRAL_API_KEY_3/);
  assert.match(managerSource, /process\.env\.MISTRIAL_STUDUIO_API_KEY_3/);
  assert.match(managerSource, /resolveMistralModel/);
});

test('Role Intelligence does not let one surviving specialist silently become the sole analyzer', () => {
  assert.match(managerSource, /if \(analyzers\.length < 2\)/);
  assert.match(managerSource, /preferredProvider: 'groq'/);
});

test('Role Intelligence endpoint uses evidence retrieval and ensemble analysis', () => {
  assert.match(serverSource, /app\.post\('\/api\/ai\/role-intelligence'/);
  assert.match(serverSource, /buildCloudflareIntelligence/);
  assert.match(serverSource, /callRoleIntelligenceEnsemble/);
});

test('Role Intelligence UI calls the dedicated ensemble endpoint', () => {
  assert.match(roleUiSource, /fetch\('\/api\/ai\/role-intelligence'/);
});

test('sensitive life context is explicitly barred from baseline role compatibility in analyzer instructions', () => {
  assert.match(managerSource, /Do not use health, disability, family, immigration, identity, neurodivergence/);
});


test('v2 role catalog removes hard-coded adjacent arrays and adds leadership roles', () => {
  assert.doesNotMatch(roleCatalogSource, /adjacent:\s*\[/);
  assert.match(roleCatalogSource, /id: 'examqa-manager'/);
  assert.match(roleCatalogSource, /id: 'examqa-director'/);
  assert.match(roleCatalogSource, /id: 'provider-relations-manager'/);
  assert.match(roleCatalogSource, /id: 'scheduling-manager'/);
  assert.match(roleCatalogSource, /id: 'network-management-director'/);
});

test('v2 engine computes multi-layer signals instead of PI-band counts alone', () => {
  assert.match(roleEngineSource, /behavioralFit/);
  assert.match(roleEngineSource, /cognitiveTaskFit/);
  assert.match(roleEngineSource, /workValueFit/);
  assert.match(roleEngineSource, /environmentFit/);
  assert.match(roleEngineSource, /boundaryFit/);
  assert.match(roleEngineSource, /sustainabilityFit/);
  assert.match(roleEngineSource, /inversionRisk/);
  assert.match(roleEngineSource, /evidenceConfidence/);
});

test('adjacent-role pull and orbit radius are computed from the engine', () => {
  assert.match(roleEngineSource, /export function deriveAdjacentRolePull/);
  assert.match(roleEngineSource, /export function orbitRadiusForInteraction/);
  assert.match(roleUiSource, /deriveAdjacentRolePull/);
  assert.doesNotMatch(roleUiSource, /selectedRole\.adjacent/);
});


test('Role Intelligence shell uses sourced component structures instead of the old custom landing/orbit layout', () => {
  assert.match(roleUiSource, /StickyScrollReveal/);
  assert.match(roleUiSource, /OrbitingCircles/);
  assert.match(roleUiSource, /ResizablePanelGroup/);
  assert.match(roleUiSource, /TabsList/);
  assert.match(roleUiSource, /AccordionItem/);
  assert.match(roleUiSource, /SheetContent/);
  assert.match(roleUiSource, /RadarChart/);
  assert.doesNotMatch(roleUiSource, /function RoleMarquee/);
});


test('Figma Pattern Refraction is mounted in the context lens and stays visual-only', () => {
  assert.match(roleUiSource, /import PatternRefraction/);
  assert.match(roleUiSource, /<PatternRefraction/);
  assert.match(roleUiSource, /Baseline unchanged/);
  assert.match(refractionSource, /f1a4fc0f-dcc1-45e3-bad6-ec82abb7c7eb/);
  assert.match(refractionSource, /navigator\.gpu/);
  assert.match(refractionSource, /illustrative only/);
  assert.doesNotMatch(refractionSource, /deriveRoleInteraction|internalCompatibilityIndex|evidenceConfidence|adjacentRole/i);
});
