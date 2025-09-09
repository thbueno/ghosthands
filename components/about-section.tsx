import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          {/* Image Column */}
          <div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Showcasy_about_section.jpg-bUqRlOdy9atvjR6mivxT9jhrJIV3vU.jpeg"
                alt="Designer portrait"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col gap-6">
            <h2>About me</h2>
            <p>
              Over the years I have invest time creating and converting ideas
              into pixel-perfect, performant, accessible and responsive
              applications/websites. I have always been deeply interest about
              the entire development stack, so i frequently engage in backend
              too.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-lg font-medium transition-opacity hover:opacity-80"
            >
              Learn More <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
