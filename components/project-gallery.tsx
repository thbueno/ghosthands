'use client'

import * as React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'

interface ProjectGalleryProps {
  images: string[]
  alt: string
}

export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  // Sync selected index when carousel scrolls
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = React.useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  // Fallback: single image, no carousel UI
  if (!images || images.length <= 1) {
    return (
      <div className="mb-12 overflow-hidden rounded-3xl bg-background">
        <Image
          src={images?.[0] || '/placeholder.svg'}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="mb-12">
      {/* Main image viewport */}
      <div ref={emblaRef} className="overflow-hidden rounded-3xl bg-background">
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="min-w-0 shrink-0 grow-0 basis-full">
              <Image
                src={src}
                alt={`${alt} — ${index + 1}`}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail strip — full width, thumbnails share space equally */}
      <div className="mt-4 flex w-full items-center gap-2">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'relative min-w-0 flex-1 overflow-hidden rounded-xl transition-all duration-200',
              selectedIndex === index
                ? 'ring-1 ring-white ring-offset-2 ring-offset-background'
                : 'opacity-50 hover:opacity-100',
            )}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} thumbnail ${index + 1}`}
              width={400}
              height={240}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
