import pg from 'pg';

const { Pool } = pg;

export const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

export const pool = hasDatabaseUrl
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    })
  : null;

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
    const result = await pool.query('select now() as checked_at');
    return {
      ok: true,
      configured: true,
      status: 'connected',
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
