# MDX Content Management for Works Section

## Summary

Migrate works content from hardcoded TS objects to local `.mdx` files with `next-mdx-remote`. Preserves identical UI.

## Tasks

- [ ] Install `next-mdx-remote` + `gray-matter`
- [ ] Create `content/works/` directory with `.mdx` files (gov-br, esthalo)
- [ ] Create `lib/mdx.ts` content utilities
- [ ] Create `components/mdx-components.tsx` custom MDX components
- [ ] Create `components/scroll-to-top.tsx` client component
- [ ] Migrate `app/works/[id]/page.tsx` to Server Component + MDX
- [ ] Migrate `app/works/page.tsx` to Server Component + MDX frontmatter
- [ ] Migrate `components/works-section.tsx` to use `getAllProjects()`
- [ ] Update `next.config.mjs` with `transpilePackages`
- [ ] Update `CHANGELOG.md`
- [ ] Verify build + dev server

## Reasoning

- `next-mdx-remote` chosen over `@next/mdx` because detail pages need a fixed layout template wrapping MDX content (sidebar + metrics), not full-page MDX routing.
- Frontmatter carries all metadata (title, image, services, metrics) so listing pages don't need to compile MDX.
- Custom MDX components override global CSS styles (which apply uppercase mono to `<p>`) within the content area.
