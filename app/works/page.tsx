import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProjects } from '@/lib/mdx-listing'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function WorksPage() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <div className="container mx-auto px-4 py-12 md:px-8 lg:px-24">
        <h1 className="mb-12 text-4xl font-bold md:text-5xl">My Works</h1>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <div className="mb-5 overflow-hidden rounded-3xl bg-gray-100">
                <Link href={`/works/${project.id}`}>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover transition-opacity hover:opacity-90"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.category}</p>
                </div>
                <Link
                  href={`/works/${project.id}`}
                  className="rounded-full border border-gray-300 p-3 transition-colors hover:bg-gray-50"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
