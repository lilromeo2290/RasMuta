import { create } from 'zustand'

export type ViewKey =
  | 'home'
  | 'about-broadcaster'
  | 'about-foundation'
  | 'programs'
  | 'events'
  | 'gallery'
  | 'news'
  | 'donate'
  | 'volunteer'
  | 'contact'
  | 'admin'

interface AppState {
  view: ViewKey
  setView: (v: ViewKey) => void
  /** When on the about-foundation (Celebration of a Legend) page, which tribute is open. */
  activeTributeId: string | null
  setActiveTributeId: (id: string | null) => void
  mobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
  newsletterOpen: boolean
  setNewsletterOpen: (open: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  view: 'home',
  setView: (v) => {
    set({ view: v, mobileNavOpen: false })
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  activeTributeId: null,
  setActiveTributeId: (id) => {
    set({ activeTributeId: id })
    if (typeof window !== 'undefined') {
      // Scroll the tribute reader into view rather than jumping to the top.
      const el = document.getElementById('tribute-reader')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  },
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  newsletterOpen: false,
  setNewsletterOpen: (open) => set({ newsletterOpen: open }),
}))
