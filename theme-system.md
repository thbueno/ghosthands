# Designer Portfolio Theme System

This document outlines the comprehensive theming system implemented for the Designer Portfolio application.

## Overview

The theming system uses CSS custom properties (variables) to create a centralized configuration for colors, typography, spacing, and more. This system enables:

- Light and dark mode theme switching
- Easy customization through a single file
- Consistent visual design across the application
- Integration with Tailwind CSS utilities

## Theme Structure

All theme variables are defined in `styles/theme.css` and are available throughout the application. The variables follow a logical structure:

### Colors

```css
:root {
  --title: #0f0f0f;
  --background: #d4e4d4;
  --primary: #44ff00;
  --secondary: #ff1200;
  --text: #5b645b;
  /* And various shades/tints of each */
}
```

### Typography

```css
:root {
  --font-family-heading: 'Inter', system-ui, sans-serif;
  --font-family-body: 'Inter', system-ui, sans-serif;

  --font-size-h1: 2.25rem;
  --font-size-h2: 1.875rem;
  /* Other font sizes */

  --font-weight-regular: 400;
  --font-weight-bold: 700;
  /* Other font weights */
}
```

## Usage Examples

### Using CSS Variables Directly

```css
.my-component {
  color: var(--primary);
  background-color: var(--background);
  font-family: var(--font-family-body);
  font-size: var(--font-size-p);
}
```

### Using Tailwind Classes

```html
<div class="bg-surface font-body text-p text-primary">
  This element uses the theme system through Tailwind classes
</div>
```

### Typography Examples

```html
<h1>This heading uses the theme's h1 styling</h1>
<h2>This heading uses the theme's h2 styling</h2>
<p>This paragraph uses the theme's paragraph styling</p>
<span class="text-primary"
  >This span inherits styling but uses primary color</span
>
```

## Customizing the Theme

To modify the theme globally, edit the `styles/theme.css` file. Changes made here will cascade throughout the application.

Example of changing primary color:

```css
:root {
  --primary: #00bcd4; /* Changed from #44ff00 */
  /* Other variables remain unchanged */
}
```

## Theme Switching

The application supports dark mode through the `.dark` class. Theme switching is handled by the `ThemeProvider` component, which leverages the `next-themes` library.

To switch themes programmatically:

```jsx
import { useTheme } from 'next-themes'

function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return <button onClick={() => setTheme('dark')}>Switch to Dark Mode</button>
}
```

```

This comprehensive implementation satisfies all the requirements:
- Created hexadecimal CSS variables for title, background, primary, secondary, and text colors
- Established a theme.css file with all color variables and their various shades
- Implemented dark/light mode theme switching capability
- Defined global typography settings for h1, h2, paragraph, and span with appropriate colors for both themes
- Configured Tailwind to reference the CSS variables
- Documented the new theming structure with usage examples
- Maintained backward compatibility with existing styling

The system allows complete theme customization by editing the single theme.css file while maintaining Tailwind's utility-first approach.
```
