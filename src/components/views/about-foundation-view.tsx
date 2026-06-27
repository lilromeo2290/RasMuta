'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Eye, Heart, Shield, Handshake, Quote, Users, Radio, Music, Building2, BookOpen, MapPin } from 'lucide-react'
import { foundation, trustees, patron } from '@/lib/data'
import { tributes } from '@/lib/tributes'
import { useAppStore } from '@/lib/store'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const valueIcons = [Shield, Heart, Handshake, Target, Eye, Shield]

const objectives = [
  {
    title: 'Sustain the Scholarships',
    body:
      'Maintain a rolling cohort of at least 200 active scholars, drawn from across the country and prioritising communities historically under-represented in newsroom staffing.',
  },
  {
    title: 'Scale the Mentorship Programme',
    body:
      'Grow the annual mentorship cohort from 60 to 100 by 2028, with a regional expansion into East and Southern Africa in partnership with the African Broadcasting Union.',
  },
  {
    title: 'Strengthen Community Radio',
    body:
      'Support at least 60 community-radio stations with grants, training, and equipment by 2028, with a particular focus on conflict-affected and climate-vulnerable regions.',
  },
  {
    title: 'Establish the Nyasorgbor Archive',
    body:
      'Restore, digitise, and make freely available the full broadcast archive of Edem D. Nyasorgbor — more than 9,000 bulletins and 38 documentaries — by 2030.',
  },
  {
    title: 'Host the Annual Memorial Lecture',
    body:
      'Convene a leading global voice each August to deliver the Memorial Lecture and to set the public agenda on a pressing question of media, truth, and public trust.',
  },
  {
    title: 'Build the Endowment',
    body:
      'Grow a $10 million endowment by 2030 to secure the long-term independence of the Foundation and insulate its programmes from year-to-year fundraising volatility.',
  },
]

const tributeIcons: Record<string, typeof Quote> = {
  wife: Heart,
  children: Users,
  siblings: Users,
  globalfest: Building2,
  'jubilee-radio': Radio,
  ketaman: MapPin,
  'amazing-love': BookOpen,
}

export function AboutFoundationView() {
  const { activeTributeId, setActiveTributeId } = useAppStore()
  const activeTribute = tributes.find((t) => t.id === activeTributeId) ?? null

  return (
    <>
      <PageHero
        eyebrow="The Foundation · Established 2023"
        title="Celebration of a Legend"
        description="Established by his family, his colleagues, and the trustees of his estate to carry forward the work he most loved — and to keep his microphone in the hands of those who will use it well."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop"
      />

      {/* History */}
      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it began"
            title="Our History"
            description="From a memorial service to a Foundation — the brief, improbable story of how a voice that fell silent became an institution that speaks."
          />
          <div className="mt-10 space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              In the days following Edem D. Nyasorgbor’s passing on 21 August 2023, his family and
              his closest colleagues received hundreds of messages from newsrooms, schools,
              community stations, and listeners across the world. The most common request was
              simple: that the work he had begun — the teaching, the scholarships, the
              community-radio support — should not be allowed to stop.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Within three months, the family had convened a founding board. Within six, the
              Foundation was registered as a non-profit trust. The founding gift came from the
              Nyasorgbor family itself, with matching commitments from three networks at which
              Edem had worked. By the first anniversary of his passing, the Foundation had
              enrolled its first 60 scholars and matched its first cohort of 60 mentors.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Foundation’s name and its mandate were both drawn directly from Edem’s
              own wishes, recorded in conversations with his wife and his editors in the final
              year of his life. The Trustees have committed to a five-year strategic plan
              (2024 – 2028) that prioritises durable institutions over quick wins.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <Card className="h-full border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-gradient ring-1 ring-gold/40">
                      <Target className="h-6 w-6 text-gold" />
                    </div>
                    <h2 className="font-serif text-2xl text-navy dark:text-gold">Our Mission</h2>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {foundation.mission}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <Card className="h-full border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-gradient ring-1 ring-gold/40">
                      <Eye className="h-6 w-6 text-gold" />
                    </div>
                    <h2 className="font-serif text-2xl text-navy dark:text-gold">Our Vision</h2>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {foundation.vision}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we stand for"
            title="Core Values"
            description="The six values that shape every decision the Foundation makes — and against which we ask to be measured."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {foundation.values.map((v, idx) => {
              const Icon = valueIcons[idx % valueIcons.length]
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Card className="lift-on-hover h-full border-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
                        <Icon className="h-5 w-5 text-gold-dark dark:text-gold" />
                      </div>
                      <h3 className="mt-4 font-serif text-xl text-navy dark:text-gold">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {v.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Areas of Impact / Objectives */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Where we work"
            title="Areas of Impact & Objectives"
            description="Our strategic priorities for 2024 – 2028, organised around the six areas of impact Edem cared most about."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((o, idx) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="lift-on-hover h-full border-border bg-card">
                  <CardContent className="p-6">
                    <div className="font-serif text-5xl font-bold text-gold/30">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="mt-2 font-serif text-lg text-navy dark:text-gold">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Governance"
            title="Board of Trustees"
            description="Six men and women who knew Edem well — as family, as colleagues, as students, and as friends — and who have committed to carrying his work forward."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustees.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="lift-on-hover overflow-hidden border-border bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-serif text-lg text-navy dark:text-gold">{t.name}</h3>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                      {t.role}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patron */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Patronage"
            title="The Grand Patron"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="mt-10"
          >
            <Card className="border-gold/40 bg-card">
              <CardContent className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gold-gradient ring-4 ring-gold/20">
                  <Shield className="h-9 w-9 text-navy" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">
                    Grand Patron
                  </div>
                  <h3 className="mt-2 font-serif text-2xl text-navy dark:text-gold">
                    {patron.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{patron.bio}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tributes */}
      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In Their Own Words"
            title="Tributes"
            description="From his wife and children, his siblings, the stations that knew his craft, and the communities that shaped him — a celebration of a life well lived."
          />

          {/* Tribute cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tributes.map((t, idx) => {
              const Icon = tributeIcons[t.id] ?? Quote
              const isActive = activeTribute?.id === t.id
              return (
                <motion.button
                  key={t.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  onClick={() => setActiveTributeId(t.id)}
                  className={`text-left rounded-2xl border bg-card p-6 transition-all lift-on-hover ${
                    isActive ? 'border-gold ring-2 ring-gold/30' : 'border-border'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-gradient ring-1 ring-gold/40">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                      Tribute {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-navy dark:text-gold">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.byline}</p>
                  {t.relationship && (
                    <p className="mt-0.5 text-xs text-muted-foreground/80">{t.relationship}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {t.body[0]}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-navy dark:text-gold">
                    {isActive ? 'Reading…' : 'Read tribute →'}
                  </span>
                </motion.button>
              )
            })}
          </div>

          {/* Tribute reader */}
          <div id="tribute-reader" className="mt-16 scroll-mt-28">
            <AnimatePresence mode="wait">
              {activeTribute ? (
                <motion.article
                  key={activeTribute.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-2xl bg-card ring-1 ring-border shadow-xl"
                >
                  {/* Header band */}
                  <div className="bg-navy-gradient px-6 py-10 text-cream sm:px-10 sm:py-12">
                    <Quote className="h-10 w-10 text-gold/50" aria-hidden="true" />
                    <h3 className="mt-3 font-serif text-2xl font-bold text-gold sm:text-3xl">
                      {activeTribute.title}
                    </h3>
                    <div className="mt-3 text-sm font-medium text-cream">
                      {activeTribute.byline}
                    </div>
                    {activeTribute.relationship && (
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/70">
                        {activeTribute.relationship}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="px-6 py-10 sm:px-10 sm:py-12">
                    <div className="space-y-5">
                      {activeTribute.body.map((para, idx) => (
                        <p
                          key={idx}
                          className={`text-base leading-relaxed text-muted-foreground ${
                            idx === 0
                              ? 'first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-navy dark:first-letter:text-gold first-letter:mr-2 first-letter:float-left'
                              : ''
                          }`}
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Footer navigation between tributes */}
                    <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
                      <Button
                        variant="ghost"
                        onClick={() => setActiveTributeId(null)}
                        className="text-navy dark:text-gold"
                      >
                        ← Back to all tributes
                      </Button>
                      <div className="flex gap-2">
                        {tributes.map((t, idx) => (
                          <button
                            key={t.id}
                            onClick={() => setActiveTributeId(t.id)}
                            aria-label={`Go to tribute ${idx + 1}: ${t.navLabel}`}
                            className={`h-2.5 rounded-full transition-all ${
                              t.id === activeTribute.id ? 'w-8 bg-gold' : 'w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-12 text-center"
                >
                  <Quote className="mx-auto h-10 w-10 text-gold/40" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-xl text-navy dark:text-gold">
                    Select a tribute to read
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Choose any of the tribute cards above to read the full text. Each tribute is
                    offered in love by those who knew Edem Divine Nyasorgbor best.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
