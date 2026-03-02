# Goal Description

The objective is to fix and optimize the navigation links in the drop-down menu and footer section to point to the correct pages and sections. Specifically:

- **About me** should link to `/about` (the `app/about/page.tsx` page).
- **Works** should link to the Works section (`components/works-section.tsx`) on the home page (`/#works`).
- **Experience** should link to the Experience section (`components/awards-section.tsx`) on the home page (`/#experience`).

This plan covers adding the necessary HTML `id` attributes to the target sections and updating all corresponding `href` values in the navigation components.

## User Review Required

Please review this plan. Note that changing the "Works" link from `/works` to `/#works` implies converting it to a page anchor if the user is on the homepage. Let me know if you approve this approach!

## Proposed Changes

### `components/works-section.tsx`

- **[MODIFY]** Add `id="works"` to the root `<section>` wrapper so it can be targeted by anchor links.
  - From: `<section className="py-24 md:py-32">`
  - To: `<section id="works" className="py-24 md:py-32">`

### `components/awards-section.tsx`

- **[MODIFY]** Add `id="experience"` to the root `<section>` wrapper.
  - From: `<section className="py-24 md:py-32">`
  - To: `<section id="experience" className="py-24 md:py-32">`

### `components/dropdown-menu.tsx`

- **[MODIFY]** Update the **Works** link `href` from `/works` to `/#works` (both the text link and `ArrowLinkButton`).
- **[MODIFY]** Update the **Experience** link text (currently "Experience") and `href` from `/insights` to `/#experience` (both text link and `ArrowLinkButton`).

### `components/footer-section.tsx`

- **[MODIFY]** Fix the swapped navigation links and update `href` values:
  - Text "Works" -> `href="/#works"` (currently points to `/about`)
  - Text "About Me" -> `href="/about"` (currently points to `/works`)
  - Text "Experience" -> `href="/#experience"` (currently points to `/insights`)

## Tasks Breakdown

- [x] Add `id` attributes to `WorksSection` and `AwardsSection`.
- [x] Update `href` paths in `dropdown-menu.tsx`.
- [x] Fix swapped text/links and update `href` paths in `footer-section.tsx`.

## Verification Plan

### Manual Verification

1. Start the development server (`pnpm dev`).
2. Open the browser and test the **Drop-down menu** links to ensure clicking "About Me" goes to `/about`, "Works" scrolls to the Works section, and "Experience" scrolls to the Experience section.
3. Scroll to the **Footer** and verify the same links behave correctly.
