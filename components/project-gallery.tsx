'use client'

import * as React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectGalleryProps {
  images: string[]
  alt: string
}

export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxIndex, setLightboxIndex] = React.useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

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

  const openLightbox = React.useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = React.useCallback(() => {
    setLightboxOpen(false)
  }, [])

  React.useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, images.length, closeLightbox])

  // Fallback: single image, no carousel UI
  if (!images || images.length <= 1) {
    return (
      <>
        <div
          className="mb-8 min-h-[220px] cursor-zoom-in overflow-hidden rounded-3xl bg-background sm:mb-12 sm:min-h-0"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={images?.[0] || '/placeholder.svg'}
            alt={alt}
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
          />
        </div>

        <Lightbox
          open={lightboxOpen}
          images={images ?? []}
          index={lightboxIndex}
          alt={alt}
          onClose={closeLightbox}
          onChangeIndex={setLightboxIndex}
        />
      </>
    )
  }

  return (
    <>
      <div className="mb-8 flex flex-col sm:mb-12 min-[1366px]:flex-row min-[1366px]:items-stretch min-[1366px]:gap-4">
        {/* Main image viewport */}
        <div
          ref={emblaRef}
          className="min-h-[220px] cursor-zoom-in overflow-hidden rounded-3xl bg-background sm:min-h-0 min-[1366px]:flex-1"
        >
          <div className="flex">
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-0 shrink-0 grow-0 basis-full"
                onClick={() => openLightbox(index)}
              >
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

        {/* Thumbnail strip */}
        <div className="mt-3 flex w-full items-center gap-2 sm:mt-4 min-[1366px]:mt-0 min-[1366px]:w-40 min-[1366px]:flex-col min-[1366px]:gap-2">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'relative overflow-hidden rounded-xl transition-all duration-200',
                'aspect-video min-w-0 flex-1',
                'min-[1366px]:aspect-auto min-[1366px]:w-full min-[1366px]:flex-none',
                selectedIndex === index
                  ? 'ring-1 ring-white ring-offset-2 ring-offset-background'
                  : 'opacity-50 hover:opacity-100',
              )}
              aria-label={`View image ${index + 1}`}
            >
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

      <Lightbox
        open={lightboxOpen}
        images={images}
        index={lightboxIndex}
        alt={alt}
        onClose={closeLightbox}
        onChangeIndex={setLightboxIndex}
      />
    </>
  )
}

interface LightboxProps {
  open: boolean
  images: string[]
  index: number
  alt: string
  onClose: () => void
  onChangeIndex: (i: number) => void
}

function Lightbox({
  open,
  images,
  index,
  alt,
  onClose,
  onChangeIndex,
}: LightboxProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Nav prev */}
      {images.length > 1 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white transition-colors hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation()
            onChangeIndex((index - 1 + images.length) % images.length)
          }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div
        className="max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${alt} — ${index + 1}`}
          width={1600}
          height={1200}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>

      {/* Nav next */}
      {images.length > 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white transition-colors hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation()
            onChangeIndex((index + 1) % images.length)
          }}
          aria-label="Next"
        >
          ›
        </button>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation()
                onChangeIndex(i)
              }}
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-all',
                i === index ? 'bg-white' : 'bg-white/40',
              )}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
