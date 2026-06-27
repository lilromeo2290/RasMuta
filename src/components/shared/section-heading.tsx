'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-3 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark dark:text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.5rem] ${
          light ? 'text-cream' : 'text-navy dark:text-cream'
        }`}
      >
        {title}
      </h2>
      <span className="gold-divider" aria-hidden="true" />
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            light ? 'text-cream/80' : 'text-muted-foreground'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
