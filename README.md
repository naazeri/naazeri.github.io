# Nazeriland

Personal portfolio site for [Reza Nazeri](https://nazeriland.com), built with Next.js and deployed as a static site to GitHub Pages.

## Stack

- **Next.js 15** (App Router, static export)
- **React 19**
- **i18n** — English (`en`) and Persian (`fa`, RTL)
- **Bootstrap** template assets + custom CSS

## Getting started

Requires **Node.js 18+** and **npm**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to `/en/`.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Build static site to `out/` |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit smoke tests (Vitest) |
| `npm run test:e2e` | Run browser smoke tests (Playwright) |
| `npm run test:all` | Run all tests |
| `npm run deploy` | Build and publish `out/` to GitHub Pages |

## Project structure

```
src/
├── app/
│   ├── (localized)/[locale]/     # Locale routes (/en/, /fa/, projects)
│   ├── (redirect)/               # Root / → /en/ redirect
│   ├── LayoutComponent.jsx       # Header, footer, vendor scripts
│   ├── sitemap.js                # Static sitemap.xml
│   └── robots.js                 # Static robots.txt
├── components/                   # Page UI components
├── lib/
│   ├── i18n/
│   │   ├── config.js             # Locale helpers
│   │   ├── en.js                 # English site content
│   │   └── fa.js                 # Persian site content
│   ├── metadata.js               # Open Graph / Twitter metadata
│   └── sanitizeHtml.js           # HTML sanitization helper
└── styles/
    └── global.css                # Global styles + vendor CSS imports

public/
├── assets/                       # Images, fonts, vendor JS/CSS
└── CNAME                         # Custom domain (nazeriland.com)
```

## Editing content

All copy, navigation, portfolio projects, and social links live in locale files:

- `src/lib/i18n/en.js` — English
- `src/lib/i18n/fa.js` — Persian

Each file exports a `siteConfig`, `navData`, `heroData`, `aboutData`, `portfolioData`, `footerData`, and UI strings. Set `active: false` on a section (e.g. `serviceData`, `portfolioData`) to hide it.

Portfolio project pages are generated from `portfolioData.projects` at build time. Each project needs a unique numeric `id`.

Images go in `public/assets/img/`.

## Testing

```bash
npm run test        # Vitest: i18n config + static params
npm run test:e2e    # Playwright: /en/ and /fa/ home pages
npm run test:all    # Both
```

E2E tests build the static site and serve `out/`. They use installed Google Chrome by default. If Chrome is not available:

```bash
npx playwright install chromium
```

## Routing

| URL | Page |
|-----|------|
| `/` | Redirects to `/en/` |
| `/en/`, `/fa/` | Home |
| `/en/project/[id]/` | Project detail |

The language switcher in the header swaps the locale segment while preserving the current path.

## Deployment

The site uses [static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) (`output: 'export'`). The build output is written to `out/`.

Deploy to GitHub Pages:

```bash
npm run deploy
```

This runs `next build` and pushes `out/` via [gh-pages](https://github.com/tschaub/gh-pages). The custom domain is configured in `public/CNAME`.

## License

Private project.
