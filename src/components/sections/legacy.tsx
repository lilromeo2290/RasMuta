'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Radio, Users } from 'lucide-react'
import { broadcaster, biography, careerMilestones, awards } from '@/lib/data'
import { useAppStore } from '@/lib/store'
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const quickFacts = [
  { icon: Radio, label: 'Years on the air', value: '22+' },
  { icon: Users, label: 'Children', value: '5' },
  { icon: Award, label: 'Radio & TV stations', value: '7' },
  { icon: BookOpen, label: 'Countries reached', value: '2' },
]

export function Legacy() {
  const { setView } = useAppStore()

  return (
    <section className="memorial-pattern py-20 sm:py-24" aria-label="Legacy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A Life in Broadcasting"
          title="His Legacy"
          description="A 46-year career in news — anchored, reported, hosted, and taught by one of West Africa's most respected voices."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Portrait + facts */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl ring-1 ring-border shadow-xl">
                <img
                  src={broadcaster.portrait}
                  alt={`Portrait of ${broadcaster.name}`}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 hidden sm:block rounded-xl bg-navy px-5 py-4 text-cream shadow-lg">
                <div className="font-serif text-2xl text-gold">1979 – 2023</div>
                <div className="text-xs uppercase tracking-[0.18em] text-cream/80">
                  A life of service
                </div>
              </div>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {quickFacts.map((f) => (
                <Card key={f.label} className="lift-on-hover border-border bg-card">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 dark:bg-white/5 text-navy dark:text-gold">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-serif text-xl text-navy dark:text-gold">
                        {f.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{f.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              {biography.slice(0, 3).map((para, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-muted-foreground first:text-foreground first:font-medium"
                >
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Mini timeline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-10"
            >
              <h3 className="font-serif text-xl text-navy dark:text-gold">
                Career milestones
              </h3>
              <ol className="mt-4 space-y-4 border-l-2 border-gold/40 pl-5">
                {careerMilestones.slice(0, 4).map((m) => (
                  <li key={m.year} className="relative">
                    <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                      {m.year}
                    </div>
                    <div className="mt-0.5 font-medium text-foreground">{m.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Awards highlights — shown only when there are awards */}
            {awards.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {awards.slice(0, 4).map((a) => (
                <div
                  key={a.title}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-gold-dark dark:text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                      {a.year}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">{a.title}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{a.issuer}</div>
                </div>
              ))}
            </motion.div>
            )}

            <Button
              onClick={() => setView('about-broadcaster')}
              variant="link"
              className="mt-6 px-0 text-navy dark:text-gold"
            >
              Read the full biography →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
