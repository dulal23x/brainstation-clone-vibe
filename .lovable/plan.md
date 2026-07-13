# Rebrand to Dulal's Digital LLC — Merge with Brain Station 23 Content

## Goal

Transform the current Brain Station 23 clone into **Dulal's Digital LLC** — a hybrid growth-marketing + engineering agency. Keep every existing BS23 asset and content section, add Dulal's services (Lead Generation as the hero service), Dulal's case studies, client logos, brand statement, and NM address. Nothing is deleted; everything is merged.

## Content Audit — dulalsdigital.com

**Tagline / hero:** "Results-driven marketing for you." Founded by Dulal Hussain. CTAs: *Get Your Proposal*, *See Our Work*.

**Featured testimonial:** "How Dulal Increased Outco/ApplyPass Revenue by 5X."

**Client logos:** Beeda, Outco, ApplyPass, Fitness Matrix.

**Case-study stats (Work page):**
- 114% Campaign CTR Increase — Facebook Ads, SaaS/Insurance (Medicare)
- 670 New Leads — Google Ads, Plumbing
- 122% Revenue Goal Exceeded — Marketing Strategy, Coaching
- 27% ↓ Cost Per Lead — Google Ads, Accounting
- 47% ↓ Cost Per Lead — Paid Ads, Beauty Education
- 375 New Qualified Leads — Google Ads, Med Spa

**About / positioning:** "Redefining Digital Marketing." 1MM monthly FB views, 1.2MM subscribers, 1M+ organic reach/mo. Core values: **THINK BIG · OWN IT · HAVE FUN**. "Specialists, not generalists — deep expertise in complex, fast-changing digital channels. Integrated solutions for full-funnel growth."

**Contact:** Dulal's Digital LLC · 1201 Mountain Road NW, Albuquerque, NM 87104, USA · dulal@dulalsdigital.com

**Services (implied from case-study coverage):** Google Ads (PPC), Facebook / Meta Ads, Marketing Strategy, Paid Social, Lead Generation, Conversion Rate Optimization, Creative / Design.

## Merged Service Catalog (Lead Gen = hero)

New unified "What we do" — Dulal's marketing services first, BS23 engineering second:

**Growth & Marketing (Dulal's)**
1. **Lead Generation** ⭐ hero — B2B/B2C pipeline building, qualified-lead delivery
2. Google Ads / PPC Management
3. Facebook & Meta Ads
4. Full-Funnel Marketing Strategy
5. Conversion Rate Optimization
6. Creative & Ad Design

**Product & Engineering (BS23 — kept as-is)**
7. Custom Software Development
8. Mobile App Development
9. AI & Machine Learning
10. Cloud & DevOps
11. QA & Test Engineering
12. Managed Services

## Asset Plan

Download from `dulalsdigital.com/wp-content/uploads/`:
- `2026/02/Quotre-2-1024x1024.png` — hero quote/testimonial visual
- `2025/01/beeda-2-1024x683.png` — Beeda logo
- `2025/01/Outco-white-2.png` — Outco logo
- `2026/01/Ap_logo-removebg-preview.png` — ApplyPass logo
- `2026/01/fintess-matrix-logo.jpg` — Fitness Matrix logo
- `2025/03/past-present-future-digital-marketing-bsp-237523486.jpg` — editorial image
- `2025/04/icon-building-yellow.png` — case-study industry icon

Upload each with `lovable-assets create` to `src/assets/dd/*.asset.json`. Filenames preserved. Existing 90+ BS23 assets untouched.

## Component / Section Changes

**Rebrand (site-wide)**
- `SiteHeader.tsx` — swap BS23 wordmark for "Dulal's Digital" text lockup next to BS23 logo mark (keeps BS23 asset visible per requirement); nav gains **Work** and **Services** items; CTA becomes "Get Your Proposal"
- `AnnouncementBar.tsx` — new copy: "Results-driven marketing + engineering — from qualified leads to shipped software."
- `SiteFooter.tsx` — company name → **Dulal's Digital LLC**; address → 1201 Mountain Road NW, Albuquerque, NM 87104; email → dulal@dulalsdigital.com; keep BS23 awards/badges row intact and append Dulal's client logos
- `__root.tsx` head — title/description/OG rebranded to Dulal's Digital; keep Manrope font

**Home route (`routes/index.tsx`) — new section order**
1. `AnnouncementBar`
2. `SiteHeader`
3. **`HeroSection`** (rewritten) — H1 "Results-driven marketing for ambitious brands." Sub "Lead generation, paid media, and full-stack engineering under one roof — founded by Dulal Hussain." CTAs *Get Your Proposal* / *See Our Work*. Keeps existing BS23 hero imagery + stat chips (900+ Tech Professionals, 36+ Countries) unchanged
4. **`TrustBar`** — prepend Dulal's client logos (Beeda, Outco, ApplyPass, Fitness Matrix) as row 1; keep existing BS23 marquee rows 2 & 3
5. **`LeadGenHero` NEW** — dedicated Lead Generation flagship band with Quotre-2 visual, "5X Revenue Growth — Outco/ApplyPass" testimonial callout, 3 pillar bullets
6. **`MarketingServices` NEW** — 6-card grid for the Dulal's services above; uses `icon-building-yellow.png` accents
7. `CapabilitiesGrid` (BS23 engineering — unchanged, retitled "Engineering capabilities")
8. `IndustriesGrid` (unchanged)
9. **`ResultsShowcase` NEW** — 6 stat cards from Dulal's work page (114% CTR, 670 Leads, 122% revenue, 27% CPL, 47% CPL, 375 leads) with industry tags
10. `AiExcellence` (unchanged)
11. `ProductsGrid` (unchanged)
12. **`ValuesBand` NEW** — "Think Big · Own It · Have Fun" three-column strip
13. `CompanyStory` — copy rewrite: "Founded by Dulal Hussain, Dulal's Digital LLC blends two decades of engineering depth with a growth-marketing crew that has driven 5X revenue for SaaS clients and 1MM+ monthly reach." Keep BS23 group photo
14. `TechStackGrid` (unchanged)
15. `ProcessTimeline` — retitled "From lead to launch"; steps become Discover → Generate Demand → Convert → Build → Scale
16. `CaseStudies` — keep 3 BS23 cards, append 3 Dulal's cards (Outco 5X, Beeda, ApplyPass) using Dulal's logos
17. `JoinTeam` (unchanged)
18. `GlobalOffices` — add Albuquerque, NM as HQ card at the top; keep BS23 offices below
19. **`ContactCTA`** — headline "Are you ready for better results? Let's talk." with proposal-request form fields

## Copy / Brand Rules

- Company name everywhere user-facing: **Dulal's Digital LLC**
- Founder attribution retained: "Founded by Dulal Hussain"
- BS23 mentions kept only as the engineering-heritage story inside `CompanyStory` and `TechStackGrid` context — never as the brand name
- Do NOT delete any existing BS23 asset, image, section, or component
- Manrope headings + existing color tokens preserved; add a warm yellow accent (`--brand-accent-yellow: #F4B400`) alongside existing navy/accent, sampled from Dulal's `icon-building-yellow.png`, wired via `styles.css`

## Technical Details

- New files:
  - `src/components/home/LeadGenHero.tsx`
  - `src/components/home/MarketingServices.tsx`
  - `src/components/home/ResultsShowcase.tsx`
  - `src/components/home/ValuesBand.tsx`
  - 7 × `src/assets/dd/*.asset.json`
- Edited: `AnnouncementBar`, `SiteHeader`, `SiteFooter`, `HeroSection`, `TrustBar`, `CompanyStory`, `ProcessTimeline`, `CaseStudies`, `GlobalOffices`, `ContactCTA`, `routes/index.tsx`, `routes/__root.tsx`, `styles.css`
- Verify with `bun run build`, then a Playwright screenshot pass at 1280×1800 confirming (a) Dulal's logos in TrustBar, (b) new Lead Gen band, (c) results stat grid, (d) footer address = Albuquerque

## Out of Scope

- New standalone routes (`/services`, `/work`, `/about`, `/contact`) — homepage merge only, this phase
- Inner-page BS23 rewrites
- Real CRM/email wiring for the proposal form (uses existing `contact.functions.ts`)
- Removing any BS23 asset, section, or copy block
- Not literally 100 pages — plan is scoped to what's actionable; happy to expand any section on request

Approve to switch to build mode and execute.
