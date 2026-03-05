# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- **Scroll-aware navbar:** The navigation bar now reduces its height by ~30% after the user scrolls more than 10px down the page. Padding transitions from `py-8` to `py-5` and the logo scales from `w-16/lg:w-20` to `w-11/lg:w-14`, all with a smooth `transition-all duration-300 ease-in-out` animation. The compact state is suppressed while the dropdown menu is open. Changes are isolated to `components/navbar.tsx`.
- Added an optional `text` property to the `LetsTalkButtonProps` interface in `components/lets-talk-button.tsx`, allowing the button text to be customizable instead of defaulting strictly to "Let's Build".

### Fixed

- Fixed an issue where the dropdown menu would not automaticaly close when clicking on navigation links, especially hash links like "Works" and "Experience", by attaching the `onClose` handler to all `Link` and `ArrowLinkButton` components inside the menu.
- Fixed navigation link destinations in `components/dropdown-menu.tsx` and `components/footer-section.tsx`. Updated links to point correctly: "About Me" → `/about`, "Works" → `/#works` (homepage anchor), "Experience" → `/#experience` (homepage anchor). Also corrected swapped href/text entries in the footer.
- Added `id="works"` to `components/works-section.tsx` and `id="experience"` to `components/awards-section.tsx` to enable anchor-based navigation from the menu and footer links.
