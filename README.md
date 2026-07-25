# Canopux Marketing Website

Production-oriented Next.js 14 (App Router) rebuild for [canopux.org](https://canopux.org) — a software development company site with a brand system derived from the Canopux ringed-planet wordmark.

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS with Canopux monochrome design tokens
- `next/font` for Inter Tight (display), Inter (body), and JetBrains Mono (labels)
- Metadata API, sitemap, robots, JSON-LD, and static OG images

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Brand assets

| File | Use |
| --- | --- |
| `public/brand/CANOPUX.png` | White wordmark on dark surfaces |
| `public/brand/Canopux_black.png` | Black wordmark on light surfaces |
| `public/icons/favicon.svg` | Favicon derived from the planet/orbit mark |

Logo component: `src/components/brand/Logo.tsx` (`variant="dark" | "light"`).

## Where to plug in remaining assets

### Company content (already sourced from canopux.org)

- Case studies: `src/content/portfolio.ts`
- Services (9 disciplines): `src/content/services.ts`
- About / principles / team capacity: `src/content/team.ts`
- Contact, office, stats, partners, social: `src/lib/site.ts`

### Still needed

- Replace `MediaBleed` placeholder photography/video with real assets
- Add named team bios/headshots when available (live site only lists capacity by discipline)
- Wire `/api/contact` to email/CRM (`hello@canopux.org`)
- Blog posts: `src/content/blog.ts`
- Analytics in `src/app/layout.tsx` if desired

## Design tokens

Defined in `src/app/globals.css` and extended in `tailwind.config.ts`:

- `--canopux-black: #000000`
- `--canopux-white: #FFFFFF`
- `--canopux-graphite: #0D0D0F`
- `--canopux-silver: #A6A8AC`
- `--canopux-line: #2A2C30`
- `--canopux-signal: #3B82F6`

Prefer Tailwind classes like `bg-canopux-black` / `text-canopux-signal` instead of hardcoding hex values in components.

Visual direction follows a Starlink-like aerospace discipline: near-monochrome, full-bleed photography/video placeholders (`MediaBleed`), oversized Inter Tight display type, and minimal chrome. Replace every `Placeholder media` plate with real photography or looping video before launch.

## Internationalization later

The site is authored in English with `lang="en"` and copy written to avoid idioms that are hard to localize.

To add multi-language support later:

1. Install [`next-intl`](https://next-intl-docs.vercel.app/)
2. Introduce a `[locale]` segment under `src/app`
3. Move user-facing strings from page files into message catalogs
4. Keep structured content modules (`src/content/*`) locale-aware or duplicated per locale
5. Update `sitemap.ts` and canonical metadata for each locale

## SEO checklist included

- Per-route `generateMetadata` / `buildMetadata` helpers
- `src/app/sitemap.ts` and `src/app/robots.ts`
- Organization JSON-LD sitewide; BreadcrumbList on nested pages; Service schema on `/services`; Article schema on blog posts
- Static Open Graph image at `public/og-default.png` (brand palette + wordmark concept)
- Favicon and app icons under `public/icons/` derived from the ringed-planet mark
- Semantic landmarks: header/nav, main, footer; one `h1` per page

## Lighthouse targets

Aim for **90+** on Performance, Accessibility, SEO, and Best Practices after deploying with real images optimized through `next/image`. Validate with Chrome Lighthouse on mobile + desktop once placeholder case-study/team imagery is replaced.

## Project scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |
