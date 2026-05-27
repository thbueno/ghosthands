'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import dynamic from 'next/dynamic'
import { ProfileHeader } from '@/components/profile-header'
import { WorksSection } from '@/components/works-section'
import SkillsSection from '@/components/skills-section'
import { HomeNavbar } from '@/components/home-navbar'
import { SiteFooter } from '@/components/site-footer'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

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

        <SiteFooter />
      </div>
    </>
  )
}

function AboutBlock() {
  return (
    <AnimateOnScroll threshold={0.2}>
      <h2>About Me</h2>
      <p className="text-primary-dark mx-auto mt-3 pl-16 pr-16 text-xl leading-[1.7]">
        I got into software because I watched <em>The Matrix</em> too many times
        as a kid. When I was thirteen, I disassembled my family&apos;s only
        computer to see how it worked. It was a glorious mess of circuit boards.
        When I put it back together and it actually booted, my dad looked at me
        with a mix of terror and relief. He said: &quot;You&apos;d better figure
        out how to make money off this.&quot;
        <br />
        <br /> So I did. Ten years later, I build systems and products with
        code. I&apos;ve shipped code to 50+ companies and built government
        systems running in 1,000+ city halls. Lately, I&apos;ve been building
        applied ML pipelines and RAG systems. My take on AI is simple: prompting
        isn&apos;t the skill, structuring inputs is. The model handles
        ambiguity, but you need human discipline to keep the code from turning
        into slop.
      </p>
    </AnimateOnScroll>
  )
}
