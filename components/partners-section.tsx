"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

// Define the partner type
interface Partner {
  id: string
  name: string
  logo: string
}

// Sample partner data
const partners: Partner[] = [
  {
    id: "rackspace",
    name: "React",
    logo: "/images/react_logo.svg",
  },
  {
    id: "pipefy",
    name: "Next.js",
    logo: "/images/Nextjs_Logo.svg",
  },
  {
    id: "teamwork",
    name: "Teamwork",
    logo: "/images/teamwork-logo.svg",
  },
  {
    id: "django",
    name: "Django",
    logo: "/images/django-logo.svg",
  },
  {
    id: "portal",
    name: "Portal",
    logo: "/images/portal-logo.svg",
  },
]

interface CarouselProps {
  baseSpeed?: number // pixels per second
  decelerationFactor?: number // how much to slow down on hover (0-1)
  transitionDuration?: number // milliseconds for speed transition
  hideTitle?: boolean // whether to hide the title
}

export function PartnersSection({
  baseSpeed = 340,
  decelerationFactor = 0.2,
  transitionDuration = 200,
  hideTitle = false,
}: CarouselProps) {
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const offsetRef = useRef<number>(0)

  // Calculate current speed based on hover state
  const getCurrentSpeed = () => {
    return isHovering ? baseSpeed * decelerationFactor : baseSpeed
  }

  const animate = () => {
    if (!row1Ref.current || !row2Ref.current) return

    // Calculate the new offset
    offsetRef.current += getCurrentSpeed() / 60 // Assuming 60fps

    // Get the width of the first row
    const rowWidth = row1Ref.current.scrollWidth / 2

    // Reset when we've scrolled the full width
    if (offsetRef.current >= rowWidth) {
      offsetRef.current = 0
    }

    // Apply the transform
    row1Ref.current.style.transform = `translateX(-${offsetRef.current}px)`
    row2Ref.current.style.transform = `translateX(-${offsetRef.current}px)`

    // Continue the animation
    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    // Start the animation
    animationRef.current = requestAnimationFrame(animate)

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [isHovering])

  // Handle mouse events
  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Create a doubled array of partners for seamless looping
  const doubledPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      {!hideTitle && (
        <div className="container mx-auto px-4 md:px-8 lg:px-24 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A tech partner for brands, companies, and agencies
          </h2>
        </div>
      )}

      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex items-center"
          style={{
            transition: `transform ${transitionDuration}ms ease-out`,
          }}
        >
          {/* First row */}
          <div
            ref={row1Ref}
            className="flex items-center space-x-24 py-8"
            style={{
              transition: `transform ${transitionDuration}ms ease-out`,
            }}
          >
            {doubledPartners.map((partner, index) => (
              <div key={`${partner.id}-1-${index}`} className="flex-shrink-0">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={540}
                  height={180}
                  className="h-40 w-auto opacity-60"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center mt-8">
          {/* Second row (offset for visual effect) */}
          <div
            ref={row2Ref}
            className="flex items-center space-x-24 py-8"
            style={{
              transition: `transform ${transitionDuration}ms ease-out`,
            }}
          >
            {doubledPartners.map((partner, index) => (
              <div key={`${partner.id}-2-${index}`} className="flex-shrink-0">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={180}
                  height={60}
                  className="h-12 w-auto opacity-30 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
