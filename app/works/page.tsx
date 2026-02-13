'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

// Define the project type
interface Project {
  id: string
  title: string
  category: string
  image: string
}

// Sample project data
const projects: Project[] = [
  {
    id: 'gov-br',
    title: 'GOVBR',
    category: 'Front-end',
    image: '/images/govbr_dash3.png',
  },
  {
    id: 'esthalo',
    title: 'Esthalo',
    category: 'Full Stack',
    image: '/images/Esthalo-cat.png',
  },
  {
    id: 'capsule',
    title: 'Capsule',
    category: 'UI/UX',
    image: '/images/Capsule_Friends_Mock.png',
  },
  {
    id: 'friends-travel',
    title: 'Friends Travel',
    category: 'Full Stack',
    image: '/images/FriendsTravel_screen1.png',
  },
  {
    id: 'sw-clean-energy',
    title: 'SW Clean Energy',
    category: 'Full Stack',
    image: '/images/SW-Hero.png',
  },
]

export default function WorksPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
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
