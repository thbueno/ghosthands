'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { PartnersSection } from '@/components/partners-section'

export default function AboutPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-8 lg:px-24">
        {/* About Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="mb-8">
            <span className="text-secondary">About me,</span> a Software
            Engineer
          </h1>
          <p className="mx-auto max-w-4xl text-lg md:mx-0 md:text-xl">
            As a Senior Designer with over 10 years of experience, I specialize
            in creating intuitive and user-centered interfaces for a wide range
            of digital products and experiences.
          </p>
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
