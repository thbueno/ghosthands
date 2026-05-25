import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/mdx'
import { getAllProjectSlugs } from '@/lib/mdx-listing'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ProjectGallery } from '@/components/project-gallery'
import { ProjectSidebar } from '@/components/project-sidebar'
import { WorkNavbar } from '@/components/work-navbar'

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

      <div className="mx-auto max-w-[1100px] px-9 py-12 sm:px-16">
        {/* Project Header */}
        <div className="mb-12">
          <p className="mb-3 text-15 text-secondary-muted">{frontmatter.category}</p>
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-[-0.02em] text-primary-dark md:text-5xl">
            {frontmatter.headline ?? frontmatter.title}
          </h1>
          <ProjectGallery
            images={frontmatter.galleryImages ?? [frontmatter.image]}
            alt={frontmatter.title}
          />
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Sidebar */}
          <ProjectSidebar>
            <div>
              <p className="mb-3 text-2xs font-semibold uppercase tracking-widest text-secondary-muted">
                Stack
              </p>
              <div className="space-y-1">
                {frontmatter.services.map((service: string, index: number) => (
                  <p key={index} className="text-15 text-primary-dark">
                    {service}
                  </p>
                ))}
              </div>
            </div>

            {frontmatter.year && (
              <div>
                <p className="mb-1 text-2xs font-semibold uppercase tracking-widest text-secondary-muted">
                  Year
                </p>
                <p className="text-15 text-primary-dark">{frontmatter.year}</p>
              </div>
            )}

            <div>
              <Link
                href={frontmatter.websiteUrl}
                className="inline-flex items-center gap-2 rounded-full bg-card-light px-5 py-2.5 text-15 text-primary-dark transition-colors duration-200 hover:bg-secondary hover:text-background"
              >
                See project <ArrowUpRight size={14} />
              </Link>
            </div>
          </ProjectSidebar>

          {/* Main Content — rendered from MDX */}
          <div className="space-y-12 font-sf-pro-display md:col-span-4 md:pl-8">{content}</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="-mx-7 mt-16 bg-card-light px-7 py-10 md:-mx-10 md:px-10 md:py-17.5 lg:-mx-40 lg:px-40">
        <div className="mx-auto max-w-[1100px] px-9 sm:px-16">
          <p className="text-xl leading-[1.6] text-secondary-muted">
            I&apos;m most reachable by{' '}
            <Link
              href="mailto:thinobueno@proton.me"
              className="text-primary-dark underline underline-offset-2 decoration-transparent transition-colors duration-150 hover:decoration-primary-dark"
            >
              email
            </Link>{' '}
            and on{' '}
            <Link
              href="https://www.linkedin.com/in/thiago-bueno-dos-santos-28714924/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark underline underline-offset-2 decoration-transparent transition-colors duration-150 hover:decoration-primary-dark"
            >
              LinkedIn
            </Link>
            . You can also find me on{' '}
            <Link
              href="https://github.com/thbueno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark underline underline-offset-2 decoration-transparent transition-colors duration-150 hover:decoration-primary-dark"
            >
              GitHub
            </Link>{' '}
            or reach me on{' '}
            <Link
              href="https://wa.me/84784551070"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark underline underline-offset-2 decoration-transparent transition-colors duration-150 hover:decoration-primary-dark"
            >
              WhatsApp
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
