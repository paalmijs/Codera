# Codera

Codera is a Duolingo-inspired programming learning app concept. It teaches
fundamentals through small lessons, interactive challenges, progress tracking,
and larger guided projects.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

For Better Auth, run the API server in a second terminal:

```bash
npm run dev:server
```

Copy `.env.example` to `.env` and set `MONGODB_URI` before creating accounts.

## Current prototype

- Language selection for Python, JavaScript, and HTML & CSS
- Fundamentals learning path
- Interactive challenge card
- Project studio preview
- XP and streak progress UI
- Better Auth email/password screen with a MongoDB-backed API server
