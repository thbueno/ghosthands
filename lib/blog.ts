import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx-components'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogFrontmatter {
  title: string
  date: string
  excerpt: string
  draft?: boolean
  tags?: string[]
}

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
}

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
}

export function getAllPosts(): BlogPost[] {
  return ensureBlogDir()
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const source = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
      const { data } = matter(source)
      return { slug, frontmatter: data as BlogFrontmatter }
    })
    .filter((p) => !p.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    )
}

export function getLatestPosts(count = 3): BlogPost[] {
  return getAllPosts().slice(0, count)
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, 'utf-8')
  const { content: rawContent, data } = matter(source)

  const { content } = await compileMDX({
    source: rawContent,
    options: { parseFrontmatter: false },
    components: mdxComponents,
  })

  return { slug, frontmatter: data as BlogFrontmatter, content }
}

export function getAllPostSlugs(): string[] {
  return ensureBlogDir()
    .map((f) => f.replace(/\.mdx$/, ''))
    .filter((slug) => {
      const source = fs.readFileSync(
        path.join(BLOG_DIR, `${slug}.mdx`),
        'utf-8',
      )
      const { data } = matter(source)
      return !data.draft
    })
}
