"use client"

import Image from "next/image"
import { useEffect } from "react"
import { PartnersSection } from "@/components/partners-section"

export default function AboutPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-24 py-12">
        {/* About Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="mb-8">
            <span className="text-secondary">About me,</span> a Visual Designer living in Munich
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto md:mx-0">
            As a Senior Designer with over 10 years of experience, I specialize in creating intuitive and user-centered
            interfaces for a wide range of digital products and experiences.
          </p>
        </div>

        {/* Designer Image */}
        <div className="mb-16">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Showcasy_about_page.jpg-dWT3AGLPu4bdn2MYrpH44MnCFaynoa.jpeg"
              alt="Designer portrait"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Designer Description */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            I&apos;m the UI/UX and brand designer you need to take your digital presence to the next level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p>
                With a collaborative mindset and a dedication to their craft, I&apos;m works closely with clients to
                understand their goals and objectives, providing tailored design solutions that meet their unique needs.
              </p>
            </div>
            <div>
              <p>
                Outside of work, you can find me exploring the latest design trends, attending design conferences, or
                working on personal projects.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div>
            <p className="text-gray-500 mb-2">2013-2015</p>
            <h3 className="text-4xl font-bold mb-2">2 years</h3>
            <p className="text-gray-700">as a Product Designer at Uber</p>
          </div>
          <div>
            <p className="text-gray-500 mb-2">2015-2018</p>
            <h3 className="text-4xl font-bold mb-2">3 years</h3>
            <p className="text-gray-700">as a Lead of Product Designer at Spotify</p>
          </div>
          <div>
            <p className="text-gray-500 mb-2">2018-Now</p>
            <h3 className="text-4xl font-bold mb-2">5+ years</h3>
            <p className="text-gray-700">as a Head of Product Designer at Rovio</p>
          </div>
        </div>

        {/* Partners Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">A visual partner for brands, companies, and agencies</h2>
        </div>
      </div>

      {/* Partners Carousel */}
      <PartnersSection baseSpeed={40} decelerationFactor={0.1} transitionDuration={400} hideTitle={true} />
    </div>
  )
}
