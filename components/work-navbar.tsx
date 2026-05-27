'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { LetsTalkButton } from '@/components/lets-talk-button'
import { useEffect, useState } from 'react'

export function WorkNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-50 -mx-7 transition-all duration-300 md:-mx-10 lg:-mx-40 ${
        scrolled
          ? 'bg-background/80 border-b border-border/40 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-9 py-5 sm:px-16">
        <Link
          href="/"
          className="text-17 text-primary-dark font-semibold transition-opacity duration-150 hover:opacity-70"
        >
          Thiago Bueno
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-15 text-secondary-muted hover:text-primary-dark transition-colors duration-150"
          >
            Home
          </Link>
          <Link
            href="/works"
            className="text-15 text-secondary-muted hover:text-primary-dark transition-colors duration-150"
          >
            Works
          </Link>
          <Link
            href="/blog"
            className="text-15 text-secondary-muted hover:text-primary-dark transition-colors duration-150"
          >
            Writing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle variant="light" className="px-3 py-3" iconSize={20} />
          <LetsTalkButton className="px-5 py-3 text-sm" />
        </div>
      </div>
    </header>
  )
}
