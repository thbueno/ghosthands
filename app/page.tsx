'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import dynamic from 'next/dynamic'
import { ProfileHeader } from '@/components/profile-header'
import { WorksSection } from '@/components/works-section'
import SkillsSection from '@/components/skills-section'
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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) {
      gsap.set('.profile-header, .section-label, .product-card, .footer', {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      })
      return
    }

    const from = { opacity: 0, y: 16, filter: 'blur(4px)' }
    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo('.profile-header', from, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power2.out',
    })
      .fromTo(
        '.section-label',
        from,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.4,
          ease: 'power2.out',
        },
        '+=0.1',
      )
      .fromTo(
        '.product-card',
        from,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        },
        '+=0.05',
      )
      .fromTo(
        '.footer',
        from,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.5,
          ease: 'power2.out',
        },
        '+=0.1',
      )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <>
      <TrailCanvas />

      <div className="relative z-[1]">
        <main className="mx-auto flex max-w-[980px] flex-col gap-24 px-9 pb-24 pt-24 sm:px-16 md:pb-40 md:pt-40">
          <ProfileHeader />
          <WorksSection />
          <SkillsSection />
        </main>

        <footer className="footer bg-card-light md:py-17.5 -mx-7 translate-y-4 px-7 py-10 opacity-0 blur-sm will-change-transform md:-mx-10 md:px-10 lg:-mx-40 lg:px-40">
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
        </footer>
      </div>
    </>
  )
}
