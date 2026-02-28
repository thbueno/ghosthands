import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'works')

// Lightweight frontmatter-only listing — no MDX compilation, no heavy imports.
// Keep this file free of `next-mdx-remote` imports so that /works listing page
// doesn't pull in the full MDX compiler bundle at compile time.

export function getAllProjects() {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  return files.map((filename) => {
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
}

export function getAllProjectSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
