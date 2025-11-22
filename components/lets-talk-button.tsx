import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface LetsTalkButtonProps {
  variant?: 'light' | 'dark' | 'red'
  className?: string
}

export function LetsTalkButton({
  variant = 'light',
  className = '',
}: LetsTalkButtonProps) {
  const baseClasses =
    'group flex items-center gap-2 px-7 py-3 rounded-full transition-all text-base font-medium cursor-pointer'

  const variants = {
    light:
      'border border-title text-title transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-background',
    dark: 'border border-background text-background hover:border-secondary hover:text-secondary',
    red: 'bg-secondary text-background border border-background transition-all duration-300 hover:bg-background hover:border hover:border-secondary hover:text-secondary',
  }

  return (
    <Link
      href="#contact"
      className={twMerge(baseClasses, variants[variant], className)}
    >
      Let&apos;s Build
      <ArrowRight
        size={16}
        className="inline-block transition-transform duration-300 ease-out focus:translate-y-6 group-hover:-rotate-45"
      />
    </Link>
  )
}
