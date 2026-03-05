# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed

- **Full-height thumbnail strip with preserved aspect ratios in `ProjectGallery`:** The thumbnail vertical strip now spans the **full height** of the main image on large screens. The outer container uses `lg:items-stretch` so both columns share the same height. The main image panel uses `h-full` + Next.js `fill` mode with `object-contain` so it fills the full shared height without cropping. Each thumbnail image uses `h-auto w-full object-contain` (non-fill mode with explicit `width`/`height` props), letting its height be driven entirely by its **intrinsic aspect ratio** — no letterbox space, no cropping. On mobile the strip remains a horizontal row with `aspect-video` cells, unchanged from previous behaviour. Only `components/project-gallery.tsx` was modified.
- **Responsive thumbnail strip in `ProjectGallery`:** On large screens (`lg` and above) the thumbnail strip now appears as a **vertical column** (`w-24`, `flex-col`) to the **right** of the main image viewport, while the main viewport expands with `flex-1` to fill the remaining width. On smaller screens the strip remains a **horizontal row** below the image, unchanged from the previous behaviour. Each thumbnail button also received `aspect-video` to prevent height collapse when stacked vertically. Only `components/project-gallery.tsx` was modified.

### Added

- **Scroll-aware navbar:** The navigation bar now reduces its height by ~30% after the user scrolls more than 10px down the page. Padding transitions from `py-8` to `py-5` and the logo scales from `w-16/lg:w-20` to `w-11/lg:w-14`, all with a smooth `transition-all duration-300 ease-in-out` animation. The compact state is suppressed while the dropdown menu is open. Changes are isolated to `components/navbar.tsx`.
- Added an optional `text` property to the `LetsTalkButtonProps` interface in `components/lets-talk-button.tsx`, allowing the button text to be customizable instead of defaulting strictly to "Let's Build".

### Fixed

- Fixed an issue where the dropdown menu would not automaticaly close when clicking on navigation links, especially hash links like "Works" and "Experience", by attaching the `onClose` handler to all `Link` and `ArrowLinkButton` components inside the menu.
- Fixed navigation link destinations in `components/dropdown-menu.tsx` and `components/footer-section.tsx`. Updated links to point correctly: "About Me" → `/about`, "Works" → `/#works` (homepage anchor), "Experience" → `/#experience` (homepage anchor). Also corrected swapped href/text entries in the footer.
- Added `id="works"` to `components/works-section.tsx` and `id="experience"` to `components/awards-section.tsx` to enable anchor-based navigation from the menu and footer links.
