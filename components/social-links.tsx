import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SocialLinksProps {
  variant?: 'light' | 'dark'
  className?: string
}

type SocialLink = {
  name: string
  href: string
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'INSTAGRAM', href: '#' },
  { name: 'BEHANCE', href: '#' },
  { name: 'DRIBBBLE', href: '#' },
]

export function SocialLinks({
  variant = 'light',
  className = '',
}: SocialLinksProps) {
  const baseClasses =
    'flex items-center gap-1 text-md font-medium transition-colors'
  const variantClasses =
    variant === 'dark'
      ? 'text-[color:var(--background)] hover:text-[color:var(--secondary)]'
      : 'text-[color:var(--title)] hover:text-[color:var(--secondary)]'

  return (
    <div className="mb-8 flex gap-8 md:mb-0">
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${baseClasses} ${variantClasses} ${className}`}
        >
          {link.name} <ArrowRight size={14} className="-rotate-45 transform" />
        </Link>
      ))}
    </div>
  )
}
