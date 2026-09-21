import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const managerSource = await readFile(new URL('../server/ai-provider-manager.js', import.meta.url), 'utf8');
const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');
const roleUiSource = await readFile(new URL('../src/components/RoleIntelligenceTab.jsx', import.meta.url), 'utf8');
const roleEngineSource = await readFile(new URL('../src/data/roleIntelligence.js', import.meta.url), 'utf8');
const roleCatalogSource = await readFile(new URL('../src/data/roleIntelligenceRoles.js', import.meta.url), 'utf8');
const refractionSource = await readFile(new URL('../src/components/PatternRefraction.jsx', import.meta.url), 'utf8');
const stickySource = await readFile(new URL('../src/components/StickyScrollReveal.jsx', import.meta.url), 'utf8');

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
  assert.match(roleEngineSource, /capacityTensions/);
  assert.match(roleEngineSource, /underused/);
  assert.match(roleEngineSource, /demand-pressure/);
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
  assert.match(roleUiSource, /CommandInput/);
  assert.match(roleUiSource, /<Progress/);
  assert.match(roleUiSource, /<Carousel/);
  assert.match(roleUiSource, /<CarouselPrevious/);
  assert.match(roleUiSource, /<CarouselNext/);
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


test('Role Intelligence AI is grounded in the deterministic role engine before model analysis', () => {
  assert.match(serverSource, /ROLE_BY_ID/);
  assert.match(serverSource, /deriveRoleInteraction/);
  assert.match(serverSource, /deriveAdjacentRolePull/);
  assert.match(serverSource, /AUTHORITATIVE ROLE-INTELLIGENCE GROUNDING/);
  assert.match(serverSource, /Component values describe modeled interaction/);
  assert.match(serverSource, /capacityTensions: interaction\.capacityTensions/);
  assert.match(serverSource, /Capacity tensions distinguish directional PI-derived work-style pull/);
  assert.match(roleUiSource, /roleId: role\.id/);
  assert.match(roleUiSource, /activeContextCategory: activeCategory/);
});

test('Role Intelligence grounding keeps adjacent-role pull descriptive rather than prescriptive', () => {
  assert.match(serverSource, /Adjacent-role pull is descriptive exploration only, not a staffing or promotion recommendation/);
  assert.match(serverSource, /Do not expose or invent an overall employment verdict/);
});


test('Role Intelligence side rail shows the analyzer and evidence provenance returned by the server', () => {
  assert.match(roleUiSource, /data\.analyzers/);
  assert.match(roleUiSource, /data\.synthesizer/);
  assert.match(roleUiSource, /data\.roleGrounding\?\.sourceCount/);
  assert.match(roleUiSource, /data\.roleGrounding\?\.evidenceConfidence/);
  assert.match(roleUiSource, /role sources/);
});


test('Role Intelligence grounds explicitly mentioned comparison roles from the same deterministic catalog', () => {
  assert.match(serverSource, /ROLE_QUERY_ALIASES/);
  assert.match(serverSource, /mentionedComparisonRoleIds/);
  assert.match(serverSource, /buildComparisonRoleGrounding/);
  assert.match(serverSource, /EXPLICITLY MENTIONED COMPARISON ROLE GROUNDING/);
  assert.match(serverSource, /comparisonRoleIds: comparisonGroundings\.map/);
});

test('comparison grounding explicitly forbids role winners and promotion targets', () => {
  assert.match(serverSource, /do not declare a winner, best role, promotion target, or employment decision/);
  assert.match(serverSource, /Evidence confidence is confidence in the modeled role evidence bundle, not confidence in employee performance/);
});


test('Role Intelligence synthesis returns structured high/moderate/low agreement metadata', () => {
  assert.match(managerSource, /function parseRoleSynthesis/);
  assert.match(managerSource, /"agreement": "high" \| "moderate" \| "low"/);
  assert.match(managerSource, /materialDisagreements/);
  assert.match(managerSource, /unsupportedLeaps/);
  assert.match(managerSource, /jsonMode: true/);
  assert.match(serverSource, /consensus: result\.consensus \|\| null/);
});

test('Role Intelligence UI labels model agreement rather than employee suitability', () => {
  assert.match(roleUiSource, /Model agreement/);
  assert.match(roleUiSource, /material disagreement/);
  assert.match(roleUiSource, /data\.consensus\?\.agreement/);
});


test('Role Intelligence allows the multi-model ensemble enough browser-side time to finish', () => {
  assert.match(roleUiSource, /AbortSignal\.timeout\(150000\)/);
  assert.doesNotMatch(roleUiSource, /AbortSignal\.timeout\(55000\)/);
});


test('Role Intelligence shows concise material-disagreement and unsupported-leap review details', () => {
  assert.match(roleUiSource, /Model review details/);
  assert.match(roleUiSource, /Material disagreements/);
  assert.match(roleUiSource, /Unsupported leaps removed/);
  assert.match(roleUiSource, /data\.consensus\?\.materialDisagreements/);
  assert.match(roleUiSource, /data\.consensus\?\.unsupportedLeaps/);
});


test('Role Intelligence includes a sourced command role switcher for the fourteen-role workspace', () => {
  assert.match(roleUiSource, /function RoleQuickSwitcher/);
  assert.match(roleUiSource, /Jump to another modeled role/);
  assert.match(roleUiSource, /<CommandInput/);
  assert.match(roleUiSource, /ROLE_INTELLIGENCE_ROLES\.filter/);
});


test('public evidence sources expose their source links in Role Intelligence', () => {
  assert.match(roleUiSource, /source\.public && source\.url/);
  assert.match(roleUiSource, /Open source/);
  assert.match(roleUiSource, /target="_blank"/);
});


test("Role Intelligence opens on the employee's current modeled role when the stored position matches", () => {
  assert.match(roleUiSource, /function initialRoleForEmployee/);
  assert.match(roleUiSource, /employee\?\.position/);
  assert.match(roleUiSource, /useState\(\(\) => initialRoleForEmployee\(employee\)\)/);
});


test('workspace uses the sourced sticky reveal for the cinematic person × role story', () => {
  assert.match(roleUiSource, /function InteractionNarrative/);
  assert.match(roleUiSource, /Person × role story/);
  assert.match(roleUiSource, /Underused capacity/);
  assert.match(roleUiSource, /Demand pressure/);
  assert.match(roleUiSource, /Strength inversion/);
  assert.match(roleUiSource, /Life-experience refraction/);
  assert.match(roleUiSource, /<StickyScrollReveal content={story}/);
});

test('role orbit uses sourced HoverCard previews before selection', () => {
  assert.match(roleUiSource, /<HoverCard/);
  assert.match(roleUiSource, /<HoverCardTrigger/);
  assert.match(roleUiSource, /<HoverCardContent/);
  assert.match(roleUiSource, /interaction\.evidenceConfidence/);
});


test('scene-aware AI rail tracks the sourced sticky-scroll scene', () => {
  assert.match(stickySource, /onActiveChange/);
  assert.match(stickySource, /onActiveChange\?\.\(activeCard, content\[activeCard\]\)/);
  assert.match(roleUiSource, /ROLE_SCENE_LABELS/);
  assert.match(roleUiSource, /Current visualization scene:/);
  assert.match(roleUiSource, /Current scene · \{sceneLabel\}/);
  assert.match(roleUiSource, /onSceneChange=\{setActiveScene\}/);
  assert.match(roleUiSource, /Interrogate this scene/);
});

test('scene-aware prompts keep underused capacity descriptive rather than prescriptive', () => {
  assert.match(roleUiSource, /underused-capacity signals/);
  assert.match(roleUiSource, /without treating them as measures of superior ability or as a recommendation to move roles/);
});


test('Role Intelligence clears stale AI context when the employee or role changes', () => {
  assert.match(roleUiSource, /useEffect\(\(\) => \{/);
  assert.match(roleUiSource, /setMessages\(\[\]\)/);
  assert.match(roleUiSource, /setAnalysisMeta\(null\)/);
  assert.match(roleUiSource, /employee\?\.id, employee\?\.name, role\.id/);
  assert.match(roleUiSource, /<Badge>\{role\.shortTitle\}<\/Badge>/);
  assert.match(roleUiSource, /<Badge tone="info">\{sceneLabel\}<\/Badge>/);
});


test('sourced sticky-scroll reveal keeps active visuals on mobile', () => {
  assert.match(stickySource, /activeCard === index && item\.content/);
  assert.match(stickySource, /lg:hidden/);
  assert.match(stickySource, /min-h-\[22rem\]/);
});
