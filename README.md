# Students For AI Literacy (SAIL) — Website

The official site for SAIL, a non-profit created and led by students to promote
AI literacy within youth. Built to feel premium, modern, and trustworthy while
staying accessible to a youth audience.

**Live sections (single page):** What is SAIL → Start a Chapter (with interactive
map) → Executive Board → Contact footer.

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js (App Router) + React + TypeScript |
| Styling | Tailwind CSS (design tokens ported from `stitch-export/design-system.md`) |
| Smooth scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Animation | Framer Motion (reveals, parallax, magnetic buttons) |
| Hero VFX | Custom WebGL fluid shader (`components/ShaderBackground.tsx`) |
| Interactive map | React-Leaflet + free CARTO/OpenStreetMap tiles (no API key) |
| Hosting | Vercel (zero-config) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com/new), "Import Project" and select the repo.
3. Framework preset auto-detects **Next.js** — no settings to change.
4. Click **Deploy**. That's it.

No environment variables are required. Add a custom domain in
Vercel → Project → Settings → Domains when ready.

## The backend / CMS (how to update content)

All editable content lives in the `data/` folder as typed files. Editing one of
these and committing is all it takes — the site (and the `/api/*` endpoints)
update automatically.

| File | What it controls | Notes |
| --- | --- | --- |
| `data/chapters.ts` | The interactive map + chapter chips | Add a block with name, location, lat/lng, email. **Active Chapters** count updates automatically. |
| `data/board.ts` | The 7 Executive Board cards | Swap names, roles, bios, and photo URLs. Set `feature: true` for the wide hero card. |
| `data/stats.ts` | The rolling impact counters | `activeChapters` and `statesReached` derive from chapters; edit `studentsTaught` by hand. |
| `lib/site.ts` | Contact info, social links, apply URL | Single source of truth for outward links. |

### Finding map coordinates

Search the school on Google Maps, right-click the pin, and copy the
`latitude, longitude` pair into the chapter's `lat` / `lng`.

### JSON API endpoints

Served by the App Router and consumable by anything (cached at the edge):

- `GET /api/chapters` → `{ chapters: [...] }`
- `GET /api/board` → `{ board: [...] }`
- `GET /api/stats` → `{ stats: { studentsTaught, activeChapters, statesReached } }`

> **Want a no-code spreadsheet later?** The data layer is intentionally isolated.
> To move to a database or Google Sheet, change only the `data/*.ts` files (and
> the `/api/*` routes) to fetch from your source — every component already reads
> through these, so nothing else needs to change.

## Board photos

The board currently uses placeholder portraits. Drop real headshots into
`public/board/` and reference them in `data/board.ts` as `"/board/name.jpg"`.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, smooth scroll + cursor
  page.tsx          Single-page composition of all sections
  globals.css       Tailwind + Leaflet + cursor/scroll styles
  api/              Backend JSON endpoints (chapters, board, stats)
  robots.ts, sitemap.ts
components/         Nav, Hero, Mission, Origin, ImpactTicker, ChapterFunnel,
                   ChaptersMap (+ ChapterMapInner), Board, Footer, and the
                   UI primitives (CustomCursor, SmoothScroll, Reveal, Magnetic,
                   ShaderBackground, FloatingApply)
data/              Editable content + types (the CMS)
lib/site.ts        Links & contact details
stitch-export/     Original Google Stitch design reference (not built/served)
```

## Accessibility & performance

- Respects `prefers-reduced-motion` (disables the shader, smooth scroll easing,
  and parallax).
- Custom cursor only activates on fine-pointer (mouse) devices.
- Fonts self-hosted via `next/font`; images lazy-loaded.
