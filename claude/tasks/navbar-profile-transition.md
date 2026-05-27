# Task Plan: Navbar Profile Transition

Implement a dynamic transition in the navbar logo. Instead of displaying only the `ghost-hands.svg` logo, we will display the user's profile photo and lowercase name ("thiago bueno") once they scroll past the `ProfileHeader` component on the home page.

## Implementation Details

### 1. Detect scrolling past `ProfileHeader`

We will track the scroll state within `components/home-navbar.tsx`.

- In `HomeNavbar`, we will add a state variable `showProfile`.
- We will update the scroll listener to inspect the position of the `.profile-header` element in the DOM using `getBoundingClientRect()`.
- If the bottom of `.profile-header` is less than or equal to `80px` (matching the sticky navbar height offset), `showProfile` will be set to `true`; otherwise, it will be `false`.
- This ensures a clean transition point precisely when the profile section goes behind the sticky navbar.

### 2. Animate transition between SVG logo and Profile info

Within `components/home-navbar.tsx`'s brand section, we will:

- Wrap both the SVG logo and the profile photo inside a single `h-11 w-11` relative container.
- Apply a cross-fade and scale transition to swap the SVG logo with the profile photo (`/images/profile-photo.JPEG` with `rounded-full`).
- Add a text element for the name `"thiago bueno"` (lowercase, semi-bold, with matching typography).
- Transition the name text using a slide-out mask animation (`max-w-0 opacity-0` to `max-w-[150px] opacity-100` with `overflow-hidden whitespace-nowrap transition-all duration-300`).

### 3. Maintain theme & mobile responsiveness

- The profile photo will have a border matching the design system (`border border-border/40`).
- The transition will adapt gracefully to mobile screens, ensuring the text fits or scales appropriately.

## Proposed Changes

### `components/home-navbar.tsx`

- Add `showProfile` state.
- Update the `useEffect` scroll handler to query `.profile-header` and check `rect.bottom <= 80`.
- Update the markup in the logo `Link` to support the dual logo cross-fade and name text slide-out.

## Verification & Testing

1. Run `pnpm dev` to check that the site runs correctly.
2. Scroll down on the homepage and verify that the logo changes smoothly from `ghost-hands.svg` to the profile image and the text "thiago bueno".
3. Scroll back to the top and verify that the logo transitions back to `ghost-hands.svg`.
4. Run `pnpm lint` and `pnpm build` to ensure no linting/compilation issues.
5. Update `changelog.md` to document the changes.
