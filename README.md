# PI Crosswalk Intelligence

A single-user internal React + Express + Neon application for translating completed Predictive Index behavioral results across related frameworks.

## Product definition

Employees have already completed their Predictive Index assessments. The stored PI reference profile and exact Dominance, Extraversion, Patience, and Formality values are the source assessment.

The translation chain is:

```txt
Completed PI result
→ exact D / E / P / F factor pattern
→ documented trait correspondence
→ cross-framework interpretation
```

Big Five, HEXACO, Hogan, EQ-i, DISC, and other framework outputs are PI-derived crosswalks unless separate assessment results are explicitly entered later. This is an internal tool for one user; authentication, roles, tenants, invitations, and multi-user supervisory workflows are intentionally outside scope.

## Active product areas

- **PI Crosswalk Intelligence** — explore reference PI profiles and translation lenses.
- **Employee PI Profiles** — create, edit, search, and delete completed PI records stored in Neon.
- **Crosswalk Assistant** — analyze exact employee PI factors and explain cross-framework translations.

## Exact-factor crosswalk engine

The employee workspace currently calculates directional snapshots from exact D/E/P/F values for:

- Big Five
- HEXACO
- DISC
- Hogan HPI
- Hogan HDS
- EQ-i

Each calculation retains a text explanation of the PI factor correspondence. Reference-profile lens visuals remain available, but they are labeled separately from exact-factor calculations.

## Employee data stored in Neon

`employee_pi_profiles` stores:

- Employee name
- Position
- Department or team
- Completed PI reference profile
- Exact Dominance, Extraversion, Patience, and Formality values
- Assessment date
- Notes
- Created and updated timestamps

The runtime schema and `server/schema.sql` now use the same table definitions.

## Tech stack

- React 18 and Vite
- Tailwind CSS
- Recharts
- Express
- Neon Postgres
- Gemini and Groq provider fallback
- Render Web Service

## Local development

```bash
npm install
npm run dev
```

Production build and server:

```bash
npm run build
npm start
```

Run tests and the production build together:

```bash
npm run check
```

## Neon setup

1. Create or open the Neon database.
2. Add the pooled connection string as `DATABASE_URL`.
3. The server automatically creates the required schema on first database use.
4. `server/schema.sql` is available for explicit initialization or inspection.

## Render setup

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
GEMINI_MODEL=optional
GROQ_MODEL=optional
```

## Health checks

```txt
GET /api/health
GET /api/db/health
```

## Employee API

```txt
GET    /api/employees
POST   /api/employees
PUT    /api/employees/:id
DELETE /api/employees/:id
```

## Other API endpoints

```txt
GET  /api/profiles
POST /api/profiles
POST /api/ai-chat
POST /api/ai/scenario-analysis
GET  /api/hsi/mappings
PUT  /api/hsi/mappings/:lensId/:profileId
POST /api/hsi/mappings/bulk
```

## Validation

Pull requests run GitHub Actions checks for:

- Crosswalk engine unit tests
- Production Vite build
- Express server syntax
- Database module syntax
