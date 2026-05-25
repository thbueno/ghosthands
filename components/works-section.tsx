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
    title: 'GOVBR',
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
  {
    id: 'sw-clean-energy',
    title: 'SW Clean Energy',
    category: 'Full Stack',
    image: '/images/SW-Hero.png',
    linkLabel: 'View project',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/works/${project.id}`}
      className="product-card group relative block overflow-hidden rounded-2xl bg-card-light opacity-0 translate-y-4 blur-[4px] will-change-transform transition-colors duration-200 ease-out hover:bg-card-hover"
    >
      {/* Hover link label */}
      <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out">
        <span className="text-[11px] tracking-[0.02em] text-white drop-shadow">
          {project.linkLabel} →
        </span>
      </div>

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
      <div className="p-4">
        <h3 className="text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] text-primary-dark">
          {project.category}
        </h3>
        <p className="mt-0.5 text-[13px] leading-[1.4] text-secondary-muted">
          {project.title}
        </p>
      </div>
    </Link>
  )
}

export function WorksSection() {
  return (
    <div>
      <p className="section-label pb-3 text-[13px] leading-[1.4] text-secondary-muted opacity-0 translate-y-4 blur-[4px] will-change-transform">
        Handpicked works
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
