# Ghosthands — Project Context

## Identity
Portfolio site for Thiago Bueno (thbueno), software engineer, 10yr exp.
Repo: `thbueno/ghosthands` | pkg manager: pnpm 10.8.0

## Stack
- Next.js 15.2.8, React 19, TypeScript (strict)
- Tailwind CSS 3.4.17 + shadcn/ui + Radix UI primitives
- `tailwindcss-motion` (Rombo) + `motion/react` (Framer Motion) + Lenis (smooth scroll) + Three.js (TrailCanvas)
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
  page.tsx              # Homepage: HomeNavbar → ProfileHeader → WorksSection → AboutBlock → SkillsSection → Footer
  layout.tsx            # Root layout (no navbar — pages render their own chrome)
  globals.css           # CSS vars, animations, custom utilities
  works/
    layout.tsx          # Passthrough only — does NOT add navbar/footer
    page.tsx            # Works listing (reads MDX frontmatter) — renders WorkNavbar inline
    [id]/
      page.tsx          # Project detail (MDX) — renders WorkNavbar + footer inline
  blog/
    layout.tsx          # Passthrough only (same pattern as works)
    page.tsx            # Blog listing — shows published posts only (draft gate)
    [slug]/
      page.tsx          # Blog post detail (MDX)
components/
  ui/                   # shadcn base components (DO NOT hand-edit)
  home-navbar.tsx       # Homepage-only navbar: logo + ThemeToggle + LetsTalkButton, no nav links
  profile-header.tsx    # Avatar + name + bio + social icons (LinkedIn, WhatsApp, Email)
  works-section.tsx     # Homepage 2×2 card grid (hardcoded project list)
  skills-section.tsx    # 4-category 2×2 grid (Frontend, Backend, Cloud & Infra, AI/ML)
  tech-tag.tsx          # Pill tag component + FRONTEND/BACKEND/CLOUD/AI tag arrays + darkInvert flag
  work-navbar.tsx       # Apple Newsroom-style sticky navbar for /works/* + /blog/* — has "Writing" link
  trail-canvas.tsx      # Three.js WebGL mouse trail (client-only, dynamic import)
  animate-on-scroll.tsx # IntersectionObserver wrapper (variants: fade, slide-up, rotate-3d)
  project-sidebar.tsx   # Sticky sidebar on /works/[id] with fade-out on scroll
  mdx-components.tsx    # Custom MDX renderers (ProjectImage, gallery, etc.)
  lets-talk-button.tsx  # Filled pill button (variants: light, dark, surface-dark, red)
  project-gallery.tsx   # Embla carousel for project images
content/
  works/                # MDX project files (frontmatter-driven)
    capsule.mdx
    esthalo.mdx
    gov-br.mdx
    friends-travel.mdx
    sw-clean-energy.mdx # stub — needs content, commented out in works-section.tsx
  blog/                 # MDX blog posts — draft: true hides from listing
    my-first-post.mdx   # sample draft post
lib/
  mdx.ts                # Full MDX compiler (for [id] pages)
  mdx-listing.ts        # Lightweight frontmatter-only (for works listings)
  blog.ts               # Blog helpers: getAllPosts, getLatestPosts, getPostBySlug, getAllPostSlugs
  utils.ts              # cn() helper
public/images/          # 30+ portfolio images/mockups
  stack/                # Tech logo SVGs (15 new added for Cloud/Infra + AI/ML categories)
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

No GSAP. Three animation layers:

### 1. `tailwindcss-motion` (Rombo) — ProfileHeader entrance
CSS utility classes, no JS. Applied directly on ProfileHeader children:
```
motion-translate-y-in-100 motion-blur-in-md motion-opacity-in-0
motion-duration-700 motion-delay-[Nms] motion-ease-spring-smooth
```
Stagger via incremental `motion-delay-*`: avatar 200ms → name 300ms → bio 400ms → social 500ms.

### 2. `motion/react` (Framer Motion) — JS-driven animations
Used in `blur-text.tsx` and `navbar.tsx`. Import from `'motion/react'` (not `'framer-motion'`).

### 3. `AnimateOnScroll` — scroll-triggered CSS animations
IntersectionObserver wrapper (`components/animate-on-scroll.tsx`). Variants: `default`, `slide-up`, `fade`, `rotate-3d`. Props: `threshold`, `delay`, `triggerOnce`.
- Skills cards: `threshold={0.15}`, staggered `delay` props
- AboutBlock: `threshold={0.2}`

### Lenis — smooth scroll
`lerp: 0.08`, initialized in `useEffect` on homepage, respects `prefers-reduced-motion`, destroyed on unmount.

### TrailCanvas
Three.js WebGL mouse trail. `dynamic(() => import(...), { ssr: false })` in `app/page.tsx`.

## Layout Patterns

### Homepage (`app/page.tsx`)
```
<TrailCanvas />  ← fixed z-0, pointer-events-none
<div relative z-[1]>
  <HomeNavbar />  ← logo + ThemeToggle + LetsTalkButton, scroll-aware blur/border
  <main max-w-[915px] px-9 sm:px-16 pt-16 pb-16 md:pt-28 md:pb-32 gap-10 md:gap-16>
    <ProfileHeader />  ← children have opacity-0 translate-y-4 blur-sm for GSAP
    <WorksSection />
    <AboutBlock />  ← inline component, about-block class for GSAP, placeholder copy
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
- Homepage main: `px-3 sm:px-9 lg:px-16` horizontal, `gap-16 md:gap-24` vertical
- Works/[id] content wrapper: `px-3 sm:px-9 md:px-16`
- Footer vertical: `py-10 md:py-17.5`
- Card body: `p-4 sm:p-5.5`
- Skills cards: `p-5 sm:p-8` (reduced from flat p-8)
- Do NOT use `px-9` as base for mobile — use `px-3` on mobile

## Mobile Navbar Rules
- Both navbars: avatar `hidden sm:block`, nav links `hidden sm:flex`
- ThemeToggle: `p-2 sm:p-3`, `iconSize={16}` to match button height
- LetsTalkButton: `px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm`, always `whitespace-nowrap`

## Skills Section

4-card 2×2 responsive grid (`grid-cols-1 md:grid-cols-2 gap-9`). Each card: `rounded-3xl bg-card-light p-8`. Stagger delays: 0 / 50 / 100 / 150ms via AnimateOnScroll.

| Category | Tags (8 each) |
|----------|---------------|
| Frontend | React · Next.js · TypeScript · Tailwind · Figma · React Native · Motion · Expo |
| Backend | Node.js · PostgreSQL · GraphQL · Supabase · Redis · Python · MongoDB · Express |
| Cloud & Infra | AWS · Kubernetes · Docker · Terraform · GitHub Actions · Vercel · Git · Jira |
| AI / ML | OpenAI · Anthropic · LangChain · LlamaIndex · pgvector · Pinecone · PyTorch · HuggingFace |

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
- `'use client'` on homepage (Lenis + motion hooks need browser APIs)
- `app/works/layout.tsx` and `app/blog/layout.tsx` are passthroughs (`<>{children}</>`) — each page handles its own navbar/footer
- New Tailwind arbitrary values (e.g. new `pt-[Npx]`) require `.next` cache delete + server restart to compile under Turbopack
- `sw-clean-energy.mdx` is stub — commented out in `works-section.tsx` projects array
- `AboutSection` exists in components but not rendered anywhere — `AboutBlock` is the inline version used in `app/page.tsx`
- Blog posts: `draft: true` in frontmatter = hidden from listing and any future homepage preview
- `BlogSection` (homepage blog preview) not yet built — when ready: `components/blog-section.tsx` + add to `app/page.tsx` after `<AboutBlock />` + wrap with `AnimateOnScroll`
- SkillsSection tech tags: `darkInvert: true` flag on Tag = `dark:brightness-0 dark:invert` applied (for black/no-fill logos); colored brand logos omit flag to preserve colors in both modes
- `ThemeToggle` uses `resolvedTheme` (not `theme`) to correctly detect system dark mode — `theme` returns `'system'` not `'dark'`
- `ProjectSidebar` accepts optional `className` prop (uses `cn()`) — on works/[id] mobile: `order-2 md:order-none` moves it below content
- `ProjectGallery` has built-in lightbox: click any image → full-screen modal, keyboard nav (←/→/Esc), dot indicators
- Gallery images use `aspect-[4/3]` + `object-cover` for both main carousel and thumbnails — no letterboxing
- Works section cards: `aspect-[4/3]` image, `gap-6 sm:gap-4.5` between cards
- TechTag: mobile uses `flex flex-wrap gap-2`, tags `px-2.5 py-1 text-2xs`, icon `h-4 w-4`; sm+ reverts to full size
