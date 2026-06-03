import pg from 'pg';

const { Pool } = pg;

export const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

const schemaSql = `
  create table if not exists profiles (
    id bigserial primary key,
    name text not null,
    group_name text not null,
    dominance integer,
    extraversion integer,
    patience integer,
    formality integer,
    summary text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  );

  create table if not exists hsi_mappings (
    lens_id text not null,
    profile_id text not null,
    output_text text,
    fields_raw text,
    fields jsonb not null default '{}'::jsonb,
    notes text,
    status text not null default 'unmapped',
    updated_at timestamptz not null default now(),
    primary key (lens_id, profile_id)
  );
`;

export const pool = hasDatabaseUrl
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    })
  : null;

let rawPoolQuery = pool ? pool.query.bind(pool) : null;
let schemaReadyPromise = null;

export async function ensureDatabaseSchema() {
  if (!pool || !rawPoolQuery) {
    return {
      ok: false,
      configured: false,
      status: 'not_configured',
      message: 'DATABASE_URL is not configured.',
    };
  }

  if (!schemaReadyPromise) {
    schemaReadyPromise = rawPoolQuery(schemaSql);
  }

  await schemaReadyPromise;

  return {
    ok: true,
    configured: true,
    status: 'schema_ready',
  };
}

// Keep existing route code safe by making every query wait for the schema once.
// This prevents first-load failures such as: relation "profiles" does not exist.
if (pool && rawPoolQuery) {
  pool.query = async (...args) => {
    const sql = typeof args[0] === 'string' ? args[0].trim().toLowerCase() : '';
    const isSchemaSetupQuery = sql.includes('create table if not exists profiles') || sql.includes('create table if not exists hsi_mappings');

    if (!isSchemaSetupQuery) {
      await ensureDatabaseSchema();
    }

    return rawPoolQuery(...args);
  };
}

export async function checkDatabaseConnection() {
  if (!pool) {
    return {
      ok: false,
      configured: false,
      status: 'not_configured',
      message: 'DATABASE_URL is not configured.',
    };
  }

  try {
    await ensureDatabaseSchema();
    const result = await pool.query('select now() as checked_at');
    return {
      ok: true,
      configured: true,
      status: 'connected',
      schema: 'ready',
      checkedAt: result.rows[0]?.checked_at,
    };
  } catch (error) {
    return {
      ok: false,
      configured: true,
      status: 'error',
      message: error.message,
    };
  }
}
