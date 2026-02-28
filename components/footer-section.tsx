'use client'

import { ArrowUpRight, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import { NewsletterForm } from './newsletter-form'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

export function FooterSection() {
  return (
    <footer className="overflow-x-hidden py-12 md:px-8 lg:px-12">
      <AnimateOnScroll className="overflow-hidden rounded-3xl bg-title text-background">
        <div className="container mx-auto px-6 pb-12 pt-16 md:px-12">
          <AnimateOnScroll threshold={0.2}>
            <div className="mb-16">
              <AnimateOnScroll delay={100} threshold={0.2}>
                <p className="mb-6 text-lg">
                  Let&apos;s build something great together
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200} threshold={0.2}>
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="mailto:thgbueno@proton.me"
                    className="break-all text-xl font-bold text-stone-200 transition-colors hover:text-white sm:text-3xl md:text-4xl lg:text-5xl"
                  >
                    thgbueno@proton.me
                  </Link>
                  <Link
                    href="mailto:thgbueno@proton.me"
                    className="rounded-full border border-background p-3 transition-colors hover:border-secondary hover:text-secondary"
                  >
                    <ArrowUpRight size={24} />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>

          <div className="border-t border-text py-8">
            <AnimateOnScroll delay={300} threshold={0.2}>
              <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-center">
                <nav className="mb-6 flex flex-wrap gap-8 md:mb-0">
                  <Link
                    href="/"
                    className="text-sm font-medium text-background transition-colors hover:text-secondary"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-background transition-colors hover:text-secondary"
                  >
                    Works
                  </Link>
                  <Link
                    href="/works"
                    className="text-sm font-medium text-background transition-colors hover:text-secondary"
                  >
                    About Me
                  </Link>
                  <Link
                    href="/insights"
                    className="text-sm font-medium text-background transition-colors hover:text-secondary"
                  >
                    Experience
                  </Link>
                </nav>

                <div className="flex gap-6">
                  <Link
                    href="#"
                    className="text-background transition-colors hover:text-secondary"
                  >
                    <Twitter size={20} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-background transition-colors hover:text-secondary"
                  >
                    <Youtube size={20} />
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-background transition-colors hover:text-secondary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-background transition-colors hover:text-secondary"
                  >
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400} threshold={0.2}>
              <NewsletterForm />
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  )
}
