'use client'

import React from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'slide-up' | 'fade'
  delay?: number
  threshold?: number
  triggerOnce?: boolean
  as?: React.ElementType
}

/**
 * Wrapper component that triggers animations when element enters viewport
 * Replaces Rombo motion classes with pure CSS animations
 *
 * @example
 * // Default: slide up + fade + blur (equivalent to motion-translate-y-in-100 motion-opacity-in-0 motion-blur-in-md)
 * <AnimateOnScroll delay={200}>
 *   <div>Content</div>
 * </AnimateOnScroll>
 *
 * // Slide up without blur
 * <AnimateOnScroll variant="slide-up">
 *   <div>Content</div>
 * </AnimateOnScroll>
 *
 * // Fade only
 * <AnimateOnScroll variant="fade">
 *   <div>Content</div>
 * </AnimateOnScroll>
 */
export function AnimateOnScroll({
  children,
  className,
  variant = 'default',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  as: Component = 'div',
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    triggerOnce,
  })

  const animationClass = {
    default: 'animate-on-scroll',
    'slide-up': 'animate-slide-up',
    fade: 'animate-fade',
  }[variant]

  return (
    <Component
      ref={ref}
      data-animate={isVisible ? 'true' : 'false'}
      className={cn(animationClass, className)}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  )
}
