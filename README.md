# scal-p-docs — SCAL-P Documentation

![logo](https://raw.githubusercontent.com/scal-p-labs/assets/main/banner.png)

> Official documentation site for [SCAL-P](https://github.com/scal-p-labs/SCAL-P) —
> built with [Fumadocs](https://fumadocs.dev) and Next.js 16.

```bash
pnpm dev        # start dev server at http://localhost:3000
pnpm build      # production build
pnpm fmt        # format with oxfmt
pnpm lint       # lint with oxlint
```

---

## Project

This is the public-facing documentation for SCAL-P. It covers installation, policy authoring, CI integration, trust scoring, staged package verification, and more.

The site is deployed from this repository — content lives under `content/docs/` as MDX files.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Documentation engine | Fumadocs MDX |
| UI | Radix UI + shadcn/ui + Tailwind CSS 4 |
| Icons | Lucide React |
| Diagrams | Mermaid (via beautiful-mermaid) |
| Format + lint | oxfmt + oxlint |
| Package manager | pnpm |

---

## Structure

```
src/
├── app/                  # Next.js App Router pages
│   └── (home)/           # Landing page
├── components/           # Shared React components
│   └── ui/               # shadcn/ui primitives
└── lib/                  # Utilities
content/
└── docs/                 # MDX documentation pages
```

---

## Local development

```bash
pnpm install
pnpm dev
```

The dev server refreshes on MDX and component changes. Documentation pages live at `content/docs/` and follow the Fumadocs collection conventions.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT
