import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText } from '../components/animated-text'
import { useLanguage } from '../i18n/language-context'
import { useSlideNavigation } from '../lib/slide-navigation-context'
import { chapters, getChapterStartIndices } from './index'
import { staggerContainer, fadeInUp } from '../lib/animations'

export function TocSlide() {
  const { t } = useLanguage()
  const { goToSlide, current } = useSlideNavigation()
  const startIndices = getChapterStartIndices()

  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-green font-mono">
            {t('toc.title')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2"
        >
          {chapters.map((ch, i) => {
            // Check if current slide is within this chapter
            const chapterEnd = startIndices[i] + ch.slides.length
            const isActive = current >= startIndices[i] && current < chapterEnd
            const isPast = current >= chapterEnd

            return (
              <motion.button
                key={ch.id}
                variants={fadeInUp}
                onClick={(e) => {
                  e.stopPropagation()
                  goToSlide(startIndices[i])
                }}
                className={`flex items-center gap-4 px-5 py-3 rounded-lg text-left transition-colors
                  border font-mono text-base cursor-pointer
                  ${isActive
                    ? 'bg-green/15 border-green/40 text-green'
                    : isPast
                      ? 'bg-bg-card/50 border-border/50 text-text-secondary'
                      : 'bg-bg-card border-border text-text-secondary hover:border-green/30 hover:text-text-primary'
                  }`}
              >
                {/* Chapter number */}
                <span className={`shrink-0 w-8 text-sm ${isActive ? 'text-green' : 'text-text-secondary/60'}`}>
                  {String(ch.id).padStart(2, '0')}
                </span>

                {/* Chapter title */}
                <span className="flex-1">{t(ch.titleKey)}</span>

                {/* Status indicator */}
                <span className="shrink-0 text-sm">
                  {isActive && <span className="text-green">&larr;</span>}
                  {isPast && <span className="text-green/50">&check;</span>}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-text-secondary/60 text-sm font-mono text-center">
            {t('toc.hint')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}
