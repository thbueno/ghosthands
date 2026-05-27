'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import dynamic from 'next/dynamic'
import { ProfileHeader } from '@/components/profile-header'
import { WorksSection } from '@/components/works-section'
import SkillsSection from '@/components/skills-section'
import { HomeNavbar } from '@/components/home-navbar'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import Link from 'next/link'

const TrailCanvas = dynamic(() => import('@/components/trail-canvas'), {
  ssr: false,
})

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({ lerp: 0.08 })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <>
      <TrailCanvas />

      <div className="relative z-[1]">
        <HomeNavbar />

        <main className="mx-auto flex max-w-[980px] flex-col gap-24 px-9 pb-24 pt-16 sm:px-16 md:pb-40 md:pt-24">
          <ProfileHeader />
          <WorksSection />
          <AboutBlock />
          <SkillsSection />
        </main>

        <AnimateOnScroll
          as="footer"
          className="footer bg-card-light -mx-7 px-7 py-10 md:-mx-10 md:px-10 md:py-17.5 lg:-mx-40 lg:px-40"
          delay={100}
          threshold={0.2}
        >
          <div className="mx-auto max-w-[915px] px-9 sm:px-16">
            <p className="text-secondary-muted text-xl leading-[1.6]">
              I&apos;m most reachable by{' '}
              <Link
                href="mailto:thinobueno@proton.me"
                className="text-primary-dark hover:decoration-primary-dark underline decoration-transparent underline-offset-2 transition-colors duration-150"
              >
                email
              </Link>{' '}
              and on{' '}
              <Link
                href="https://www.linkedin.com/in/thiago-bueno-dos-santos-28714924/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:decoration-primary-dark underline decoration-transparent underline-offset-2 transition-colors duration-150"
              >
                LinkedIn
              </Link>
              . You can also find me on{' '}
              <Link
                href="https://github.com/thbueno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:decoration-primary-dark underline decoration-transparent underline-offset-2 transition-colors duration-150"
              >
                GitHub
              </Link>{' '}
              or reach me on{' '}
              <Link
                href="https://wa.me/84784551070"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark hover:decoration-primary-dark underline decoration-transparent underline-offset-2 transition-colors duration-150"
              >
                WhatsApp
              </Link>
              .
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  )
}

function AboutBlock() {
  return (
    <AnimateOnScroll threshold={0.2}>
      <h2 className="text-secondary-muted pb-4.5 text-lg font-medium uppercase tracking-widest">
        About
      </h2>
      <p className="text-primary-dark max-w-[680px] text-xl leading-[1.7]">
        I&apos;ve spent the last ten years at the intersection of engineering
        and product — writing backend systems, shipping interfaces, and lately
        building AI-powered applications. I care deeply about the quality of
        what I make: from architecture decisions to pixel-level details.
        Currently leading product and engineering at Esthalo.
      </p>
    </AnimateOnScroll>
  )
}
