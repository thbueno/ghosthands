import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Define the project type
interface Project {
  id: string
  title: string
  category: string
  image: string
  size?: "small" | "large"
}

// Sample project data
const projects: Project[] = [
  {
    id: "estatery-1",
    title: "Estatery",
    category: "UI/UX",
    image: "/images/estatery-laptop.png",
    size: "small",
  },
  {
    id: "wepay-1",
    title: "Wepay",
    category: "Branding",
    image: "/images/wepay-mobile.png",
    size: "small",
  },
  {
    id: "estatery-2",
    title: "Estatery",
    category: "UI/UX",
    image: "/images/estatery-laptop-large.png",
    size: "large",
  },
  {
    id: "estatery-3",
    title: "Estatery",
    category: "UI/UX",
    image: "/images/estatery-laptop.png",
    size: "small",
  },
  {
    id: "wepay-2",
    title: "Wepay",
    category: "Branding",
    image: "/images/wepay-mobile.png",
    size: "small",
  },
]

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`flex flex-col ${project.size === "large" ? "col-span-1 md:col-span-2" : "col-span-1"}`}>
      <div className="bg-gray-100 rounded-3xl overflow-hidden mb-5">
        <Link href={`/works/${project.id}`}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={project.size === "large" ? 1200 : 600}
            height={project.size === "large" ? 800 : 400}
            className="w-full h-auto object-cover hover:opacity-90 transition-opacity"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.category}</p>
        </div>
        <Link
          href={`/works/${project.id}`}
          className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
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
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Discover my latest works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/works"
            className="inline-flex items-center text-lg font-medium hover:opacity-80 transition-opacity"
          >
            View All Works <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
