'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, PlayCircle, Headphones, Film, X, Volume2 } from 'lucide-react'
import { galleryItems } from '@/lib/data'
import { PageHero } from '@/components/shared/page-hero'
import { Button } from '@/components/ui/button'

type GalleryType = 'all' | 'photo' | 'video' | 'audio' | 'documentary'

const filters: { key: GalleryType; label: string; icon: typeof Camera }[] = [
  { key: 'all', label: 'All', icon: Camera },
  { key: 'photo', label: 'Photos', icon: Camera },
  { key: 'video', label: 'Video Tributes', icon: PlayCircle },
  { key: 'audio', label: 'Audio Archive', icon: Headphones },
  { key: 'documentary', label: 'Documentaries', icon: Film },
]

type GalleryItem = (typeof galleryItems)[number]

export function GalleryView() {
  const [filter, setFilter] = React.useState<GalleryType>('all')
  const [active, setActive] = React.useState<GalleryItem | null>(null)

  const items = React.useMemo(() => {
    if (filter === 'all') return galleryItems
    return galleryItems.filter((g) => g.type === filter)
  }, [filter])

  // Close lightbox on Escape
  React.useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <PageHero
        eyebrow="In Memoriam"
        title="Memorial Gallery"
        description="Photographs, broadcasts, and documentaries from a 46-year career — preserved by the Foundation for the generations he inspired."
        image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2400&auto=format&fit=crop"
      />

      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <Button
                key={f.key}
                variant={filter === f.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(f.key)}
                className={`gap-1.5 ${
                  filter === f.key
                    ? 'bg-navy-gradient text-cream hover:opacity-90'
                    : 'border-border'
                }`}
              >
                <f.icon className="h-3.5 w-3.5" />
                {f.label}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item, idx) => {
              const Icon =
                item.type === 'video' ? PlayCircle :
                item.type === 'audio' ? Volume2 :
                item.type === 'documentary' ? Film : Camera
              return (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  onClick={() => setActive(item)}
                  className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-border text-left lift-on-hover"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/25 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-navy/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold backdrop-blur">
                    <Icon className="h-3 w-3" /> {item.type}
                  </div>
                  {item.type !== 'photo' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/90 text-navy shadow-lg transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-3 bottom-3">
                    {item.year && (
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                        {item.year}
                      </div>
                    )}
                    <div className="mt-0.5 text-sm font-medium text-cream line-clamp-2">
                      {item.title}
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/95 p-4 backdrop-blur"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-gold hover:text-navy"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {active.type === 'photo' && (
                <img
                  src={active.url}
                  alt={active.title}
                  className="max-h-[75vh] w-full rounded-lg object-contain"
                />
              )}
              {active.type === 'video' && (
                <div className="aspect-video overflow-hidden rounded-lg bg-black">
                  <iframe
                    src={active.url}
                    title={active.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              )}
              {active.type === 'audio' && (
                <div className="rounded-lg bg-card p-8 text-cream">
                  <Volume2 className="h-10 w-10 text-gold" />
                  <h3 className="mt-4 font-serif text-2xl text-gold">{active.title}</h3>
                  <p className="mt-2 text-sm text-cream/80">{active.description}</p>
                  <audio controls className="mt-5 w-full">
                    <source src={active.url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
              {active.type === 'documentary' && (
                <div className="aspect-video overflow-hidden rounded-lg bg-black">
                  <iframe
                    src={active.url}
                    title={active.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              )}
              <div className="mt-4 text-center text-cream">
                <div className="text-xs uppercase tracking-[0.18em] text-gold">
                  {active.type} · {active.year ?? 'undated'}
                </div>
                <h3 className="mt-1 font-serif text-xl">{active.title}</h3>
                {active.description && (
                  <p className="mx-auto mt-2 max-w-2xl text-sm text-cream/80">
                    {active.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
