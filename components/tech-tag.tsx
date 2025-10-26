import React from 'react'
import { cn } from '@/lib/utils'

// Define the tag type
export interface Tag {
  name: string
  logo: string
}

// Define component props
interface TechTagProps {
  tags: Tag[]
  className?: string
  tagClassName?: string
  showLogo?: boolean
}

// Export predefined tag collections for reuse
export const FRONTEND_TAGS: Tag[] = [
  {
    name: 'React',
    logo: '/images/stack/react-logo.svg',
  },
  {
    name: 'Tailwind',
    logo: '/images/stack/tailwind-logo.svg',
  },
  {
    name: 'Next.js',
    logo: '/images/stack/nextjs-logo.svg',
  },
  {
    name: 'React Native',
    logo: '/images/stack/react-logo.svg',
  },
  {
    name: 'Figma',
    logo: '/images/stack/figma-logo.svg',
  },
  {
    name: 'Vite',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'JavaScript',
    logo: '/images/stack/javascript-logo.svg',
  },
  {
    name: 'TypeScript',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'HTML',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'CSS',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'GraphQL',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'Motion',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'Spring',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'React Router',
    logo: '/images/stack/vite-logo.svg',
  },
]

export const BACKEND_TAGS: Tag[] = [
  {
    name: 'Node.js',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'MySQL',
    logo: '/images/stack/nextjs-logo.svg',
  },
  {
    name: 'PostgreSQL',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'Supabase',
    logo: '/images/django-logo.svg',
  },
  {
    name: 'Docker',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'FFmpeg',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'Drizzle',
    logo: '/images/portal-logo.svg',
  },
]

export default function TechTag({
  tags,
  className,
  tagClassName,
  showLogo = true,
}: TechTagProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <div
          key={tag.name}
          className={cn(
            'flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-500',
            tagClassName,
          )}
        >
          {showLogo && (
            <img src={tag.logo} alt={tag.name} className="h-4 w-4" />
          )}
          {tag.name}
        </div>
      ))}
    </div>
  )
}
