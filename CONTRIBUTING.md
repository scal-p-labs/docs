# Contributing to scal-p-docs

Contributions are welcome. This repo follows the same conventions as the other SCAL-P repositories.

## Prerequisites

- Node.js 22+
- pnpm

## Setup

```bash
pnpm install
pnpm dev         # http://localhost:3000
```

Before submitting, run:

```bash
pnpm fmt         # format code
pnpm lint        # lint code
pnpm types:check # type-check + validate MDX
```

## Content

Documentation lives in `content/docs/` as MDX files organized by category:

```
content/docs/
├── getting-started/
├── policy/
├── trust/
├── ci/
├── stage/
├── verify/
└── reference/
```

Each `.mdx` file is a documentation page. Frontmatter follows the Fumadocs schema — see existing pages for reference.

## Components

Reusable components live in `src/components/`. The `terminal-card.tsx` component on the landing page is a good example of the component pattern used in this project.

## Commits

This repo does not enforce commit conventions — write clear messages in your preferred style.

## Pull requests

1. Create a branch from `main`
2. Make your changes
3. Run `pnpm fmt && pnpm lint && pnpm types:check`
4. Open a PR against `main`
