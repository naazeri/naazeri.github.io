---
trigger: always_on
description: Always use pnpm instead of npm for package management, running scripts, and testing in this project.
---

## Package Manager: pnpm

Always use `pnpm` instead of `npm` for all dependency management and script execution in this repository.

Rules:
- Package installation: `pnpm install`, `pnpm add <pkg>`, `pnpm add -D <pkg>`
- Running scripts: `pnpm run build`, `pnpm dev`, `pnpm test`, `pnpm lint`
- Executing binaries: `pnpm dlx` (instead of `npx`)
- NEVER use `npm` or `yarn` in this project.
