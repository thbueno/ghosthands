'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ProjectSidebarProps {
  children: React.ReactNode
  className?: string
}

export function ProjectSidebar({ children, className }: ProjectSidebarProps) {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight

      // Start fading when within the last 30% of the page
      const fadeStart = (docHeight - winHeight) * 0.7
      const fadeEnd = docHeight - winHeight

      if (scrollTop <= fadeStart) {
        setOpacity(1)
      } else if (scrollTop >= fadeEnd) {
        setOpacity(0)
      } else {
        const progress = (scrollTop - fadeStart) / (fadeEnd - fadeStart)
        setOpacity(1 - progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={cn('space-y-8 md:col-span-1 md:sticky md:top-24 md:self-start', className)}
      style={{
        opacity,
        transition: 'opacity 0.15s ease-out',
      }}
    >
      {children}
    </div>
  )
}
