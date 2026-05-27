# Adjust Social Icons Size and Remove Background Box

The user requested to:
1. Increase the social icons size in `components/profile-header.tsx` a little bit.
2. Remove the black box background behind the WhatsApp and Email icons.

## Proposed Plan

### 1. Increase Icon Sizes
Currently, the icons size is configured to `24`. We will increase it a little bit to `28`.

### 2. Remove Background Box from WhatsApp and Email
We will modify:
* **WhatsAppIcon**: Remove the background `<rect>` element. Render only the main SVG path representing the WhatsApp bubble and handset outline, using `fill="currentColor"`.
* **MailIcon**: Replace the custom squircle background with a clean outline envelope SVG (matching the Lucide design), using `stroke="currentColor"` and `fill="none"`.

This makes the WhatsApp and Email icons render as clean outline glyphs that adapt directly to the text color and hover transitions.

### 3. Update Social Links Array
In the `socialLinks` array inside `components/profile-header.tsx`, we will update the size parameter to `28`:
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
    icon: <WhatsAppIcon size={28} />,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:thinobueno@proton.me',
    icon: <MailIcon size={28} />,
    external: false,
  },
]
```

### Tasks

1. **Modify `components/profile-header.tsx`**:
   * Redefine `WhatsAppIcon` to remove `<rect>` and use `fill="currentColor"` directly on the SVG/path.
   * Redefine `MailIcon` to be an outline envelope without `<rect>`.
   * Update the `socialLinks` array to use `size={28}` for all icons.
2. **Verify Compilation & Output**:
   * Run linter / build checks to verify code correctness.
3. **Documentation**:
   * Update `changelog.md`. (Completed)
   * Mark this task as completed. (Completed)

## Completion Status
- **Status**: Completed
- **Changes**: Redefined `WhatsAppIcon` and `MailIcon` to remove the background `<rect>` element, rendering them as clean outline icons filled/stroked with `currentColor`. Increased the size of all social icons to `28` in the `socialLinks` array inside `components/profile-header.tsx`. Verified type safety.
