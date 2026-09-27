import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const entrance = await readFile(new URL('../src/components/AppleEntrance.jsx', import.meta.url), 'utf8');
const root = await readFile(new URL('../src/RootApp.jsx', import.meta.url), 'utf8');

test('entrance uses path-drawn hello and click-to-enter artwork', () => {
  assert.ok(entrance.includes('viewBox="0 0 638 200"'));
  assert.ok(entrance.includes('M8.69214 166.553'));
  assert.ok(entrance.includes('<motion.path'));
  assert.ok(entrance.includes('aria-label="Click to enter"'));
  assert.equal(entrance.includes('<text'), false);
});

test('root gates the workspace behind the entrance', () => {
  assert.ok(root.includes('AppleEntrance'));
  assert.ok(root.includes('entered'));
  assert.ok(root.includes('onEnter'));
});
