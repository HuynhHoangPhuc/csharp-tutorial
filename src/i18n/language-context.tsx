import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import en from './en.json'
import vi from './vi.json'

type Locale = 'en' | 'vi'
type Translations = Record<string, string>

const translations: Record<Locale, Translations> = { en, vi }

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('locale')
    return (saved === 'vi' ? 'vi' : 'en') as Locale
  })

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('locale', l)
  }, [])

  const t = useCallback((key: string): string => {
    return translations[locale][key] ?? translations.en[key] ?? key
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
