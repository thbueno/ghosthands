# Implement MDX in About Page

## Plan

The user requested to migrate the paragraphs in `app/about/page.tsx` to MDX, similar to how it's implemented for the Works section (`lib/mdx.ts`).

### 1. Create MDX Document

- Create `content/about.mdx`
- Copy the text paragraphs from `app/about/page.tsx` into this file, formatting them using Markdown. It will not strictly require frontmatter but can use standard Markdown tags, ensuring bold text and paragraphs are cleanly preserved.

### 2. Update MDX Utilities

- Modify `lib/mdx.ts` to add a new asynchronous helper function (e.g., `getAboutContent()` or `getPageContent(pageId)`). If no frontmatter is needed, we could just read the file and parse it. We will use `compileMDX` with the same `mdxComponents` as the projects listing for stylistic consistency.

### 3. Replace Hardcoded Content in the View

- Modify `app/about/page.tsx` to be an `async` function.
- Call `getAboutContent()` an retrieve the dynamically compiled content.
- Swap out the `<p>` nodes in the `mx-auto max-w-4xl...` div and insert `{content}` instead. This ensures all typography classes are still naturally applied via the container and the customized `mdxComponents`.

## Verification

- Start `npm run dev` and navigate to `/about`.
- Check that the page loads fast, does not crash during SSR, and the typography and visual appearance of the text remains identical to the previous hardcoded version.
