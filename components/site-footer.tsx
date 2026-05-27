'use client'

import Link from 'next/link'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { cn } from '@/lib/utils'

interface SiteFooterProps {
  innerClassName?: string
  animate?: boolean
}

const footerClass =
  'bg-card-light -mx-7 px-7 py-10 md:-mx-10 md:px-10 md:py-17.5 lg:-mx-40 lg:px-40'

const links = [
  { label: 'email', href: 'mailto:thinobueno@proton.me', external: false },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thiago-bueno-dos-santos-28714924/',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/thbueno',
    external: true,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/84784551070',
    external: true,
  },
]

function FooterContent({ innerClassName }: { innerClassName: string }) {
  const [email, linkedin, github, whatsapp] = links
  return (
    <div className={cn('mx-auto px-9 sm:px-16', innerClassName)}>
      <p className="text-secondary-muted text-center text-xl leading-[1.6]">
        I&apos;m most reachable by <FooterLink {...email}>email</FooterLink> and
        on <FooterLink {...linkedin}>LinkedIn</FooterLink>. You can also find me
        on <FooterLink {...github}>GitHub</FooterLink> or reach me on{' '}
        <FooterLink {...whatsapp}>WhatsApp</FooterLink>.
      </p>
    </div>
  )
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string
  external: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-primary-dark hover:decoration-primary-dark underline decoration-transparent underline-offset-2 transition-colors duration-150"
    >
      {children}
    </Link>
  )
}

export function SiteFooter({
  innerClassName = 'max-w-[1100px]',
  animate = false,
}: SiteFooterProps) {
  if (animate) {
    return (
      <AnimateOnScroll
        as="footer"
        className={footerClass}
        delay={100}
        threshold={0.2}
      >
        <FooterContent innerClassName={innerClassName} />
      </AnimateOnScroll>
    )
  }

  return (
    <footer className={footerClass}>
      <FooterContent innerClassName={innerClassName} />
    </footer>
  )
}
