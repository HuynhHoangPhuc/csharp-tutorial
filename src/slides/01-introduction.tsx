import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { springIn, bounceIn, playfulStagger } from '../lib/animations'
import { TocSlide } from './toc-slide'

// Slide 1 — Title
function TitleSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full text-center gap-7">
        {/* Chapter label */}
        <motion.div
          variants={springIn}
          initial="hidden"
          animate="visible"
          className="text-[var(--accent1)]/50 text-sm font-display tracking-widest uppercase"
        >
          {t('intro.chapter_label')}
        </motion.div>

        <AnimatedText delay={0.1}>
          <GradientText as="h1" className="text-6xl font-display font-extrabold leading-tight">
            {t('intro.title')}
          </GradientText>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p className="text-2xl text-text-secondary max-w-2xl">
            {t('intro.subtitle')}
          </p>
        </AnimatedText>

        {/* Gradient divider line replacing blinking cursor */}
        <motion.div
          variants={springIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-4 w-32 h-1 rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--accent1), var(--accent2))' }}
        />
      </div>
    </SlideLayout>
  )
}

// Slide 2 — Problem / Motivation
function ProblemSlide() {
  const { t } = useLanguage()
  const promptEmojis = ['💡', '🤔', '🎯', '⚡']
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.problem_title')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4"
        >
          {(['problem_card1', 'problem_card2', 'problem_card3', 'problem_card4'] as const).map((key, i) => (
            <motion.div key={key} variants={bounceIn}>
              <GlassCard className="p-5 text-text-secondary text-lg">
                <span className="mr-2">{promptEmojis[i]}</span>
                {t(`intro.${key}`)}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-xl font-semibold border-l-2 pl-4" style={{ borderColor: 'var(--accent1)' }}>
            <GradientText>{t('intro.problem_answer')}</GradientText>
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 3 — What is C#?
function WhatIsCSharpSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.what_is_csharp')}
          </h2>
        </AnimatedText>

        <div className="flex gap-6 items-start">
          {/* Description */}
          <div className="flex-1">
            <AnimatedList
              itemClassName="flex items-start gap-3 text-text-secondary text-lg"
              items={[
                <><GradientText className="font-bold shrink-0">01.</GradientText> {t('intro.csharp_fact1')}</>,
                <><GradientText className="font-bold shrink-0">02.</GradientText> {t('intro.csharp_fact2')}</>,
                <><GradientText className="font-bold shrink-0">03.</GradientText> {t('intro.csharp_fact3')}</>,
                <><GradientText className="font-bold shrink-0">04.</GradientText> {t('intro.csharp_fact4')}</>,
              ]}
            />
          </div>

          {/* Badge panel */}
          <motion.div
            variants={playfulStagger}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-3 min-w-[200px]"
          >
            {(['Microsoft', '.NET', 'C# 12', 'Open Source'] as const).map((badge) => (
              <motion.div
                key={badge}
                variants={bounceIn}
                className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-4 py-2 text-[var(--accent1)] text-sm text-center"
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}

// Slide 4 — What can you build?
function WhatCanYouBuildSlide() {
  const { t } = useLanguage()
  const buildItems = [
    { icon: '🖥', key: 'build_desktop' },
    { icon: '🌐', key: 'build_web' },
    { icon: '🎮', key: 'build_games' },
    { icon: '📱', key: 'build_mobile' },
    { icon: '☁', key: 'build_cloud' },
  ]
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.what_can_build')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-5 gap-4"
        >
          {buildItems.map(({ icon, key }) => (
            <motion.div key={key} variants={springIn}>
              <GlassCard hoverGlow className="p-5 flex flex-col items-center gap-3 text-center">
                <span className="text-5xl">{icon}</span>
                <span className="text-text-secondary text-sm leading-snug font-display font-semibold">
                  {t(`intro.${key}`)}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.6}>
          <p className="text-text-secondary text-lg text-center">
            {t('intro.what_can_build_note')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 5 — Why C#?
function WhyCSharpSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.why_csharp')}
          </h2>
        </AnimatedText>

        <AnimatedList
          className="grid grid-cols-2 gap-4 !space-y-0"
          itemClassName="h-full"
          items={[
            <GlassCard key="modern" accentBorder className="p-5 h-full">
              <div className="text-sm mb-1"><GradientText>{t('intro.why1_label')}</GradientText></div>
              <div className="text-text-secondary">{t('intro.why1_desc')}</div>
            </GlassCard>,
            <GlassCard key="safe" accentBorder className="p-5 h-full">
              <div className="text-sm mb-1"><GradientText>{t('intro.why2_label')}</GradientText></div>
              <div className="text-text-secondary">{t('intro.why2_desc')}</div>
            </GlassCard>,
            <GlassCard key="community" accentBorder className="p-5 h-full">
              <div className="text-sm mb-1"><GradientText>{t('intro.why3_label')}</GradientText></div>
              <div className="text-text-secondary">{t('intro.why3_desc')}</div>
            </GlassCard>,
            <GlassCard key="jobs" accentBorder className="p-5 h-full">
              <div className="text-sm mb-1"><GradientText>{t('intro.why4_label')}</GradientText></div>
              <div className="text-text-secondary">{t('intro.why4_desc')}</div>
            </GlassCard>,
          ]}
        />
      </div>
    </SlideLayout>
  )
}

// Slide 6 — Hello World code example
const HELLO_WORLD_CODE = `// Program.cs — your first C# program
Console.WriteLine("Hello, World!");

// With explicit class (classic style)
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}`

function HelloWorldSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.hello_world_title')}
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-text-secondary text-lg">
            {t('intro.hello_world_desc')}
          </p>
        </AnimatedText>

        <motion.div
          variants={bounceIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <CodeBlock
            code={HELLO_WORLD_CODE}
            language="csharp"
            filename="Program.cs"
          />
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-[var(--accent1)] text-sm border-l-2 border-[var(--accent1)]/50 pl-4">
            {t('intro.hello_world_note')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 7 — Takeaway
function TakeawaySlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full text-center gap-7">
        <motion.div
          variants={springIn}
          initial="hidden"
          animate="visible"
          className="text-[var(--accent1)]/50 text-sm font-display tracking-widest uppercase"
        >
          {t('intro.takeaway_label')}
        </motion.div>

        <AnimatedText delay={0.1}>
          <GradientText as="h2" className="text-5xl font-display font-bold leading-tight max-w-3xl">
            {t('intro.takeaway_title')}
          </GradientText>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex gap-6 mt-4"
        >
          {([
            { key: 'takeaway_badge1' },
            { key: 'takeaway_badge2' },
            { key: 'takeaway_badge3' },
          ] as const).map(({ key }) => (
            <motion.div
              key={key}
              variants={bounceIn}
              className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded-full px-6 py-2 text-[var(--accent1)] text-sm"
            >
              {t(`intro.${key}`)}
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.6}>
          <p className="text-text-secondary text-xl max-w-2xl">
            {t('intro.takeaway_desc')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

export const chapter1Slides = [
  TitleSlide,
  TocSlide,
  ProblemSlide,
  WhatIsCSharpSlide,
  WhatCanYouBuildSlide,
  WhyCSharpSlide,
  HelloWorldSlide,
  TakeawaySlide,
]
