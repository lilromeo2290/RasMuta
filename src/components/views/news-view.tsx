'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Newspaper, FileText, BookMarked, Megaphone, CalendarDays, Search } from 'lucide-react'
import { newsArticles } from '@/lib/data'
import { useAppStore } from '@/lib/store'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const categoryConfig: Record<
  string,
  { label: string; icon: typeof Newspaper; color: string }
> = {
  news: { label: 'News', icon: Newspaper, color: 'bg-muted text-foreground border-border' },
  press_release: { label: 'Press Release', icon: Megaphone, color: 'bg-gold text-navy border-navy/30' },
  annual_report: { label: 'Annual Report', icon: FileText, color: 'bg-navy text-gold border-gold/40' },
  publication: { label: 'Publication', icon: BookMarked, color: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200' },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function NewsView() {
  const { setView } = useAppStore()
  const [query, setQuery] = React.useState('')
  const [category, setCategory] = React.useState<string>('all')

  const categories = React.useMemo(() => {
    const set = new Set(newsArticles.map((n) => n.category))
    return ['all', ...Array.from(set)]
  }, [])

  const filtered = React.useMemo(() => {
    return newsArticles.filter((n) => {
      const matchesCat = category === 'all' || n.category === category
      const matchesQuery =
        !query ||
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.excerpt.toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  }, [query, category])

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <>
      <PageHero
        eyebrow="News & Publications"
        title="The Foundation, in Print"
        description="Press releases, news, annual reports, and publications from the Foundation — and the restored archive of Edem D. Nyasorgbor's own work."
        image="/placeholders/hero-news.svg"
      />

      {/* Search + filter */}
      <section className="memorial-pattern py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="pl-9"
                aria-label="Search articles"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <Button
                  key={c}
                  variant={category === c ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategory(c)}
                  className={category === c ? 'bg-navy-gradient text-cream hover:opacity-90' : ''}
                >
                  {c === 'all' ? 'All' : categoryConfig[c]?.label ?? c}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="bg-muted/40 pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.article
              key={featured.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-2xl bg-card ring-1 ring-border shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className={`${categoryConfig[featured.category].color} border`}>
                      {categoryConfig[featured.category].label}
                    </Badge>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                    </span>
                  </div>
                  <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-navy dark:text-gold sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 text-xs text-muted-foreground">By {featured.author}</div>
                  <Button className="mt-6 self-start bg-navy-gradient text-cream hover:opacity-90">
                    Read full article
                  </Button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="bg-muted/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {rest.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-20 text-center">
              <Newspaper className="h-10 w-10 text-gold/50" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl text-navy dark:text-gold">
                {newsArticles.length === 0
                  ? 'News will be published here soon'
                  : 'No articles found matching your search'}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {newsArticles.length === 0
                  ? 'Press releases, news, annual reports, and publications from the RAS MUTA Foundation will appear on this page as they are released. Please check back shortly.'
                  : 'Try a different search term or category filter.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((n, idx) => {
                const cfg = categoryConfig[n.category]
                return (
                  <motion.article
                    key={n.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <Card className="lift-on-hover group h-full overflow-hidden border-border bg-card">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={n.image}
                          alt={n.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
                        <div className="absolute left-3 top-3">
                          <Badge variant="outline" className={`${cfg.color} border`}>
                            <cfg.icon className="mr-1 h-3 w-3" />
                            {cfg.label}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="flex h-full flex-col p-5">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatDate(n.date)}
                        </div>
                        <h3 className="mt-2 font-serif text-lg leading-snug text-navy dark:text-gold line-clamp-2">
                          {n.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {n.excerpt}
                        </p>
                        <Button variant="link" className="mt-3 justify-start px-0 text-navy dark:text-gold">
                          Read more →
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.article>
                )
              })}
            </div>
          )}

          {/* Subscribe band */}
          <div className="mt-16 rounded-2xl bg-navy-gradient p-8 text-center text-cream sm:p-12">
            <h3 className="font-serif text-2xl text-gold sm:text-3xl">
              Never miss a release
            </h3>
            <div className="mt-3 flex justify-center">
              <span className="gold-divider" />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/80">
              Subscribe to receive press releases, the annual report, and announcements of new
              publications — straight to your inbox.
            </p>
            <Button
              onClick={() => setView('contact')}
              className="mt-6 bg-gold-gradient text-navy font-semibold hover:opacity-90"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
