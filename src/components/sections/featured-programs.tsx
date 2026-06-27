'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Users,
  HeartHandshake,
  Sparkles,
  Award,
  Stethoscope,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { programs } from '@/lib/data'
import { useAppStore } from '@/lib/store'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  HeartHandshake,
  Sparkles,
  Award,
  Stethoscope,
}

export function FeaturedPrograms() {
  const { setView } = useAppStore()

  return (
    <section className="bg-muted/40 py-20 sm:py-24" aria-label="Featured programs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Featured Programs"
          description="Six programmes, all carrying forward the work Samuel cared most about — and all measured by the lives they touch."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, idx) => {
            const Icon = iconMap[p.icon] ?? GraduationCap
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <Card className="lift-on-hover group h-full overflow-hidden border-border bg-card">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy-gradient ring-1 ring-gold/50">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                  </div>
                  <CardContent className="flex h-full flex-col p-6">
                    <h3 className="font-serif text-xl text-navy dark:text-gold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {p.summary}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                        {p.impact}
                      </span>
                      <button
                        onClick={() => setView('programs')}
                        className="inline-flex items-center gap-1 text-xs font-medium text-navy dark:text-gold transition-all hover:gap-2"
                      >
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => setView('programs')}
            size="lg"
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-cream dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-navy"
          >
            View all programmes →
          </Button>
        </div>
      </div>
    </section>
  )
}
