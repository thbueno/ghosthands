# Ghosthands — Project Context

## Identity
Portfolio site for Thiago Bueno (thbueno), software engineer, 10yr exp.
Repo: `thbueno/ghosthands` | pkg manager: pnpm 10.8.0

## Stack
- Next.js 15.2.8, React 19, TypeScript (strict)
- Tailwind CSS 3.4.17 + shadcn/ui + Radix UI primitives
- Framer Motion + `tailwindcss-motion` for animations
- MDX via `next-mdx-remote` 6 + `gray-matter` for content
- React Hook Form + Zod for forms
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
  page.tsx              # Homepage (Hero→Skills→Works→CTA→Awards→Footer)
  layout.tsx            # Root layout
  globals.css           # CSS vars, animations
  about/                # About page
  works/
    page.tsx            # Works listing (reads MDX frontmatter)
    [slug]/             # Dynamic project pages (full MDX compile)
components/
  ui/                   # shadcn base components (DO NOT hand-edit)
  navbar.tsx            # Sticky, scroll-aware
  works-section.tsx     # Homepage project grid
  skills-section.tsx    # Tech tags
  animate-on-scroll.tsx # IntersectionObserver wrapper (variants: fade, slide-up, rotate-3d)
  mdx-components.tsx    # Custom MDX renderers (ProjectImage, gallery, etc.)
content/works/          # MDX project files (frontmatter-driven)
  capsule.mdx
  esthalo.mdx
  gov-br.mdx
  friends-travel.mdx
  sw-clean-energy.mdx   # stub — needs content
lib/
  mdx.ts                # Full MDX compiler (for [slug] pages)
  mdx-listing.ts        # Lightweight frontmatter-only (for listings)
  utils.ts              # cn() helper
hooks/
  use-intersection-observer.ts
  use-mobile.tsx
  use-toast.ts
public/images/          # 30+ portfolio images/mockups
```

## Theme
- Primary red: `#d80e00` → CSS var `--primary`
- Secondary blue: `#229eff` → CSS var `--secondary`
- Fonts: General Sans (local TTF) + DM Mono (Google)
- Dark mode: CSS vars + `next-themes`
- Tailwind custom breakpoints: sm/md/lg/xl/2xl (xl=2xl=1152px)

## Content Pattern (MDX)
Frontmatter fields: `title`, `image`, `category`, `services`, `year`, `slug`
- Listings use `mdx-listing.ts` (gray-matter only, no compile)
- Detail pages use `mdx.ts` (full `next-mdx-remote` compile)
- Add new project: create `content/works/[slug].mdx`, ensure `works-section.tsx` includes it if hardcoded

## Animation Pattern
- Scroll entrance: wrap with `<AnimateOnScroll variant="...">` or Tailwind `motion-*` classes
- Motion classes from `tailwindcss-motion` plugin: `motion-translate-y-in-100`, `motion-blur-in-md`, `motion-opacity-in-0`, `motion-ease-spring-smooth`, `motion-delay-*`
- `duration-1500` custom utility in globals.css

## Config Notes
- `next.config.mjs`: ESLint + TS errors ignored on build, images unoptimized, MDX transpiled
- `tsconfig.json`: path alias `@/*` → root
- `.prettierrc`: no semis, single quotes, Tailwind class sort
- `components.json`: shadcn config pointing to `@/components/ui`

## Key Decisions
- `'use client'` on homepage (scroll-based interactivity)
- Two-tier MDX loading to avoid compile cost on listing pages
- `AboutSection` commented out on homepage (exists in components, not rendered)
- `sw-clean-energy.mdx` is stub (305B) — incomplete project
