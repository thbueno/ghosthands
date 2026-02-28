'use client'

import { X } from 'lucide-react'
import Link from 'next/link'
import { type FormEvent, useState } from 'react'
import { ArrowLinkButton } from './arrow-link-button'
import { NewsletterForm } from './newsletter-form'
import { SocialLinks } from './social-links'

interface DropdownMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function DropdownMenu({ isOpen, onClose }: DropdownMenuProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle email subscription logic here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-40 bg-title text-background transition-all duration-300 ease-in-out ${
        isOpen
          ? 'translate-y-0 opacity-100 delay-150'
          : 'pointer-events-none -translate-y-full opacity-0 transition-all delay-150 duration-500 ease-in-out'
      }`}
    >
      <div className="container mx-auto flex min-h-screen flex-col px-7 pb-8 pt-28 md:px-10 lg:px-40">
        {/* Header intentionally omitted; reuse NavBar header */}

        {/* Navigation Menu */}
        <div className="flex-grow">
          <nav className="py-8">
            <ul className="space-y-8">
              <li>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/"
                    className="text-3xl font-bold transition-colors hover:text-secondary sm:text-4xl md:text-4xl lg:text-5xl"
                  >
                    Home{' '}
                  </Link>
                  <ArrowLinkButton href="/" variant="dark" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/about"
                    className="text-3xl font-bold transition-colors hover:text-secondary sm:text-4xl md:text-4xl lg:text-5xl"
                  >
                    About Me{' '}
                  </Link>
                  <ArrowLinkButton href="/about" variant="dark" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/works"
                    className="text-3xl font-bold transition-colors hover:text-secondary sm:text-4xl md:text-4xl lg:text-5xl"
                  >
                    Works{' '}
                  </Link>
                  <ArrowLinkButton href="/works" variant="dark" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/insights"
                    className="text-3xl font-bold transition-colors hover:text-secondary sm:text-4xl md:text-4xl lg:text-5xl"
                  >
                    Experience
                  </Link>
                  <ArrowLinkButton href="/insights" variant="dark" />
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-stone-800 pt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl text-stone-400">/Follow me.</h3>
              <SocialLinks variant="dark" />
            </div>
            {/* <div>
              <h3 className="text-xl text-stone-400 mb-6">
                Stay connected w/ me.
              </h3>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-stone-700 py-2 pr-12 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </div> */}
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
