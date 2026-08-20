# Nazeriland — Project Review & Suggestions

**Scanned:** August 20, 2026  
**Stack:** Next.js 15 (App Router), React 19, static export (`output: 'export'`), i18n (en/fa), MUI (unused), Bootstrap template assets

Build and lint both pass. The suggestions below are ordered by impact.

---

## High priority

### 1. ~~`mainScript()` re-runs on every navigation and stacks event listeners~~ ✅ Done

**File:** `src/app/LayoutComponent.jsx`, `src/lib/utils.js`

Split into `initLayoutScript()` (runs once for header/nav/scroll listeners) and `initPageScript()` (re-inits per route with cleanup). Event listeners use `AbortController`; Swiper, Isotope, and GLightbox instances are destroyed on route change; AOS uses `refresh()` after the first init.

---

### 2. ~~Invalid project URLs render a blank page instead of 404~~ ✅ Done

**File:** `src/components/ProjectPage.jsx`, `src/app/[locale]/project/[slug]/page.jsx`

Added `getProjectBySlug()` helper. The route page and `generateMetadata` now call `notFound()` when the slug is missing or invalid; `ProjectPage` receives a validated `project` prop.

---

### 3. ~~Unused MUI / Emotion dependencies~~ ✅ Done

**Files:** `package.json`, `src/styles/theme.js`

Removed `@mui/material`, `@mui/icons-material`, `@mui/material-nextjs`, and all `@emotion/*` packages. Deleted unused `src/styles/theme.js`.

---

### 4. ~~Inconsistent HTML sanitization (`dangerouslySetInnerHTML`)~~ ✅ Done

**Files:** `src/lib/sanitizeHtml.js`, `src/components/HomePage.jsx`, `src/app/LayoutComponent.jsx`, `src/components/ProjectPage.jsx`

Added shared `sanitizeContent()` / `sanitizedHtml()` helpers. All `dangerouslySetInnerHTML` usage now goes through `sanitize-html` consistently.

---

### 5. ~~External links missing `rel="noopener noreferrer"`~~ ✅ Done

**Files:** `src/components/HomePage.jsx`, `src/components/ProjectPage.jsx`, `src/app/LayoutComponent.jsx`

Added `rel="noopener noreferrer"` to all `target="_blank"` links.

---

## Medium priority

### 6. ~~Root `/` uses client-side redirect~~ ✅ Done

**File:** `src/app/page.jsx`

Replaced the client-side `useRouter().replace()` with a Server Component `redirect('/en/')` from `next/navigation` (works with static export).

---

### 7. ~~`lang` and `dir` are set client-side~~ ✅ Done

**Files:** `src/app/(localized)/[locale]/layout.jsx`, removed `LocaleHtmlAttributes.jsx`

Restructured with route groups and multiple root layouts. Locale routes render `<html lang={locale} dir="...">` server-side; the root redirect uses its own minimal layout.

---

### 8. Heavy vendor scripts load on every page

**File:** `src/app/LayoutComponent.jsx`

These scripts load globally with `beforeInteractive`:

- Bootstrap, AOS, Swiper, GLightbox, Isotope, imagesLoaded, php-email-form

Portfolio and services sections are **`active: false`** in locale data, but Isotope/Swiper/GLightbox still load on the homepage.

**Suggestion:** Lazy-load vendor scripts only on routes/sections that need them (dynamic `import()` or conditional `<Script strategy="lazyOnload">`). Trim unused vendors (e.g. php-email-form — no contact form exists).

---

### 9. ~~Vendor folder bloat (~10 MB)~~ ✅ Done

**Path:** `public/assets/vendor/`

Removed unused Bootstrap sources, RTL variants, source maps, and duplicate non-minified vendor files. Kept 14 referenced assets only (~1.0 MB, down from ~10 MB).

---

### 10. ~~Missing SEO essentials~~ ✅ Done

**Files:** `src/lib/metadata.js`, `src/app/sitemap.js`, `src/app/robots.js`, locale and project `generateMetadata`

Added static `sitemap.xml` and `robots.txt` generation. Shared metadata helper adds Open Graph and Twitter card tags for home and project pages.

---

### 11. ~~`site.webmanifest` has empty branding~~ ✅ Done

**File:** `public/site.webmanifest`

Set `name` and `short_name` to `"Nazeriland"`. Aligned `theme_color` with site accent (`#ffbb27`) and `background_color` with the dark hero/header (`#060606`).

---

### 12. ~~README is outdated boilerplate~~ ✅ Done

**File:** `README.md`

Rewrote for this project: stack, structure, i18n content editing, routing, scripts, and GitHub Pages deployment.

---

### 13. ~~Package manager configuration is mixed~~ ✅ Done

**Files:** `package.json`, `package-lock.json`, `README.md`

Standardized on npm: removed `yarn.lock`, removed pnpm config from `package.json`, and updated README install instructions.

---

### 14. `postcss` listed as a runtime dependency

**File:** `package.json`

`postcss` is in `dependencies` but there is no `postcss.config.*` in the project. It may be an unused transitive leftover.

**Suggestion:** Move to `devDependencies` if needed, or remove if Next.js does not require a direct dependency.

---

### 15. No automated CI

No `.github/workflows` or similar pipeline for lint/build on push/PR.

**Suggestion:** Add a minimal GitHub Action: `npm ci` → `npm run lint` → `npm run build`. Optionally auto-deploy `out/` to GitHub Pages on `main`.

---

## Low priority

### 16. ~~No tests~~ ✅ Done

**Files:** `tests/i18n.smoke.test.js`, `tests/e2e/locales.smoke.spec.js`, `src/lib/staticParams.js`

Added Vitest smoke tests for i18n config and static params, plus Playwright checks that `/en/` and `/fa/` render with correct `lang`/`dir`.

---

### 17. JavaScript instead of TypeScript

The project uses `.jsx`/`.js` with minimal `jsconfig.json`. Locale data shapes are implicit.

**Suggestion:** Gradual TypeScript migration starting with `src/lib/i18n/` would catch content/schema mistakes at build time.

---

### 18. Array index used as React `key`

**Files:** `src/components/HomePage.jsx`, `src/app/LayoutComponent.jsx`, `src/components/Breadcrumbs.jsx`

Several `.map()` calls use `index` as `key`. Stable IDs (e.g. `service.title`, `social.href`, nav `href`) are safer if lists reorder.

---

### 19. Dead code in `mainScript`

**File:** `src/lib/utils.js`

- `initSwiperWithCustomPagination` is called but never defined (only matters if `.swiper-tab` is added later).
- Dropdown toggle handlers target `.toggle-dropdown`, which does not exist in current nav markup.

**Suggestion:** Remove unused branches or implement them when needed.

---

### 20. Hardcoded locale in navigation hrefs

**File:** `src/lib/i18n/en.js`, `src/lib/i18n/fa.js`

Nav items use absolute paths like `/en/#about`. Works but duplicates locale in every entry.

**Suggestion:** Store section anchors only (`#about`) and prefix locale in a helper when building nav links.

---

### 21. `<img>` instead of optimized images

**Files:** `src/components/HomePage.jsx`, `src/components/ProjectPage.jsx`

Plain `<img>` tags are used throughout. Static export sets `images.unoptimized: true`, so `next/image` gives limited benefit, but width/height attributes would still help CLS.

**Suggestion:** Add explicit `width`/`height` or aspect-ratio CSS; consider WebP/AVIF for any remaining PNG assets (e.g. Ghasetak portfolio image).

---

### 22. Structured data (JSON-LD) for personal site

No `Person` or `WebSite` schema for search engines.

**Suggestion:** Add JSON-LD in locale layout using data from `siteConfig` (name, url, sameAs social links).

---

### 23. Custom 404 page

Next.js generates a default `/_not-found`. No branded `not-found.jsx`.

**Suggestion:** Add `src/app/not-found.jsx` (and optionally locale-aware variant) matching site design.

---

### 24. ~~Junk file in vendor tree~~ ✅ Done

**File:** `public/assets/vendor/bootstrap/css/prb.txt`

Removed during vendor cleanup (#9).

---

### 25. Dependency updates (non-urgent)

`npm outdated` shows Next.js 15.2.4 (latest 16.x), React 19.1.x (latest 19.2.x), and patch updates for several packages. Current versions build successfully.

**Suggestion:** Plan a controlled upgrade (Next 16 + eslint-config-next) in a dedicated branch; patch-level updates can be applied more freely.

---

## What's working well

- Clean App Router structure with `[locale]` routing and `generateStaticParams`
- Static export setup is correct for GitHub Pages (`trailingSlash`, `CNAME`, deploy script)
- i18n content is centralized and easy to edit
- ESLint passes with no warnings
- Production build exports 14 static pages successfully
- Lottie animation correctly uses dynamic import with `ssr: false`
- Project descriptions use `sanitize-html`

---

## Suggested order of work

| Phase | Items | Effort |
|-------|--------|--------|
| 1 — Fix bugs | ~~#1~~, ~~#2~~, ~~#5~~ | Small |
| 2 — Security & cleanup | ~~#4~~, ~~#3~~, ~~#24~~ | Small–medium |
| 3 — Performance | #8, ~~#9~~ | Medium |
| 4 — SEO & UX | ~~#6~~, ~~#7~~, ~~#10~~, ~~#11~~ | Medium |
| 5 — Maintainability | ~~#12~~, ~~#13~~, #15, ~~#16~~ | Medium |
| 6 — Polish | Remaining low items | Ongoing |

---

*Generated from a static review of the codebase. Re-run build (`npm run build`) and manual smoke tests after applying changes.*
