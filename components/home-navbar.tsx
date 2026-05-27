'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'
import { LetsTalkButton } from '@/components/lets-talk-button'
import { useEffect, useState } from 'react'

export function HomeNavbar() {
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
      <div className="mx-auto flex max-w-[980px] items-center justify-end px-9 py-5 sm:px-16">
        {/* <Link href="/" className="flex items-center">
          <Image
            src="/images/ghost-hands.svg"
            alt="Ghosthands"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
        </Link> */}

        <div className="flex items-center gap-3">
          <ThemeToggle variant="light" className="p-3" iconSize={20} />
          <LetsTalkButton className="px-5 py-3 text-sm" />
        </div>
      </div>
    </header>
  )
}
