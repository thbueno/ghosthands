# Ghosthands Handoff — 2026-05-27

## Project

Portfolio site for Thiago Bueno (thbueno).  
Repo: `/home/bueno/builds/ghosthands` | pkg manager: `pnpm`  
Full project context: `/home/bueno/builds/ghosthands/CLAUDE.md` (authoritative)

---

## What was done this session

### 1. HomeNavbar (`components/home-navbar.tsx`) — NEW

Simplified navbar for the homepage only. No hamburger, no nav links.

- Ghost-hands logo (SVG) on left
- `ThemeToggle` + `LetsTalkButton` on right
- Scroll-aware blur/border (`bg-background/80 backdrop-blur-md`) via `scrollY > 10`
- Same `-mx-7 md:-mx-10 lg:-mx-40` full-width breakout as other navbars

Added to `app/page.tsx` above `<main>` inside the `relative z-[1]` wrapper.

### 2. Social icons in ProfileHeader (`components/profile-header.tsx`)

- Icon-only pill buttons: LinkedIn (`lucide-react`), WhatsApp (custom inline SVG), Email (`lucide-react`)
- Style: `bg-card-light p-3 rounded-full` → `hover:bg-secondary hover:text-white`
- Icon scales `group-hover:scale-110` (minimalist interaction animation)
- Links: LinkedIn → linkedin.com/in/thiago-bueno-dos-santos-28714924/, WhatsApp → wa.me/84784551070, Email → mailto:thinobueno@proton.me

### 3. Per-element GSAP cascade (`app/page.tsx`)

**Pattern**: `.profile-header > *` targets ALL direct children with stagger — no individual class names needed.

GSAP timeline sequence (delay: 0.2s):

1. `.profile-header > *` — stagger 0.1s each (avatar → name → bio → social icons), duration 0.45s
2. `.section-label` — `+=0.1` offset
3. `.product-card` — `+=0.05` offset, stagger 0.08s
4. `.about-block` — `+=0.05` offset
5. `.footer` — `+=0.1` offset

**Critical rules** (do NOT break):

- Use `fromTo()` NOT `to()` — Tailwind's `translate-y-4` uses CSS custom property transforms that conflict with GSAP's matrix transform. `fromTo` explicitly sets both states, avoiding the conflict.
- Do NOT call `gsap.set()` upfront to hide elements — React Strict Mode double-mounts effects; `set()` hides everything via inline style, and if the timeline gets killed on first mount, elements stay permanently hidden.
- Rely on Tailwind `opacity-0 translate-y-4 blur-sm will-change-transform` classes on elements for SSR initial state.
- All timeline offsets are POSITIVE `+=` values — negative `-=` offsets caused bugs.

ProfileHeader children have the initial state classes directly:

```tsx
<div className="translate-y-4 opacity-0 blur-sm will-change-transform">  {/* avatar */}
<h1  className="translate-y-4 opacity-0 blur-sm will-change-transform">
<h2  className="mt-2 translate-y-4 leading-[1.5] opacity-0 blur-sm will-change-transform">
<div className="mt-5.5 flex translate-y-4 gap-3 opacity-0 blur-sm will-change-transform">  {/* social */}
```

### 4. AboutBlock (`app/page.tsx`)

Inline `AboutBlock` component (not a separate file). Lives between `<WorksSection />` and `<SkillsSection />` in the main content flow.

- No background, not full-width, same `max-w-[980px]` as main
- Has `about-block translate-y-4 opacity-0 blur-sm will-change-transform` for GSAP
- Placeholder copy — user should edit the paragraph text to their preference

### 5. Blog infrastructure — NEW (hidden until published)

New files:

- `lib/blog.ts` — `getAllPosts()`, `getLatestPosts()`, `getPostBySlug()`, `getAllPostSlugs()`
- `content/blog/my-first-post.mdx` — sample post with `draft: true`
- `app/blog/layout.tsx` — passthrough (same pattern as works)
- `app/blog/page.tsx` — listing page (renders WorkNavbar; shows "No posts yet" if all draft)
- `app/blog/[slug]/page.tsx` — detail page

Gate: `draft: true` in frontmatter = hidden. Set `draft: false` to publish. `/blog` listing and homepage preview only show published posts.

**Note**: Homepage blog preview section (`BlogSection`) was discussed but NOT implemented yet. When ready: create `components/blog-section.tsx`, add `<BlogSection />` to `app/page.tsx` after `<AboutBlock />`, add it to GSAP cascade.

WorkNavbar (`components/work-navbar.tsx`) now has "Writing" link pointing to `/blog`.

### 6. SkillsSection redesign — 4-category 2×2 grid

Expanded from 2 cards (Frontend, Backend) to 4-card 2×2 responsive grid.

**New structure** (`components/skills-section.tsx`):

- `grid-cols-1 md:grid-cols-2 gap-9` layout
- 4 categories with staggered animation (0 / 50 / 100 / 150ms delays)
- Same `rounded-3xl bg-card-light p-8` card style as before

**Tag lists** (`components/tech-tag.tsx`) — 8 tags each:
| Category | Tags |
|----------|------|
| Frontend | React · Next.js · TypeScript · Tailwind · Figma · React Native · Motion · Expo |
| Backend | Node.js · PostgreSQL · GraphQL · Supabase · Redis · Python · MongoDB · Express |
| Cloud & Infra | AWS · Kubernetes · Docker · Terraform · GitHub Actions · Vercel · Git · Jira |
| AI / ML | OpenAI · Anthropic · LangChain · LlamaIndex · pgvector · Pinecone · PyTorch · HuggingFace |

**Dark mode logo inversion** — selective per-tag `darkInvert` flag:

- `Tag` interface has optional `darkInvert?: boolean`
- Black/no-fill logos get `darkInvert: true` → `dark:brightness-0 dark:invert` applied
- Colored logos (React blue, TS blue, GraphQL pink, Supabase green, Docker blue, LlamaIndex purple gradient, pgvector/PostgreSQL blue, etc.) keep brand colors in both modes

**New SVG logos** added to `public/images/stack/`:

- 12 real logos from Simple Icons via jsdelivr CDN
- `llamaindex-logo.svg` — real path with purple gradient (#9B59F5 → #5B21B6)
- `pinecone-logo.svg` — real path with `#1C1C1C` fill (darkInvert: true)
- `pgvector-logo.svg` — copies PostgreSQL logo as fallback

---

## Current file states (key changes)

| File                             | Key state                                                                                                                         |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `app/page.tsx`                   | HomeNavbar + ProfileHeader + WorksSection + AboutBlock + SkillsSection + footer. GSAP targets `.profile-header > *` with stagger. |
| `components/home-navbar.tsx`     | NEW — logo + toggle + CTA, no nav links                                                                                           |
| `components/profile-header.tsx`  | Icon-only social pills (LinkedIn, WhatsApp, Email). Children have individual GSAP initial-state classes.                          |
| `components/work-navbar.tsx`     | Added "Writing" nav link → `/blog`                                                                                                |
| `components/skills-section.tsx`  | 2×2 grid, 4 categories, staggered AnimateOnScroll                                                                                 |
| `components/tech-tag.tsx`        | 4 tag arrays (FRONTEND/BACKEND/CLOUD/AI), `darkInvert` field on Tag interface, conditional `dark:brightness-0 dark:invert` on img |
| `public/images/stack/`           | 15 new SVG logos for Cloud/Infra + AI/ML categories                                                                               |
| `lib/blog.ts`                    | NEW — MDX blog listing + detail helpers, draft gate                                                                               |
| `app/blog/`                      | NEW — listing + detail pages                                                                                                      |
| `content/blog/my-first-post.mdx` | NEW — sample draft post                                                                                                           |

---

## Known outstanding / unresolved

- **GSAP animation on profile header not confirmed working** — user reported it still wasn't animating at end of prior session. Needs browser verification.
- **AboutBlock copy** is placeholder — user needs to edit the paragraph in `app/page.tsx:AboutBlock()`
- **Blog homepage preview section** not yet built — see note in section 5 above
- `sw-clean-energy.mdx` stub still commented out in `works-section.tsx`
- `app/works/page.tsx` (works listing) may need visual review / font alignment

## Dev server

```bash
pnpm dev
```

If new Tailwind arbitrary values don't compile: delete `.next/` and restart.

---

## Suggested skills

- `/verify` — run app and confirm skills grid renders correctly in both light and dark mode; check logo inversion works
- `/impeccable` — visual audit of homepage with new 4-category skills grid
- `/caveman:caveman-review` — quick diff review before committing
