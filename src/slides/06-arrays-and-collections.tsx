import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { motion } from 'framer-motion'
import { springIn, playfulStagger } from '../lib/animations'

// ─── Slide 1: Section Title ───────────────────────────────────────────────────

function ArraysSectionTitle() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <AnimatedText>
          <div className="text-[var(--accent1)] text-lg font-semibold tracking-widest uppercase">
            {t('arrays.chapter')}
          </div>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <GradientText as="h1" className="text-5xl font-display font-extrabold text-center">
            {t('arrays.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.3}>
          <p className="text-xl text-text-secondary">{t('arrays.subtitle')}</p>
        </AnimatedText>
        <AnimatedText delay={0.5}>
          <div className="mt-4 flex gap-6 text-[var(--accent1)] font-display text-xl tracking-wider">
            <span>{'int[]'}</span>
            <span className="text-text-secondary">{'|'}</span>
            <span>{'List<T>'}</span>
            <span className="text-text-secondary">{'|'}</span>
            <span>{'foreach'}</span>
          </div>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 2: Problem ─────────────────────────────────────────────────────────

function ArraysProblem() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <GradientText as="h2" className="text-3xl font-bold">
            {t('arrays.problem.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <GlassCard className="p-6">
            <p className="text-text-secondary text-sm mb-4 uppercase tracking-widest">
              {t('arrays.problem.without_arrays')}
            </p>
            <pre className="text-red-400 text-sm leading-relaxed font-mono">
{`string student1 = "Alice";
string student2 = "Bob";
string student3 = "Carol";
// ... 47 more variables`}
            </pre>
          </GlassCard>
        </AnimatedText>
        <AnimatedText delay={0.4}>
          <p className="text-xl text-text-primary">{t('arrays.problem.question')}</p>
        </AnimatedText>
        <AnimatedText delay={0.55}>
          <p className="text-[var(--accent1)] text-lg">{t('arrays.problem.answer')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 3: Array concept ───────────────────────────────────────────────────

function ArrayConcept() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <h2 className="text-3xl font-bold text-text-primary font-display">{t('arrays.array.title')}</h2>
        </AnimatedText>

        {/* Visual: array boxes */}
        <AnimatedText delay={0.2}>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary text-sm mr-2">{t('arrays.array.index_label')}</span>
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-12 bg-[var(--accent1)]/10 border border-[var(--accent1)]/50 rounded flex items-center justify-center text-text-primary font-mono text-sm">
                  {['10', '20', '30', '40', '50'][i]}
                </div>
                <span className="text-text-secondary text-xs mt-1">[{i}]</span>
              </div>
            ))}
          </div>
        </AnimatedText>

        <AnimatedList
          items={[
            <span key="a" className="text-text-primary text-base">{t('arrays.array.point1')}</span>,
            <span key="b" className="text-text-primary text-base">{t('arrays.array.point2')}</span>,
            <span key="c" className="text-text-primary text-base">{t('arrays.array.point3')}</span>,
            <span key="d" className="text-text-primary text-base">{t('arrays.array.point4')}</span>,
          ]}
          itemClassName="flex items-start gap-3 before:content-['▸'] before:text-[var(--accent1)] before:mt-0.5 before:shrink-0"
        />
      </div>
    </SlideLayout>
  )
}

// ─── Slide 4: Array example ───────────────────────────────────────────────────

const arrayCode = `// Declare and initialize
int[] scores = { 95, 82, 78, 91, 67 };

// Declare with size, then assign
string[] names = new string[3];
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Carol";

// Access elements by index (zero-based)
Console.WriteLine(scores[0]);   // 95
Console.WriteLine(scores[4]);   // 67

// Array length
Console.WriteLine(scores.Length);  // 5`

function ArrayExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-6">
        <AnimatedText>
          <h2 className="text-3xl font-bold text-text-primary font-display">{t('arrays.array.example_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <CodeBlock code={arrayCode} language="csharp" filename="Arrays.cs" />
        </AnimatedText>
        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-sm border-l-2 pl-4" style={{ borderColor: 'var(--accent1)' }}>
            {t('arrays.array.example_note')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 5: List<T> concept ─────────────────────────────────────────────────

function ListConcept() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <h2 className="text-3xl font-bold text-text-primary font-display">{t('arrays.list.title')}</h2>
        </AnimatedText>

        <div className="grid grid-cols-2 gap-6">
          <AnimatedText delay={0.2}>
            <GlassCard className="p-5">
              <div className="text-text-secondary text-xs uppercase tracking-widest mb-3">
                {t('arrays.list.array_label')}
              </div>
              <AnimatedList
                items={[
                  <span key="a" className="text-text-secondary text-sm">{t('arrays.list.array_point1')}</span>,
                  <span key="b" className="text-text-secondary text-sm">{t('arrays.list.array_point2')}</span>,
                  <span key="c" className="text-text-secondary text-sm">{t('arrays.list.array_point3')}</span>,
                ]}
              />
            </GlassCard>
          </AnimatedText>

          <AnimatedText delay={0.35}>
            <GlassCard accentBorder hoverGlow className="p-5">
              <div className="text-[var(--accent1)] text-xs uppercase tracking-widest mb-3">
                {'List<T>'} — {t('arrays.list.list_label')}
              </div>
              <AnimatedList
                items={[
                  <span key="a" className="text-text-primary text-sm">{t('arrays.list.list_point1')}</span>,
                  <span key="b" className="text-text-primary text-sm">{t('arrays.list.list_point2')}</span>,
                  <span key="c" className="text-text-primary text-sm">{t('arrays.list.list_point3')}</span>,
                ]}
              />
            </GlassCard>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5}>
          <GlassCard className="p-4">
            <p className="text-text-secondary text-xs mb-2 uppercase tracking-widest">
              {t('arrays.list.syntax_label')}
            </p>
            <code className="text-[var(--accent1)] font-mono">
              {'List<string> names = new List<string>();'}
            </code>
          </GlassCard>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 6: List<T> example ─────────────────────────────────────────────────

const listCode = `using System.Collections.Generic;

List<string> fruits = new List<string>();

// Add items dynamically
fruits.Add("Apple");
fruits.Add("Banana");
fruits.Add("Cherry");

// Remove an item
fruits.Remove("Banana");

// Iterate with foreach
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
// Output: Apple
//         Cherry`

function ListExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-6">
        <AnimatedText>
          <h2 className="text-3xl font-bold text-text-primary font-display">{t('arrays.list.example_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <CodeBlock code={listCode} language="csharp" filename="Lists.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 7: Common List methods ────────────────────────────────────────────

function ListMethods() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <h2 className="text-3xl font-bold text-text-primary font-display">{t('arrays.methods.title')}</h2>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4"
        >
          {[
            { method: '.Add(item)',        desc: t('arrays.methods.add') },
            { method: '.Remove(item)',     desc: t('arrays.methods.remove') },
            { method: '.Count',            desc: t('arrays.methods.count') },
            { method: '.Contains(item)',   desc: t('arrays.methods.contains') },
            { method: '.Clear()',          desc: t('arrays.methods.clear') },
            { method: '.Insert(i, item)',  desc: t('arrays.methods.insert') },
          ].map(({ method, desc }) => (
            <motion.div
              key={method}
              variants={springIn}
            >
              <GlassCard hoverGlow className="p-4 flex gap-4 items-start">
                <code className="text-[var(--accent1)] font-mono text-sm shrink-0 w-36">{method}</code>
                <span className="text-text-secondary text-sm">{desc}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-text-secondary text-sm">
            {t('arrays.methods.note')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 8: Loops + Arrays combined example ────────────────────────────────

const findMaxCode = `int[] scores = { 45, 92, 78, 65, 88, 73, 97, 54 };

// Find the maximum value in an array
int max = scores[0];  // assume first is max

for (int i = 1; i < scores.Length; i++)
{
    if (scores[i] > max)
    {
        max = scores[i];
    }
}

Console.WriteLine("Highest score: " + max);
// Output: Highest score: 97`

function LoopsAndArraysExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-6">
        <AnimatedText>
          <h2 className="text-3xl font-bold text-text-primary font-display">{t('arrays.combined.title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary">{t('arrays.combined.desc')}</p>
        </AnimatedText>
        <AnimatedText delay={0.3}>
          <CodeBlock code={findMaxCode} language="csharp" filename="FindMax.cs" />
        </AnimatedText>
        <AnimatedText delay={0.5}>
          <p className="text-text-secondary text-sm border-l-2 pl-4" style={{ borderColor: 'var(--accent1)' }}>
            {t('arrays.combined.note')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 9: Takeaway ────────────────────────────────────────────────────────

function ArraysTakeaway() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <GradientText as="h2" className="text-3xl font-bold">
            {t('arrays.takeaway.title')}
          </GradientText>
        </AnimatedText>

        <div className="grid grid-cols-2 gap-6">
          <AnimatedText delay={0.2}>
            <GlassCard className="p-5">
              <div className="text-[var(--accent1)] font-bold text-lg mb-3">{t('arrays.takeaway.array_label')}</div>
              <AnimatedList
                items={[
                  <span key="a" className="text-text-secondary text-sm">{t('arrays.takeaway.array_point1')}</span>,
                  <span key="b" className="text-text-secondary text-sm">{t('arrays.takeaway.array_point2')}</span>,
                  <span key="c" className="text-text-secondary text-sm">{t('arrays.takeaway.array_point3')}</span>,
                ]}
              />
            </GlassCard>
          </AnimatedText>

          <AnimatedText delay={0.35}>
            <GlassCard accentBorder hoverGlow className="p-5">
              <div className="text-[var(--accent1)] font-bold text-lg mb-3">{'List<T>'}</div>
              <AnimatedList
                items={[
                  <span key="a" className="text-text-primary text-sm">{t('arrays.takeaway.list_point1')}</span>,
                  <span key="b" className="text-text-primary text-sm">{t('arrays.takeaway.list_point2')}</span>,
                  <span key="c" className="text-text-primary text-sm">{t('arrays.takeaway.list_point3')}</span>,
                ]}
              />
            </GlassCard>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.55}>
          <p className="text-xl text-text-primary border-l-4 pl-4" style={{ borderColor: 'var(--accent1)' }}>
            {t('arrays.takeaway.summary')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const chapter6Slides = [
  ArraysSectionTitle,
  ArraysProblem,
  ArrayConcept,
  ArrayExample,
  ListConcept,
  ListExample,
  ListMethods,
  LoopsAndArraysExample,
  ArraysTakeaway,
]
