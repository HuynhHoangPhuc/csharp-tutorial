import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText } from '../components/animated-text'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { useSlideNavigation } from '../lib/slide-navigation-context'
import { chapters, getChapterStartIndices } from './index'
import { playfulStagger, bounceIn } from '../lib/animations'
import { chapterColors, chapterEmojis } from '../lib/theme'

export function TocSlide() {
  const { t } = useLanguage()
  const { goToSlide, current } = useSlideNavigation()
  const startIndices = getChapterStartIndices()

  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-display font-bold">
            {t('toc.title')}
          </GradientText>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 gap-4"
        >
          {chapters.map((ch, i) => {
            const chapterEnd = startIndices[i] + ch.slides.length
            const isActive = current >= startIndices[i] && current < chapterEnd
            const isPast = current >= chapterEnd
            const colors = chapterColors[i] ?? chapterColors[0]
            const emoji = chapterEmojis[i] ?? '📖'

            return (
              <motion.div key={ch.id} variants={bounceIn}>
                {/* Outer button handles click; GlassCard provides visual styling */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToSlide(startIndices[i])
                  }}
                  className="w-full text-left"
                  style={
                    isActive
                      ? {
                          borderRadius: '1rem',
                          boxShadow: `0 0 16px ${colors.accent1}50`,
                        }
                      : undefined
                  }
                >
                  <GlassCard
                    hoverGlow
                    accentBorder={isActive}
                    className={`p-4 ${isPast ? 'opacity-55' : ''}`}
                  >
                    {/* Emoji */}
                    <div className="text-2xl mb-2">{emoji}</div>

                    {/* Chapter number */}
                    <span
                      className="text-2xl font-display font-bold block mb-1"
                      style={{ color: isActive ? colors.accent1 : undefined }}
                    >
                      {String(ch.id).padStart(2, '0')}
                    </span>

                    {/* Chapter title */}
                    <span className="font-display text-sm font-medium text-text-secondary leading-snug block">
                      {t(ch.titleKey)}
                    </span>

                    {/* Status indicator */}
                    {isPast && (
                      <span className="text-xs mt-2 block" style={{ color: 'var(--accent1)', opacity: 0.6 }}>✓</span>
                    )}
                    {isActive && (
                      <span
                        className="text-xs mt-2 block font-semibold"
                        style={{ color: colors.accent1 }}
                      >
                        ← here
                      </span>
                    )}
                  </GlassCard>
                </button>
              </motion.div>
            )
          })}
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-text-secondary/60 text-sm font-body text-center">
            {t('toc.hint')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}
