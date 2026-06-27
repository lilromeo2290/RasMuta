'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STORAGE_KEY = 'ras-muta-appreciation-seen-v1'

export function AppreciationModal() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    // Only show on first visit per browser; dismissals are remembered.
    try {
      const seen = window.localStorage.getItem(STORAGE_KEY)
      if (!seen) {
        // Small delay so the page paints first, then the modal fades in.
        const t = setTimeout(() => setOpen(true), 800)
        return () => clearTimeout(t)
      }
    } catch {
      // If localStorage is unavailable (private mode etc.), just show it.
      const t = setTimeout(() => setOpen(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const dismiss = () => {
    setOpen(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  // Close on Escape
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-dark/85 p-4 backdrop-blur-sm"
          onClick={dismiss}
          role="dialog"
          aria-modal="true"
          aria-labelledby="appreciation-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-gold/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={dismiss}
              aria-label="Close message"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Gold top accent */}
            <div className="h-1.5 bg-gold-gradient" />

            {/* Content */}
            <div className="px-6 py-9 text-center sm:px-10 sm:py-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-gradient ring-2 ring-gold/50">
                <Heart className="h-6 w-6 text-gold" />
              </div>

              <h2
                id="appreciation-title"
                className="mt-5 font-serif text-2xl font-bold text-navy dark:text-gold sm:text-3xl"
              >
                Appreciation
              </h2>

              <div className="mt-2 flex justify-center">
                <span className="gold-divider" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                The Nyasorgbor and Allied Families
              </p>
              <p className="mt-1 font-serif text-lg text-foreground">
                of Edem Divine Nyasorgbor
              </p>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                wishes to thank you all for your help, prayers, encouragement,
                donations and support during our moment of grief.
              </p>

              <p className="mt-5 font-serif text-lg italic text-navy dark:text-gold">
                May God Richly Bless You.
              </p>

              <div className="mt-8">
                <Button
                  onClick={dismiss}
                  className="bg-gold-gradient px-8 font-semibold text-navy hover:opacity-90"
                >
                  Enter the Site
                </Button>
              </div>
            </div>

            {/* Gold bottom accent */}
            <div className="h-1.5 bg-gold-gradient" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
