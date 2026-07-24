# PI Crosswalk Intelligence

A single-user internal Vite + React + Express + Neon Postgres application for translating completed Predictive Index behavioral profiles across related behavioral frameworks.

## Product definition

Employees have already completed their Predictive Index assessments. Their PI profile and factor data are the source assessment.

The application uses PI factor patterns and profile-to-trait correspondence to produce directional crosswalks into frameworks such as Big Five, HEXACO, Hogan, EQ-i, DISC, and other behavioral lenses.

The translation chain is:

```txt
Completed PI result
→ PI profile and factor pattern
→ trait correspondence / crosswalk rules
→ cross-framework interpretation
```

A crosswalk output is not represented as a separately administered assessment unless separate assessment data is explicitly entered later.

This is an internal tool for one user. Authentication, roles, tenants, invitations, and multi-user supervisory workflows are not part of the intended scope.

## Active app areas

- PI Crosswalk Intelligence
- Employee PI Profiles
- Crosswalk Assistant

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

Run the React development server:

```bash
npm run dev
```

Run the production server after building the frontend:

```bash
npm run build
npm start
```

## Neon setup

1. Create or open the Neon database.
2. Copy the pooled connection string.
3. Add it as `DATABASE_URL`.
4. Run `server/schema.sql` when initializing a new database.

The current database layer contains PI profile and HSI crosswalk mapping structures. Employee PI persistence is a separate implementation step.

## Render setup

Use a Render Web Service.

```txt
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
Health Check Path: /api/health
```

Environment variables:

```txt
NODE_ENV=production
DATABASE_URL=your_neon_connection_string
CLIENT_ORIGIN=your_render_url
AI_PROVIDER=auto
GEMINI_API_KEY=optional
GROQ_API_KEY=optional
```

## Health checks

```txt
/api/health
/api/db/health
```

- `/api/health` confirms that the Render service is running.
- `/api/db/health` confirms whether Neon is connected and the runtime schema is available.

## Current API endpoints

```txt
GET  /api/health
GET  /api/db/health
GET  /api/profiles
POST /api/profiles
POST /api/ai-chat
POST /api/ai/scenario-analysis
GET  /api/hsi/mappings
PUT  /api/hsi/mappings/:lensId/:profileId
POST /api/hsi/mappings/bulk
```

## Crosswalk interpretation rule

The PI profile is the source. Other framework outputs are derived translations from PI unless the application explicitly identifies separately entered assessment data.
