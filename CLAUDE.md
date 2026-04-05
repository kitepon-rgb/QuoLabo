# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npx vercel --prod` — Deploy to production (https://quo-labo.vercel.app)

## Architecture

Quo Labo is the unified landing site for two products: **AuctionBOT** and **ConnectC2X**. It is a Next.js 16 App Router project with no CSS framework — all styling uses inline React `CSSProperties`.

### Routing & Rewrites

- `/` — Landing page with product cards
- `/terms`, `/privacy`, `/legal` — Legal pages (shared across both products)
- `/auctionbot/*` — Proxied to `https://web-quo-lu.vercel.app/*` via Next.js rewrites
- `/connectc2x/*` — Proxied to `https://connectc2x.vercel.app/*` via Next.js rewrites

Rewrites are configured in `next.config.ts`. The sub-sites are separate Next.js deployments; this project acts as a unified front door.

### i18n

4 languages: EN, JA, KO, ZH. Translation files live in `locales/*.json`. The shared helper `app/i18n.ts` exports `tr()`, `detectLanguage()`, and `setLanguage()`. Language preference is stored in `localStorage('ui-lang')` and falls back to `navigator.language`.

### Shared Components

- `app/components/Nav.tsx` — Sticky navbar with language switcher
- `app/components/Footer.tsx` — Footer with legal links and disclaimer

### Design System

- Primary purple: `#7C6CDB`
- Secondary teal: `#5BC0BE`
- Font: Nunito (Google Fonts, loaded in `app/layout.tsx`)
- Background: repeating `bg.jpg` texture at 400px
- Glass-morphism: `rgba(255,255,255,0.85)` + `backdropFilter: blur()`
- Border color: `#e0d4f5`

@AGENTS.md
