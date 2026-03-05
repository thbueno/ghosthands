# Lightweight Carousel with Thumbnails for Works Detail Pages

Build a reusable image carousel with thumbnail navigation for the project detail pages (`/works/[id]`). Images are sourced from each project's MDX frontmatter, making the carousel content-driven and easy to manage per project.

## Design Decisions

| Decision           | Choice                                                  | Rationale                                                            |
| ------------------ | ------------------------------------------------------- | -------------------------------------------------------------------- |
| Carousel engine    | Existing `embla-carousel-react`                         | Already installed (v8.5.1). Zero new dependencies.                   |
| Image source       | MDX frontmatter `galleryImages` array                   | Content authors add/remove/reorder images by editing one YAML field. |
| Component location | `components/project-gallery.tsx`                        | Reusable from any page or MDX content.                               |
| Rendering          | Client component (`'use client'`)                       | Embla requires browser APIs; thumbnails need click handlers.         |
| Thumbnail nav      | `< [thumb] [thumb] [thumb] [thumb] >` with `scrollTo()` | Matches wireframe. Active thumb gets a ring highlight.               |

## Tasks

- [ ] Add `galleryImages?: string[]` to `ProjectFrontmatter` in `lib/mdx.ts`
- [ ] Add `galleryImages` frontmatter to each MDX file in `content/works/`
- [ ] Create `components/project-gallery.tsx` (client component)
- [ ] Integrate `<ProjectGallery>` into `app/works/[id]/page.tsx` replacing static hero image
- [ ] Verify build passes (`pnpm build`)
- [ ] Visual verification in browser

## Implementation Notes

_(Updated as implementation progresses)_
