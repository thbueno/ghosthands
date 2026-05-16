import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ArrowLinkButtonProps {
  href: string
  variant?: 'light' | 'dark' | 'ghost' | 'surface-dark'
  size?: number
  onClick?: () => void
  className?: string
}

export function ArrowLinkButton({
  href,
  variant = 'light',
  size = 20,
  onClick,
  className,
}: ArrowLinkButtonProps) {
  const variantStyles = {
    light: 'border-title hover:border-secondary hover:text-secondary',
    dark: 'border-stone-700 hover:bg-stone-900',
    ghost: 'border-background hover:border-secondary hover:text-secondary',
    'surface-dark': 'border-[--on-surface-dark] text-[--on-surface-dark] hover:border-secondary hover:text-secondary',
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex flex-shrink-0 items-center justify-center rounded-full border p-3 transition-colors sm:p-4 ${variantStyles[variant]} ${className ?? ''}`}
    >
      <ArrowRight
        size={size}
        className="transition-transform duration-300 ease-out group-hover:-rotate-45 group-hover/card:-rotate-45"
      />
    </Link>
  )
}
