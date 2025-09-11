import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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
    title: 'Esthalo - Advertising',
    year: '2022 to 2025',
    organization: 'Senior Software Engineer',
    url: '#',
  },
  {
    id: 'gov-br',
    title: 'GOVBR - Governança Brasil',
    year: '2018 to 2022',
    organization: 'Software Engineer',
    url: '#',
  },
  {
    id: 'datasys',
    title: 'Datasys - Sistemas de Gestão',
    year: '2016 to 2018',
    organization: 'Frontend Developer',
    url: '#',
  },
  {
    id: 'timezpot',
    title: 'Timezpot',
    year: '2014 to 2016',
    organization: 'UI/UX Engineer',
    url: '#',
  },
]

export function AwardsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2>
              Work <br /> Experience
            </h2>
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-6">
              {awards.map((award) => (
                <li key={award.id}>
                  <Link href={award.url} className="group block">
                    <div className="flex items-start justify-between border-b border-gray-200 pb-6">
                      <div>
                        <h3 className="mb-1 text-xl font-bold transition-opacity group-hover:opacity-70">
                          {award.title}
                        </h3>
                        <p className="text-gray-600">
                          {award.year} - {award.organization}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="mt-1 opacity-70 transition-opacity group-hover:opacity-100"
                        size={20}
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
