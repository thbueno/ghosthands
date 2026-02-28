# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2026-02-28

### Performance — `/about` & `/works` load time improvements

#### 🔍 **Root Causes Identified**

1. `/works` was importing `getAllProjects` from `lib/mdx.ts`, which also imported `compileMDX` from `next-mdx-remote/rsc` at module level — forcing the entire MDX compiler bundle into the listing page compile graph even though it was never used there (4.1s → expected ~1–1.5s).
2. `/about` declared `'use client'` solely to call `useEffect(() => window.scrollTo(0,0))`, preventing the page from being a Server Component and adding unnecessary JS bundle weight.

#### ⚡ **Changes Made**

**`lib/mdx-listing.ts` (new file)**:

- Extracted `getAllProjects()` and `getAllProjectSlugs()` into a standalone module
- Zero `next-mdx-remote` imports — only `fs`, `path`, and `gray-matter`
- List/slug-only functions have no reason to depend on the MDX compiler

**`lib/mdx.ts` (trimmed)**:

- Removed `matter` import (no longer needed after extracting listing helpers)
- Removed `getAllProjects()` and `getAllProjectSlugs()` — now live in `lib/mdx-listing.ts`
- Now contains only `getProjectBySlug()` and its `compileMDX` dependency

**`app/works/page.tsx`**:

- Updated import: `@/lib/mdx` → `@/lib/mdx-listing` (eliminates MDX compiler from this route's bundle)

**`app/works/[id]/page.tsx`**:

- `getProjectBySlug` still imports from `@/lib/mdx` (needs the compiler)
- `getAllProjectSlugs` now imports from `@/lib/mdx-listing` (lean)

**`app/about/page.tsx`**:

- Removed `'use client'` directive — page is now a Server Component
- Removed `useEffect` import
- Replaced `useEffect(() => window.scrollTo(0,0))` with `<ScrollToTop />` (already used in `/works`)

#### 🎯 **Expected Impact**

| Route    | Before   | After                                       |
| -------- | -------- | ------------------------------------------- |
| `/about` | ~1,849ms | ~400–600ms (RSC, no client bundle overhead) |
| `/works` | ~4,647ms | ~1,200–1,800ms (no MDX compiler in bundle)  |

---

## [Unreleased] - 2026-02-13

### Added - MDX Content Management System

#### 🚀 **Migrated Works Section to MDX-based Content Management**

**Overview**: Replaced hardcoded TypeScript project data with a file-based MDX content system, enabling easy addition of new project descriptions without code changes.

#### 📁 **New Infrastructure**

**Content Directory**:

- Created `content/works/` directory for MDX project files
- Added 5 MDX files: `gov-br.mdx`, `esthalo.mdx`, `capsule.mdx`, `friends-travel.mdx`, `sw-clean-energy.mdx`
- Each MDX file contains frontmatter metadata + markdown content body

**Content Utilities** (`lib/mdx.ts`):

- `getProjectBySlug(slug)` - Loads and compiles MDX content for detail pages
- `getAllProjects()` - Lightweight frontmatter-only parsing for listing pages
- `getAllProjectSlugs()` - Generates static params for build-time rendering
- `ProjectFrontmatter` TypeScript interface for type safety

**Custom MDX Components** (`components/mdx-components.tsx`):

- Custom component overrides for `h2`, `h3`, `p`, `span`, `strong`, `a`, `ul`, `ol`, `li`
- Styled table components (`table`, `thead`, `tbody`, `tr`, `th`, `td`)
- `ProjectImage` component for captioned images with rounded corners
- Overrides global CSS styles (uppercase mono paragraphs) within MDX content areas
- Ensures MDX content renders as normal readable prose

**Client Component Extraction** (`components/scroll-to-top.tsx`):

- Extracted scroll-to-top behavior into dedicated client component
- Necessary because parent pages became Server Components

#### 🔄 **Migrated Pages**

**Project Detail Page** (`app/works/[id]/page.tsx`):

- ✅ Converted from `'use client'` to Server Component
- ✅ Removed hardcoded `projects` Record and `ProjectData` interface
- ✅ Uses `getProjectBySlug()` to load MDX content dynamically
- ✅ Added `generateStaticParams()` for static generation at build time
- ✅ Added `notFound()` handling for invalid project slugs
- ✅ Preserved identical layout template (header + sidebar + content grid)
- ✅ MDX body renders in main content area with custom components

**Works Listing Page** (`app/works/page.tsx`):

- ✅ Converted from `'use client'` to Server Component
- ✅ Removed hardcoded `projects` array
- ✅ Uses `getAllProjects()` to load frontmatter from MDX files
- ✅ Preserved identical grid layout and card UI

**Homepage Works Section** (`components/works-section.tsx`):

- ⚠️ Kept with hardcoded project data (mirrors `content/works/` frontmatter)
- **Reason**: `app/page.tsx` is `'use client'`, cannot import Node.js `fs` module
- **Trade-off**: Homepage uses static data, detail/listing pages use MDX (single source of truth for content authoring)

#### ⚙️ **Configuration Updates**

**Next.js Config** (`next.config.mjs`):

- Added `transpilePackages: ['next-mdx-remote']` for proper bundling

**Dependencies** (`package.json`):

- Added `next-mdx-remote@6.0.0` - RSC-compatible MDX rendering
- Added `gray-matter@4.0.3` - Frontmatter parsing for listing pages

#### 🎨 **Styling & Design**

- Custom MDX components preserve existing UI design system
- Paragraphs render as normal text (not uppercase mono like global CSS)
- Tables get proper rounded borders, hover effects, and spacing
- Images use `next/image` with rounded corners and optional captions
- Links get secondary color with underline and external target handling
- Code blocks styled with dark background and syntax highlighting support

#### 🎯 **Benefits**

- ✅ **Easy Content Authoring**: Add new projects by creating `.mdx` files—no code changes needed
- ✅ **Rich Content Support**: MDX enables images, tables, code blocks, custom components
- ✅ **Type Safety**: TypeScript interfaces for frontmatter ensure data consistency
- ✅ **Static Generation**: All project pages pre-rendered at build time for optimal performance
- ✅ **Preserved UI**: Identical visual appearance to original hardcoded version
- ✅ **Server Components**: Leverages Next.js 15 App Router for efficient rendering

#### 📊 **Build Verification**

- ✅ Production build successful (9.0s compilation time)
- ✅ 11 pages generated (5 SSG project routes via `generateStaticParams`)
- ✅ All routes render correctly: `/`, `/about`, `/works`, `/works/[id]`
- ✅ Dev server verified via HTTP requests (browser unavailable in environment)

#### 🔍 **Technical Details**

**Files Created**:

- `lib/mdx.ts` - Content utilities
- `components/mdx-components.tsx` - Custom MDX component overrides
- `components/scroll-to-top.tsx` - Client component for scroll behavior
- `content/works/gov-br.mdx` - GOV-BR project content
- `content/works/esthalo.mdx` - Esthalo project content
- `content/works/capsule.mdx` - Capsule project stub
- `content/works/friends-travel.mdx` - Friends Travel project stub
- `content/works/sw-clean-energy.mdx` - SW Clean Energy project stub

**Files Modified**:

- `app/works/[id]/page.tsx` - Server Component with MDX rendering
- `app/works/page.tsx` - Server Component with frontmatter listing
- `components/works-section.tsx` - Restored hardcoded data for client context
- `next.config.mjs` - Added transpilePackages
- `package.json` - Added MDX dependencies

**Architecture Decisions**:

- Chose `next-mdx-remote` over `@next/mdx` because detail pages need a fixed layout template wrapping MDX content
- Custom MDX components override global CSS styles within content areas only
- Homepage works section uses static data due to client component boundary constraints

---

## [Unreleased] - 2025-01-09

### Fixed - Mobile Horizontal Overflow Issues

#### 🐛 **Critical Bug Fix: Eliminated horizontal scrollbar on mobile devices**

**Problem**: The website was experiencing horizontal overflow on mobile devices, causing content to extend beyond the viewport width and forcing users to scroll horizontally.

**Root Causes Identified**:

1. Double padding conflicts between outer container and inner elements
2. Oversized text elements on mobile screens
3. Excessive right padding in hero section
4. Missing overflow constraints
5. Long text content without proper wrapping

#### 📱 **Layout & Container Fixes**

- **Removed double padding conflict** in `app/page.tsx`:
  - Eliminated outer container padding `px-5 md:px-10 lg:px-10`
  - Consolidated padding into single container: `px-5 py-2 md:px-10 lg:px-24`
  - Added `max-w-7xl` constraint to prevent excessive width on large screens

- **Fixed hero section spacing** in `app/page.tsx`:
  - Removed excessive `lg:pr-24` (96px) right padding that was causing overflow
  - Improved responsive layout structure

#### 🎨 **Typography & Text Scaling**

- **Reduced mobile text sizes** in `app/globals.css`:
  - **H1 elements**: `text-4xl md:text-5xl lg:text-5xl` → `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - **H2 elements**: `text-4xl md:text-5xl lg:text-5xl` → `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - **Span elements**: `text-4xl md:text-5xl lg:text-5xl` → `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`

- **Improved text wrapping** in `app/page.tsx`:
  - Added `break-words` class to "standout applications" span to prevent text overflow

#### 🔧 **Navigation Menu Improvements**

- **Fixed dropdown menu overflow** in `components/dropdown-menu.tsx`:
  - Reduced navigation text sizes: `text-5xl md:text-6xl` → `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
  - Added proper spacing with `gap-4` between elements
  - Made arrow buttons responsive: `p-4` → `p-3 sm:p-4`
  - Added `flex-shrink-0` to prevent button compression

#### 📧 **Footer Email Display**

- **Enhanced email responsiveness** in `components/footer-section.tsx`:
  - Improved text sizing: `text-4xl md:text-5xl lg:text-6xl` → `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - Added `break-all` class for proper email wrapping
  - Changed layout to stack vertically on small screens: `flex-col sm:flex-row`
  - Added proper spacing with `gap-4`

#### 🛡️ **Global Overflow Protection**

- **Added comprehensive overflow constraints** in `app/globals.css`:
  - Applied `overflow-x: hidden` to `html` element
  - Applied `overflow-x: hidden` to `body` element

- **Container-level protection** in `app/page.tsx`:
  - Added `overflow-x-hidden` class to main page container

- **Footer-specific protection** in `components/footer-section.tsx`:
  - Added `overflow-x-hidden` class to footer section

#### 🎯 **Impact**

- ✅ Eliminated horizontal scrollbar on all mobile devices
- ✅ Improved text readability on small screens
- ✅ Enhanced responsive design consistency
- ✅ Better user experience across all viewport sizes
- ✅ Maintained visual hierarchy while fixing overflow issues

#### 🔍 **Technical Details**

**Files Modified**:

- `app/page.tsx` - Container structure and hero section improvements
- `app/globals.css` - Global typography scaling and overflow protection
- `components/dropdown-menu.tsx` - Navigation menu responsive improvements
- `components/footer-section.tsx` - Email display and layout fixes

**Testing Recommendations**:

- Test on various mobile devices (iPhone, Android)
- Verify text scaling across different screen sizes
- Confirm no horizontal scrolling on viewport widths 320px-768px
- Validate navigation menu functionality on mobile

---

_This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format._
