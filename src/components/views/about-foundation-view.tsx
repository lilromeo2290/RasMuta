'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, Handshake } from 'lucide-react'
import { foundation, trustees, patron } from '@/lib/data'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card, CardContent } from '@/components/ui/card'

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
    title: 'Establish the Olawale Archive',
    body:
      'Restore, digitise, and make freely available the full broadcast archive of Samuel A. Olawale — more than 9,000 bulletins and 38 documentaries — by 2030.',
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

export function AboutFoundationView() {
  return (
    <>
      <PageHero
        eyebrow="The Foundation · Established 2023"
        title="About the Foundation"
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
              In the days following Samuel A. Olawale’s passing on 21 August 2023, his family and
              his closest colleagues received hundreds of messages from newsrooms, schools,
              community stations, and listeners across the world. The most common request was
              simple: that the work he had begun — the teaching, the scholarships, the
              community-radio support — should not be allowed to stop.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Within three months, the family had convened a founding board. Within six, the
              Foundation was registered as a non-profit trust. The founding gift came from the
              Olawale family itself, with matching commitments from three networks at which
              Samuel had worked. By the first anniversary of his passing, the Foundation had
              enrolled its first 60 scholars and matched its first cohort of 60 mentors.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              The Foundation’s name and its mandate were both drawn directly from Samuel’s
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
            description="Our strategic priorities for 2024 – 2028, organised around the six areas of impact Samuel cared most about."
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
            description="Six men and women who knew Samuel well — as family, as colleagues, as students, and as friends — and who have committed to carrying his work forward."
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
    </>
  )
}
