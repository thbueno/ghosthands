'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ThemeToggleProps {
  className?: string
  variant?: 'light' | 'dark'
  iconSize?: number
}

export function ThemeToggle({
  className,
  variant = 'light',
  iconSize = 24,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div
        className={twMerge(
          'rounded-full p-3',
          variant === 'dark' ? 'bg-[#1a1a1a]' : 'bg-card-light',
          className,
        )}
      >
        <div style={{ width: iconSize, height: iconSize }} />
      </div>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={twMerge(
        'group rounded-full p-3 transition-all duration-200',
        variant === 'dark'
          ? 'bg-[#1a1a1a] hover:bg-secondary'
          : 'bg-card-light hover:bg-secondary',
        className,
      )}
    >
      <span
        className="block transition-transform duration-300 ease-out"
        style={{ transform: isDark ? 'rotate(0deg)' : 'rotate(180deg)' }}
      >
        {isDark ? (
          <Sun size={iconSize} className="text-white group-hover:text-white" />
        ) : (
          <Moon
            size={iconSize}
            strokeWidth={1.5}
            className="text-black group-hover:text-white"
          />
        )}
      </span>
    </button>
  )
}
