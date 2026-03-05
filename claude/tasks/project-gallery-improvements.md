# Implementation Plan: Project Gallery Layout Adjustment

## Goal

Resolve three specific issues with the `ProjectGallery` component layout on large screens:

1. Make the thumbnail column full height, aligned from top to bottom with the main image viewport.
2. Ensure thumbnail images cover their containers completely without being cropped (no empty space).
3. Increase the width of the vertical thumbnail column and proportionally reduce the main image viewport size.

## Proposed Changes

### `components/project-gallery.tsx`

1.  **Adjust Column Widths & Layout Heights**
    - Update the main container to enforce `lg:items-stretch` (so columns share the height).
    - Reduce the main image viewport from `lg:flex-1` to `lg:w-3/4` (or `lg:w-2/3`) and apply `aspect-[3/2]` (or `aspect-video`) so the height of the row is securely dictated by this viewport rather than expanding to fit all thumbnails.
    - Increase the thumbnail vertical column width to `lg:w-1/4` (or `lg:w-1/3`).

2.  **Make Thumbnails Full Height and Scrollable**
    - Format the thumbnail container with `lg:h-full`, `lg:flex-col`, `lg:justify-start`, and `lg:overflow-y-auto`.
    - Use `absolute` positioning trick to make scroll work perfectly inside a flex child: wrap it or use `max-h-full`. Since we use aspect ratio on the main viewport, `h-full overflow-y-auto` on the right side should inherit the explicit height.

3.  **Ensure Thumbnails Cover Content**
    - Change the `Image` tag inside the thumbnail buttons from `object-contain` to `object-cover`. This will fill the `aspect-video` box perfectly instead of showing borders or white space.

## Verification Plan

- Start the development server (`pnpm dev`).
- Navigate to an existing project or work page that has the `<ProjectGallery />`.
- Verify on a large screen:
  - The thumbnail column on the right is wider.
  - The thumbnails take up the full height of the main image viewport, and scroll if they exceed the height.
  - The thumbnail images are completely filling their frames (`object-cover`).
- Verify on a small screen:
  - The responsive layout (thumbnails underneath) is preserved and functions as expected.
