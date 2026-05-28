'use client'

import Link from 'next/link'
import Image from 'next/image'
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
          ? 'bg-background/80 border-b border-border/20 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-9 py-5 sm:px-16">
        <Link
          href="/"
          className={`flex items-center gap-2.5 transition-all duration-300 ease-in-out`}
        >
          <div className="relative h-11 w-11 flex-shrink-0">
            <Image
              src="/images/profile-photo.JPEG"
              alt="Thiago Bueno"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-border/40 object-cover"
            />
          </div>
          <span className="text-sm font-semibold lowercase tracking-tight text-foreground">
            thiago bueno
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/"
            className="text-secondary-muted hover:text-primary-dark text-15 transition-colors duration-150"
          >
            Home
          </Link>
          <Link
            href="/#works"
            className="text-secondary-muted hover:text-primary-dark text-15 transition-colors duration-150"
          >
            Works
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle variant="light" className="p-2 sm:p-3" iconSize={18} />
          <LetsTalkButton className="px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm" />
        </div>
      </div>
    </header>
  )
}
