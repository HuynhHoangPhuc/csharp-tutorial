import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { useLanguage } from '../i18n/language-context'
import { fadeInUp, staggerContainer, scaleIn } from '../lib/animations'

// Slide 1 — Title
function TitleSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center gap-6">
        {/* Decorative terminal prompt */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-green/50 text-sm font-mono tracking-widest uppercase"
        >
          {t('intro.chapter_label')}
        </motion.div>

        <AnimatedText delay={0.1}>
          <h1 className="text-6xl font-bold text-green leading-tight">
            {t('intro.title')}
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p className="text-2xl text-text-secondary max-w-2xl">
            {t('intro.subtitle')}
          </p>
        </AnimatedText>

        {/* Blinking cursor */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-4 text-green font-mono text-3xl"
        >
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 2 — Problem / Motivation
function ProblemSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-10">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.problem_title')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4"
        >
          {(['problem_card1', 'problem_card2', 'problem_card3', 'problem_card4'] as const).map((key) => (
            <motion.div
              key={key}
              variants={scaleIn}
              className="bg-bg-card border border-border rounded-lg p-5 text-text-secondary text-lg"
            >
              <span className="text-green mr-2 font-mono">&gt;</span>
              {t(`intro.${key}`)}
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-xl text-green font-semibold border-l-2 border-green pl-4">
            {t('intro.problem_answer')}
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
      <div className="flex flex-col justify-center h-full gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.what_is_csharp')}
          </h2>
        </AnimatedText>

        <div className="flex gap-8 items-start">
          {/* Description */}
          <div className="flex-1">
            <AnimatedList
              itemClassName="flex items-start gap-3 text-text-secondary text-lg"
              items={[
                <><span className="text-green font-mono shrink-0">01.</span> {t('intro.csharp_fact1')}</>,
                <><span className="text-green font-mono shrink-0">02.</span> {t('intro.csharp_fact2')}</>,
                <><span className="text-green font-mono shrink-0">03.</span> {t('intro.csharp_fact3')}</>,
                <><span className="text-green font-mono shrink-0">04.</span> {t('intro.csharp_fact4')}</>,
              ]}
            />
          </div>

          {/* Badge panel */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-3 min-w-[200px]"
          >
            {(['Microsoft', '.NET', 'C# 12', 'Open Source'] as const).map((badge) => (
              <div
                key={badge}
                className="bg-green/10 border border-green/30 rounded px-4 py-2 text-green font-mono text-sm text-center"
              >
                {badge}
              </div>
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
      <div className="flex flex-col justify-center h-full gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.what_can_build')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-5 gap-4"
        >
          {buildItems.map(({ icon, key }) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              className="flex flex-col items-center gap-3 bg-bg-card border border-border rounded-lg p-5 text-center"
            >
              <span className="text-4xl">{icon}</span>
              <span className="text-text-secondary text-sm leading-snug">
                {t(`intro.${key}`)}
              </span>
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
      <div className="flex flex-col justify-center h-full gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('intro.why_csharp')}
          </h2>
        </AnimatedText>

        <AnimatedList
          className="grid grid-cols-2 gap-4 !space-y-0"
          itemClassName="bg-bg-card border border-border rounded-lg p-5"
          items={[
            <div key="modern">
              <div className="text-green font-mono text-sm mb-1">{t('intro.why1_label')}</div>
              <div className="text-text-secondary">{t('intro.why1_desc')}</div>
            </div>,
            <div key="safe">
              <div className="text-green font-mono text-sm mb-1">{t('intro.why2_label')}</div>
              <div className="text-text-secondary">{t('intro.why2_desc')}</div>
            </div>,
            <div key="community">
              <div className="text-green font-mono text-sm mb-1">{t('intro.why3_label')}</div>
              <div className="text-text-secondary">{t('intro.why3_desc')}</div>
            </div>,
            <div key="jobs">
              <div className="text-green font-mono text-sm mb-1">{t('intro.why4_label')}</div>
              <div className="text-text-secondary">{t('intro.why4_desc')}</div>
            </div>,
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
      <div className="flex flex-col justify-center h-full gap-6">
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
          variants={scaleIn}
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
          <p className="text-green font-mono text-sm border-l-2 border-green/50 pl-4">
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
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center gap-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-green/50 text-sm font-mono tracking-widest uppercase"
        >
          {t('intro.takeaway_label')}
        </motion.div>

        <AnimatedText delay={0.1}>
          <h2 className="text-5xl font-bold text-green leading-tight max-w-3xl">
            {t('intro.takeaway_title')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
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
              variants={scaleIn}
              className="bg-green/10 border border-green/30 rounded-full px-6 py-2 text-green font-mono text-sm"
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
  ProblemSlide,
  WhatIsCSharpSlide,
  WhatCanYouBuildSlide,
  WhyCSharpSlide,
  HelloWorldSlide,
  TakeawaySlide,
]
