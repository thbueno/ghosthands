import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import { WorkNavbar } from '@/components/work-navbar'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const { frontmatter, content } = post

  return (
    <div className="min-h-screen">
      <WorkNavbar />
      <main className="mx-auto max-w-[720px] px-9 pb-24 pt-16 sm:px-16 md:pb-40 md:pt-24">
        <header className="mb-12">
          <p className="text-secondary-muted text-15 mb-4">
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="text-primary-dark mb-4 text-4xl font-semibold leading-[1.15] md:text-5xl">
            {frontmatter.title}
          </h1>
          <p className="text-secondary-muted text-xl leading-[1.6]">
            {frontmatter.excerpt}
          </p>
        </header>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          {content}
        </div>
      </main>
    </div>
  )
}
