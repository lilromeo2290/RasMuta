'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { statistics } from '@/lib/data'
import { AnimatedCounter } from '@/components/shared/animated-counter'

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-20 sm:py-24" aria-label="Impact in numbers">
      {/* Subtle gold radial */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Impact in numbers
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-cream sm:text-4xl">
            Lives touched, candles lit
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="gold-divider" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream/80">
            Every number represents a person, a community, or a story now in the hands of someone
            equipped to tell it well.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {statistics.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
            >
              <div className="font-serif text-3xl font-bold text-gold sm:text-4xl">
                <AnimatedCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-cream">
                {s.label}
              </div>
              <p className="mt-1 text-[11px] leading-snug text-cream/70">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
