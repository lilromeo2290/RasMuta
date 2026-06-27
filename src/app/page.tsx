'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HomeView } from '@/components/views/home-view'
import { AboutBroadcasterView } from '@/components/views/about-broadcaster-view'
import { AboutFoundationView } from '@/components/views/about-foundation-view'
import { ProgramsView } from '@/components/views/programs-view'
import { EventsView } from '@/components/views/events-view'
import { GalleryView } from '@/components/views/gallery-view'
import { NewsView } from '@/components/views/news-view'
import { DonateView } from '@/components/views/donate-view'
import { VolunteerView } from '@/components/views/volunteer-view'
import { ContactView } from '@/components/views/contact-view'
import { AdminView } from '@/components/views/admin-view'

export default function Home() {
  const view = useAppStore((s) => s.view)

  const viewEl = React.useMemo(() => {
    switch (view) {
      case 'home':
        return <HomeView />
      case 'about-broadcaster':
        return <AboutBroadcasterView />
      case 'about-foundation':
        return <AboutFoundationView />
      case 'programs':
        return <ProgramsView />
      case 'events':
        return <EventsView />
      case 'gallery':
        return <GalleryView />
      case 'news':
        return <NewsView />
      case 'donate':
        return <DonateView />
      case 'volunteer':
        return <VolunteerView />
      case 'contact':
        return <ContactView />
      case 'admin':
        return <AdminView />
      default:
        return <HomeView />
    }
  }, [view])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {viewEl}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
