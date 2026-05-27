# Integrate Custom Social Icons and Add GitHub

The user requested to:
1. Implement the custom icons from `public/images/social-icons` (LinkedIn and GitHub), replacing the current ones.
2. Add the GitHub link to the social links in `components/profile-header.tsx`.

## Proposed Plan

### 1. Update Custom Icons to support sizing
We will modify `public/images/social-icons/linkedin.tsx` and `public/images/social-icons/github.tsx` to accept a `size` prop (defaulting to `24`), enabling consistent sizing control:
* **LinkedIn**: Accepts `size?: number`.
* **GitHub**: Accepts `size?: number`.

### 2. Update WhatsAppIcon and add MailIcon in `components/profile-header.tsx`
To ensure all four social links have a consistent squircle design:
* **WhatsAppIcon**: Use `fill="currentColor"` for the squircle background so it adopts the theme and hover colors, while keeping the inner handset white.
* **MailIcon**: Implement a custom squircle icon where the background is `fill="currentColor"` and the inner envelope path is white, matching the other three icons.

### 3. Update Social Links Array
Add GitHub to the `socialLinks` array:
```tsx
const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thiago-bueno-dos-santos-28714924/',
    icon: <LinkedInIcon size={24} />,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/thbueno',
    icon: <GitHubIcon size={24} />,
    external: true,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/84784551070',
    icon: <WhatsAppIcon size={24} />,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:thinobueno@proton.me',
    icon: <MailIcon size={24} />,
    external: false,
  },
]
```

### 4. Style the Link Wrappers
Update the Link wrapper styling in the list rendering to:
```tsx
className="text-primary-dark hover:text-secondary group flex items-center justify-center transition-all duration-200"
```
This removes any background hover highlights and lets the icons themselves transition smoothly from `text-primary-dark` (dark gray/black) to `text-secondary` (brand green/blue) on hover.

### Tasks

1. **Modify `public/images/social-icons/linkedin.tsx`**: Add `size` prop to the SVG.
2. **Modify `public/images/social-icons/github.tsx`**: Add `size` prop to the SVG.
3. **Modify `components/profile-header.tsx`**:
   * Import `LinkedInIcon` and `GitHubIcon`.
   * Update `WhatsAppIcon` to use `fill="currentColor"`.
   * Add the custom `MailIcon`.
   * Update `socialLinks` array with the new icons and the new GitHub link.
   * Adjust link classes to remove hover background highlights and transition the icon color directly.
4. **Verify layout and appearance**:
   * Confirm compilation succeeds and page displays correctly.
5. **Documentation**:
   * Update `changelog.md`. (Completed)
   * Mark this task as completed. (Completed)

## Completion Status
- **Status**: Completed
- **Changes**: Added `size` prop support to `LinkedInIcon` and `GitHubIcon`. Integrated them into `components/profile-header.tsx`. Standardized all four icons to use matching squircle dimensions and background colors (using `currentColor` to transition to green/blue on hover). Added the GitHub link. verified compilation with `pnpm lint`.
