'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin, Filter } from 'lucide-react'
import { upcomingEvents } from '@/lib/data'
import { useAppStore } from '@/lib/store'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const categoryLabels: Record<string, string> = {
  memorial_lecture: 'Memorial Lecture',
  fundraiser: 'Fundraiser',
  remembrance: 'Remembrance',
  workshop: 'Workshop',
  community: 'Community',
}

const categoryColors: Record<string, string> = {
  memorial_lecture: 'bg-navy text-gold border-gold/50',
  fundraiser: 'bg-gold text-navy border-navy/30',
  remembrance: 'bg-navy-dark text-cream border-white/30',
  workshop: 'bg-muted text-foreground border-border',
  community: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200',
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function EventsView() {
  const { setView } = useAppStore()
  const [filter, setFilter] = React.useState<string>('all')

  const categories = React.useMemo(() => {
    const set = new Set(upcomingEvents.map((e) => e.category))
    return ['all', ...Array.from(set)]
  }, [])

  const filtered = React.useMemo(() => {
    if (filter === 'all') return upcomingEvents
    return upcomingEvents.filter((e) => e.category === filter)
  }, [filter])

  const featured = upcomingEvents.find((e) => e.featured) ?? upcomingEvents[0]

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming Events & Memorial Lectures"
        image="/event-banner.jpg"
        boldImage
      />

      {/* Featured event */}
      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Headline" title="Featured upcoming event" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="mt-10 overflow-hidden rounded-2xl bg-card ring-1 ring-border shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
                    Featured
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`${categoryColors[featured.category]} border`}>
                    {categoryLabels[featured.category]}
                  </Badge>
                </div>
                <h3 className="mt-4 font-serif text-3xl font-bold text-navy dark:text-gold">
                  {featured.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CalendarDays className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark dark:text-gold" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Date</div>
                      <div className="text-sm font-medium text-foreground">{formatDate(featured.date)}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark dark:text-gold" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Time</div>
                      <div className="text-sm font-medium text-foreground">{featured.time} WAT</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark dark:text-gold" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Venue</div>
                      <div className="text-sm font-medium text-foreground">{featured.location}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    onClick={() => setView('contact')}
                    className="bg-navy-gradient text-cream hover:opacity-90"
                  >
                    Request an invitation
                  </Button>
                  <Button
                    onClick={() => setView('donate')}
                    variant="outline"
                    className="border-gold text-gold-dark dark:text-gold"
                  >
                    Sponsor the lecture
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All events with filter */}
      <section className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Calendar"
              title="All upcoming events"
              align="left"
            />
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <Filter className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              {categories.map((c) => (
                <Button
                  key={c}
                  variant={filter === c ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(c)}
                  className={`whitespace-nowrap ${
                    filter === c
                      ? 'bg-navy-gradient text-cream hover:opacity-90'
                      : 'border-border'
                  }`}
                >
                  {c === 'all' ? 'All' : categoryLabels[c] ?? c}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e, idx) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="lift-on-hover group h-full overflow-hidden border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/20 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <Badge variant="outline" className={`${categoryColors[e.category]} border`}>
                        {categoryLabels[e.category]}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                        {formatDate(e.date)} · {e.time} WAT
                      </div>
                      <h3 className="mt-1 font-serif text-lg font-bold leading-tight text-cream line-clamp-2">
                        {e.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="flex h-full flex-col p-5">
                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold-dark dark:text-gold" />
                      <span>{e.location}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {e.description}
                    </p>
                    <Button
                      onClick={() => setView('contact')}
                      variant="link"
                      className="mt-3 justify-start px-0 text-navy dark:text-gold"
                    >
                      Register interest →
                    </Button>
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
