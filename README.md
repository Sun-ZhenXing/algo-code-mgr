# Nuxt3 Question Bank Management

Building dynamically rendered MarkDown + Vue components using MDC.

TODO:

- [ ] Stop using server side highlighting
- [ ] Plugins
  - [ ] Support for math (KaTeX)
  - [ ] Support for diagrams (Mermaid)
  - [ ] Support for charts (ECharts)
- [ ] Components
  - [ ] CodeGroup
  - [ ] QuestionCard
  - [ ] TagList
- [ ] Add Prisma ORM & MongoDB
- [ ] Add user auth (login, register, reset password, etc.)
- [ ] Add `docker-compose.yml` for deployment

## 1. Environment dependencies

Requires `pnpm` 8+ and Node.js >= 16 installed:

```bash
npm i -g pnpm
```

Or use `corepack` to install the latest version `pnpm`:

```bash
corepack prepare pnpm@latest --activate
```

Install the dependencies:

```bash
pnpm i
```

Upgrade all dependencies:

```bash
pnpm up
```

Remove unneeded dependencies:

```bash
pnpm store prune
```

## 2. Development Deployment

Develop:

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

Static build:

```bash
pnpm generate
```
