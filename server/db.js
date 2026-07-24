import pg from 'pg';

const { Pool } = pg;

export const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

const schemaSql = `
  create extension if not exists pgcrypto;

  create table if not exists profiles (
    id uuid primary key default gen_random_uuid(),
    name text not null unique,
    group_name text not null,
    dominance numeric(5,2) check (dominance is null or dominance between 0 and 100),
    extraversion numeric(5,2) check (extraversion is null or extraversion between 0 and 100),
    patience numeric(5,2) check (patience is null or patience between 0 and 100),
    formality numeric(5,2) check (formality is null or formality between 0 and 100),
    summary text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  );

  create table if not exists employee_pi_profiles (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    position text not null default '',
    department text not null default '',
    pi_profile_id text not null,
    dominance numeric(5,2) not null check (dominance between 0 and 100),
    extraversion numeric(5,2) not null check (extraversion between 0 and 100),
    patience numeric(5,2) not null check (patience between 0 and 100),
    formality numeric(5,2) not null check (formality between 0 and 100),
    assessment_date date,
    notes text not null default '',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  );

  create index if not exists employee_pi_profiles_name_idx
    on employee_pi_profiles (lower(name));

  create table if not exists hsi_mappings (
    lens_id text not null,
    profile_id text not null,
    output_text text,
    fields_raw text,
    fields jsonb not null default '{}'::jsonb,
    notes text,
    status text not null default 'unmapped',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    primary key (lens_id, profile_id)
  );

  create or replace function set_updated_at()
  returns trigger as $$
  begin
    new.updated_at = now();
    return new;
  end;
  $$ language plpgsql;

  drop trigger if exists employee_pi_profiles_set_updated_at on employee_pi_profiles;
  create trigger employee_pi_profiles_set_updated_at
  before update on employee_pi_profiles
  for each row execute function set_updated_at();

  drop trigger if exists profiles_set_updated_at on profiles;
  create trigger profiles_set_updated_at
  before update on profiles
  for each row execute function set_updated_at();

  drop trigger if exists hsi_mappings_set_updated_at on hsi_mappings;
  create trigger hsi_mappings_set_updated_at
  before update on hsi_mappings
  for each row execute function set_updated_at();
`;

export const pool = hasDatabaseUrl
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    })
  : null;

const rawPoolQuery = pool ? pool.query.bind(pool) : null;
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
    schemaReadyPromise = rawPoolQuery(schemaSql).catch(error => {
      schemaReadyPromise = null;
      throw error;
    });
  }

  await schemaReadyPromise;
  return { ok: true, configured: true, status: 'schema_ready' };
}

if (pool && rawPoolQuery) {
  pool.query = async (...args) => {
    const sql = typeof args[0] === 'string' ? args[0].trim().toLowerCase() : '';
    const isSchemaSetupQuery =
      sql.includes('create extension if not exists pgcrypto') &&
      sql.includes('create table if not exists employee_pi_profiles');

    if (!isSchemaSetupQuery) await ensureDatabaseSchema();
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
