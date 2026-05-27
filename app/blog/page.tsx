import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { WorkNavbar } from '@/components/work-navbar'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      <WorkNavbar />
      <main className="mx-auto max-w-[980px] px-9 pb-24 pt-16 sm:px-16 md:pb-40 md:pt-24">
        <h1 className="pb-10 text-primary-dark">Writing</h1>

        {posts.length === 0 ? (
          <p className="text-secondary-muted text-xl">No posts yet. Check back soon.</p>
        ) : (
          <div className="flex flex-col divide-y divide-border">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-8 transition-opacity duration-150 hover:opacity-70"
              >
                <p className="text-secondary-muted text-15">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="text-primary-dark text-2xl font-semibold">
                  {post.frontmatter.title}
                </h2>
                <p className="text-secondary-muted text-lg leading-[1.6]">
                  {post.frontmatter.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
