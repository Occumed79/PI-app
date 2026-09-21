import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const managerSource = await readFile(new URL('../server/ai-provider-manager.js', import.meta.url), 'utf8');
const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');
const roleUiSource = await readFile(new URL('../src/components/RoleIntelligenceTab.jsx', import.meta.url), 'utf8');

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
