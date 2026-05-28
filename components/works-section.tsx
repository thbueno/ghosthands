import Image from 'next/image'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

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
      className="product-card bg-card-light hover:bg-card-hover group block overflow-hidden rounded-2xl transition-colors duration-200 ease-out"
    >
      {/* Full image with hover zoom */}
      <div className="aspect-[3/2] overflow-hidden sm:aspect-[4/3] [transform:translateZ(0)]">
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
        <h3 className="text-base sm:text-lg">
          {project.category}
        </h3>
        <p className="mt-1 text-sm leading-[1.4] sm:text-xl">
          {project.title}
        </p>
        <p className="mt-3.5 text-lg opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
          {project.linkLabel} →
        </p>
      </div>
    </Link>
  )
}

interface WorksSectionProps {
  id?: string
}

export function WorksSection({ id }: WorksSectionProps) {
  return (
    <div id={id}>
      <AnimateOnScroll threshold={0.2}>
        <h2 className="pb-4.5">
          Handpicked works
        </h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 gap-6 sm:gap-4.5 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={index * 100} threshold={0.2}>
            <ProjectCard project={project} />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  )
}
