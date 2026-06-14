# Haventech — Versewell Platform

Monorepo for the Versewell suite of ministry tools.

## Apps

| App | Domain | Description |
|-----|--------|-------------|
| `apps/web` | `versewell.io` | Main marketing site — homepage + `/presenter` + `/study` landing pages |
| `apps/presenter` | `presenter.versewell.io` | SermonFlow — sermon preparation & presentation app |
| `apps/study` | `study.versewell.io` | Versewell Study — Bible study environment |

## Structure

```
haventech/
├── apps/
│   ├── web/          ← Next.js 14 (App Router + Tailwind)
│   ├── presenter/    ← React + Vite (SermonFlow)
│   └── study/        ← React + Vite (Versewell Study)
├── packages/
│   └── ui/           ← Shared components
├── turbo.json
└── pnpm-workspace.yaml
```

## Getting started

```bash
pnpm install
pnpm dev         # run all apps in parallel
pnpm build       # build all apps
```

## Adding your app code

Replace `apps/presenter/src/` with your SermonFlow React app code.
Replace `apps/study/src/` with your Versewell Study app code.
