'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'
import { LetsTalkButton } from '@/components/lets-talk-button'
import { useEffect, useState } from 'react'

export function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const profileHeader = document.querySelector('.profile-header')
      if (profileHeader) {
        const rect = profileHeader.getBoundingClientRect()
        // If bottom of profile header is at or above the sticky navbar (80px from top)
        setShowProfile(rect.bottom <= 80)
      } else {
        setShowProfile(false)
      }
    }

    // Call initially to set state
    handleScroll()

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
      <div className="mx-auto flex max-w-[980px] items-center justify-between px-9 py-5 sm:px-16">
        <Link
          href="/"
          className={`flex items-center gap-2.5 transition-all duration-300 ease-in-out ${
            showProfile
              ? 'pointer-events-auto scale-100 opacity-100'
              : 'pointer-events-none scale-95 opacity-0'
          }`}
        >
          <div className="relative hidden h-11 w-11 flex-shrink-0 sm:block">
            <Image
              src="/images/profile-photo.JPEG"
              alt="Thiago Bueno"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-border/20 object-cover"
            />
          </div>
          <span className="text-sm font-semibold lowercase tracking-tight text-foreground">
            thiago bueno
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle variant="light" className="p-2 sm:p-3" iconSize={16} />
          <LetsTalkButton className="px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm" />
        </div>
      </div>
    </header>
  )
}
