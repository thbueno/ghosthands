'use client'

import { DropdownMenu } from '@/components/dropdown-menu'
import { LetsTalkButton } from '@/components/lets-talk-button'
import { MenuButton } from '@/components/menu-button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const isCompact = scrolled && !menuOpen

  return (
    <>
      <header
        className={twMerge(
          'sticky left-0 right-0 top-0 z-50 -mx-7 bg-background transition-all duration-300 ease-in-out md:-mx-10 lg:-mx-40',
          menuOpen && 'bg-title text-background delay-[150ms] ease-in-out',
        )}
      >
        <div
          className={twMerge(
            'container mx-auto px-7 md:px-10 lg:px-40',
            'transition-all duration-300 ease-in-out',
            isCompact ? 'py-5' : 'py-8',
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 align-middle">
              <Image
                src="/images/ghost-hands.svg"
                alt="Designer portrait"
                width={180}
                height={180}
                className={twMerge(
                  'h-auto rounded-3xl object-contain transition-all duration-300 ease-in-out',
                  isCompact ? 'w-11 lg:w-14' : 'w-16 lg:w-20',
                )}
              />
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <LetsTalkButton variant={menuOpen ? 'dark' : 'light'} />
              </div>
              <MenuButton isOpen={menuOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown Menu */}
      <DropdownMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
