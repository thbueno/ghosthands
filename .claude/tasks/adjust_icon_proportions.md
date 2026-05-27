# Adjust WhatsApp and Email Icon Proportions

The user requested to reduce the WhatsApp and Email icons' size to match exactly the visual height of the other icons (LinkedIn and GitHub).

## Proposed Plan

### 1. Analyze Icon Sizing
* **LinkedIn & GitHub**: These icons are squircle shapes where the actual logo glyph is nested inside the squircle container. With a container size of `28px`, the visual logo glyph inside is about `20px` to `21px` tall.
* **WhatsApp & Email**: These are standalone glyphs (without the squircle container). Currently, their size is set to `28px`, making their logos look much larger than the logo glyphs inside the LinkedIn and GitHub squircles.

To match the visual height of the others, we will reduce the size parameter of `WhatsAppIcon` and `MailIcon` to `20px`. This will make the logo glyphs align perfectly in height and visual weight across all four social links.

### 2. Update Social Links Array
We will modify the `socialLinks` array inside `components/profile-header.tsx` to pass `size={20}` for WhatsApp and Email, while keeping `size={28}` for LinkedIn and GitHub:
```tsx
const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thiago-bueno-dos-santos-28714924/',
    icon: <LinkedInIcon size={28} />,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/thbueno',
    icon: <GitHubIcon size={28} />,
    external: true,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/84784551070',
    icon: <WhatsAppIcon size={20} />,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:thinobueno@proton.me',
    icon: <MailIcon size={20} />,
    external: false,
  },
]
```

### Tasks

1. **Modify `components/profile-header.tsx`**: Update the `socialLinks` array to set `size={20}` for WhatsApp and Email.
2. **Verify Type-Safety & Compilation**: Run typescript check.
3. **Documentation**:
   * Update `changelog.md`. (Completed)
   * Mark this task as completed. (Completed)

## Completion Status
- **Status**: Completed
- **Changes**: Adjusted size parameters of the WhatsApp and Email icons to `20` in the `socialLinks` array inside `components/profile-header.tsx`, bringing their visual height into perfect balance with the LinkedIn and GitHub squircle containers (which remain at size `28`). Verified type safety.
