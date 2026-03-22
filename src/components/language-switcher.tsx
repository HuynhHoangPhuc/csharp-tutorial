import { useLanguage } from '../i18n/language-context'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-xs">
      <button
        onClick={() => setLocale('en')}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          locale === 'en'
            ? 'text-green bg-green/20'
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        EN
      </button>
      <span className="text-text-secondary/40">|</span>
      <button
        onClick={() => setLocale('vi')}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          locale === 'vi'
            ? 'text-green bg-green/20'
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        VI
      </button>
    </div>
  )
}
