import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface LetsTalkButtonProps {
  variant?: 'light' | 'dark' | 'red' | 'surface-dark'
  className?: string
  text?: string
  href?: string
}

export function LetsTalkButton({
  variant = 'light',
  className = '',
  text = "Let's Talk",
  href = 'https://wa.me/84784551070',
}: LetsTalkButtonProps) {
  const baseClasses =
    'group flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200 text-base font-medium cursor-pointer whitespace-nowrap'

  const variants = {
    light:
      'bg-card-light text-primary-dark hover:bg-secondary hover:text-background',
    dark: 'bg-[#1a1a1a] text-[#f0ede5] hover:bg-secondary hover:text-background',
    'surface-dark': 'bg-[#1a1a1a] text-[--on-surface-dark] hover:bg-secondary hover:text-background',
    red: 'bg-secondary text-background hover:bg-primary hover:text-background',
  }

  return (
    <Link
      href={href}
      className={twMerge(baseClasses, variants[variant], className)}
    >
      {text}
      <ArrowRight
        size={16}
        className="inline-block transition-transform duration-300 ease-out focus:translate-y-6 group-hover:-rotate-45"
      />
    </Link>
  )
}
