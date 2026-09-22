import pg from 'pg';

const { Pool } = pg;

export const chatDatabaseUrl = String(process.env.PI_AI_CHATS_DATABASE_URL || '').trim();

export const chatPool = chatDatabaseUrl
  ? new Pool({
      connectionString: chatDatabaseUrl,
      ssl: { rejectUnauthorized: false },
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    })
  : null;

const chatSchemaSql = `
  create extension if not exists pgcrypto;

  create table if not exists ai_conversations (
    id uuid primary key default gen_random_uuid(),
    title text not null default 'New conversation',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  );

  create table if not exists ai_conversation_messages (
    id uuid primary key default gen_random_uuid(),
    conversation_id uuid not null references ai_conversations(id) on delete cascade,
    role text not null check (role in ('user', 'assistant')),
    source text,
    message_text text not null default '',
    visualizations jsonb not null default '[]'::jsonb,
    web_research jsonb,
    created_at timestamptz not null default now()
  );

  create index if not exists ai_conversation_messages_conversation_idx
    on ai_conversation_messages (conversation_id, created_at, id);

  create table if not exists sv_folders (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    parent_id uuid references sv_folders(id) on delete cascade,
    color text default '#3b82f6',
    created_at timestamptz default now(),
    updated_at timestamptz default now()
  );

  create table if not exists sv_files (
    id uuid primary key default gen_random_uuid(),
    folder_id uuid references sv_folders(id) on delete set null,
    name text not null,
    original_name text not null,
    file_type text not null,
    mime_type text not null default '',
    size_bytes bigint default 0,
    storage_url text not null,
    storage_key text not null default '',
    extracted_text text default '',
    notes text default '',
    tags text[] default '{}',
    is_archived boolean default false,
    upload_date timestamptz default now(),
    updated_at timestamptz default now()
  );

  create index if not exists sv_files_storage_key_idx on sv_files(storage_key);
  create index if not exists sv_files_upload_idx on sv_files(upload_date desc);
`;

let chatSchemaReadyPromise = null;

export async function ensureChatSchema() {
  if (!chatPool) {
    return { ok: false, configured: false, status: 'not_configured' };
  }
  if (!chatSchemaReadyPromise) {
    chatSchemaReadyPromise = chatPool.query(chatSchemaSql).catch(error => {
      chatSchemaReadyPromise = null;
      throw error;
    });
  }
  await chatSchemaReadyPromise;
  return { ok: true, configured: true, status: 'schema_ready' };
}

export async function chatQuery(text, params = []) {
  if (!chatPool) throw new Error('PI_AI_CHATS_DATABASE_URL is not configured.');
  await ensureChatSchema();
  return chatPool.query(text, params);
}

function transcriptFromMessages(messages = []) {
  return messages
    .map(message => {
      const role = message.role === 'assistant' ? 'SIGNALGLASS' : 'USER';
      return role + '\n' + String(message.message_text || message.text || '').trim();
    })
    .filter(Boolean)
    .join('\n\n');
}

export async function syncConversationToDocBox(conversationId) {
  if (!chatPool) return;
  await ensureChatSchema();

  const conversationResult = await chatPool.query(
    'select id, title, created_at, updated_at from ai_conversations where id=$1',
    [conversationId]
  );
  if (!conversationResult.rowCount) return;

  const messageResult = await chatPool.query(
    'select role, message_text, created_at from ai_conversation_messages where conversation_id=$1 order by created_at, id',
    [conversationId]
  );

  const conversation = conversationResult.rows[0];
  const transcript = transcriptFromMessages(messageResult.rows);
  const storageKey = 'pi-chat:' + conversation.id;
  const storageUrl = 'pi-chat://' + conversation.id;
  const sizeBytes = Buffer.byteLength(transcript, 'utf8');

  const mirrorValues = [
    conversation.title,
    conversation.title + '.chat',
    sizeBytes,
    storageUrl,
    storageKey,
    transcript,
    'Saved from PI Crosswalk Assistant',
    ['PI Chat', 'Crosswalk Assistant'],
    conversation.created_at,
    conversation.updated_at,
  ];

  const updated = await chatPool.query(
    `update sv_files set
       name=$1,
       original_name=$2,
       file_type='chat',
       mime_type='application/x-pi-chat',
       size_bytes=$3,
       storage_url=$4,
       extracted_text=$6,
       notes=$7,
       tags=$8,
       is_archived=false,
       updated_at=$10
     where storage_key=$5
     returning id`,
    mirrorValues
  );

  if (!updated.rowCount) {
    await chatPool.query(
      `insert into sv_files
        (name, original_name, file_type, mime_type, size_bytes, storage_url, storage_key, extracted_text, notes, tags, is_archived, upload_date, updated_at)
       values ($1,$2,'chat','application/x-pi-chat',$3,$4,$5,$6,$7,$8,false,$9,$10)`,
      mirrorValues
    );
  }
}

export async function removeConversationFromDocBox(conversationId) {
  if (!chatPool) return;
  await ensureChatSchema();
  await chatPool.query('delete from sv_files where storage_key=$1', ['pi-chat:' + conversationId]);
}
