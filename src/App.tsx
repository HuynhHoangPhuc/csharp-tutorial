import { useState, useEffect, useCallback, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageProvider } from './i18n/language-context'
import { LanguageSwitcher } from './components/language-switcher'
import { ProgressBar } from './components/progress-bar'
import { slides, getChapterForSlide } from './slides'
import { SlideNavigationProvider } from './lib/slide-navigation-context'

function SlideShow() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = slides.length

  const goNext = useCallback(() => {
    setCurrent((prev) => {
      if (prev < total - 1) {
        setDirection(1)
        return prev + 1
      }
      return prev
    })
  }, [total])

  const goPrev = useCallback(() => {
    setCurrent((prev) => {
      if (prev > 0) {
        setDirection(-1)
        return prev - 1
      }
      return prev
    })
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrent((prev) => {
      if (index >= 0 && index < total && index !== prev) {
        setDirection(index > prev ? 1 : -1)
        return index
      }
      return prev
    })
  }, [total])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, input, select, textarea, [role="button"]')) return

      const x = e.clientX
      const half = window.innerWidth / 2
      if (x > half) goNext()
      else goPrev()
    },
    [goNext, goPrev]
  )

  const currentChapter = useMemo(() => getChapterForSlide(current), [current])

  const navContextValue = useMemo(
    () => ({ goToSlide, current }),
    [goToSlide, current]
  )

  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-text-secondary">
        <p>No slides loaded yet.</p>
      </div>
    )
  }

  const CurrentSlide = slides[current]

  return (
    <SlideNavigationProvider value={navContextValue}>
      <div className="relative w-full h-screen" onClick={handleClick}>
        {/* Header */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>

        {/* Slide content */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>

        {/* Progress */}
        <ProgressBar current={current} total={total} currentChapter={currentChapter} />
      </div>
    </SlideNavigationProvider>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <SlideShow />
    </LanguageProvider>
  )
}
