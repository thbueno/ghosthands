# Ghosthands Handoff — 2026-05-28

## Project

Portfolio site for Thiago Bueno (thbueno).
Repo: `/home/bueno/builds/ghosthands` | pkg manager: `pnpm`
Full project context: `/home/bueno/builds/ghosthands/CLAUDE.md` (authoritative)

---

## What was done this session — Mobile Layout Pass

Complete mobile layout fix pass based on real device screenshots. All changes are mobile-only (responsive prefixes), desktop unchanged unless noted.

### 1. Both Navbars (`home-navbar.tsx`, `work-navbar.tsx`)

- Avatar image: `hidden sm:block` — hidden on mobile, shown on sm+
- Nav links (work-navbar): `hidden sm:flex` — hidden on mobile to prevent wrap/collapse
- ThemeToggle: `p-2 sm:p-3`, `iconSize={16}` — matches LetsTalkButton height on mobile
- LetsTalkButton: `px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm`

### 2. ThemeToggle (`components/theme-toggle.tsx`)

**Bug fixed**: `theme` → `resolvedTheme` from `useTheme()`. When system is dark mode, `theme` returns `'system'` not `'dark'`, causing wrong icon. `resolvedTheme` always returns the actual resolved value.

### 3. LetsTalkButton (`components/lets-talk-button.tsx`)

Added `whitespace-nowrap` to base classes — prevents "Let's Talk" wrapping to two lines on narrow screens.

### 4. Homepage (`app/page.tsx`)

- `<main>`: `px-3 sm:px-9 lg:px-16`, `gap-16 md:gap-24`, `pt-12 pb-16 md:pt-24 md:pb-40`
- `AboutBlock <p>`: removed `pl-16 pr-16` (was causing word-per-line wrapping on mobile), now `text-base sm:text-lg md:text-xl`
- User updated AboutBlock copy (new bio text, added "My take on AI" section)

### 5. Works Detail (`app/works/[id]/page.tsx`)

- Content wrapper: `px-3 sm:px-9 md:px-16`
- `<h1>`: `text-2xl sm:text-3xl md:text-5xl`
- `<p>` category: `text-sm`
- MDX body: `[&_p]:text-base [&_p]:sm:text-lg [&_p]:md:text-xl`
- Sidebar: `order-2 md:order-none` — moves below MDX content on mobile
- MDX div: `order-1 md:order-none` — content appears first on mobile

### 6. ProjectSidebar (`components/project-sidebar.tsx`)

Added `className?: string` prop + `cn()` merge so `order-*` classes can be passed from parent.

### 7. Works Section (`components/works-section.tsx`)

- Card image: `aspect-[4/3]` (all breakpoints)
- Grid gap: `gap-6 sm:gap-4.5`
- Card `<h3>` (category): `text-base sm:text-lg`
- Card `<p>` (title): `text-sm sm:text-xl`

### 8. SkillsSection (`components/skills-section.tsx`)

- Removed `TAG_CLASS` override that was forcing `text-xl` (breaking mobile sizing)
- Card padding: `p-5 sm:p-8`, gap: `gap-4 sm:gap-5.5`

### 9. TechTag (`components/tech-tag.tsx`)

- Layout: `flex flex-wrap gap-2 sm:gap-3` (removed `grid-cols-2` attempt that caused overflow)
- Tag base (mobile): `px-2.5 py-1 text-2xs gap-1.5`
- Tag base (sm+): `sm:px-4.5 sm:py-2.5 sm:text-sm sm:gap-2`
- Icon: `h-4 w-4 sm:h-6 sm:w-6`

### 10. ProjectGallery (`components/project-gallery.tsx`)

Full rewrite:
- **Lightbox**: clicking any image opens full-screen modal overlay. Keyboard: ←/→ navigate, Esc closes. Dot indicators. Close button top-right. Click backdrop to close.
- **Aspect ratio**: all images (main carousel + thumbnails + fallback) use `aspect-[4/3]` wrapper + `object-cover` — no more empty space/letterboxing
- **Thumbnail ring**: `ring-foreground` instead of `ring-white` — visible in light mode
- `bg-background` removed from carousel container — no more background bleed

---

## Current file states (key changes)

| File | Key state |
|------|-----------|
| `components/home-navbar.tsx` | Avatar hidden mobile, buttons smaller, iconSize 16 |
| `components/work-navbar.tsx` | Nav links hidden mobile, avatar hidden mobile, buttons smaller |
| `components/theme-toggle.tsx` | `resolvedTheme` fix for system dark mode |
| `components/lets-talk-button.tsx` | `whitespace-nowrap` in base classes |
| `app/page.tsx` | `px-3` mobile padding, AboutBlock copy updated |
| `app/works/[id]/page.tsx` | `px-3` mobile, h1 responsive, sidebar order-2 mobile |
| `components/project-sidebar.tsx` | Added `className` prop |
| `components/works-section.tsx` | `aspect-[4/3]`, `gap-6` mobile, smaller card text |
| `components/skills-section.tsx` | `p-5 sm:p-8` cards, no TAG_CLASS override |
| `components/tech-tag.tsx` | `text-2xs px-2.5 py-1` mobile, `h-4 w-4` icon mobile |
| `components/project-gallery.tsx` | Lightbox, `aspect-[4/3]` + `object-cover`, ring-foreground |

---

## Known outstanding / unresolved

- `sw-clean-energy.mdx` stub still commented out in `works-section.tsx`
- Blog homepage preview section (`BlogSection`) not yet built
- `app/works/page.tsx` (works listing page) not reviewed for mobile
- Footer mobile layout not reviewed
- ProfileHeader entrance animation not verified on mobile
- Full light/dark mobile visual pass not done end-to-end

---

## Dev server

```bash
pnpm dev
```

If new Tailwind arbitrary values don't compile: delete `.next/` and restart.

---

## Suggested skills

- `/verify` — run app at 375px viewport and confirm all mobile fixes render correctly
- `/impeccable` — visual polish pass on works listing page + footer mobile
- `/code-review` — review ProjectGallery lightbox for edge cases
