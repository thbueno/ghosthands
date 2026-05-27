import React from 'react'
import { cn } from '@/lib/utils'

// Define the tag type
export interface Tag {
  name: string
  logo: string
  darkInvert?: boolean
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
  { name: 'React', logo: '/images/stack/react-logo.svg' },
  { name: 'Next.js', logo: '/images/stack/nextjs-logo.svg', darkInvert: true },
  { name: 'TypeScript', logo: '/images/stack/typescript-logo.svg' },
  { name: 'Tailwind', logo: '/images/stack/tailwind-logo.svg' },
  { name: 'Figma', logo: '/images/stack/figma-logo.svg' },
  { name: 'React Native', logo: '/images/stack/react-logo.svg' },
  { name: 'Motion', logo: '/images/stack/motion-logo.svg' },
  { name: 'Expo', logo: '/images/stack/expo-logo.svg', darkInvert: true },
]

export const BACKEND_TAGS: Tag[] = [
  { name: 'Node.js', logo: '/images/stack/nodejs-logo.svg' },
  { name: 'PostgreSQL', logo: '/images/stack/postgress-logo.svg' },
  { name: 'GraphQL', logo: '/images/stack/graphql.svg' },
  { name: 'Supabase', logo: '/images/stack/supabase.svg' },
  { name: 'Redis', logo: '/images/stack/redis_logo.svg' },
  { name: 'Python', logo: '/images/stack/python.svg' },
  { name: 'MongoDB', logo: '/images/stack/mongo.svg', darkInvert: true },
  { name: 'Express', logo: '/images/stack/express_logo.svg', darkInvert: true },
]

export const CLOUD_TAGS: Tag[] = [
  { name: 'AWS', logo: '/images/stack/aws-logo.svg', darkInvert: true },
  { name: 'Kubernetes', logo: '/images/stack/kubernetes-logo.svg', darkInvert: true },
  { name: 'Docker', logo: '/images/stack/docker-logo.svg' },
  { name: 'Terraform', logo: '/images/stack/terraform-logo.svg', darkInvert: true },
  { name: 'GitHub Actions', logo: '/images/stack/github-actions-logo.svg', darkInvert: true },
  { name: 'Vercel', logo: '/images/stack/vercel-logo.svg', darkInvert: true },
  { name: 'Git', logo: '/images/stack/git-logo.svg', darkInvert: true },
  { name: 'Jira', logo: '/images/stack/jira-logo.svg', darkInvert: true },
]

export const AI_TAGS: Tag[] = [
  { name: 'OpenAI', logo: '/images/stack/openai-logo.svg', darkInvert: true },
  { name: 'Anthropic', logo: '/images/stack/anthropic-logo.svg', darkInvert: true },
  { name: 'LangChain', logo: '/images/stack/langchain-logo.svg', darkInvert: true },
  { name: 'LlamaIndex', logo: '/images/stack/llamaindex-logo.svg' },
  { name: 'pgvector', logo: '/images/stack/pgvector-logo.svg' },
  { name: 'Pinecone', logo: '/images/stack/pinecone-logo.svg', darkInvert: true },
  { name: 'PyTorch', logo: '/images/stack/pytorch-logo.svg', darkInvert: true },
  { name: 'HuggingFace', logo: '/images/stack/huggingface-logo.svg', darkInvert: true },
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
            'flex cursor-default items-center gap-2 rounded-full bg-tag px-4.5 py-2.5 text-xs font-medium text-primary-dark transition-all duration-200 ease-in-out hover:bg-secondary hover:text-background',
            tagClassName,
          )}
        >
          {showLogo && (
            <img
              src={tag.logo}
              alt={tag.name}
              className={cn('h-6 w-6', tag.darkInvert && 'dark:brightness-0 dark:invert')}
            />
          )}
          {tag.name}
        </div>
      ))}
    </div>
  )
}
