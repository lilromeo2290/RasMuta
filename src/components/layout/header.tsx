'use client'

import * as React from 'react'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { navigation } from '@/lib/data'
import { tributes } from '@/lib/tributes'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'

const SUBMENU_KEY = 'about-foundation'

export function Header() {
  const { view, setView, activeTributeId, setActiveTributeId } = useAppStore()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileTributesOpen, setMobileTributesOpen] = React.useState(false)
  const [desktopTributesOpen, setDesktopTributesOpen] = React.useState(false)
  const desktopSubTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openTribute = (id: string) => {
    setView(SUBMENU_KEY)
    // Defer to the next tick so the reader is mounted before we scroll to it.
    setTimeout(() => setActiveTributeId(id), 60)
  }

  const openDesktopSub = () => {
    if (desktopSubTimeout.current) clearTimeout(desktopSubTimeout.current)
    setDesktopTributesOpen(true)
  }
  const closeDesktopSub = () => {
    if (desktopSubTimeout.current) clearTimeout(desktopSubTimeout.current)
    desktopSubTimeout.current = setTimeout(() => setDesktopTributesOpen(false), 120)
  }

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
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-navy-gradient ring-2 ring-gold/60 overflow-hidden">
            <img src="/ras-muta-logo.jpg" alt="RAS MUTA Foundation logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-base font-bold text-navy dark:text-gold">
              RAS MUTA
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Foundation
            </div>
          </div>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navigation.map((item) => {
            const hasSubmenu = item.key === SUBMENU_KEY
            const isActive =
              view === item.key ||
              (hasSubmenu && view === 'about-foundation')
            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={hasSubmenu ? openDesktopSub : undefined}
                onMouseLeave={hasSubmenu ? closeDesktopSub : undefined}
              >
                <button
                  onClick={() => setView(item.key)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md inline-flex items-center gap-1 ${
                    isActive
                      ? 'text-navy dark:text-gold'
                      : 'text-muted-foreground hover:text-navy dark:hover:text-gold'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-haspopup={hasSubmenu ? 'true' : undefined}
                  aria-expanded={hasSubmenu ? desktopTributesOpen : undefined}
                >
                  {item.label}
                  {hasSubmenu && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${desktopTributesOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* Desktop submenu dropdown */}
                {hasSubmenu && (
                  <AnimatePresence>
                    {desktopTributesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full z-50 mt-1 w-72 -translate-x-1/2 rounded-xl border border-border bg-popover p-2 shadow-xl"
                        role="menu"
                      >
                        <button
                          onClick={() => { setView(item.key); setActiveTributeId(null); setDesktopTributesOpen(false) }}
                          className={`block w-full rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                            view === item.key && !activeTributeId
                              ? 'bg-navy text-gold'
                              : 'text-foreground hover:bg-accent/30'
                          }`}
                          role="menuitem"
                        >
                          Overview
                        </button>
                        <div className="my-1 h-px bg-border" />
                        <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Tributes
                        </div>
                        {tributes.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => { openTribute(t.id); setDesktopTributesOpen(false) }}
                            className={`block w-full rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                              view === item.key && activeTributeId === t.id
                                ? 'bg-navy text-gold'
                                : 'text-foreground hover:bg-accent/30'
                            }`}
                            role="menuitem"
                          >
                            {t.navLabel}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )
          })}
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
            <SheetContent side="right" className="w-[320px] sm:w-[360px] bg-background overflow-y-auto">
              <SheetTitle className="px-2 pb-2 pt-1 font-serif text-lg text-navy dark:text-gold">
                Navigation
              </SheetTitle>
              <nav className="flex flex-col gap-1 px-2" aria-label="Mobile">
                {navigation.map((item) => {
                  const hasSubmenu = item.key === SUBMENU_KEY
                  if (hasSubmenu) {
                    const isActive = view === item.key
                    return (
                      <div key={item.key}>
                        <button
                          onClick={() => {
                            setMobileTributesOpen((o) => !o)
                          }}
                          className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium transition-colors ${
                            isActive
                              ? 'bg-navy text-gold'
                              : 'hover:bg-accent/20 text-foreground'
                          }`}
                          aria-expanded={mobileTributesOpen}
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${mobileTributesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileTributesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-border pl-2">
                                <SheetClose asChild>
                                  <button
                                    onClick={() => { setView(item.key); setActiveTributeId(null) }}
                                    className="rounded-md px-3 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-accent/30"
                                  >
                                    Overview
                                  </button>
                                </SheetClose>
                                {tributes.map((t) => (
                                  <SheetClose asChild key={t.id}>
                                    <button
                                      onClick={() => openTribute(t.id)}
                                      className="rounded-md px-3 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-accent/30"
                                    >
                                      {t.navLabel}
                                    </button>
                                  </SheetClose>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }
                  return (
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
                  )
                })}
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
                &copy; {new Date().getFullYear()} RAS MUTA Foundation
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
