# AGENTS.md

## Stack
Vite + React + TypeScript. Single page, no router. Sections stack vertically and are linked via anchor IDs (#hero, #about, #projects, #contact).

## Structure
- src/components/ — one folder per section (Hero, About, Projects, Contact)
- src/components/Projects/ProjectCard.tsx — reusable card component. Copy this pattern for new projects.
- src/components/Projects/index.tsx — the `projects` array. Add new projects here.

## Commands
- Install: npm ci
- Dev server: npm run dev (default port 5173)
- Build: npm run build
- Lint: npm run lint
- Test: npm run test (if present)

## Conventions
- Functional components, named exports (not default exports)
- Inline styles for now — no CSS framework wired up yet
- New project cards: add an entry to the `projects` array in src/components/Projects/index.tsx using the existing `Project` type. Do not modify ProjectCard.tsx unless the card's structure itself needs to change.
- Keep components self-contained — no global state library in use.

## Scope boundaries for automated changes
- Adding/editing a project: touch only src/components/Projects/
- Section copy edits: touch only the relevant section's index.tsx
- Do not modify vite.config.ts, tsconfig*.json, or package.json unless explicitly asked to add a dependency.
