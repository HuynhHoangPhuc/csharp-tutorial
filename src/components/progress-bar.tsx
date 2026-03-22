import { useLanguage } from '../i18n/language-context'
import type { Chapter } from '../slides'

interface ProgressBarProps {
  current: number
  total: number
  currentChapter: { chapter: Chapter; chapterIndex: number } | null
}

export function ProgressBar({ current, total, currentChapter }: ProgressBarProps) {
  const { t } = useLanguage()
  const progress = ((current + 1) / total) * 100

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center">
      <div className="flex-1 h-1 bg-bg-secondary">
        <div
          className="h-full bg-green transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="px-4 py-2 text-text-secondary font-mono text-xs flex items-center gap-3">
        {currentChapter && (
          <span className="text-green/70">
            Ch.{currentChapter.chapter.id} {t(currentChapter.chapter.titleKey)}
          </span>
        )}
        <span>{current + 1} / {total}</span>
      </div>
    </div>
  )
}
