import React from 'react'

// Define the tags type
interface TagProps {
  name: string
  logo: string
}

// frontend tags
const frontend: TagProps[] = [
  {
    name: 'React',
    logo: '/images/stack/react-logo.svg',
  },
  {
    name: 'Next.js',
    logo: '/images/stack/nextjs-logo.svg',
  },
  {
    name: 'React Native',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'Figma',
    logo: '/images/stack/vite-logo.svg',
  },
  {
    name: 'Vite',
    logo: '/images/django-logo.svg',
  },
  {
    name: 'JavaScript',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'TypeScript',
    logo: '/images/portal-logo.svg',
  },

  {
    name: 'HTML',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'CSS',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'GraphQL',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'Motion',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'Spring',
    logo: '/images/portal-logo.svg',
  },
  {
    name: 'React Router',
    logo: '/images/portal-logo.svg',
  },
]

const backend: TagProps[] = [
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

export default function TechTag() {
  return <div>tech-tag</div>
}
