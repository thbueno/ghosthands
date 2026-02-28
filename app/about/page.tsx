import Image from 'next/image'
import { PartnersSection } from '@/components/partners-section'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <div className="container mx-auto px-4 py-12 md:px-8 lg:px-24">
        {/* About Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="mb-8">
            <span className="text-secondary">About me:</span>
          </h1>
          <div className="mx-auto max-w-4xl space-y-6 font-general-sans text-base normal-case tracking-normal text-[color:var(--text)] md:mx-0 md:text-xl">
            <p>
              Most engineers I know either think like engineers or wish they
              thought more like designers. I came at it from the{' '}
              <strong>other direction</strong>, years in advertising and art
              direction, helping brands navigate the early internet, before I
              learned to code and realized the two things were the same job with
              different tools. Seven years in software since then, working
              across agencies, tech companies, startups, and product studios.
              The advertising background doesn&apos;t come up much in pull
              requests, but it shows up constantly in every decision about what
              a product should actually feel like to use.
            </p>
            <p>
              Primarily working in <strong>React and Next.js</strong> on the
              frontend, TypeScript by default, React Native when it&apos;s
              mobile. Backend is Node.js and Python depending on the team and
              the problem, I don&apos;t have a religion about it. Some of my
              database choices are PostgreSQL, MongoDB when schema flexibility
              is worth the tradeoff, Redis for caching, Cassandra when
              you&apos;re dealing with write-heavy workloads at scale. I&apos;ve
              architected systems handling{' '}
              <strong>sustained loads above 100k requests per second</strong>,
              and the main thing that work taught me is that{' '}
              <strong>
                performance problems are almost always design problems in
                disguise
              </strong>
              .
            </p>
            <p>
              Lately I&apos;ve been going deep on the{' '}
              <strong>applied ML side</strong>, building with RAG pipelines,
              experimenting with LoRA fine-tuning, getting my hands dirty with
              the Python ecosystem beyond web frameworks. Not to pivot, but
              because understanding what these tools actually do under the hood
              changes how you design systems around them.
            </p>
            <p>
              Currently I am based in <strong>East Asia</strong>, which means
              I&apos;m closer to how a significant portion of the world actually
              uses technology, patterns that rarely show up in the case studies
              most Western engineers learn from. That perspective has changed
              how I approach product decisions in ways that are hard to
              articulate but easy to see in the work.
            </p>
            <p>
              I contribute to open-source when I find gaps worth filling,
              believe pair programming makes both the code and the people
              better, and have a{' '}
              <strong>low tolerance for systems nobody can maintain</strong> six
              months later. If you&apos;re working on something where
              architecture, performance, and design need to talk to each other,
              I&apos;m usually worth a conversation.
            </p>
          </div>
        </div>

        {/* Designer Image */}
        <div className="mb-16">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Showcasy_about_page.jpg-dWT3AGLPu4bdn2MYrpH44MnCFaynoa.jpeg"
              alt="Designer portrait"
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Designer Description */}
        <div className="mb-24">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            I&apos;m the UI/UX and brand designer you need to take your digital
            presence to the next level
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p>
                With a collaborative mindset and a dedication to their craft,
                I&apos;m works closely with clients to understand their goals
                and objectives, providing tailored design solutions that meet
                their unique needs.
              </p>
            </div>
            <div>
              <p>
                Outside of work, you can find me exploring the latest design
                trends, attending design conferences, or working on personal
                projects.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-32 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="mb-2 text-stone-400">2013-2015</p>
            <h3 className="mb-2 text-4xl font-bold">2 years</h3>
            <p>as a Product Designer at Uber</p>
          </div>
          <div>
            <p className="mb-2 text-stone-400">2015-2018</p>
            <h3 className="mb-2 text-4xl font-bold">3 years</h3>
            <p>as a Lead of Product Designer at Spotify</p>
          </div>
          <div>
            <p className="mb-2 text-stone-400">2018-Now</p>
            <h3 className="mb-2 text-4xl font-bold">5+ years</h3>
            <p>as a Head of Product Designer at Rovio</p>
          </div>
        </div>

        {/* Partners Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold md:text-5xl">
            A visual partner for brands, companies, and agencies
          </h2>
        </div>
      </div>

      {/* Partners Carousel */}
      <PartnersSection
        baseSpeed={40}
        decelerationFactor={0.1}
        transitionDuration={400}
        hideTitle={true}
      />
    </div>
  )
}
