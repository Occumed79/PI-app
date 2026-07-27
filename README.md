# PI Crosswalk Intelligence

A single-user internal React + Express + Neon application for translating completed Predictive Index behavioral results across related frameworks and exploring how explicitly selected life or environmental variables may bend the visible PI presentation.

## Product definition

Employees have already completed their Predictive Index assessments. The stored PI reference profile and exact Dominance, Extraversion, Patience, and Formality values are the baseline source assessment.

The full interpretation chain is:

```txt
Completed PI result
→ exact D / E / P / F baseline
→ optional explicitly selected life/environment overlay
→ apparent PI presentation shift
→ cross-framework lens projection
```

Big Five, HEXACO, Hogan, EQ-i, DISC, and other framework outputs are PI-derived crosswalks unless separate assessment results are explicitly entered later.

Life, family, health, immigration, neurodiversity, stress, trauma, financial, cultural, legal, sensory, or environmental variables are context overlays. They may amplify, suppress, mask, or temporarily bend visible PI behavior. The application never infers that an overlay exists from PI data.

This is an internal tool for one user. Authentication, roles, tenants, invitations, and multi-user supervisory workflows are intentionally outside scope.

## Active product areas

- **PI Crosswalk Intelligence** — explore PI reference profiles and the lens library.
- **Employee PI Profiles** — create, edit, search, and delete exact PI records and optional context variables stored in Neon.
- **Crosswalk Assistant** — analyze exact employee PI factors, selected overlays, and relevant lens calculations.

## Registry-wide projection engine

Every one of the repository’s **101 actual registry entries** now returns an exact employee projection. Earlier code metadata claimed 104, but the array itself contains 101 records; Beast Mode 2.0 validates the real source array rather than repeating the stale count.

The engine contains dedicated PI translation builders for major framework families including:

- Big Five and Workplace Big Five
- HEXACO
- DISC
- Hogan HPI and HDS
- EQ-i
- 16PF
- MBTI and Keirsey
- Insights Discovery
- Cognitive processing and decision style
- Executive function and cognitive load
- Learning preferences and learning agility
- Kolbe, HBDI, KAI, TKI, FIRO-B, SDI, and Social Styles
- Enneagram, VIA, Reiss, Schwartz Values, and work values
- CliftonStrengths domains
- Belbin, TMS, Lencioni, team synthesis, and role fit
- Leadership Circle, leadership versatility, situational leadership, and Lominger-style competency views
- Purpose, meaning, trust, psychological safety, feedback, metacognition, and social cognition

Specialty or duplicate registry entries use a category-aware exact-factor fallback rather than silently returning a blanket reference-profile result.

Reference-profile visuals remain available as the visual library. The employee lens modal places exact calculated dimensions above the reference visual and clearly labels the distinction.

## Life and environmental variables

The original lived-experience layer has been restored to the active app. The catalog includes these category families:

- Economic and material security
- Family systems and caregiving
- Immigration, displacement, language load, and cultural transition
- Education and access background
- Neurodivergence and cognitive accessibility
- Disability, chronic illness, pain, sleep, treatment, and body-based factors
- Trauma, adversity, acute stress, and nervous-system load
- Identity safety, marginalization, discrimination, and belonging
- Work history and occupational socialization
- Social support and community context
- Life-stage and transition factors
- Environmental and sensory context
- Cultural values and communication norms
- Legal, administrative, and bureaucratic stress
- Protective factors, practical resources, and psychological safety

Variables may be:

- Saved on an employee record when known and appropriate.
- Tested temporarily inside any lens as a hypothetical scenario without saving or labeling the employee.

The employee view always keeps the completed PI baseline visible beside the context-bent apparent presentation.

## Important interpretation boundaries

- PI does not diagnose ADHD, autism, burnout, stress, trauma, disability, illness, immigration status, family strain, or any protected/private characteristic.
- A context overlay is used only when explicitly selected or explicitly asked as a hypothetical.
- Cognitive ability, CRT, Wonderlic, and MSCEIT-style lenses describe how work style or context may affect observed task/test expression. They do not fabricate ability, intelligence, accuracy, percentile, or administered-test scores.
- Crosswalk values are directional internal interpretations, not licensed replacement reports for proprietary assessments.

## Employee data stored in Neon

`employee_pi_profiles` stores:

- Employee name
- Position
- Department or team
- Completed PI reference profile
- Exact Dominance, Extraversion, Patience, and Formality values
- Assessment date
- PI source notes
- Selected life/environment overlay IDs
- Context notes
- Created and updated timestamps

The runtime schema and `server/schema.sql` use the same table definitions and automatically add the overlay columns to existing databases.

## AI provider behavior

With `AI_PROVIDER=auto`, both live AI endpoints use this ordered provider chain:

1. Gemini when configured.
2. Groq when Gemini is unavailable or unsuccessful.
3. OpenRouter when Gemini and Groq are unavailable or unsuccessful.
4. A built-in non-AI fallback only when no live provider completes.

The default OpenRouter model is `openrouter/free`. It can be changed with `OPENROUTER_MODEL` without changing application code.

The Crosswalk Assistant dynamically calculates the lenses relevant to the conversation and sends the exact baseline, explicit overlays, apparent PI shift, calculated lens dimensions, and recent conversation history to the selected live provider.

## Tech stack

- React 18 and Vite
- Tailwind CSS
- Recharts
- Express
- Neon Postgres
- Gemini, Groq, and OpenRouter provider fallback
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
3. The server automatically creates or upgrades the required schema on first database use.
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
CLIENT_ORIGIN=https://pi-app-c3rr.onrender.com
AI_PROVIDER=auto

GEMINI_API_KEY=optional
GEMINI_MODEL=optional

GROQ_API_KEY=optional
GROQ_MODEL=optional

OPENROUTER_API_KEY=your_complete_sk-or-v1_key
OPENROUTER_MODEL=openrouter/free
OPENROUTER_SITE_URL=https://pi-app-c3rr.onrender.com
OPENROUTER_APP_NAME=PI Crosswalk Intelligence
```

The OpenRouter key must remain server-side in Render. Do not place it in frontend code, GitHub, screenshots, or committed environment files.

`OPENROUTER_SITE_URL` and `OPENROUTER_APP_NAME` are optional attribution headers. The API key and model are the required OpenRouter settings.

## Health checks

```txt
GET /api/health
GET /api/db/health
```

`GET /api/health` reports the configured-provider map, selected model names, and the effective fallback order.

## Employee API

```txt
GET    /api/employees
POST   /api/employees
PUT    /api/employees/:id
DELETE /api/employees/:id
```

Employee POST and PUT payloads now include:

```json
{
  "contextOverlays": ["adhd-executive-load", "financial-strain"],
  "contextNotes": "Known variables or clearly labeled hypothetical context."
}
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

- Existing PI crosswalk unit tests
- Lived-experience catalog coverage
- All 101 actual registry lens projections
- Overlay baseline-preservation and apparent-shift behavior
- Ability-lens interpretation boundaries
- Live AI provider-chain regression coverage
- Production Vite build
- Express server syntax
- Database module syntax
