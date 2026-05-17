# Human Systems Intelligence

A GitHub-ready Vite + React + Tailwind prototype for a manager-facing behavioral interpretation tool.

## Included tabs

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

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Upload to GitHub

1. Create a new empty GitHub repository.
2. Unzip this package.
3. Upload all files from the unzipped `human-systems-intelligence` folder.
4. Commit to `main`.

## Deploy notes

For Vercel or Render static site deployment:

- Build command: `npm run build`
- Publish directory: `dist`

If routing is added later, add a static-site rewrite rule:

- Source: `/*`
- Destination: `/index.html`
- Action: Rewrite
