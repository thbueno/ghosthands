import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx-components'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'works')

// Frontmatter type for project MDX files
export interface ProjectFrontmatter {
  title: string
  headline: string
  image: string
  date: string
  client: string
  services: string[]
  websiteUrl: string
  category: string
  listingImage: string
  size?: 'small' | 'large'
}

// Get a single project by slug — compiles MDX + extracts frontmatter
export async function getProjectBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')

  const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  })

  return {
    slug,
    frontmatter,
    content,
  }
}

// Get all projects — lightweight frontmatter-only parsing (no MDX compilation)
export function getAllProjects() {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(CONTENT_DIR, filename)
    const source = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(source)

    return {
      id: slug,
      title: data.title as string,
      category: data.category as string,
      image: data.listingImage as string,
      size: (data.size as 'small' | 'large') || undefined,
    }
  })

  return projects
}

// Get all project slugs for generateStaticParams
export function getAllProjectSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
