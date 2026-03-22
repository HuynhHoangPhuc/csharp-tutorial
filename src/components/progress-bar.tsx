import { useLanguage } from '../i18n/language-context'
import { chapterEmojis } from '../lib/theme'
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
      <div className="flex-1 h-[3px] bg-bg-secondary">
        <div
          className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent1), var(--accent2))',
          }}
        />
      </div>
      <div className="px-4 py-2 text-text-secondary text-xs flex items-center gap-3">
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
    </div>
  )
}
