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
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import { programs } from '@/lib/data'
import { useAppStore } from '@/lib/store'
import { PageHero } from '@/components/shared/page-hero'
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

export function ProgramsView() {
  const { setView } = useAppStore()

  return (
    <>
      <PageHero
        eyebrow="Programmes & Projects"
        title="Carrying the Candle, Programme by Programme"
        description="Six programmes, every one of them measured by the lives it touches. Read about them below — and find the one your support will help grow."
        image="https://images.unsplash.com/photo-1532622788357-787e1f3a16c5?q=80&w=2400&auto=format&fit=crop"
      />

      {programs.map((p, idx) => {
        const Icon = iconMap[p.icon] ?? GraduationCap
        const reversed = idx % 2 === 1
        return (
          <section
            key={p.id}
            className={idx % 2 === 0 ? 'memorial-pattern py-20 sm:py-24' : 'bg-muted/40 py-20 sm:py-24'}
            aria-label={p.title}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${reversed ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="overflow-hidden rounded-2xl ring-1 ring-border shadow-xl">
                    <img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <div className="absolute -bottom-5 left-5 inline-flex items-center gap-2 rounded-xl bg-navy-gradient px-4 py-3 text-cream shadow-lg">
                    <Icon className="h-5 w-5 text-gold" />
                    <span className="text-sm font-semibold">{p.impact}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: reversed ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-gradient ring-1 ring-gold/40">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">
                      Programme {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-bold text-navy dark:text-cream sm:text-4xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-base text-muted-foreground">{p.summary}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark dark:text-gold" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button
                      onClick={() => setView('donate')}
                      className="bg-gold-gradient text-navy font-semibold hover:opacity-90"
                    >
                      Support this programme
                    </Button>
                    <Button
                      onClick={() => setView('volunteer')}
                      variant="outline"
                      className="border-navy text-navy hover:bg-navy hover:text-cream dark:border-gold dark:text-gold"
                    >
                      Volunteer
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Closing band */}
      <section className="bg-navy-gradient py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl">
            Find your place in the work
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="gold-divider" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-cream/85">
            Whether you are able to give, to mentor, to host a community event, or simply to
            tell a friend — there is a part for you to play.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => setView('donate')}
              className="bg-gold-gradient text-navy font-semibold hover:opacity-90"
            >
              Donate
            </Button>
            <Button
              onClick={() => setView('volunteer')}
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-navy"
            >
              Volunteer
            </Button>
            <Button
              onClick={() => setView('contact')}
              variant="ghost"
              className="text-cream hover:bg-white/10 hover:text-gold"
            >
              Partner with us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
