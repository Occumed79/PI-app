import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { buildConversationPdf } from '../server/conversation-pdf.js';

const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');
const dbSource = await readFile(new URL('../server/db.js', import.meta.url), 'utf8');
const chatSource = await readFile(new URL('../src/components/AITab.jsx', import.meta.url), 'utf8');

test('Tab 3 conversation history is persisted in Neon-backed tables', () => {
  assert.match(dbSource, /create table if not exists ai_conversations/);
  assert.match(dbSource, /create table if not exists ai_conversation_messages/);
  assert.match(dbSource, /visualizations jsonb/);
  assert.match(dbSource, /web_research jsonb/);
});

test('saved conversation API supports list, open, rename, delete, messages, and PDF', () => {
  assert.match(serverSource, /app\.get\('\/api\/ai\/conversations'/);
  assert.match(serverSource, /app\.post\('\/api\/ai\/conversations'/);
  assert.match(serverSource, /app\.get\('\/api\/ai\/conversations\/:id'/);
  assert.match(serverSource, /app\.put\('\/api\/ai\/conversations\/:id'/);
  assert.match(serverSource, /app\.delete\('\/api\/ai\/conversations\/:id'/);
  assert.match(serverSource, /app\.post\('\/api\/ai\/conversations\/:id\/messages'/);
  assert.match(serverSource, /app\.get\('\/api\/ai\/conversations\/:id\/pdf'/);
});

test('Crosswalk Assistant exposes history and PDF controls', () => {
  assert.match(chatSource, /loadConversationList/);
  assert.match(chatSource, /openConversation/);
  assert.match(chatSource, /renameConversation/);
  assert.match(chatSource, /deleteConversation/);
  assert.match(chatSource, /exportConversationPdf/);
  assert.match(chatSource, /Download size=\{14\}\/\> PDF/);
});

test('conversation PDF generator produces a valid PDF header and transcript content', async () => {
  const pdf = await buildConversationPdf({
    conversation: { title: 'Test Crosswalk Chat' },
    messages: [
      { role: 'user', messageText: 'Compare these factors.' },
      {
        role: 'assistant',
        source: 'gemini',
        messageText: 'Here is the comparison.',
        visualizations: [{ type: 'score-radar', title: 'Factor radar', data: [{ label: 'Dominance', value: 72 }] }],
      },
    ],
  });
  assert.ok(Buffer.isBuffer(pdf));
  assert.equal(pdf.subarray(0, 8).toString('latin1'), '%PDF-1.4');
  const body = pdf.toString('latin1');
  assert.match(body, /Test Crosswalk Chat/);
  assert.match(body, /Compare these factors/);
  assert.match(body, /Factor radar/);
});
