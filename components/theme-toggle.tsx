'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ThemeToggleProps {
  className?: string
  variant?: 'light' | 'dark'
}

export function ThemeToggle({ className, variant = 'light' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div
        className={twMerge(
          'rounded-full border p-3',
          variant === 'dark' ? 'border-[--on-surface-dark]' : 'border-title',
          className,
        )}
      >
        <div className="h-6 w-6" />
      </div>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={twMerge(
        'group rounded-full border p-3 transition-all duration-300',
        variant === 'dark'
          ? 'border-background hover:border-secondary hover:bg-secondary'
          : 'border-title hover:border-secondary hover:bg-secondary',
        className,
      )}
    >
      <span
        className="block transition-transform duration-300 ease-out"
        style={{ transform: isDark ? 'rotate(0deg)' : 'rotate(180deg)' }}
      >
        {isDark ? <Sun size={24} className="text-white" /> : <Moon size={24} strokeWidth={1.5} className="text-black transition-colors duration-300 group-hover:text-white" />}
      </span>
    </button>
  )
}
