import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Define the project type
interface Project {
  id: string
  title: string
  category: string
  image: string
  size?: 'small' | 'large'
}

// Sample project data
const projects: Project[] = [
  {
    id: 'estatery-1',
    title: 'Estatery',
    category: 'UI/UX',
    image: '/images/FriendsTravel_screen1.jpg',
    size: 'small',
  },
  {
    id: 'wepay-1',
    title: 'Wepay',
    category: 'Branding',
    image: '/images/govbr_dash3.jpg',
    size: 'small',
  },
  {
    id: 'estatery-2',
    title: 'Estatery',
    category: 'UI/UX',
    image: '/images/FriendsTravel_screen2.jpg',
    size: 'large',
  },
  {
    id: 'estatery-3',
    title: 'Estatery',
    category: 'UI/UX',
    image: '/images/estatery-laptop.png',
    size: 'small',
  },
  {
    id: 'wepay-2',
    title: 'Wepay',
    category: 'Branding',
    image: '/images/wepay-mobile.png',
    size: 'small',
  },
]

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`flex flex-col ${
        project.size === 'large' ? 'col-span-1 md:col-span-2' : 'col-span-1'
      }`}
    >
      <div className="mb-5 overflow-hidden rounded-3xl bg-gray-100">
        <Link href={`/works/${project.id}`}>
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            width={project.size === 'large' ? 1200 : 600}
            height={project.size === 'large' ? 800 : 400}
            className="h-auto w-full object-cover transition-opacity hover:opacity-90"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <Link
          href={`/works/${project.id}`}
          className="rounded-full border border-title p-3 transition-colors hover:border-secondary hover:text-secondary"
        >
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  )
}

export function WorksSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto md:px-8 lg:px-12">
        <h2 className="mb-12">My Latest Works</h2>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/works"
            className="inline-flex items-center text-lg font-medium transition-opacity hover:opacity-80"
          >
            View All Works <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
