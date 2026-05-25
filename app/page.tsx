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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set('.profile-header, .section-label, .product-card, .footer', {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      })
      return
    }

    const tl = gsap.timeline({ delay: 0.2 })

    tl.to('.profile-header', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power2.out',
    })
      .to(
        '.section-label',
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.4,
          ease: 'power2.out',
        },
        '+=0.1',
      )
      .to(
        '.product-card',
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
      .to(
        '.footer',
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
        <main className="mx-auto flex max-w-[640px] flex-col gap-12 px-6 pb-12 pt-10 sm:px-10">
          <ProfileHeader />
          <WorksSection />
          <SkillsSection />
        </main>

        <footer className="footer bg-card-light py-12 opacity-0 translate-y-4 blur-[4px] will-change-transform">
          <div className="mx-auto max-w-[640px] px-6 sm:px-10">
            <p className="text-[14px] leading-[1.6] text-secondary-muted">
              I&apos;m most reachable by{' '}
              <Link
                href="mailto:thinobueno@proton.me"
                className="text-primary-dark underline underline-offset-2 decoration-transparent hover:decoration-primary-dark transition-colors duration-150"
              >
                email
              </Link>{' '}
              and on{' '}
              <Link
                href="https://www.linkedin.com/in/thiago-bueno-dos-santos-28714924/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark underline underline-offset-2 decoration-transparent hover:decoration-primary-dark transition-colors duration-150"
              >
                LinkedIn
              </Link>
              . You can also find me on{' '}
              <Link
                href="https://github.com/thbueno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark underline underline-offset-2 decoration-transparent hover:decoration-primary-dark transition-colors duration-150"
              >
                GitHub
              </Link>{' '}
              or reach me on{' '}
              <Link
                href="https://wa.me/84784551070"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-dark underline underline-offset-2 decoration-transparent hover:decoration-primary-dark transition-colors duration-150"
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
