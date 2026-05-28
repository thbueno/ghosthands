import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/mdx'
import { getAllProjectSlugs } from '@/lib/mdx-listing'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ProjectGallery } from '@/components/project-gallery'
import { ProjectSidebar } from '@/components/project-sidebar'
import { WorkNavbar } from '@/components/work-navbar'
import { SiteFooter } from '@/components/site-footer'

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
      <WorkNavbar />

      <div className="mx-auto max-w-[1100px] px-5 py-8 sm:px-9 sm:py-12 md:px-16">
        {/* Project Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm sm:mb-3">{frontmatter.category}</p>
          <h1 className="mb-6 text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl sm:mb-8 md:text-5xl">
            {frontmatter.headline ?? frontmatter.title}
          </h1>
          <ProjectGallery
            images={frontmatter.galleryImages ?? [frontmatter.image]}
            alt={frontmatter.title}
          />
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Sidebar — below content on mobile, left column on desktop */}
          <ProjectSidebar className="order-2 md:order-none">
            <div>
              <p className="text-secondary-muted mb-3 text-2xs font-semibold uppercase tracking-widest">
                Stack
              </p>
              <div className="space-y-1">
                {frontmatter.services.map((service: string, index: number) => (
                  <p key={index} className="text-primary-dark text-15">
                    {service}
                  </p>
                ))}
              </div>
            </div>

            {frontmatter.year && (
              <div>
                <p className="text-secondary-muted mb-1 text-2xs font-semibold uppercase tracking-widest">
                  Year
                </p>
                <p className="text-primary-dark text-15">{frontmatter.year}</p>
              </div>
            )}

            <div>
              <Link
                href={frontmatter.websiteUrl}
                className="bg-card-light text-primary-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-15 transition-colors duration-200 hover:bg-secondary hover:text-background"
              >
                See project <ArrowUpRight size={14} />
              </Link>
            </div>
          </ProjectSidebar>

          {/* Main Content — rendered from MDX */}
          <div className="order-1 space-y-12 font-sf-pro-display md:order-none md:col-span-4 md:pl-8 [&_p]:text-base [&_p]:sm:text-lg [&_p]:md:text-xl">
            {content}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
