import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ArrowLinkButtonProps {
  href: string
  variant?: 'light' | 'dark'
  size?: number
}

export function ArrowLinkButton({
  href,
  variant = 'light',
  size = 20,
}: ArrowLinkButtonProps) {
  const variantStyles = {
    light: 'border-title hover:border-secondary hover:text-secondary',
    dark: 'border-stone-700 hover:bg-stone-900',
  }

  return (
    <Link
      href={href}
      className={`group flex flex-shrink-0 items-center justify-center rounded-full border p-3 transition-colors sm:p-4 ${variantStyles[variant]}`}
    >
      <ArrowRight
        size={size}
        className="transition-transform duration-300 ease-out group-hover:-rotate-45"
      />
    </Link>
  )
}
