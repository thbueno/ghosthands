import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/mdx'
import { getAllProjectSlugs } from '@/lib/mdx-listing'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ProjectGallery } from '@/components/project-gallery'
import { ProjectSidebar } from '@/components/project-sidebar'

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
          <ProjectGallery
            images={frontmatter.galleryImages ?? [frontmatter.image]}
            alt={frontmatter.title}
          />
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Sidebar */}
          <ProjectSidebar>
            <div>
              <h3 className="mb-2 text-lg font-bold">Stack</h3>
              <div className="space-y-1">
                {frontmatter.services.map((service, index) => (
                  <p key={index} className="text-xs">
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
                See more <ArrowUpRight size={16} />
              </Link>
            </div>
          </ProjectSidebar>

          {/* Main Content — rendered from MDX */}
          <div className="space-y-12 px-12 font-sf-pro-display md:col-span-4">{content}</div>
        </div>
      </div>
    </div>
  )
}
