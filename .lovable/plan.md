
# Brainstation 23 — Homepage Clone (Phase 1)

Goal: 1:1 visual clone of `brainstation-23.com` homepage using real logos, icons, images and content from the live site. Backend enabled from the start so the contact form works out of the box.

## 1. Backend setup
- Enable **Lovable Cloud** (Supabase under the hood) for:
  - `contact_submissions` table (name, email, phone, company, message, created_at) with RLS: insert allowed to `anon`, select restricted to `service_role`.
  - Newsletter table (email, created_at) with same policy shape.
- No auth surface on the homepage itself.

## 2. Asset acquisition (scrape brainstation-23.com)
Use `fetch_website` + direct `curl` in the sandbox to pull:
- Primary logo (light + dark variants) and favicon.
- Hero background image / hero people photo.
- Industry icons (Fintech, Retail, Healthcare, Telco, Manufacturing, etc.).
- Product & solutions section imagery.
- Case study thumbnails (client logos: Robi, Grameenphone, bKash, ADB, etc.).
- Tech stack logos (Java, React, .NET, Python, Angular, Moodle, WordPress, Ionic).
- Team / office photos (About + Join Our Team sections).
- Client / brand collective logos strip.
- Footer social icons.

Each downloaded file is uploaded via `lovable-assets create` and referenced through its `.asset.json` pointer — nothing binary lands in the repo.

Content copy (headlines, section text, stats like "20+ years", "700+ engineers", process steps, product blurbs) is pulled verbatim from the live site since you confirmed ownership.

## 3. Homepage sections (matches the reference image, top → bottom)
1. **Top announcement bar** — "Scale Your Dev Team With Top 1% Bangladeshi Talents in 4 Weeks" + CTA + team avatars.
2. **Sticky header / nav** — logo, primary menu (Services, Industries, Products, Case Studies, Company, Careers, Blog, Contact), "Get in Touch" button.
3. **Client logo marquee** — auto-scrolling row of client brand marks.
4. **"Drive Growth with Our Core Capabilities"** — 2×3 card grid (Web, Mobile, AI/ML, DevOps, QA, Cloud), each with icon + copy + link.
5. **"Industries We Power with Innovation"** — dark navy band, 3×3 icon grid (Fintech, Retail, EdTech, Healthcare, Telco, Manufacturing, RMG, Logistics, Government) + "See All Industries" CTA.
6. **"AI-Driven Development Excellence"** — split section: left copy + CTA, right stats (30% faster delivery, 40% cost reduction, 24/7 dev ops) + supporting photo.
7. **"Our Products & Solutions"** — dark card grid highlighting proprietary products (with links).
8. **"Founded in 2006"** company milestone band — copy + team photo + CTA.
9. **"The 23 Brand Collective"** — logo strip of sister brands.
10. **"Yes! We Cover Your Tech Stack"** — tech logo grid (Java, React, .NET, Python, Angular, Moodle, WordPress, Ionic, etc.).
11. **"Our Process — AI-Optimized, Transparent, Scalable"** — 4-step vertical timeline with photo.
12. **"Case Studies"** — carousel/grid with client thumbnails, metrics (%), and category tags.
13. **"Join Our Team"** — dark band with team collage + CTA to careers.
14. **Global offices** — city list (Dhaka, Chittagong, Amsterdam, Tokyo, Copenhagen, Dallas, etc.) with addresses.
15. **"Ready to Scale Your Team?"** — final CTA band with contact form (wired to Cloud).
16. **Footer** — logo, quick links, contact, socials, certifications (ISO, CMMI), copyright.

## 4. Design system (tokens in `src/styles.css`)
- Colors (from live site): deep navy `#0B1B36` primary, white `#FFFFFF`, amber CTA `#F59E0B` / `#FFB800`, muted slate for body. Defined as oklch tokens in `:root`.
- Typography: **Inter** (or the exact family the live site serves) loaded via `<link>` in `__root.tsx`; display weight 700, body 400/500.
- Radius: `--radius: 0.75rem`, cards `1rem`.
- Shadows: soft elevation for cards, hard navy for dark bands.
- All colors via semantic tokens — no hardcoded hex in components.

## 5. Routing & SEO
- Single route `src/routes/index.tsx` (home). Placeholder in `index.tsx` removed.
- `head()` on the home route: title "Brainstation 23 — Custom Software Development Company", real meta description, og:title/description/image (hero image), twitter card.
- Update `__root.tsx` head defaults from "Lovable App" → Brainstation 23 defaults.
- Favicon replaced with scraped one.

## 6. Components
Split the page into focused components under `src/components/home/`:
`AnnouncementBar`, `SiteHeader`, `HeroSection`, `ClientMarquee`, `CapabilitiesGrid`, `IndustriesGrid`, `AiExcellence`, `ProductsGrid`, `CompanyStory`, `BrandCollective`, `TechStackGrid`, `ProcessTimeline`, `CaseStudies`, `JoinTeam`, `OfficesList`, `ContactCTA`, `SiteFooter`.

Reusable primitives via shadcn (`Button`, `Card`, `Input`, `Textarea`, `Carousel`).

## 7. Server functions (TanStack Start)
- `src/lib/contact.functions.ts` → `submitContact` (Zod-validated, inserts into `contact_submissions`).
- `src/lib/newsletter.functions.ts` → `subscribeNewsletter`.
- Both public (no auth middleware); rely on RLS `INSERT` policy for `anon`.

## 8. Build order
1. Enable Lovable Cloud + run migration for the two tables (with GRANTs + RLS).
2. Scrape live site pages and download all assets → upload via `lovable-assets`.
3. Set up design tokens + fonts + favicon + head metadata.
4. Build header/footer + hero + announcement bar.
5. Build middle sections top → bottom in the order above.
6. Wire contact + newsletter server functions.
7. Verify with Playwright screenshot at 1280×1800 against the reference image; iterate spacing/typography until it matches.

## 9. Out of scope (Phase 1)
Inner pages (Services detail, each Industry, Case study detail, About, Careers, Blog, Contact, ~50 total) — planned separately after homepage sign-off. Same header/footer + design system will be reused.

## Technical notes
- Stack: TanStack Start + React 19 + Tailwind v4, Motion for React for hero + marquee + timeline reveals.
- All images through `lovable-assets` CDN (`.asset.json` pointers).
- Content pulled from live site via `code--fetch_website` + `curl`; if any asset 403s I'll flag it and ask you to supply.
- Client-side form submissions call server functions via `useServerFn`, then toast success.
