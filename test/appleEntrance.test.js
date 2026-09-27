import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const entrance = await readFile(new URL('../src/components/AppleEntrance.jsx', import.meta.url), 'utf8');
const root = await readFile(new URL('../src/RootApp.jsx', import.meta.url), 'utf8');

test('entrance uses path-drawn hello and click-to-enter artwork', () => {
  assert.match(entrance, /viewBox="0 0 638 200"/);
  assert.match(entrance, /M8\\.69214 166\\.553/);
  assert.match(entrance, /motion\\.path/);
  assert.match(entrance, /aria-label="Click to enter"/);
  assert.doesNotMatch(entrance, /<text\\b/i);
});

test('root gates the workspace behind the entrance', () => {
  assert.match(root, /AppleEntrance/);
  assert.match(root, /entered/);
  assert.match(root, /onEnter/);
});
