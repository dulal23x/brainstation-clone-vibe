# Full rebrand + lead-gen-first refinement

Goal: finish the rebrand so **every** user-facing "Brain Station 23 / BS23" string reads as **Dulal's Digital LLC**, restructure the homepage to lead with marketing/growth content and demote software/engineering to secondary, brighten client logos, and unblock the Quotre-2 testimonial image.

## 1. Remove blocking overlay on testimonial image

In `src/components/home/LeadGenHero.tsx`:
- Delete the absolutely-positioned navy card containing "5× Revenue growth for Outco / ApplyPass" + "A rebuilt paid-media engine…" — it currently covers the bottom of `Quotre-2.png`.
- Keep only the framed image so the full testimonial artwork is visible.
- Move the "5× revenue" proof point into `ResultsShowcase` as an extra stat card ("5×  Revenue growth · Outco / ApplyPass · SaaS") so the datapoint isn't lost.

## 2. Colorful, bigger client logos in TrustBar

In `src/components/home/TrustBar.tsx`:
- Remove `grayscale` / `hover:grayscale-0` and the `opacity-80` on the Dulal's client row.
- Bump size from `h-12 max-w-[160px]` → `h-16 sm:h-20 max-w-[220px]`, increase gap to `gap-x-16 gap-y-8`.
- Add a subtle white card wrapper (`rounded-xl bg-white p-4 shadow-card`) so the Outco white logo stays visible on light backgrounds.
- Keep the BS23-heritage marquee rows below but tone them down further (smaller, `opacity-60`) so Dulal's clients read as primary.
- Section heading rewrite: "Brands growing with Dulal's Digital".

## 3. Site-wide rename: strip remaining "Brain Station 23 / BS23" copy

Sweep these files and replace any user-visible BS23 / Brain Station 23 text with **Dulal's Digital** / **Dulal's Digital LLC** (asset filenames stay as-is — internal only):

- `SiteHeader.tsx` — wordmark, alt text, aria labels
- `SiteFooter.tsx` — company name, copyright, alt text, awards caption
- `HeroSection.tsx` — any residual BS23 phrasing in eyebrow/subhead
- `CompanyStory.tsx` — reframe heritage line: "Our engineering roots trace back two decades of enterprise delivery" (no BS23 name in body copy)
- `TechStackGrid.tsx`, `ProductsGrid.tsx`, `IndustriesGrid.tsx`, `CaseStudies.tsx`, `ProcessTimeline.tsx`, `JoinTeam.tsx`, `AiExcellence.tsx` — headings, blurbs, CTA labels rewritten as Dulal's Digital voice; drop any "at Brain Station 23" phrasing.

Image `alt` attributes that reference BS23 → generic descriptive alts ("Team offsite", "Enterprise delivery team", etc.).

## 4. Homepage re-order — marketing first, software secondary

New order in `src/routes/index.tsx`:

1. AnnouncementBar
2. SiteHeader
3. HeroSection (rewritten — lead-gen headline, growth stats replace "900+ Tech Professionals" chip; keep imagery)
4. TrustBar (colorful Dulal's clients up top)
5. LeadGenHero (no overlay)
6. MarketingServices (6 growth services)
7. ResultsShowcase (7 stat cards incl. 5× Outco)
8. ValuesBand (Think Big · Own It · Have Fun)
9. **New `GrowthPlaybook` section** — 4-step "how we generate demand" (Research → Offer → Launch → Optimize) with Dulal's copy
10. **New `IndustriesWeGrow` section** — reframes IndustriesGrid around who Dulal's serves for lead gen (SaaS, Home Services, Coaching, Med Spa, Beauty, Professional Services, Fintech, Healthcare)
11. CompanyStory (Dulal Hussain-led, engineering as heritage line)
12. CaseStudies (Dulal's growth wins first, engineering wins second)
13. ProcessTimeline (retitled "From first lead to shipped product")
14. — collapsed "Engineering & product capability" band —
    - CapabilitiesGrid + TechStackGrid + AiExcellence + ProductsGrid combined into a single tabbed/condensed section titled **"Engineering, when you're ready to build"** — visually smaller, one screen tall, secondary tone
15. JoinTeam (rewritten as "Join a growth-first team")
16. GlobalOffices (Albuquerque HQ first)
17. ContactCTA
18. SiteFooter

## 5. Content rewrite — Dulal's voice, marketing-forward

Rewrite copy in every home section so software is a supporting capability, not the headline. Guiding rules:
- Hero H1: "Results-driven marketing for ambitious brands."
- Sub: "Lead generation, paid media, and conversion systems — with in-house engineering when your growth needs a product to back it up."
- Every section eyebrow uses growth vocabulary (Pipeline, Demand, Conversion, Retention) before any engineering vocabulary.
- Stats surfaced from Dulal's site: 1MM monthly reach, 1.2MM subscribers, 5× revenue, 375 leads, 122% goal beat.
- CTAs standardized to **Get your proposal** / **See our work**.

## 6. Head + metadata

`__root.tsx` + `routes/index.tsx` head: strip any remaining BS23 phrasing, ensure `title` / `description` / `og:*` / `twitter:*` all say Dulal's Digital LLC and lead with lead-generation positioning.

## Files touched

Edited: `LeadGenHero.tsx`, `TrustBar.tsx`, `ResultsShowcase.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`, `HeroSection.tsx`, `CompanyStory.tsx`, `TechStackGrid.tsx`, `ProductsGrid.tsx`, `IndustriesGrid.tsx`, `CaseStudies.tsx`, `ProcessTimeline.tsx`, `JoinTeam.tsx`, `AiExcellence.tsx`, `CapabilitiesGrid.tsx`, `routes/index.tsx`, `routes/__root.tsx`.

New: `src/components/home/GrowthPlaybook.tsx`, `src/components/home/IndustriesWeGrow.tsx`, `src/components/home/EngineeringBand.tsx` (wraps the four engineering sections into one condensed secondary band).

## Verification

- `bun run build`
- Playwright at 1280×1800: confirm (a) no overlay on Quotre-2, (b) Dulal's client logos large + full color, (c) no "Brain Station 23 / BS23" text visible on the rendered homepage, (d) engineering band appears below the fold and reads as secondary.

## Out of scope

- New standalone routes.
- Removing or renaming any asset files under `src/assets/bs23/` (asset paths are internal; only visible copy/alt text changes).
- Backend/contact-form logic changes.

Approve to switch to build mode and execute.
