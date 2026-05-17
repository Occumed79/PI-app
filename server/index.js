import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const { Pool } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;
const clientOrigin = process.env.CLIENT_ORIGIN || '*';

app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '1mb' }));

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    })
  : null;

app.get('/api/health', async (_req, res) => {
  const dbConfigured = Boolean(pool);

  if (!pool) {
    return res.json({
      ok: true,
      service: 'human-systems-intelligence',
      database: 'not_configured',
    });
  }

  try {
    await pool.query('select 1 as ok');
    return res.json({
      ok: true,
      service: 'human-systems-intelligence',
      database: dbConfigured ? 'connected' : 'not_configured',
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      service: 'human-systems-intelligence',
      database: 'error',
      message: error.message,
    });
  }
});

app.get('/api/profiles', async (_req, res) => {
  if (!pool) {
    return res.status(503).json({
      ok: false,
      message: 'DATABASE_URL is not configured on the Render service.',
    });
  }

  try {
    const result = await pool.query(
      `select id, name, group_name, dominance, extraversion, patience, formality, summary
       from profiles
       order by group_name, name`
    );

    return res.json({ ok: true, profiles: result.rows });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Human Systems Intelligence server running on port ${port}`);
});
