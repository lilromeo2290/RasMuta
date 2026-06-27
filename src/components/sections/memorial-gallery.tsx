'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Camera, PlayCircle, Headphones, Film } from 'lucide-react'
import { galleryItems } from '@/lib/data'
import { useAppStore } from '@/lib/store'
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'

const typeIcon = {
  photo: Camera,
  video: PlayCircle,
  audio: Headphones,
  documentary: Film,
} as const

export function MemorialGallery() {
  const { setView } = useAppStore()
  const items = galleryItems.slice(0, 6)

  // Hide the entire homepage preview section when there are no gallery items.
  if (items.length === 0) return null

  return (
    <section className="bg-muted/40 py-20 sm:py-24" aria-label="Memorial gallery preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="In Memoriam"
          title="Memorial Gallery"
          description="Photographs, broadcasts, and documentaries from a 22-year career — preserved for the generations he inspired."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, idx) => {
            const Icon = typeIcon[item.type as keyof typeof typeIcon] ?? Camera
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onClick={() => setView('gallery')}
                className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-border text-left lift-on-hover"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/30 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-navy/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold backdrop-blur">
                  <Icon className="h-3 w-3" /> {item.type}
                </div>
                <div className="absolute inset-x-3 bottom-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    {item.year}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-cream line-clamp-2">
                    {item.title}
                  </div>
                </div>
              </motion.button>
            )
          })}

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <Button
              onClick={() => setView('gallery')}
              className="h-full min-h-[200px] w-full flex-col justify-center bg-navy-gradient text-cream hover:opacity-90"
            >
              <Camera className="h-7 w-7 text-gold" />
              <span className="mt-3 font-serif text-lg">View Full Gallery</span>
              <span className="mt-1 text-xs text-cream/70">
                Photos · Videos · Audio · Documentaries
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
