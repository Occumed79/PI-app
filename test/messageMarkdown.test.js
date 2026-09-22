import test from 'node:test';
import assert from 'node:assert/strict';
import { parseMessageBlocks, splitTableRow } from '../src/components/chat/messageMarkdown.js';

test('chat markdown parses pipe tables as structured rows', () => {
  const blocks = parseMessageBlocks(`## Impact\n\n| Strength | Challenge | Interaction |\n|---|:---:|---|\n| Drive | Impulsivity | Pro: fast.<br>Con: pause. |\n\nBottom line`);
  const table = blocks.find(block => block.type === 'table');
  assert.deepEqual(table.headers, ['Strength', 'Challenge', 'Interaction']);
  assert.deepEqual(table.rows, [['Drive', 'Impulsivity', 'Pro: fast.<br>Con: pause.']]);
  assert.equal(blocks[0].type, 'heading');
  assert.equal(blocks.at(-1).text, 'Bottom line');
});

test('table row parsing accepts optional outer pipes', () => {
  assert.deepEqual(splitTableRow(' A | B | C '), ['A', 'B', 'C']);
  assert.deepEqual(splitTableRow('| A | B | C |'), ['A', 'B', 'C']);
});
