import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const rootSource = await readFile(new URL('../src/RootApp.jsx', import.meta.url), 'utf8');

test('Role Intelligence is code-split from the initial app shell', () => {
  assert.match(rootSource, /React\.lazy\(\(\) => import\('\.\/components\/RoleIntelligenceTab\.jsx'\)\)/);
  assert.match(rootSource, /<Suspense/);
  assert.doesNotMatch(rootSource, /import RoleIntelligenceTab from '\.\/components\/RoleIntelligenceTab\.jsx'/);
});
