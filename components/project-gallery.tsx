'use client'

import * as React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

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

      {/* Thumbnail strip with nav arrows */}
      <div className="mt-4 flex items-center gap-2">
        {/* Prev button */}
        <button
          onClick={scrollPrev}
          className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Thumbnails */}
        <div className="flex flex-1 items-center gap-2 overflow-x-auto">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'shrink-0 overflow-hidden rounded-xl transition-all duration-200',
                selectedIndex === index
                  ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background'
                  : 'opacity-60 hover:opacity-100',
              )}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} thumbnail ${index + 1}`}
                width={120}
                height={80}
                className="h-16 w-24 object-cover md:h-20 md:w-28"
              />
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={scrollNext}
          className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
