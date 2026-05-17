import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { checkDatabaseConnection, pool } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 10000;
const clientOrigin = process.env.CLIENT_ORIGIN || '*';

app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'human-systems-intelligence',
    environment: process.env.NODE_ENV || 'development',
    databaseConfigured: Boolean(process.env.DATABASE_URL),
  });
});

app.get('/api/db/health', async (_req, res) => {
  const result = await checkDatabaseConnection();
  res.status(result.ok ? 200 : result.configured ? 500 : 503).json(result);
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
      `select id, name, group_name, dominance, extraversion, patience, formality, summary, created_at, updated_at
       from profiles
       order by group_name, name`
    );

    return res.json({ ok: true, profiles: result.rows });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

app.post('/api/profiles', async (req, res) => {
  if (!pool) {
    return res.status(503).json({
      ok: false,
      message: 'DATABASE_URL is not configured on the Render service.',
    });
  }

  const { name, groupName, dominance, extraversion, patience, formality, summary } = req.body || {};

  if (!name || !groupName) {
    return res.status(400).json({ ok: false, message: 'name and groupName are required.' });
  }

  try {
    const result = await pool.query(
      `insert into profiles (name, group_name, dominance, extraversion, patience, formality, summary)
       values ($1, $2, $3, $4, $5, $6, $7)
       returning id, name, group_name, dominance, extraversion, patience, formality, summary, created_at, updated_at`,
      [name, groupName, dominance ?? null, extraversion ?? null, patience ?? null, formality ?? null, summary ?? null]
    );

    return res.status(201).json({ ok: true, profile: result.rows[0] });
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
