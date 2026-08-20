# Nazeriland — Project Review & Suggestions

**Last scanned:** August 20, 2026  
**Stack:** Next.js 15 (App Router), React 19, static export (`output: 'export'`), i18n (en/fa), Bootstrap template assets, Vitest + Playwright

**Health check:** `npm run lint`, `npm run test`, and `npm run build` all pass. Static export generates **16 routes** (locales, projects, sitemap, robots, redirect).

**Progress:** 16 of 26 items completed. **10 open** suggestions remain below.

---

## High priority

*No open high-priority items.*

---

## Medium priority

### 8. Heavy vendor scripts load on every page

**File:** `src/app/LayoutComponent.jsx`

These scripts load globally with `beforeInteractive`:

- Bootstrap, AOS, Swiper, GLightbox, Isotope, imagesLoaded, php-email-form

Portfolio and services sections are **`active: false`** in locale data, but Isotope/Swiper/GLightbox still load on the homepage.

**Suggestion:** Lazy-load vendor scripts only on routes/sections that need them (`strategy="lazyOnload"` or dynamic import). Remove php-email-form (no contact form in the app).

---

### 14. `postcss` listed as a runtime dependency

**File:** `package.json`

`postcss` is in `dependencies` but there is no `postcss.config.*` in the project.

**Suggestion:** Move to `devDependencies` if needed, or remove the direct dependency and rely on Next.js tooling.

---

### 15. No automated CI

No `.github/workflows` pipeline for lint/build/test on push or PR.

**Suggestion:** Add a GitHub Action: `npm ci` → `npm run lint` → `npm run test` → `npm run build`. Optionally deploy `out/` to GitHub Pages on `main`.

---

### 25. Dependency updates (non-urgent)

`npm audit` reports **3 vulnerabilities** (1 critical, 2 high) in `next`, `postcss`, and `sharp` (transitive). Current versions build and test successfully.

For this static GitHub Pages site, server-side CVEs are mostly **lower risk** in production, but upgrades are still good hygiene.

**Suggestion:** Bump `next` and `eslint-config-next` to latest **15.5.x** in a controlled branch (`npm run test:all` after). Avoid blind `npm audit fix --force` (may jump to Next 16).

---

## Low priority

### 17. JavaScript instead of TypeScript

The project uses `.jsx`/`.js` with minimal `jsconfig.json`. Locale data shapes are implicit.

**Suggestion:** Gradual TypeScript migration starting with `src/lib/i18n/` would catch content/schema mistakes at build time.

---

### 18. Array index used as React `key`

**Files:** `src/components/HomePage.jsx`, `src/app/LayoutComponent.jsx`, `src/components/Breadcrumbs.jsx`

Several `.map()` calls use `index` as `key`. Stable IDs (e.g. `social.href`, nav `href`, `service.title`) are safer if lists reorder.

---

### 19. Dead code in layout scripts

**File:** `src/lib/utils.js`

Dropdown toggle handlers target `.toggle-dropdown`, which does not exist in current nav markup.

**Suggestion:** Remove unused handler block or implement dropdown nav when needed.

---

### 20. Hardcoded locale in navigation hrefs

**Files:** `src/lib/i18n/en.js`, `src/lib/i18n/fa.js`

Nav items use absolute paths like `/en/#about`. Works but duplicates locale in every entry.

**Suggestion:** Store section anchors only (`#about`) and prefix locale in a helper when building nav links.

---

### 21. `<img>` without explicit dimensions

**Files:** `src/components/HomePage.jsx`, `src/components/ProjectPage.jsx`

Plain `<img>` tags are used throughout. Static export sets `images.unoptimized: true`, so `next/image` gives limited benefit, but width/height or aspect-ratio would reduce CLS.

**Suggestion:** Add explicit dimensions or CSS aspect-ratio. Convert remaining PNG portfolio assets to WebP where possible.

---

### 22. Structured data (JSON-LD) for personal site

No `Person` or `WebSite` schema for search engines.

**Suggestion:** Add JSON-LD in locale layout using `siteConfig` (name, url, `sameAs` social links).

---

### 23. Custom 404 page

Next.js generates a default `/_not-found`. No branded `not-found.jsx`.

**Suggestion:** Add `src/app/not-found.jsx` (and optionally locale-aware styling) matching site design.

---

### 26. `site.webmanifest` not linked in HTML

**File:** `public/site.webmanifest`, locale layouts

Manifest branding was fixed, but no `<link rel="manifest">` is emitted via `metadata` in the locale layout.

**Suggestion:** Add `manifest: '/site.webmanifest'` to `generateMetadata` (or metadata export) so browsers and Lighthouse pick it up.

---

## What's working well

- Route groups with server-side `lang` / `dir` per locale
- Centralized i18n content in `src/lib/i18n/en.js` and `fa.js`
- Static export for GitHub Pages (`trailingSlash`, `CNAME`, deploy script)
- SEO: sitemap, robots, Open Graph, and Twitter metadata
- Security: shared HTML sanitization, `rel="noopener noreferrer"` on external links
- Layout scripts split with cleanup (`initLayoutScript` / `initPageScript`)
- Smoke tests: Vitest (i18n + static params) and Playwright (`/en/`, `/fa/`)
- Vendor folder trimmed to **~1.0 MB** (14 referenced files)
- npm-only workflow with `package-lock.json` and updated README

---

## Suggested order of work

| Phase | Items | Effort |
|-------|--------|--------|
| 1 — Performance | #8 | Medium |
| 2 — Tooling | #14, #15, #25 | Small–medium |
| 3 — Polish | #17–#23, #26 | Ongoing |

---

## Completed

### 1. ~~`mainScript()` re-runs on every navigation and stacks event listeners~~ ✅

Split into `initLayoutScript()` (once) and `initPageScript()` (per route with cleanup). Uses `AbortController`; destroys Swiper/Isotope/GLightbox on navigation.

**Files:** `src/app/LayoutComponent.jsx`, `src/lib/utils.js`

---

### 2. ~~Invalid project URLs render a blank page instead of 404~~ ✅

Added `getProjectBySlug()`. Route page and `generateMetadata` call `notFound()` for invalid slugs.

**Files:** `src/app/(localized)/[locale]/project/[slug]/page.jsx`, `src/components/ProjectPage.jsx`, `src/lib/i18n/config.js`

---

### 3. ~~Unused MUI / Emotion dependencies~~ ✅

Removed all `@mui/*` and `@emotion/*` packages. Deleted unused `src/styles/theme.js`.

---

### 4. ~~Inconsistent HTML sanitization~~ ✅

Added `src/lib/sanitizeHtml.js`. All `dangerouslySetInnerHTML` usage goes through shared helpers.

---

### 5. ~~External links missing `rel="noopener noreferrer"`~~ ✅

Added to all `target="_blank"` links in HomePage, ProjectPage, and LayoutComponent.

---

### 6. ~~Root `/` uses client-side redirect~~ ✅

Server-side `redirect('/en/')` in `src/app/(redirect)/page.jsx`.

---

### 7. ~~`lang` and `dir` set client-side~~ ✅

Route groups with multiple root layouts. Locale routes render `<html lang dir>` server-side. Removed `LocaleHtmlAttributes.jsx`.

**Files:** `src/app/(localized)/[locale]/layout.jsx`, `src/app/(redirect)/layout.jsx`

---

### 9. ~~Vendor folder bloat (~10 MB)~~ ✅

Removed unused Bootstrap sources, RTL variants, source maps, and duplicates. **~1.0 MB** remaining (14 files).

---

### 10. ~~Missing SEO essentials~~ ✅

Added `sitemap.js`, `robots.js`, and `src/lib/metadata.js` with Open Graph and Twitter tags.

---

### 11. ~~`site.webmanifest` empty branding~~ ✅

Set `name`, `short_name`, `theme_color` (`#ffbb27`), and `background_color` (`#060606`).

---

### 12. ~~README outdated boilerplate~~ ✅

Rewrote README: stack, structure, i18n editing, routing, testing, deployment.

---

### 13. ~~Mixed package manager configuration~~ ✅

Standardized on npm. Removed `yarn.lock` and pnpm config. Added `package-lock.json`.

---

### 16. ~~No tests~~ ✅

Vitest smoke tests (`tests/i18n.smoke.test.js`) and Playwright e2e (`tests/e2e/locales.smoke.spec.js`). Shared `src/lib/staticParams.js`.

Scripts: `npm run test`, `npm run test:e2e`, `npm run test:all`.

---

### 24. ~~Junk file in vendor tree~~ ✅

Removed `prb.txt` during vendor cleanup (#9).

---

*Re-run `npm run test:all` and `npm run build` after applying further changes.*
