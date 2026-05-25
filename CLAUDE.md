# Ghosthands — Project Context

## Identity
Portfolio site for Thiago Bueno (thbueno), software engineer, 10yr exp.
Repo: `thbueno/ghosthands` | pkg manager: pnpm 10.8.0

## Stack
- Next.js 15.2.8, React 19, TypeScript (strict)
- Tailwind CSS 3.4.17 + shadcn/ui + Radix UI primitives
- GSAP (cascade entrance animations) + Lenis (smooth scroll) + Three.js (TrailCanvas)
- MDX via `next-mdx-remote` 6 + `gray-matter` for content
- Embla Carousel for galleries
- `next-themes` dark mode

## Commands
```bash
pnpm dev      # next dev --turbopack
pnpm build    # next build
pnpm lint     # next lint
pnpm format   # prettier --write .
```

## Structure
```
app/
  page.tsx              # Homepage: ProfileHeader → WorksSection → SkillsSection → Footer
  layout.tsx            # Root layout (no navbar — pages render their own chrome)
  globals.css           # CSS vars, animations, custom utilities
  works/
    layout.tsx          # Passthrough only — does NOT add navbar/footer
    page.tsx            # Works listing (reads MDX frontmatter) — renders WorkNavbar inline
    [id]/
      page.tsx          # Project detail (MDX) — renders WorkNavbar + footer inline
components/
  ui/                   # shadcn base components (DO NOT hand-edit)
  profile-header.tsx    # Avatar + name + bio + social links
  works-section.tsx     # Homepage 2×2 card grid (hardcoded project list)
  skills-section.tsx    # Frontend + Backend tech tag cards
  tech-tag.tsx          # Pill tag component + FRONTEND_TAGS / BACKEND_TAGS exports
  work-navbar.tsx       # Apple Newsroom-style sticky navbar for /works/* pages
  trail-canvas.tsx      # Three.js WebGL mouse trail (client-only, dynamic import)
  animate-on-scroll.tsx # IntersectionObserver wrapper (variants: fade, slide-up, rotate-3d)
  project-sidebar.tsx   # Sticky sidebar on /works/[id] with fade-out on scroll
  mdx-components.tsx    # Custom MDX renderers (ProjectImage, gallery, etc.)
  lets-talk-button.tsx  # Filled pill button (variants: light, dark, surface-dark, red)
  project-gallery.tsx   # Embla carousel for project images
content/works/          # MDX project files (frontmatter-driven)
  capsule.mdx
  esthalo.mdx
  gov-br.mdx
  friends-travel.mdx
  sw-clean-energy.mdx   # stub — needs content, commented out in works-section.tsx
lib/
  mdx.ts                # Full MDX compiler (for [id] pages)
  mdx-listing.ts        # Lightweight frontmatter-only (for listings)
  utils.ts              # cn() helper
public/images/          # 30+ portfolio images/mockups
```

## Theme & Design System

### Colors
- Primary red: `#d80e00` → CSS var `--primary`
- Secondary blue: `#229eff` → CSS var `--secondary`
- Fonts: SF Pro Display (local) via `--font-sf-pro-display`
- Dark mode: CSS vars + `next-themes` (`darkMode: ['class']`)
- Tailwind custom breakpoints: sm=640px, md=768px, lg=1024px, xl=2xl=1152px

### Custom Utility Classes (globals.css `@layer utilities`)
```css
.bg-card-light   /* #f2f2f2 light / #1a1a1a dark */
.bg-card-hover   /* #e8e8e8 light / #222222 dark */
.bg-tag          /* #f5f5f5 light / #252525 dark — tag pill background */
.text-primary-dark    /* #111111 light / #f0ede5 dark */
.text-secondary-muted /* #888888 both modes */
```

### Custom Tailwind Tokens (tailwind.config.ts `theme.extend`)
Font sizes (use `text-{name}`):
- `text-2xs` = 13px, `text-15` = 15px, `text-17` = 17px
- `text-19` = 19px, `text-22` = 22px, `text-25` = 25px

Spacing (use as any spacing utility: `p-`, `gap-`, `h-`, `w-`, etc.):
- `4.5` = 18px, `5.5` = 22px, `17.5` = 70px, `26` = 104px

**Convention**: avoid arbitrary `[Npx]` values. Use built-ins or the tokens above. Keep layout width constraints (`max-w-[915px]`, `max-w-[1100px]`) as arbitrary — they're one-off.

## Animation System

### Homepage (GSAP cascade — `app/page.tsx`)
- Elements start with `opacity-0 translate-y-4 blur-sm will-change-transform` (Tailwind classes)
- GSAP `fromTo()` — NOT `to()` — animates them in with explicit from-state to avoid Tailwind transform conflicts
- GSAP targets CSS class names: `.profile-header`, `.section-label`, `.product-card`, `.footer`
- Lenis smooth scroll: `lerp: 0.08`, initialized in `useEffect`, destroyed on unmount
- TrailCanvas: Three.js WebGL mouse trail, loaded via `dynamic(() => import(...), { ssr: false })`
- **Do NOT add AnimateOnScroll or tailwindcss-motion to homepage** — GSAP is the system here

### Works/Skills sections (scroll-triggered)
- `<AnimateOnScroll>` wrapper with IntersectionObserver (`animate-on-scroll` CSS class)
- Skills cards use `threshold={0.15}` and `delay={100}` for stagger

## Layout Patterns

### Homepage (`app/page.tsx`)
```
<TrailCanvas />  ← fixed z-0, pointer-events-none
<div relative z-[1]>
  <main max-w-[915px] px-9 sm:px-16 pt-16 pb-16 md:pt-28 md:pb-32 gap-10 md:gap-16>
    <ProfileHeader />
    <WorksSection />
    <SkillsSection />
  </main>
  <footer -mx-7 md:-mx-10 lg:-mx-40>  ← full-width breakout via negative margin
</div>
```

### Works detail (`app/works/[id]/page.tsx`)
```
<WorkNavbar />  ← sticky Apple Newsroom-style, scroll-aware blur/border
<main max-w-[1100px] px-9 sm:px-16>
  <header>  ← category (text-15) + headline (text-4xl md:text-5xl)
  <ProjectGallery />
  <grid 5-col>
    <ProjectSidebar col-span-1>  ← sticky, fades out on scroll
    <MDX content col-span-4>
  </grid>
</main>
<footer -mx-7 md:-mx-10 lg:-mx-40>  ← same full-width breakout pattern
```

### Full-width footer breakout pattern
```html
<footer class="-mx-7 px-7 md:-mx-10 md:px-10 lg:-mx-40 lg:px-40">
  <div class="mx-auto max-w-[...] px-9 sm:px-16">...</div>
</footer>
```

## Mobile-First Spacing
Always start from mobile and scale up. Key rules:
- Vertical section padding: `pt-16 pb-16 md:pt-28 md:pb-32` (not flat desktop value)
- Section gaps: `gap-10 md:gap-16` (not flat 70px)
- Footer vertical: `py-10 md:py-17.5`
- Card body: `p-4 sm:p-5.5`
- Horizontal padding base `px-9` is fine for mobile (36px each side)

## Content Pattern (MDX)
Frontmatter fields: `title`, `headline`, `image`, `galleryImages`, `category`, `services`, `year`, `slug`, `websiteUrl`
- Listings use `mdx-listing.ts` (gray-matter only, no compile)
- Detail pages use `mdx.ts` (full `next-mdx-remote` compile)
- Add new project: create `content/works/[slug].mdx` + add to `projects` array in `works-section.tsx`

## Config Notes
- `next.config.mjs`: ESLint + TS errors ignored on build, images unoptimized, MDX transpiled
- `tsconfig.json`: path alias `@/*` → root
- `.prettierrc`: no semis, single quotes, Tailwind class sort
- `components.json`: shadcn config pointing to `@/components/ui`

## Key Decisions
- `'use client'` on homepage (GSAP + Lenis need browser APIs)
- `app/works/layout.tsx` is a passthrough (`<>{children}</>`) — each works page handles its own navbar/footer to avoid layout interference
- GSAP `fromTo()` required (not `to()`) because Tailwind's `translate-y-4` uses CSS custom property transforms that conflict with GSAP's matrix-based `y` tween
- New Tailwind arbitrary values (e.g. new `pt-[Npx]`) require `.next` cache delete + server restart to compile under Turbopack
- `sw-clean-energy.mdx` is stub — commented out in `works-section.tsx` projects array
- `AboutSection` exists in components but not rendered anywhere
