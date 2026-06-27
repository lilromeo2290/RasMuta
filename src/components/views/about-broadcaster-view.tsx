'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Radio, BookOpen, Award, Users, Globe2, Music, Heart } from 'lucide-react'
import {
  broadcaster,
  biography,
  careerMilestones,
  awards,
} from '@/lib/data'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { PhotoSlider } from '@/components/shared/photo-slider'
import { Card, CardContent } from '@/components/ui/card'

const contributions = [
  {
    icon: Radio,
    title: 'To Broadcasting',
    body:
      'Edem\'s voice travelled across the airwaves of the Volta Region, Ghana and Togo for more than two decades. He worked for seven radio and television stations — Garden City Radio, Radio Link, Light FM, Radio X-Solaire 107.5 FM, Fréquence 1, Radio Jubilee 106.9 FM, and Global FM / V1 TV — serving at various times as Studio Manager, Programs Director, radio presenter, morning show host, and TV show host.',
  },
  {
    icon: Music,
    title: 'To Music & Culture',
    body:
      'A lover of music from his youth, he developed a strong interest in Disc Jockeying during his tertiary years and rose to Studio Manager at Radio Link, where he presented the Reggae Suns Flash segment. His DJ skills and radio presentation earned him respect that cut across the border of Ghana into Togo, engaging two Lomé-based stations simultaneously.',
  },
  {
    icon: Heart,
    title: 'To Family & Community',
    body:
      'He was gentle and sociable, and his gentility and kindness were unmistakable and easily felt by all. Every encounter with him left a long-lasting sense of warmth. He was an outgoing and active person whose nature was very empowering, and whose presence lit up every room he entered and every airwave he touched.',
  },
  {
    icon: BookOpen,
    title: 'To Education',
    body:
      'Raised by parents who believed that the only legacy they could leave a child was God and education, Edem lived that conviction. He earned his HND in Marketing from Kumasi Polytechnic and later returned to E.P. University for his Bachelor of Arts in Marketing — a testament to his lifelong quest for higher education and self-improvement alongside his broadcasting career.',
  },
]

export function AboutBroadcasterView() {
  return (
    <>
      <PageHero
        eyebrow="In Memoriam · 1979 – 2022"
        title={broadcaster.name}
        description={`${broadcaster.title}. Born ${broadcaster.birth} in ${broadcaster.birthplace}. Passed away ${broadcaster.death}.`}
        image={broadcaster.heroImage}
      />

      {/* Biography */}
      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-4">
                <PhotoSlider photos={broadcaster.photos} alt={`Portrait of ${broadcaster.name}`} />
                <blockquote className="rounded-xl border-l-4 border-gold bg-card p-5">
                  <p className="font-serif text-lg italic leading-relaxed text-foreground">
                    &ldquo;{broadcaster.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    — {broadcaster.quoteAttribution}
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="A Life in Words"
                title="Biography"
                align="left"
              />
              <div className="mt-6 space-y-5">
                {biography.map((para, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: idx * 0.04 }}
                    className={`text-base leading-relaxed text-muted-foreground ${
                      idx === 0 ? 'first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-navy dark:first-letter:text-gold first-letter:mr-2 first-letter:float-left' : ''
                    }`}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive timeline */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Forty-six years on the air"
            title="An Interactive Timeline"
            description="From a newsroom assistant in 1976 to the founding of a school, a continent, and a Foundation — the milestones of a life in broadcasting."
          />

          <div className="mt-14 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-gold/40 sm:-translate-x-1/2" />
            <ol className="space-y-10">
            {careerMilestones.map((m, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.li
                  key={m.year + '-' + m.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-12 sm:pl-0"
                >
                  <div
                    className={`sm:flex sm:items-center sm:gap-6 ${
                      isLeft ? '' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* marker */}
                    <span className="absolute left-4 sm:left-1/2 top-1.5 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gold ring-4 ring-background" />
                    {/* card */}
                    <div className="sm:w-1/2 sm:px-6">
                      <Card className="lift-on-hover border-border bg-card">
                        <CardContent className="p-5">
                          <div className="text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                            {m.year}
                          </div>
                          <h3 className="mt-1 font-serif text-lg text-navy dark:text-gold">
                            {m.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {m.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </motion.li>
              )
            })}
            </ol>
          </div>
        </div>
      </section>

      {/* Awards — shown only when there are awards to display */}
      {awards.length > 0 && (
      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recognition"
            title="Awards & Achievements"
            description="A selection of the honours conferred on Edem D. Nyasorgbor by national, continental, and international bodies across his career."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a, idx) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <Card className="lift-on-hover h-full border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
                        <Award className="h-5 w-5 text-gold-dark dark:text-gold" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                          {a.year}
                        </div>
                        <div className="text-xs text-muted-foreground">{a.issuer}</div>
                      </div>
                    </div>
                    <h3 className="mt-4 font-serif text-lg text-navy dark:text-gold">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Contributions */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Beyond the Studio"
            title="A Life of Warmth, Music, and Service"
            description="Edem\'s impact reached far beyond the newsroom — into the music culture of two nations, the hearts of his listeners, and the values his parents instilled in him."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {contributions.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="lift-on-hover h-full border-border bg-card">
                  <CardContent className="flex h-full gap-4 p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-gradient ring-1 ring-gold/40">
                      <c.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-navy dark:text-gold">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
