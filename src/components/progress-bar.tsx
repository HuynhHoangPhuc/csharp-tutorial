import { useLanguage } from '../i18n/language-context'
import { chapterEmojis } from '../lib/theme'
import type { Chapter } from '../slides'

interface ProgressBarProps {
  current: number
  total: number
  currentChapter: { chapter: Chapter; chapterIndex: number } | null
  onPrev: () => void
  onNext: () => void
}

export function ProgressBar({ current, total, currentChapter, onPrev, onNext }: ProgressBarProps) {
  const { t } = useLanguage()
  const progress = ((current + 1) / total) * 100
  const isFirst = current === 0
  const isLast = current === total - 1

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col">
      {/* Progress bar */}
      <div className="h-[3px] bg-bg-secondary">
        <div
          className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent1), var(--accent2))',
          }}
        />
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="font-display text-xs font-semibold px-3 py-1 rounded glass
            text-text-secondary hover:text-[var(--accent1)] transition-colors
            disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          ◀ Prev
        </button>

        <div className="text-text-secondary text-xs flex items-center gap-3">
          {currentChapter && (
            <span
              className="font-display font-semibold px-2.5 py-0.5 rounded-full glass text-xs"
              style={{ color: 'var(--accent1)' }}
            >
              {chapterEmojis[currentChapter.chapterIndex] ?? '📖'}{' '}
              Ch.{currentChapter.chapter.id} {t(currentChapter.chapter.titleKey)}
            </span>
          )}
          <span className="font-mono">{current + 1} / {total}</span>
        </div>

        <button
          onClick={onNext}
          disabled={isLast}
          className="font-display text-xs font-semibold px-3 py-1 rounded glass
            text-text-secondary hover:text-[var(--accent1)] transition-colors
            disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          Next ▶
        </button>
      </div>
    </div>
  )
}
