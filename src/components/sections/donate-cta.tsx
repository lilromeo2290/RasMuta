'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Heart, TrendingUp, Users } from 'lucide-react'
import { stats } from '@/lib/data'
import { useAppStore } from '@/lib/store'
import { AnimatedCounter } from '@/components/shared/animated-counter'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export function DonateCTA() {
  const { setView } = useAppStore()
  const percent = Math.min(
    100,
    Math.round((stats.donationReceived / stats.donationGoal) * 100)
  )

  return (
    <section className="bg-muted/40 py-20 sm:py-24" aria-label="Donation progress">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark dark:text-gold">
              The 2026 Appeal
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy dark:text-cream sm:text-4xl">
              Help us reach this year's goal
            </h2>
            <div className="mt-3">
              <span className="gold-divider" />
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The 2026 appeal funds the next cohort of 142 scholars, the fourth mentorship
              cohort of 60 journalists, and the Makurdi clean-water project. Every contribution
              is receipted, reported, and directed to a programme Samuel himself would have
              endorsed without hesitation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => setView('donate')}
                size="lg"
                className="bg-gold-gradient text-navy font-semibold hover:opacity-90"
              >
                <Heart className="mr-2 h-4 w-4" /> Donate today
              </Button>
              <Button
                onClick={() => setView('about-foundation')}
                size="lg"
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-cream dark:border-gold dark:text-gold"
              >
                How donations are used →
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-navy-gradient p-7 text-cream shadow-xl sm:p-9"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-gold">
                  Raised so far
                </div>
                <div className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
                  <AnimatedCounter
                    value={stats.donationReceived}
                    prefix="$"
                  />
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-[0.18em] text-cream/70">
                  Goal
                </div>
                <div className="mt-1 font-serif text-2xl font-bold text-cream">
                  ${stats.donationGoal.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Progress value={percent} className="h-3 bg-white/15" />
              <div className="mt-2 flex items-center justify-between text-xs text-cream/80">
                <span>{percent}% of goal</span>
                <span>${(stats.donationGoal - stats.donationReceived).toLocaleString()} to go</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white/5 p-4">
                <div className="flex items-center gap-2 text-gold">
                  <Users className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wider">Donors</span>
                </div>
                <div className="mt-1 font-serif text-2xl font-bold">
                  <AnimatedCounter value={stats.donorsCount} />
                </div>
              </div>
              <div className="rounded-lg bg-white/5 p-4">
                <div className="flex items-center gap-2 text-gold">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wider">Programmes</span>
                </div>
                <div className="mt-1 font-serif text-2xl font-bold">6</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
