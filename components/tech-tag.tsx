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
    name: 'Figma',
    logo: '/images/stack/figma-logo.svg',
  },
  {
    name: 'React',
    logo: '/images/stack/react-logo.svg',
  },
  {
    name: 'React Native',
    logo: '/images/stack/react-logo.svg',
  },
  {
    name: 'Next.js',
    logo: '/images/stack/nextjs-logo.svg',
  },
  {
    name: 'Vite',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'Expo',
    logo: '/images/stack/expo-logo.svg',
  },
  {
    name: 'JavaScript',
    logo: '/images/stack/javascript-logo.svg',
  },
  {
    name: 'TypeScript',
    logo: '/images/stack/typescript-logo.svg',
  },
  {
    name: 'HTML',
    logo: '/images/stack/html-logo.svg',
  },
  {
    name: 'CSS',
    logo: '/images/stack/css-logo.svg',
  },
  {
    name: 'Tailwind',
    logo: '/images/stack/tailwind-logo.svg',
  },
  {
    name: 'Motion',
    logo: '/images/stack/motion-logo.svg',
  },
  {
    name: 'Spring',
    logo: '/images/stack/spring-logo.svg',
  },
  {
    name: 'React Router',
    logo: '/images/stack/react-router-logo.svg',
  },
]

export const BACKEND_TAGS: Tag[] = [
  {
    name: 'Node.js',
    logo: '/images/stack/nodejs-logo.svg',
  },
  {
    name: 'MySQL',
    logo: '/images/stack/mysql-Logo.svg',
  },
  {
    name: 'PostgreSQL',
    logo: '/images/stack/postgress-logo.svg',
  },
  {
    name: 'Supabase',
    logo: '/images/stack/supabase.svg',
  },
  {
    name: 'Docker',
    logo: '/images/stack/docker-logo.svg',
  },
  {
    name: 'FFmpeg',
    logo: '/images/stack/ffmpeg_logo.svg',
  },
  {
    name: 'Drizzle',
    logo: '/images/stack/drizzle.svg',
  },
  {
    name: 'GraphQL',
    logo: '/images/stack/graphql.svg',
  },
]

export default function TechTag({
  tags,
  className,
  tagClassName,
  showLogo = true,
}: TechTagProps) {
  return (
    <div className={cn('flex flex-wrap gap-4', className)}>
      {tags.map((tag) => (
        <div
          key={tag.name}
          className={cn(
            'flex items-center gap-2 rounded-full border border-[color:var(--title)] px-4 py-2 text-xs font-medium text-[color:var(--title)]',
            tagClassName,
          )}
        >
          {showLogo && (
            <img src={tag.logo} alt={tag.name} className="h-6 w-6" />
          )}
          {tag.name}
        </div>
      ))}
    </div>
  )
}
