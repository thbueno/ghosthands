'use client'

import { ArrowRight, X } from 'lucide-react'
import Link from 'next/link'
import { type FormEvent, useState } from 'react'
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
          : 'pointer-events-none -translate-y-1 opacity-0'
      }`}
    >
      <div className="container mx-auto flex min-h-screen flex-col px-4 pb-8 pt-28 md:px-8 lg:px-24">
        {/* Header intentionally omitted; reuse NavBar header */}

        {/* Navigation Menu */}
        <div className="flex-grow">
          <nav className="py-8">
            <ul className="space-y-8">
              <li>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/"
                    className="text-3xl font-bold transition-colors hover:text-stone-300 sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    Home{' '}
                    <span className="text-lg text-stone-500 sm:text-xl md:text-2xl lg:text-3xl">
                      (01)
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className="flex-shrink-0 rounded-full border border-stone-700 p-3 transition-colors hover:bg-stone-900 sm:p-4"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/about"
                    className="text-3xl font-bold transition-colors hover:text-stone-300 sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    Works{' '}
                    <span className="text-lg text-stone-500 sm:text-xl md:text-2xl lg:text-3xl">
                      (02)
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="flex-shrink-0 rounded-full border border-stone-700 p-3 transition-colors hover:bg-stone-900 sm:p-4"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/works"
                    className="text-3xl font-bold transition-colors hover:text-stone-300 sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    Works{' '}
                    <span className="text-lg text-stone-500 sm:text-xl md:text-2xl lg:text-3xl">
                      (03)
                    </span>
                  </Link>
                  <Link
                    href="/works"
                    className="flex-shrink-0 rounded-full border border-stone-700 p-3 transition-colors hover:bg-stone-900 sm:p-4"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/insights"
                    className="text-3xl font-bold transition-colors hover:text-stone-300 sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    Insights{' '}
                    <span className="text-lg text-stone-500 sm:text-xl md:text-2xl lg:text-3xl">
                      (04)
                    </span>
                  </Link>
                  <Link
                    href="/insights"
                    className="flex-shrink-0 rounded-full border border-stone-700 p-3 transition-colors hover:bg-stone-900 sm:p-4"
                  >
                    <ArrowRight size={20} />
                  </Link>
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
