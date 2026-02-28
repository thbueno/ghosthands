import fs from 'fs'
import path from 'path'
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

// Get a single project by slug — compiles MDX + extracts frontmatter.
// This is the only function that needs the heavy next-mdx-remote/rsc bundle.
// Listing helpers (getAllProjects, getAllProjectSlugs) live in lib/mdx-listing.ts
// to avoid pulling this bundle into the /works listing page.
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
