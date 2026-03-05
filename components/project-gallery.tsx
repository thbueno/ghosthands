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
          className="h-auto w-full object-contain"
        />
      </div>
    )
  }

  return (
    // items-stretch: both columns share the same height.
    // The thumbnail strip drives the height (sum of natural thumbnail heights);
    // the main image panel stretches to fill it.
    <div className="mb-12 flex flex-col lg:flex-row lg:items-stretch lg:gap-4">
      {/* Main image viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-3xl bg-background lg:flex-1"
      >
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="min-w-0 shrink-0 grow-0 basis-full">
              <Image
                src={src}
                alt={`${alt} — ${index + 1}`}
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail strip
          Mobile:  horizontal row below main image (aspect-video cells, flex-1)
          Desktop: vertical column to the right, fixed width, natural height per thumb */}
      <div className="mt-4 flex w-full items-center gap-2 lg:mt-0 lg:w-40 lg:flex-col lg:gap-2">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'relative overflow-hidden rounded-xl transition-all duration-200',
              // Mobile: equal-width cells with a fixed aspect ratio in a row
              'aspect-video min-w-0 flex-1',
              // Desktop: full column width, natural height driven by intrinsic image ratio
              'lg:aspect-auto lg:w-full lg:flex-none',
              selectedIndex === index
                ? 'ring-1 ring-white ring-offset-2 ring-offset-background'
                : 'opacity-50 hover:opacity-100',
            )}
            aria-label={`View image ${index + 1}`}
          >
            {/*
              h-auto w-full: width fills the column, height follows the image's
              intrinsic aspect ratio — no letterbox gap, no cropping.
            */}
            <Image
              src={src}
              alt={`${alt} thumbnail ${index + 1}`}
              width={192}
              height={108}
              className="h-auto w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
