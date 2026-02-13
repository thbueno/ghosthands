# MDX Content Management Walkthrough

This guide shows you how to add and edit project content using the new MDX-based system.

## Adding a New Project

### 1. Create the MDX File

Create a new file in `content/works/` with the project slug as the filename (e.g., `my-new-project.mdx`):

```bash
touch content/works/my-new-project.mdx
```

### 2. Add Frontmatter and Content

Open the file and add the frontmatter metadata at the top, followed by your content:

```mdx
---
title: 'My New Project'
headline: 'A Revolutionary New Application'
image: '/images/my-project-hero.png'
date: 'February 13, 2026'
client: 'Acme Corporation'
services: ['Web Development', 'UI/UX Design', 'Branding']
websiteUrl: 'https://example.com'
category: 'Full Stack'
listingImage: '/images/my-project-card.png'
size: 'small'
---

## About

This is the about section for my project. You can write normal markdown here.

## Our Clients

Information about the clients...

## Challenge

The challenges we faced...

## Results

The results we achieved...
```

### 3. Frontmatter Fields Explained

| Field          | Required | Description                                 | Example                                     |
| -------------- | -------- | ------------------------------------------- | ------------------------------------------- |
| `title`        | ✅       | Project title (shown in detail page header) | `"GOV-BR governaça Brasil"`                 |
| `headline`     | ✅       | Project headline (shown below title)        | `"Unleash Your Potential"`                  |
| `image`        | ✅       | Hero image path for detail page             | `"/images/hero.png"`                        |
| `date`         | ✅       | Project date                                | `"November 5, 2017"`                        |
| `client`       | ✅       | Client name                                 | `"Jacob McDany"`                            |
| `services`     | ✅       | Array of services provided                  | `["Mobile App", "UI/UX"]`                   |
| `websiteUrl`   | ✅       | Link to project website                     | `"#"` or `"https://..."`                    |
| `category`     | ✅       | Project category (shown in listing)         | `"Front-end"`, `"Full Stack"`, `"UI/UX"`    |
| `listingImage` | ✅       | Thumbnail for listing pages                 | `"/images/card.png"`                        |
| `size`         | ⚠️       | Grid size on homepage                       | `"small"` or `"large"` (default: `"small"`) |

### 4. Build and Preview

The project will automatically appear in:

- `/works` listing page
- `/works/my-new-project` detail page
- Homepage works section (after updating `components/works-section.tsx`)

Build the site to generate static pages:

```bash
pnpm build
```

Or run the dev server:

```bash
pnpm dev
```

## Editing Existing Content

Simply edit the `.mdx` file in `content/works/`. Changes will be reflected after rebuilding or in dev mode.

## Rich Content Features

### Adding Images

Use the custom `ProjectImage` component for captioned images:

```mdx
<ProjectImage
  src="/images/screenshot.png"
  alt="Application screenshot"
  caption="The main dashboard interface"
/>
```

Or use standard markdown syntax:

```mdx
![Alt text](/images/photo.png)
```

### Adding Tables

Standard markdown tables work and are automatically styled:

```mdx
| Feature        | Status         |
| -------------- | -------------- |
| Authentication | ✅ Complete    |
| Dashboard      | 🚧 In Progress |
| Analytics      | ❌ Planned     |
```

### Adding Code Blocks

Use triple backticks with language syntax:

```mdx
\`\`\`javascript
const greeting = "Hello, world!"
console.log(greeting)
\`\`\`
```

### Adding Lists

Standard markdown lists:

```mdx
- Feature one
- Feature two
- Feature three

1. First step
2. Second step
3. Third step
```

### Adding Links

```mdx
[Visit our website](https://example.com)
```

External links automatically open in a new tab.

### Text Formatting

```mdx
**Bold text** for emphasis
_Italic text_ for subtle emphasis
```

## Styling Notes

The MDX components automatically apply the site's design system:

- **Headings** (`## Heading`): Large, bold, with proper spacing
- **Paragraphs**: Normal text (not uppercase mono like the global CSS)
- **Tables**: Rounded borders, hover effects, proper spacing
- **Images**: Rounded corners via `next/image`
- **Links**: Secondary color with underline
- **Code**: Dark background with syntax highlighting

## Homepage Works Section

⚠️ **Important**: The homepage works section (`components/works-section.tsx`) uses hardcoded data due to client component constraints. When adding a new project, you must also update the `projects` array in that file:

```tsx
const projects: Project[] = [
  // ... existing projects
  {
    id: 'my-new-project',
    title: 'My New Project',
    category: 'Full Stack',
    image: '/images/my-project-card.png',
    size: 'small',
  },
]
```

This mirrors the frontmatter from your MDX file.

## File Structure

```
ghosthands/
├── content/
│   └── works/
│       ├── gov-br.mdx
│       ├── esthalo.mdx
│       ├── capsule.mdx
│       ├── friends-travel.mdx
│       └── sw-clean-energy.mdx
├── lib/
│   └── mdx.ts (content utilities)
├── components/
│   ├── mdx-components.tsx (custom MDX components)
│   └── works-section.tsx (homepage section)
└── app/
    └── works/
        ├── page.tsx (listing page)
        └── [id]/
            └── page.tsx (detail page)
```

## Troubleshooting

### Project not appearing in listing

- Check that the `.mdx` file is in `content/works/`
- Verify all required frontmatter fields are present
- Rebuild the site: `pnpm build`

### Images not loading

- Ensure image paths start with `/` (e.g., `/images/photo.png`)
- Place images in the `public/images/` directory
- Check that the path matches exactly (case-sensitive)

### Build errors

- Verify frontmatter YAML syntax is correct (proper indentation, quotes)
- Check that services array uses proper YAML array syntax: `["Item 1", "Item 2"]`
- Ensure no special characters in frontmatter values are unescaped

## Next Steps

- Add more projects by creating new `.mdx` files
- Enhance content with images, tables, and rich formatting
- Customize MDX components in `components/mdx-components.tsx` if needed
- Update homepage works section when adding new projects
