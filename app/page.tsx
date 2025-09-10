'use client'

import { AboutSection } from '@/components/about-section'
import { AwardsSection } from '@/components/awards-section'
import { CTASection } from '@/components/cta-section'
import { FooterSection } from '@/components/footer-section'
import { LetsTalkButton } from '@/components/lets-talk-button'
import { NavBar } from '@/components/navbar'
import { PartnersSection } from '@/components/partners-section'
import { SocialLinks } from '@/components/social-links'
import { WorksSection } from '@/components/works-section'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-background px-5 md:px-10 lg:px-10">
      {/* Navigation */}
      <NavBar />

      <div className="container mx-auto px-6 py-2 md:px-8 lg:px-24">
        {/* Hero Section */}
        <div className="mb-14 mt-12 grid grid-cols-1 gap-10 lg:grid-cols-1">
          <div className="col-span-1 lg:pr-24">
            {/* Intro Section */}
            <div className="flex flex-row items-center gap-3 text-left">
              {/* Hi, I'm */}
              <h1 className="hidden leading-[1.3] md:block">Hi, I'm</h1>

              {/* Image */}
              <Image
                src="/images/profile-photo-light.png"
                alt="Designer portrait"
                width={180}
                height={180}
                className="h-auto w-20 rounded-3xl object-contain"
              />

              {/* Thiago Bueno */}
              <h1 className="hidden leading-[1.3] md:block">Thiago Bueno</h1>

              {/* Mobile stacked text */}
              <div className="flex flex-col md:hidden">
                <h1 className="leading-[1.3]">Hi, I'm</h1>
                <h1 className="leading-[1.3]">Thiago Bueno</h1>
              </div>
            </div>

            {/* Tagline */}
            <h2 className="leading-[1.3]">
              a software engineer building <span>standout applications</span>
            </h2>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="flex items-center">
                <div className="h-[1px] w-full bg-stone-400"></div>
              </div>
              <div className="flex items-center lg:col-start-2">
                <p className="text-base md:text-base">
                  Virtual gggreetings to you, this is my work space on the
                  Internet. Here you can browse through my current projects, my
                  past works and learn more about me. Don´t hesitate to reach
                  out! if you have any questions or just want to say hi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <SocialLinks />
          <LetsTalkButton variant="red" />
        </div>
      </div>

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Works Section */}
      <WorksSection />

      {/* Partners Section */}
      {/* <PartnersSection
        baseSpeed={100}
        decelerationFactor={0.3}
        transitionDuration={400}
      /> */}

      {/* CTA Section */}
      <CTASection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}
