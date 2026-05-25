import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  category: string
  image: string
  linkLabel?: string
}

const projects: Project[] = [
  {
    id: 'esthalo',
    title: 'Esthalo Agency',
    category: 'Redesigning a Landing Page',
    image: '/images/Esthalo-cat.png',
    linkLabel: 'View project',
  },
  {
    id: 'gov-br',
    title: 'GOVBR - Governance Brazil',
    category: 'Government Management System',
    image: '/images/govbr_dash3.png',
    linkLabel: 'View project',
  },
  {
    id: 'capsule',
    title: 'Capsule app',
    category: 'Building a Messaging App',
    image: '/images/Capsule_Friends_Mock.png',
    linkLabel: 'View project',
  },
  {
    id: 'friends-travel',
    title: 'Friends Travel',
    category: 'Group Travel System',
    image: '/images/FriendsTravel_screen1.png',
    linkLabel: 'View project',
  },
  // {
  //   id: 'sw-clean-energy',
  //   title: 'SW Clean Energy',
  //   category: 'Full Stack',
  //   image: '/images/SW-Hero.png',
  //   linkLabel: 'View project',
  // },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/works/${project.id}`}
      className="product-card bg-card-light hover:bg-card-hover group block translate-y-4 overflow-hidden rounded-2xl opacity-0 blur-sm transition-colors duration-200 ease-out will-change-transform"
    >
      {/* Full image with hover zoom */}
      <div className="aspect-[4/3] overflow-hidden [transform:translateZ(0)]">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Text below image */}
      <div className="p-4 sm:p-5.5">
        <h3 className="text-primary-dark text-22 font-semibold leading-[1.3] tracking-[-0.01em]">
          {project.category}
        </h3>
        <p className="text-secondary-muted mt-1 text-19 leading-[1.4]">
          {project.title}
        </p>
        <p className="text-secondary-muted mt-3.5 text-17 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
          {project.linkLabel} →
        </p>
      </div>
    </Link>
  )
}

export function WorksSection() {
  return (
    <div>
      <p className="section-label text-secondary-muted translate-y-4 pb-4.5 text-19 leading-[1.4] opacity-0 blur-sm will-change-transform">
        Handpicked works
      </p>
      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
