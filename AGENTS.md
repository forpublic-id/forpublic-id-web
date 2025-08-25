AGENT PLAYBOOK (20 lines max)

1. Commands: install=bun install; dev=bun run dev; build=bun run build; start=bun run start; lint=bun run lint; format=bun run format / check=bun run format:check; clean=bun run clean.
2. Tests: (none configured) add vitest/jest before writing tests. Single test suggestion: npx vitest run path/to.test.ts once added.
3. Package manager: Bun (NEVER use npm/yarn/pnpm). Use bun add/remove for deps.
4. Imports: Prefer barrel exports (e.g. import { Button } from '@/components/ui'). Use path alias @/\* per tsconfig. Order: node builtins, external, internal (alias), relative. No unused imports.
5. Components default to Server; add 'use client' only when needed (state, effects, event handlers) at file top.
6. Styling: Tailwind CSS v4 utilities; avoid arbitrary values if token exists; reuse design tokens from lib/constants (colors, spacing, typography).
7. Formatting: Prettier config (.prettierrc) – no semicolons, single quotes, width 100, trailing commas es5. Run format before commit.
8. Linting: ESLint flat config extends next/core-web-vitals + typescript. Fix issues before merging.
9. Types: Strict TS. Export types from lib/types; avoid 'any'. Use explicit component prop interfaces; derive unions from source data when possible.
10. Naming: PascalCase for components/files, camelCase for vars/functions, UPPER_SNAKE_CASE for constant objects only if not in constants module. i18n keys: feature.section.label.
11. Internationalization: Use next-intl; fetch translations server-side; never hardcode user-facing strings; keep en/id parity.
12. Routing: Use route constants from lib/constants/routes; no inline '/en' etc. Use supported locales list.
13. UI composition: Prefer composition (children) over prop drilling; keep components single-responsibility; colocate only purposeful variants.
14. Error handling: Use ErrorBoundary in critical trees; throw Errors (not strings); add fallback UI; log server issues via console.error only (avoid noisy client logs).
15. Loading states: Use components/common/Loading variants; show skeletons for list content.
16. State: Keep global state minimal; prefer server data + props; avoid unnecessary context/providers.
17. Performance: Avoid client components for static sections; leverage React.lazy only if large split needed; prevent unnecessary re-renders (memo if pure & heavy).
18. Accessibility: Semantic HTML, aria-\* where needed, alt text for images, focus styles not removed.
19. Commits/PRs: Explain WHY not just WHAT; run lint + format + (future) tests before pushing.
20. Env vars: NEXT_PUBLIC_GA_ID required; do not commit secrets; provide .env.local.example updates when adding envs.
