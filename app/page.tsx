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

        <main className="mx-auto flex max-w-[980px] flex-col gap-16 px-3 pb-16 pt-12 sm:px-9 md:gap-24 md:pb-40 md:pt-24 lg:px-16">
          <ProfileHeader />
          <WorksSection id="works" />
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
      <p className="text-primary-dark mx-auto mt-3 text-base leading-[1.7] sm:text-lg md:text-xl">
        When I was thirteen, I disassembled my family&apos;s only computer to
        see how it worked. It was a glorious mess of circuit boards. When I put
        it back together and it actually booted, my dad looked at me with a mix
        of terror and relief. He said: &quot;You&apos;d better figure out how to
        make money off this.&quot;
        <br />
        <br />
        So I did. More than ten years later, I&apos;ve shipped code to 50+
        companies and helped build government systems running in 1,000+ city
        halls, international startups, e-commerces, healthcare platforms,
        LLM-powered tools, and more. Lately, I&apos;ve been building applied ML
        pipelines and RAG systems.
        <br />
        <br />
        <h3>My take on AI</h3>
        AI tools are part of my daily workflow and I strongly believe that
        agentic engineering is about preserving the professional quality bar
        that existed before LLMs.
        <br />
        PR hundreds of thousands of lines of code doesn't say much about the
        quality and effectiveness of your work. What really matters is how many
        features and products you are shipping to production, and how many users
        are relying on your builds every day. That is what really matters.
        Shipping is testing, deploying, monitoring, maintaining, and improving
        over time.
      </p>
    </AnimateOnScroll>
  )
}
