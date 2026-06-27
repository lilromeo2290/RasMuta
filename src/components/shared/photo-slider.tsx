'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PhotoSliderProps {
  photos: { src: string; caption?: string }[]
  alt: string
}

export function PhotoSlider({ photos, alt }: PhotoSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  // Autoplay
  React.useEffect(() => {
    if (!api || paused || photos.length <= 1) return
    const t = setInterval(() => {
      api.scrollNext()
    }, 5000)
    return () => clearInterval(t)
  }, [api, paused, photos.length])

  if (photos.length === 0) return null
  if (photos.length === 1) {
    return (
      <div className="overflow-hidden rounded-2xl ring-1 ring-border shadow-xl">
        <img
          src={photos[0].src}
          alt={alt}
          className="aspect-[4/5] w-full object-cover"
        />
        {photos[0].caption && (
          <div className="bg-navy-gradient px-5 py-3 text-center text-xs font-medium text-cream">
            {photos[0].caption}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className="overflow-hidden rounded-2xl ring-1 ring-border shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Carousel
        opts={{ loop: true, align: 'start' }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {photos.map((photo, idx) => (
            <CarouselItem key={idx}>
              <div className="relative aspect-[4/5] w-full">
                <img
                  src={photo.src}
                  alt={`${alt}${photo.caption ? ' — ' + photo.caption : ''}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                {photo.caption && (
                  <div className="absolute inset-x-0 bottom-0 px-5 py-4 text-center">
                    <span className="font-serif text-sm italic text-cream drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                      {photo.caption}
                    </span>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom navy/gold arrows */}
        <CarouselPrevious className="left-2 h-10 w-10 border-none bg-navy/80 text-gold hover:bg-navy hover:text-gold">
          <ChevronLeft className="h-5 w-5" />
        </CarouselPrevious>
        <CarouselNext className="right-2 h-10 w-10 border-none bg-navy/80 text-gold hover:bg-navy hover:text-gold">
          <ChevronRight className="h-5 w-5" />
        </CarouselNext>
      </Carousel>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 bg-navy-gradient py-3">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            aria-label={`Go to photo ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === current ? 'w-8 bg-gold' : 'w-2 bg-cream/40 hover:bg-cream/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
