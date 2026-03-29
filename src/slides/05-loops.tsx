import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { motion } from 'framer-motion'
import { springIn, bounceIn, playfulStagger } from '../lib/animations'

// ─── Slide 1: Section Title ───────────────────────────────────────────────────

function LoopsSectionTitle() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <div className="text-[var(--accent1)] text-base md:text-lg font-semibold tracking-widest uppercase">
            {t('loops.chapter')}
          </div>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <GradientText as="h1" className="text-3xl md:text-6xl font-display font-extrabold">
            {t('loops.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.3}>
          <p className="text-sm md:text-xl text-text-secondary">{t('loops.subtitle')}</p>
        </AnimatedText>
        <AnimatedText delay={0.5}>
          <div className="mt-4 text-[var(--accent1)] font-display text-lg md:text-2xl tracking-wider">
            {'for  while  do-while  foreach'}
          </div>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 2: Problem ─────────────────────────────────────────────────────────

function LoopsProblem() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-3xl font-bold">
            {t('loops.problem.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <GlassCard className="p-4 md:p-6">
            <p className="text-text-secondary text-sm mb-3 md:mb-4 uppercase tracking-widest">
              {t('loops.problem.without_loops')}
            </p>
            <pre className="text-red-400 text-xs md:text-sm leading-relaxed font-mono">
{`Console.WriteLine(1);
Console.WriteLine(2);
Console.WriteLine(3);
// ... 97 more lines`}
            </pre>
          </GlassCard>
        </AnimatedText>
        <AnimatedText delay={0.4}>
          <p className="text-base md:text-xl text-text-primary">{t('loops.problem.question')}</p>
        </AnimatedText>
        <AnimatedText delay={0.55}>
          <p className="text-[var(--accent1)] text-sm md:text-lg">{t('loops.problem.answer')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 3: for loop concept ────────────────────────────────────────────────

function ForLoopConcept() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <h2 className="text-xl md:text-3xl font-bold text-text-primary font-display">
            {t('loops.for.title')}
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <GlassCard className="p-3 md:p-5">
            <p className="text-text-secondary text-xs mb-2 md:mb-3 uppercase tracking-widest">
              {t('loops.for.syntax_label')}
            </p>
            <pre className="text-[var(--accent1)] font-mono text-sm md:text-lg">
              {'for (initializer; condition; increment) { }'}
            </pre>
          </GlassCard>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4"
        >
          {[
            { label: t('loops.for.init_label'), desc: t('loops.for.init_desc'), example: 'int i = 0' },
            { label: t('loops.for.cond_label'), desc: t('loops.for.cond_desc'), example: 'i < 10' },
            { label: t('loops.for.inc_label'),  desc: t('loops.for.inc_desc'),  example: 'i++' },
          ].map(({ label, desc, example }) => (
            <motion.div
              key={label}
              variants={springIn}
            >
              <GlassCard hoverGlow className="p-3 md:p-4">
                <div className="text-[var(--accent1)] font-bold mb-1 text-sm md:text-base">{label}</div>
                <div className="text-text-secondary text-xs md:text-sm mb-2">{desc}</div>
                <code className="text-text-primary text-xs md:text-sm">{example}</code>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 4: for loop example ────────────────────────────────────────────────

const forLoopCode = `// Print numbers 1 through 10
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i);
}

// Output: 1 2 3 4 5 6 7 8 9 10

// Count down from 5
for (int i = 5; i >= 1; i--)
{
    Console.Write(i + " ");
}
// Output: 5 4 3 2 1`

function ForLoopExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <h2 className="text-xl md:text-3xl font-bold text-text-primary font-display">{t('loops.for.example_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <CodeBlock code={forLoopCode} language="csharp" filename="ForLoop.cs" />
        </AnimatedText>
        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-xs md:text-sm">{t('loops.for.example_note')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 5: while and do-while concept ──────────────────────────────────────

function WhileLoopConcept() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <h2 className="text-xl md:text-3xl font-bold text-text-primary font-display">{t('loops.while.title')}</h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <AnimatedText delay={0.2}>
            <GlassCard className="p-3 md:p-5 h-full">
              <div className="text-[var(--accent1)] font-bold text-base md:text-lg mb-2">while</div>
              <pre className="text-text-secondary text-xs md:text-sm font-mono mb-3">
                {'while (condition) { }'}
              </pre>
              <AnimatedList
                items={[
                  <span key="a" className="text-text-secondary text-xs md:text-sm">{t('loops.while.while_point1')}</span>,
                  <span key="b" className="text-text-secondary text-xs md:text-sm">{t('loops.while.while_point2')}</span>,
                ]}
              />
            </GlassCard>
          </AnimatedText>

          <AnimatedText delay={0.35}>
            <GlassCard accentBorder className="p-3 md:p-5 h-full">
              <div className="text-[var(--accent1)] font-bold text-base md:text-lg mb-2">do-while</div>
              <pre className="text-text-secondary text-xs md:text-sm font-mono mb-3">
                {'do { } while (condition);'}
              </pre>
              <AnimatedList
                items={[
                  <span key="a" className="text-text-secondary text-xs md:text-sm">{t('loops.while.dowhile_point1')}</span>,
                  <span key="b" className="text-text-secondary text-xs md:text-sm">{t('loops.while.dowhile_point2')}</span>,
                ]}
              />
            </GlassCard>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5}>
          <p className="text-text-secondary text-xs md:text-sm border-l-2 pl-4" style={{ borderColor: 'var(--accent1)' }}>
            {t('loops.while.tip')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 6: while example ───────────────────────────────────────────────────

const whileLoopCode = `int count = 5;

// while: check condition BEFORE each iteration
while (count > 0)
{
    Console.WriteLine("Countdown: " + count);
    count--;
}
Console.WriteLine("Go!");

// do-while: runs at least ONCE, check AFTER
int attempts = 0;
do
{
    Console.WriteLine("Attempt " + (attempts + 1));
    attempts++;
} while (attempts < 3);`

function WhileLoopExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <h2 className="text-xl md:text-3xl font-bold text-text-primary font-display">{t('loops.while.example_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <CodeBlock code={whileLoopCode} language="csharp" filename="WhileLoop.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 7: foreach concept ─────────────────────────────────────────────────

function ForeachConcept() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <h2 className="text-xl md:text-3xl font-bold text-text-primary font-display">{t('loops.foreach.title')}</h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <GlassCard className="p-3 md:p-5">
            <p className="text-text-secondary text-xs mb-2 md:mb-3 uppercase tracking-widest">
              {t('loops.foreach.syntax_label')}
            </p>
            <pre className="text-[var(--accent1)] font-mono text-sm md:text-lg">
              {'foreach (var item in collection) { }'}
            </pre>
          </GlassCard>
        </AnimatedText>

        <AnimatedList
          items={[
            <span key="a" className="text-text-primary text-sm md:text-base">{t('loops.foreach.point1')}</span>,
            <span key="b" className="text-text-primary text-sm md:text-base">{t('loops.foreach.point2')}</span>,
            <span key="c" className="text-text-primary text-sm md:text-base">{t('loops.foreach.point3')}</span>,
            <span key="d" className="text-text-primary text-sm md:text-base">{t('loops.foreach.point4')}</span>,
          ]}
          itemClassName="flex items-start gap-3 before:content-['▸'] before:text-[var(--accent1)] before:mt-0.5 before:shrink-0"
        />
      </div>
    </SlideLayout>
  )
}

// ─── Slide 8: break and continue ─────────────────────────────────────────────

const breakContinueCode = `int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// break: exit the loop immediately
foreach (int n in numbers)
{
    if (n == 5) break;          // stop when n is 5
    Console.Write(n + " ");     // prints: 1 2 3 4
}

// continue: skip this iteration, move to next
foreach (int n in numbers)
{
    if (n % 2 == 0) continue;   // skip even numbers
    Console.Write(n + " ");     // prints: 1 3 5 7 9
}`

function BreakContinueConcept() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <h2 className="text-xl md:text-3xl font-bold text-text-primary font-display">{t('loops.break.title')}</h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <AnimatedText delay={0.2}>
            <GlassCard accentBorder className="p-3 md:p-4">
              <div className="text-[var(--accent1)] font-bold mb-2">break</div>
              <p className="text-text-secondary text-xs md:text-sm">{t('loops.break.break_desc')}</p>
            </GlassCard>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <GlassCard className="p-3 md:p-4">
              <div className="text-[var(--accent1)] font-bold mb-2">continue</div>
              <p className="text-text-secondary text-xs md:text-sm">{t('loops.break.continue_desc')}</p>
            </GlassCard>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.4}>
          <CodeBlock code={breakContinueCode} language="csharp" filename="BreakContinue.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 9: Takeaway ────────────────────────────────────────────────────────

function LoopsTakeaway() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-3xl font-bold">
            {t('loops.takeaway.title')}
          </GradientText>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
        >
          {[
            { loop: 'for',      when: t('loops.takeaway.for_when') },
            { loop: 'while',    when: t('loops.takeaway.while_when') },
            { loop: 'do-while', when: t('loops.takeaway.dowhile_when') },
            { loop: 'foreach',  when: t('loops.takeaway.foreach_when') },
          ].map(({ loop, when }) => (
            <motion.div
              key={loop}
              variants={bounceIn}
            >
              <GlassCard hoverGlow className="p-3 md:p-4 flex gap-3 md:gap-4 items-start">
                <span className="text-[var(--accent1)] font-bold font-display text-sm md:text-base shrink-0 w-20">{loop}</span>
                <span className="text-text-secondary text-xs md:text-sm">{when}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.6}>
          <p className="text-base md:text-xl text-text-primary border-l-4 pl-4" style={{ borderColor: 'var(--accent1)' }}>
            {t('loops.takeaway.summary')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const chapter5Slides = [
  LoopsSectionTitle,
  LoopsProblem,
  ForLoopConcept,
  ForLoopExample,
  WhileLoopConcept,
  WhileLoopExample,
  ForeachConcept,
  BreakContinueConcept,
  LoopsTakeaway,
]
