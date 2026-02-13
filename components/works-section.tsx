import Image from 'next/image'
import Link from 'next/link'
import { ArrowLinkButton } from './arrow-link-button'
import { AnimateOnScroll } from './animate-on-scroll'

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
    id: 'esthalo',
    title: 'Esthalo Agency',
    category: 'Full Stack',
    image: '/images/Esthalo-cat.png',
    size: 'small',
  },
  {
    id: 'gov-br',
    title: 'GOVBR - Brazil Governance',
    category: 'Front-end',
    image: '/images/govbr_dash3.png',
    size: 'small',
  },
  {
    id: 'capsule',
    title: 'Capsule app',
    category: 'UI/UX',
    image: '/images/Capsule_Friends_Mock.png',
    size: 'large',
  },
  {
    id: 'friends-travel',
    title: 'Friends Travel',
    category: 'Full Stack',
    image: '/images/FriendsTravel_screen1.png',
    size: 'small',
  },
  {
    id: 'sw-clean-energy',
    title: 'SW Clean Energy',
    category: 'Full Stack',
    image: '/images/SW-Hero.png',
    size: 'small',
  },
]

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimateOnScroll
      className={`flex flex-col ${
        project.size === 'large' ? 'col-span-1 md:col-span-2' : 'col-span-1'
      }`}
      delay={index * 100}
      threshold={0.2}
    >
      <div className="group mb-5 overflow-hidden rounded-3xl bg-gray-100">
        <Link href={`/works/${project.id}`}>
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            width={project.size === 'large' ? 1200 : 600}
            height={project.size === 'large' ? 800 : 400}
            className="h-auto w-full object-cover transition-all duration-500 ease-in-out motion-safe:group-hover:scale-[1.1] motion-safe:group-focus:scale-[1.1]"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <ArrowLinkButton href={`/works/${project.id}`} />
      </div>
    </AnimateOnScroll>
  )
}

export function WorksSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto md:px-8 lg:px-12">
        <AnimateOnScroll threshold={0.3}>
          <h2 className="mb-12">Handpicked Works</h2>
        </AnimateOnScroll>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/*  <div className="flex justify-center">
          <Link
            href="/works"
            className="inline-flex items-center text-lg font-medium transition-opacity hover:opacity-80"
          >
            View All Works{' '}
            <ArrowRight
              className="ml-2 inline-block transition-transform duration-300 ease-out focus:translate-y-6 group-hover:-rotate-45"
              size={20}
            />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
