# Add remaining homepage assets from brainstation-23.com

## Missing assets (29 total)

Diffed the live homepage's asset URLs against `src/assets/bs23/`. These 29 are referenced on the live home page but not yet in the repo.

**Icons / illustrative SVGs (industries + capability marks)** — 8
- `00000-01-1.svg`
- `6684761_3412943-1.svg`
- `6764647_3425857-1.svg`
- `721566_13-1.svg`
- `9588744_4213537-1.svg`
- `67909ed924615d402e05044f_Group-1321316638.svg`
- `67909ed97087aee2c1ff0da4_Group-1413373285.svg`
- `Frame-1618872771.svg`

**Client logo strip variants (LogoH31…LogoH36)** — 6
- `LogoH31.svg` … `LogoH36.svg` (second row of the "Trusted by" marquee)

**Awards / certifications (duplicate `.svg.svg` filenames on WP + extras)** — 5
- `aws.svg.svg`, `microsoft.svg.svg`, `inc-5000.svg.svg`, `ey-entrepreneur-of-the-year.svg.svg` (WP's odd double-ext copies — kept as-is so filenames match live)
- `cmmi-level-3-seeklogo-1-2.webp`

**Company / brand imagery** — 4
- `Brain-Station-23-Ltd.webp`
- `Brain-Station-23.jpg`
- `Content-1.webp`
- `image-31-1.webp`

**Mega-menu / secondary tiles** — 3
- `mega-menu-industries-01.webp`
- `mega-menu-industries-02.webp`
- `mega-menu-resources-01.webp`

**Misc icons** — 2
- `C-1.svg` (C-language mark variant)
- `f-logo-2.svg` (Facebook footer social)

**Web font** — 1
- `manrope-bcbadccc.woff2` (Manrope used for headings on the live site)

## Plan

1. **Download** all 29 files with `curl` from `brainstation-23.com/wp-content/uploads/...` into `/tmp/bs23-missing/`. Any 403/404 gets listed back at the end — no silent skips.
2. **Upload** each with `lovable-assets create --file … > src/assets/bs23/<name>.asset.json`. Preserve exact filenames so future diffs keep working.
3. **Wire up** the newly available assets:
   - Extend `TrustBar.tsx` with a second marquee row using `LogoH31…LogoH36`.
   - Add awards strip (`aws`, `microsoft`, `inc-5000`, `ey-entrepreneur-of-the-year`, `cmmi-level-3-seeklogo`) to `SiteFooter` certifications row (replacing/augmenting current badges).
   - Swap the Lucide industry icons in `IndustriesGrid.tsx` for the 8 illustrative SVGs (`6684761…`, `6764647…`, `721566_13`, `9588744…`, `00000-01-1`, `Frame-1618872771`, and the two `67909ed…Group` marks).
   - Use `Content-1.webp` / `image-31-1.webp` / `Brain-Station-23-Ltd.webp` as additional imagery in `CompanyStory` and `AiExcellence`.
   - Register **Manrope** via `<link>` in `__root.tsx` head and expose it as the display font in `src/styles.css` (`--font-display`), applied to `h1-h3`. Load the woff2 as a preloaded self-hosted font pointing at the CDN URL.
   - Replace footer LinkedIn/etc. Facebook Lucide icon with `f-logo-2.svg` where the site uses the branded mark.
4. **Verify**: `bun run build`, then Playwright screenshot at 1280×1800 to confirm the extra logo row, industry icons, awards strip, and Manrope headings render.

## Out of scope

- Any homepage asset already present (63 files) — untouched.
- Inner-page assets (careers, case study detail, blog thumbnails). Deferred to Phase 2.
- Rewriting existing component copy — only image/icon/font swaps.
