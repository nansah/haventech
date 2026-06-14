# Haventech — Versewell Monorepo

This is the monorepo for [Versewell](https://versewell.io) — powerful tools built for ministry.

Built with [Turborepo](https://turbo.build/repo) and [pnpm](https://pnpm.io) workspaces.

## Apps

| App | Description | URL |
|-----|-------------|-----|
| `apps/web` | Main marketing site (Next.js 14) | versewell.io |
| `apps/presenter` | SermonFlow app (React + Vite) | presenter.versewell.io |
| `apps/study` | Versewell Study app (React + Vite) | study.versewell.io |

## Packages

| Package | Description |
|---------|-------------|
| `packages/ui` | Shared UI components |

## Getting started

```bash
# Install dependencies
pnpm install

# Run all apps in dev mode
pnpm dev

# Build all apps
pnpm build
```

## Structure

```
haventech/
├── apps/
│   ├── web/          ← Next.js 14 — versewell.io
│   ├── presenter/    ← Vite + React — presenter.versewell.io
│   └── study/        ← Vite + React — study.versewell.io
├── packages/
│   └── ui/           ← Shared components
├── turbo.json
└── package.json
```

## Products

### SermonFlow (`apps/presenter`)
Sermon preparation and presentation tool for pastors. Features include outline builder, teleprompter mode, scripture integration, and live presentation view.

### Versewell Study (`apps/study`)
Bible study tool for serious students of Scripture. Features include reading plans, layered annotations, cross-references, and community discussion.
