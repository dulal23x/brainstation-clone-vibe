
# Brainstation 23 — Homepage Build Plan (Phase 1)

## Ground rules (important)

- **Layout & structure**: modeled on brainstation-23.com — same section order, same visual language (deep navy + amber, floating hero photo cards + stat callouts, dark industry band, capabilities grid, tech-stack grid, process timeline, case studies, offices, footer).
- **Assets from your site**: I'll scrape and re-host **your official logo, favicon, own-photography (team/office/people shots), and any client/partner logos you've published on your site**. Each file is uploaded through `lovable-assets` and served from the CDN via `.asset.json` pointers — no binaries in the repo.
- **Copy**: I'll write fresh, original marketing copy in the same voice and information architecture — not verbatim paragraphs. This keeps the site defensible and unique to this deployment while you own edits from there.
- **Icons**: Lucide for capabilities/industries/process (crisp, consistent, no scraping needed).
- **Third-party client logos** (Telenor, Sanofi, Veon, Sharebike, Syngenta, Virtual Affairs, Tennant, etc.): only shown if publicly displayed on your live "Trusted by" strip. I'll pull those SVGs and place them; if any provider objects later, they're one-line swaps.

---

## Phase 0 — Backend & foundation

**Enable Lovable Cloud** (Supabase under the hood), then run one migration creating:
- `contact_submissions` (id, name, email, phone, company, message, created_at) — RLS: `INSERT` allowed to `anon`, `SELECT` restricted to `service_role`.
- `newsletter_subscribers` (id, email, created_at) — same policy shape.
- Explicit `GRANT INSERT ON <table> TO anon` and `GRANT ALL ON <table> TO service_role`.

Two server functions in `src/lib/`:
- `contact.functions.ts → submitContact` (Zod validated).
- `newsletter.functions.ts → subscribeNewsletter`.

Both public, no auth middleware; RLS is the guard.

---

## Phase 1 — Asset acquisition

**Sources to scrape**: `brainstation-23.com/` plus first-level linked assets under `/wp-content/uploads/`. Everything downloaded via `curl` in the sandbox → uploaded with `lovable-assets create` → `.asset.json` written under `src/assets/brainstation/`.

Target inventory (from the live homepage inspection):

**Brand**
- Primary logo SVG/PNG (light + dark variants if present).
- Favicon / apple-touch-icon.

**Hero photography**
- Founder/CEO speaking shot (used in the top-right hero card).
- Team collaboration shot (bottom hero card).

**Client logo strip** — the visible "Trusted by" row: Tennant, Veon, Sanofi, Telenor, ShareBike, Syngenta, Virtual Affairs (SVGs when available, PNG fallback).

**Industry section** — icons are simple line marks; I'll use Lucide equivalents (Landmark for Fintech, ShoppingBag for Retail, GraduationCap for EdTech, HeartPulse for Healthcare, Signal for Telco, Factory for Manufacturing, Shirt for RMG, Truck for Logistics, ShieldCheck for Government). No scrape needed.

**AI Excellence section** — office/workshop photo (people at desks with headsets).

**Products & Solutions** — thumbnails for each proprietary product tile if published.

**Company Story ("Founded in 2006")** — group / offsite photo.

**23 Brand Collective** — sister-brand logo strip.

**Tech stack** — Java, React, .NET, Python, Angular, Moodle, WordPress, Ionic — use official SVG marks from Simple Icons (open source, brand-safe) rather than scraping.

**Process section** — workshop/whiteboarding photo.

**Case studies** — client thumbnails + hero collage (only ones publicly on your case-study index).

**Join Our Team** — team collage photo.

**Footer** — social icons (Lucide), office city marks (text only).

Anything that 403s or is behind auth I'll list back to you to upload manually.

---

## Phase 2 — Design system (`src/styles.css`)

Tokens in `oklch`, mapped via `@theme inline`:

- `--background`: near-white `oklch(0.985 0.005 240)` (matches the light off-white the live site uses).
- `--foreground` / primary text: deep navy `oklch(0.20 0.06 260)` (≈ `#0B1B36`).
- `--primary`: same deep navy; `--primary-foreground`: white.
- `--accent`: amber `oklch(0.78 0.16 65)` (≈ `#F5A623` / `#FFB800`) — reserved for CTAs only.
- `--muted-foreground`: slate `oklch(0.55 0.03 260)`.
- `--card`: white; dark-band sections use `bg-primary text-primary-foreground`.
- `--radius`: `0.75rem`; buttons pill-shaped (`rounded-full`).
- Soft elevation shadow token for cards.

**Typography**: Inter (400/500/600/700) loaded via `<link>` in `__root.tsx` head (never `@import` a URL in CSS). Body 16px / 1.6, display sizes 40 → 56 → 72px with tight tracking on headings.

**Motion**: `motion/react` for hero card float-in, marquee (`x` transform loop), section reveals on viewport enter, subtle stat count-up.

No hardcoded hex in components — all colors via semantic Tailwind classes.

---

## Phase 3 — Routing & SEO

- Home lives at `src/routes/index.tsx` (placeholder deleted).
- Update `__root.tsx` head defaults:
  - title: `"Brain Station 23 — Custom Software Development"`
  - description: original one-liner about scalable software for startups → enterprises.
  - `og:title`, `og:description`, `og:type: website`, `twitter:card: summary_large_image`.
- Home route's own `head()` overrides title/description with the marketing headline, sets `og:image` to the scraped hero photo (absolute CDN URL).
- Favicon swapped to the scraped one.
- No sitemap yet (single page); add on Phase 2 when inner routes exist.

---

## Phase 4 — Component architecture

Under `src/components/site/` (shared) and `src/components/home/` (page-specific):

**Shared shell**
- `AnnouncementBar` — thin top strip: "Scale Your Dev Team With Top 1% Bangladeshi Talents in 4 Weeks" + inline CTA + tiny avatar stack.
- `SiteHeader` — sticky, logo left, primary nav (Services / Industries / Products / Resources / Global Offices), amber pill CTA "Schedule a Call". Mobile: sheet drawer.
- `SiteFooter` — 4-column grid (Company / Services / Offices / Contact), certifications row (ISO 9001, ISO 27001, CMMI Level 5 — text badges), social icons, copyright.

**Home sections (top → bottom, matching the reference)**
1. `HeroSection` — left: headline + subheadline + amber CTA. Right: two overlapping rounded photo cards + two floating stat pills (`900+ Tech Professionals`, `36+ Countries Served`). Concentric-arc background SVG.
2. `TrustBar` — auto-scrolling marquee of client logos, grayscale-to-color on hover.
3. `CapabilitiesGrid` — heading "Drive Growth with Our Core Capabilities" + 2×3 cards (Web, Mobile, AI/ML, DevOps, QA, Cloud). Each: Lucide icon in amber circle, title, 2-line description, subtle "→" affordance.
4. `IndustriesGrid` — dark navy band, heading "Industries We Power with Innovation", 3×3 icon cards on darker cells, amber "See All Industries" pill bottom-right.
5. `AiExcellenceSection` — split: left copy block + amber CTA; right stacked stat rows (30% faster delivery / 40% cost reduction / 24/7 dev ops) with progress-bar accents + a workshop photo below.
6. `ProductsGrid` — dark band, heading "Our Products & Solutions", 3×2 dark cards each linking to a product page (stubbed anchors for now).
7. `CompanyStory` — light band, "Founded in 2006" milestone card with team photo + short paragraph + amber CTA.
8. `BrandCollective` — "The 23 Brand Collective" — horizontal logo strip of sister brands.
9. `TechStackGrid` — heading "Yes! We Cover Your Tech Stack" + centered logo grid (Java, React, .NET, Python, Angular, Moodle, WordPress, Ionic).
10. `ProcessTimeline` — "Our Process — AI-Optimized, Transparent, Scalable" — 4 numbered vertical steps with amber connectors alongside a workshop photo.
11. `CaseStudies` — carousel of 3 case cards: client logo + one-line challenge + two stat chips (%s) + category tag. Amber "View All" pill.
12. `JoinTeamCTA` — dark band with team collage photo left + heading/copy/amber CTA right.
13. `GlobalOffices` — three-column list of offices (Dhaka HQ, Chittagong, Amsterdam, Tokyo, Copenhagen, Dallas — real addresses I'll copy in from your site) with pin icons.
14. `ContactCTA` — final band "Ready to Scale Your Team?" with inline contact form (name / work email / message → `submitContact`) + newsletter input in footer wired to `subscribeNewsletter`. Toast on success/error.

Primitives: shadcn `Button`, `Card`, `Input`, `Textarea`, `Carousel`, `Sheet`.

---

## Phase 5 — Interactions & polish

- Sticky header shadow on scroll (Motion `useScroll`).
- Hero cards float in with staggered spring; stat pills fade + rise.
- Marquee pauses on hover.
- Industry cards lift on hover (translateY -2px, ring on card).
- Process timeline steps reveal on viewport enter.
- Case-study carousel: keyboard + drag + dots.
- Reduced-motion: respect `prefers-reduced-motion` — swap all transforms for opacity fades.
- Accessibility: semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), single `<h1>` in hero, alt text on every image, form labels, focus rings preserved, color-contrast ≥ WCAG AA (checked against amber-on-navy CTA specifically).

---

## Phase 6 — Verification

Before shipping:
1. `bun run build` clean.
2. Playwright screenshot at 1280×1800 → visual diff against the reference image. Iterate spacing / typography until sections align.
3. Mobile screenshot at 390×2400 → verify responsive stacking (single column, marquee still works, drawer nav opens).
4. Manual submit of contact form → confirm row lands in `contact_submissions`.
5. Lighthouse spot-check for Performance / A11y / SEO (target 90+ each).

---

## Explicitly out of scope (Phase 1)

- Inner pages (individual Services, Industries, Products, Case Study detail, About, Careers, Blog, Contact). These will be planned separately after homepage sign-off — the design system and shared shell built here carry over 1:1.
- Auth / admin panel to read contact submissions (you can view rows via Cloud UI until we build one).
- Multi-language.
- Blog CMS.

---

## Technical notes

- Stack: TanStack Start + React 19 + Tailwind v4 + Motion for React.
- All images via `lovable-assets` CDN pointers, imported as `import x from "@/assets/brainstation/hero.jpg.asset.json"` → `<img src={x.url} />`.
- Contact/newsletter server functions called via `useServerFn`, wrapped in TanStack Query mutations for pending/error state.
- Any scraped asset that fails to download will be surfaced as a checklist in chat for you to upload manually.
- If you later provide official brand-approved assets (higher-res logo, professional photography, updated client logo lockups), swapping is a 1-line change per asset because everything routes through `.asset.json` pointers.

Approve to begin — I'll enable Cloud, scrape and upload the asset set, then build sections top-down and share a preview screenshot when the shell (announcement bar → hero → trust bar → capabilities) is up for a first look.
