import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

// Define the award type
interface Award {
  id: string
  title: string
  year: string
  organization: string
  url: string
}

// Sample awards data
const awards: Award[] = [
  {
    id: 'esthalo',
    title: 'Esthalo - Product Development',
    year: '2022 to today ',
    organization: 'Senior Product Engineer',
    url: 'https://www.linkedin.com/in/buenothg/#experience',
  },
  {
    id: 'gov-br',
    title: 'GOVBR - Government Management Systems',
    year: '2017 to 2022',
    organization: 'Senior Software Engineer',
    url: 'https://www.linkedin.com/in/buenothg/#experience',
  },
  {
    id: 'datasys',
    title: 'Datasys - HR Management Systems',
    year: '2015 to 2017',
    organization: 'Frontend Engineer',
    url: 'https://www.linkedin.com/in/buenothg/#experience',
  },
  {
    id: 'timezpot',
    title: 'Timezpot',
    year: '2012 to 2015',
    organization: 'UI/UX Engineer',
    url: 'https://www.linkedin.com/in/buenothg/#experience',
  },
]

export function AwardsSection() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <AnimateOnScroll className="md:col-span-1" threshold={0.3}>
            <h2>
              Work <br /> Experience
            </h2>
          </AnimateOnScroll>
          <div className="md:col-span-2">
            <ul className="space-y-6">
              {awards.map((award, index) => (
                <AnimateOnScroll
                  key={award.id}
                  as="li"
                  delay={index * 100}
                  threshold={0.2}
                >
                  <Link href={award.url} className="group block">
                    <div className="flex items-start justify-between border-b border-gray-200 pb-6">
                      <div>
                        <h3 className="mb-1 text-xl font-bold transition-all duration-200 ease-out group-hover:text-secondary">
                          {award.title}
                        </h3>
                        <p className="text-gray-600">
                          {award.year} - {award.organization}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="mt-1 opacity-70 transition-all duration-300 ease-out group-hover:rotate-45 group-hover:opacity-100"
                        size={20}
                      />
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
