'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, HandHeart } from 'lucide-react'
import { foundation } from '@/lib/data'
import { useAppStore } from '@/lib/store'
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const cards = [
  {
    icon: Target,
    label: 'Mission',
    body: foundation.mission,
  },
  {
    icon: Eye,
    label: 'Vision',
    body: foundation.vision,
  },
  {
    icon: HandHeart,
    label: 'Areas of Impact',
    body: foundation.areasOfImpact,
  },
]

export function FoundationOverview() {
  const { setView } = useAppStore()

  return (
    <section className="memorial-pattern py-20 sm:py-24" aria-label="Foundation overview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Foundation"
          title="Carrying the Candle Forward"
          description="Established in 2022 by the family, colleagues, and trustees of his estate to honour the work Edem D. Nyasorgbor most loved — and to keep his microphone in the hands of those who will use it well."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
            >
              <Card className="lift-on-hover h-full border-border bg-card">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-gradient ring-1 ring-gold/40">
                      <c.icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl text-navy dark:text-gold">{c.label}</h3>
                  </div>
                  {Array.isArray(c.body) ? (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {c.body.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => setView('about-foundation')}
            size="lg"
            className="bg-navy-gradient text-cream hover:opacity-90"
          >
            Learn about the Foundation →
          </Button>
        </div>
      </div>
    </section>
  )
}
