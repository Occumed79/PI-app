import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { buildConversationPdf } from '../server/conversation-pdf.js';

const serverSource = await readFile(new URL('../server/index.js', import.meta.url), 'utf8');
const dbSource = await readFile(new URL('../server/db.js', import.meta.url), 'utf8');
const chatSource = await readFile(new URL('../src/components/AITab.jsx', import.meta.url), 'utf8');
const rootSource = await readFile(new URL('../src/RootApp.jsx', import.meta.url), 'utf8');
const chatDbSource = await readFile(new URL('../server/chat-db.js', import.meta.url), 'utf8');
const chatLibraryFrameSource = await readFile(new URL('../src/components/ChatLibraryFrame.jsx', import.meta.url), 'utf8');

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
  assert.match(chatSource, /Download size=\{14\}\/\> Generate PDF/);
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
  assert.match(pdf.subarray(0, 8).toString('latin1'), /^%PDF-1\.[0-9]/);
  assert.ok(pdf.length > 1000);
  assert.match(pdf.toString('latin1', 0, Math.min(pdf.length, 4096)), /PDF/);
});


test('Tab 4 gates the dedicated Chat Library behind a readiness probe', () => {
  assert.match(rootSource, /id: 'library'/);
  assert.match(rootSource, /ChatLibraryFrame/);
  assert.match(serverSource, /\/api\/chat-library\/ready/);
  assert.ok(chatLibraryFrameSource.includes('https://doc-box-pichat-app.onrender.com/?embed=1'));
  assert.match(chatLibraryFrameSource, /phase === 'ready'/);
});

test('saved chats use the dedicated chat database and mirror into DocBox', () => {
  assert.match(chatDbSource, /PI_AI_CHATS_DATABASE_URL/);
  assert.match(chatDbSource, /syncConversationToDocBox/);
  assert.match(chatDbSource, /file_type='chat'/);
  assert.match(chatDbSource, /PI Chats/);
});
