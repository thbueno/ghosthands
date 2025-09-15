'use client'

import { DropdownMenu } from '@/components/dropdown-menu'
import { LetsTalkButton } from '@/components/lets-talk-button'
import { MenuButton } from '@/components/menu-button'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header
        className={twMerge(
          'sticky left-0 right-0 top-0 z-50 bg-background',
          menuOpen &&
            'bg-title text-background transition delay-150 duration-300 ease-in-out',
        )}
      >
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 align-middle">
              <Image
                src="/images/ghost-hands.svg"
                alt="Designer portrait"
                width={180}
                height={180}
                className="h-auto w-16 rounded-3xl object-contain lg:w-20"
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
