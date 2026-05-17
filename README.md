# Human Systems Intelligence

A full-stack Vite + React + Express + Neon Postgres prototype for a manager-facing behavioral interpretation tool.

## Included app tabs

- Dashboard
- Profiles
- Compare
- What-if
- What It Means
- Score Matrix
- Strength Map

## Tech stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React icons
- Express
- Neon Postgres
- Render Web Service

## Local development

Install dependencies:

```bash
npm install
```

Run the React dev server:

```bash
npm run dev
```

Run the backend server after building the frontend:

```bash
npm run build
npm start
```

## Neon setup

1. Create a Neon project.
2. Create or open a database.
3. Copy the pooled connection string.
4. In the Neon SQL editor, run:

```sql
-- copy and run the contents of server/schema.sql
```

The schema creates:

- `profiles`
- `saved_comparisons`
- `inference_runs`

It also seeds the 17 profile records.

## Render setup

Use **Render Web Service**, not Static Site.

Recommended Render settings:

```txt
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
Health Check Path: /api/health
```

Add these environment variables in Render:

```txt
NODE_ENV=production
DATABASE_URL=your_neon_connection_string
CLIENT_ORIGIN=your_render_url_or_frontend_url
```

If `CLIENT_ORIGIN` causes CORS friction during early testing, leave it blank temporarily and the server can be adjusted later.

## Health checks

After deployment, test:

```txt
/api/health
/api/db/health
```

Expected behavior:

- `/api/health` confirms the Render service is running.
- `/api/db/health` confirms whether Neon is connected.

## API endpoints

```txt
GET  /api/health
GET  /api/db/health
GET  /api/profiles
POST /api/profiles
```

## Important deployment note

Render must build the Vite frontend first. The Express server then serves the generated `dist` folder and exposes API routes from the same web service.
