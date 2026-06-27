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
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  newsletterOpen: false,
  setNewsletterOpen: (open) => set({ newsletterOpen: open }),
}))
