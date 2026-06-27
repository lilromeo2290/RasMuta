'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  image: string
}

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-end px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-gold"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
