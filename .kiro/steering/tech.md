# Technology Stack

## Framework & Runtime

- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript 5** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Styling & UI

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Headless UI components for accessibility
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **next-themes** - Dark/light theme switching

## Development Tools

- **pnpm** - Package manager (required)
- **Prettier** - Code formatting with Tailwind plugin
- **ESLint** - Code linting (disabled during builds)
- **Turbopack** - Fast bundler for development

## Key Libraries

- **clsx & tailwind-merge** - Conditional CSS classes
- **class-variance-authority** - Component variant management
- **zod** - Schema validation
- **react-hook-form** - Form handling

## Custom Fonts

- **General Sans** - Primary font (local)
- **DM Mono** - Monospace font (Google Fonts)

## Common Commands

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

## Build Configuration

- Images are unoptimized for static export compatibility
- TypeScript and ESLint errors ignored during builds
- Experimental webpack optimizations enabled
- Custom breakpoints: xl and 2xl both set to 1152px
