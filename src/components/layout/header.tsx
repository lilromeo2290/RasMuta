'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, Radio, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { navigation } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'

export function Header() {
  const { view, setView } = useAppStore()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm border-b border-border'
          : 'bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => setView('home')}
          className="flex items-center gap-3 text-left transition-opacity hover:opacity-90"
          aria-label="Go to home"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-navy-gradient ring-2 ring-gold/60">
            <Radio className="h-5 w-5 text-gold" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-base font-bold text-navy dark:text-gold">
              E. D. Nyasorgbor
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Memorial Foundation
            </div>
          </div>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navigation.map((item) => (
            <button
              key={item.key}
              onClick={() => setView(item.key)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                view === item.key
                  ? 'text-navy dark:text-gold'
                  : 'text-muted-foreground hover:text-navy dark:hover:text-gold'
              }`}
              aria-current={view === item.key ? 'page' : undefined}
            >
              {item.label}
              {view === item.key && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={() => setView('donate')}
            className="hidden sm:inline-flex bg-gold-gradient text-navy hover:opacity-90 font-semibold"
          >
            <Heart className="mr-1.5 h-4 w-4" /> Donate
          </Button>

          {/* Mobile nav trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-background">
              <SheetTitle className="px-2 pb-2 pt-1 font-serif text-lg text-navy dark:text-gold">
                Navigation
              </SheetTitle>
              <nav className="flex flex-col gap-1 px-2" aria-label="Mobile">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.key}>
                    <button
                      onClick={() => setView(item.key)}
                      className={`rounded-md px-3 py-3 text-left text-base font-medium transition-colors ${
                        view === item.key
                          ? 'bg-navy text-gold'
                          : 'hover:bg-accent/20 text-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    onClick={() => setView('admin')}
                    variant="outline"
                    className="mt-2 justify-start"
                  >
                    Admin Dashboard
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    onClick={() => setView('donate')}
                    className="mt-2 bg-gold-gradient text-navy hover:opacity-90"
                  >
                    <Heart className="mr-1.5 h-4 w-4" /> Donate
                  </Button>
                </SheetClose>
              </nav>
              <div className="mt-auto px-4 py-4 text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Edem D. Nyasorgbor Memorial Foundation
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
