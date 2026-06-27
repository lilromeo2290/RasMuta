'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { Button } from '@/components/ui/button'

export function Testimonials() {
  const [active, setActive] = React.useState(0)
  const count = testimonials.length

  const next = React.useCallback(() => setActive((a) => (a + 1) % count), [count])
  const prev = React.useCallback(() => setActive((a) => (a - 1 + count) % count), [count])

  React.useEffect(() => {
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [next])

  const current = testimonials[active]

  return (
    <section className="memorial-pattern py-20 sm:py-24" aria-label="Testimonials">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark dark:text-gold">
            Voices
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy dark:text-cream sm:text-4xl">
            In their own words
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="gold-divider" />
          </div>
        </div>

        <div className="relative mt-12">
          <Quote className="mx-auto h-10 w-10 text-gold/40" aria-hidden="true" />

          <div className="relative mt-4 min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <blockquote className="max-w-3xl font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-3">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/60"
                  />
                  <div className="text-left">
                    <div className="font-serif text-base font-bold text-navy dark:text-gold">
                      {current.author}
                    </div>
                    <div className="text-xs text-muted-foreground">{current.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-8 bg-gold' : 'w-2 bg-muted-foreground/40 hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
