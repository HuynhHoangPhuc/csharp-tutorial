import { createContext, useContext, useLayoutEffect, useRef, type ReactNode } from 'react'
import { chapterColors, type ChapterColorPair } from './theme'

const defaultColors: ChapterColorPair = chapterColors[0]

const ChapterThemeContext = createContext<ChapterColorPair>(defaultColors)

export function useChapterTheme(): ChapterColorPair {
  return useContext(ChapterThemeContext)
}

interface ChapterThemeProviderProps {
  chapterIndex: number
  children: ReactNode
}

export function ChapterThemeProvider({ chapterIndex, children }: ChapterThemeProviderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const colors = chapterColors[chapterIndex] ?? defaultColors

  // Set CSS custom properties before paint so children can use var(--accent1), var(--accent2)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--accent1', colors.accent1)
    el.style.setProperty('--accent2', colors.accent2)
  }, [colors])

  return (
    <ChapterThemeContext.Provider value={colors}>
      <div ref={ref} className="contents">
        {children}
      </div>
    </ChapterThemeContext.Provider>
  )
}
