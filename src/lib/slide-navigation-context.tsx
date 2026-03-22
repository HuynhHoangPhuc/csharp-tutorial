import { createContext, useContext } from 'react'

interface SlideNavigationContextValue {
  goToSlide: (index: number) => void
  current: number
}

const SlideNavigationContext = createContext<SlideNavigationContextValue | null>(null)

export const SlideNavigationProvider = SlideNavigationContext.Provider

export function useSlideNavigation() {
  const ctx = useContext(SlideNavigationContext)
  if (!ctx) throw new Error('useSlideNavigation must be used within SlideNavigationProvider')
  return ctx
}
