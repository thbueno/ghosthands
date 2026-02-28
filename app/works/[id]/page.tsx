import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/mdx'
import { getAllProjectSlugs } from '@/lib/mdx-listing'
import { ScrollToTop } from '@/components/scroll-to-top'

// Generate static params for all MDX project files
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ id: slug }))
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = await getProjectBySlug(id)

  if (!project) {
    notFound()
  }

  const { frontmatter, content } = project

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop id={id} />
      <div className="container mx-auto px-4 py-12 md:px-8 lg:px-24">
        {/* Project Header */}
        <div className="mb-12">
          <h4 className="mb-4 text-lg">{frontmatter.title}</h4>
          <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {frontmatter.headline}
          </h1>
          <div className="mb-12 overflow-hidden rounded-3xl bg-background">
            <Image
              src={frontmatter.image || '/placeholder.svg'}
              alt={frontmatter.title}
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Sidebar */}
          <div className="space-y-8 md:col-span-1">
            <div>
              <h3 className="mb-2 text-lg font-medium">Date</h3>
              <p className="">{frontmatter.date}</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium">Client Name</h3>
              <p className="">{frontmatter.client}</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium">Services</h3>
              <div className="space-y-1">
                {frontmatter.services.map((service, index) => (
                  <p key={index} className="">
                    {service}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <Link
                href={frontmatter.websiteUrl}
                className="inline-flex items-center gap-2 rounded-full border border-title px-6 py-3 transition hover:border-secondary hover:text-secondary"
              >
                Visit Website <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Main Content — rendered from MDX */}
          <div className="space-y-12 md:col-span-2">{content}</div>
        </div>
      </div>
    </div>
  )
}
