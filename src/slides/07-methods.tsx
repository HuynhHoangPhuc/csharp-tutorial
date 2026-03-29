import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { motion } from 'framer-motion'
import { bounceIn } from '../lib/animations'

// Slide 1: Section title
function Ch7SectionTitle() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <div className="text-[var(--accent1)] font-display text-base md:text-lg mb-2 opacity-60">// Chapter 7</div>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <GradientText as="h1" className="text-3xl md:text-6xl font-display font-extrabold">
            {t('methods.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.3}>
          <p className="text-text-secondary text-sm md:text-xl mt-2">{t('methods.subtitle')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 2: Problem
function Ch7Problem() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-4xl font-bold">
            {t('methods.problem.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <GlassCard className="p-4 md:p-6">
            <p className="text-text-secondary text-xs md:text-sm mb-3 font-mono">// Main.cs</p>
            <p className="text-text-primary text-base md:text-xl font-mono leading-relaxed">
              {t('methods.problem.code_comment')}
            </p>
          </GlassCard>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="text-sm md:text-base">⚡ <span className="text-text-primary">{t('methods.problem.issue1')}</span></span>,
            <span key="2" className="text-sm md:text-base">🔥 <span className="text-text-primary">{t('methods.problem.issue2')}</span></span>,
            <span key="3" className="text-sm md:text-base">💡 <span className="text-text-primary">{t('methods.problem.issue3')}</span></span>,
          ]}
        />
      </div>
    </SlideLayout>
  )
}

// Slide 3: What is a method?
function Ch7WhatIsMethod() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-4xl font-bold">
            {t('methods.concept.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary text-sm md:text-lg">{t('methods.concept.description')}</p>
        </AnimatedText>
        <AnimatedText delay={0.25}>
          <GlassCard accentBorder className="p-3 md:p-5 font-mono text-sm">
            <div className="flex flex-wrap gap-2 md:gap-3 items-center text-base md:text-lg">
              <span className="text-[var(--accent1)] font-bold">{t('methods.concept.return_type')}</span>
              <span className="text-text-secondary">MethodName</span>
              <span className="text-text-primary">(</span>
              <span className="text-[var(--accent1)]/70">{t('methods.concept.params')}</span>
              <span className="text-text-primary">)</span>
              <span className="text-text-primary">{'{ ... }'}</span>
            </div>
          </GlassCard>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="text-text-primary text-sm md:text-base">
              <span className="text-[var(--accent1)] font-semibold">{t('methods.concept.part_return')}:</span> {t('methods.concept.part_return_desc')}
            </span>,
            <span key="2" className="text-text-primary text-sm md:text-base">
              <span className="text-[var(--accent1)] font-semibold">{t('methods.concept.part_name')}:</span> {t('methods.concept.part_name_desc')}
            </span>,
            <span key="3" className="text-text-primary text-sm md:text-base">
              <span className="text-[var(--accent1)] font-semibold">{t('methods.concept.part_params')}:</span> {t('methods.concept.part_params_desc')}
            </span>,
            <span key="4" className="text-text-primary text-sm md:text-base">
              <span className="text-[var(--accent1)] font-semibold">{t('methods.concept.part_body')}:</span> {t('methods.concept.part_body_desc')}
            </span>,
          ]}
        />
      </div>
    </SlideLayout>
  )
}

// Slide 4: Define and call a simple method
const simpleMethodCode = `// Define a method
static void SayHello()
{
    Console.WriteLine("Hello, World!");
}

// Call the method
SayHello();   // Output: Hello, World!
SayHello();   // Call it again — reuse!`

function Ch7SimpleMethod() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-4xl font-bold">
            {t('methods.example1.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary text-sm">{t('methods.example1.description')}</p>
        </AnimatedText>
        <motion.div variants={bounceIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <CodeBlock code={simpleMethodCode} filename="Program.cs" />
        </motion.div>
        <AnimatedText delay={0.5}>
          <p className="text-[var(--accent1)] text-xs md:text-sm font-mono">{t('methods.example1.note')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 5: Parameters and return values
function Ch7ParamsReturn() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-4xl font-bold">
            {t('methods.params.title')}
          </GradientText>
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <AnimatedText delay={0.15}>
            <GlassCard className="p-3 md:p-5 h-full">
              <p className="text-[var(--accent1)] font-bold mb-2 md:mb-3">{t('methods.params.input_label')}</p>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">{t('methods.params.input_desc')}</p>
              <p className="text-text-primary font-mono text-xs md:text-sm mt-3">
                void Greet(<span className="text-[var(--accent1)]">string name</span>)
              </p>
            </GlassCard>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <GlassCard hoverGlow className="p-3 md:p-5 h-full">
              <p className="text-[var(--accent1)] font-bold mb-2 md:mb-3">{t('methods.params.output_label')}</p>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">{t('methods.params.output_desc')}</p>
              <p className="text-text-primary font-mono text-xs md:text-sm mt-3">
                <span className="text-[var(--accent1)]">int</span> Square(<span className="text-[var(--accent1)]">int n</span>)
              </p>
            </GlassCard>
          </AnimatedText>
        </div>
        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-xs md:text-sm italic">{t('methods.params.note')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 6: Method with multiple params
const addMethodCode = `// Method with two parameters and a return value
static int Add(int a, int b)
{
    return a + b;
}

// Using the method
int result = Add(3, 7);
Console.WriteLine(result);   // Output: 10

int sum = Add(100, 200);
Console.WriteLine(sum);      // Output: 300`

function Ch7AddExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-4xl font-bold">
            {t('methods.example2.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary text-sm">{t('methods.example2.description')}</p>
        </AnimatedText>
        <motion.div variants={bounceIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <CodeBlock code={addMethodCode} filename="Program.cs" />
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 7: Method overloading
const overloadCode = `// Same name, different parameters — overloading!
static int Add(int a, int b)
{
    return a + b;
}

static double Add(double a, double b)
{
    return a + b;
}

static string Add(string a, string b)
{
    return a + b;  // string concatenation
}

Add(1, 2);          // calls int version
Add(1.5, 2.3);      // calls double version
Add("Hi", " World");// calls string version`

function Ch7Overloading() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-5">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-4xl font-bold">
            {t('methods.overload.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary text-sm">{t('methods.overload.description')}</p>
        </AnimatedText>
        <motion.div variants={bounceIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <CodeBlock code={overloadCode} filename="Program.cs" />
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 8: void vs returning methods
function Ch7VoidVsReturn() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-4 md:gap-6">
        <AnimatedText>
          <GradientText as="h2" className="text-xl md:text-4xl font-bold">
            {t('methods.void.title')}
          </GradientText>
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <AnimatedText delay={0.15}>
            <GlassCard className="p-3 md:p-5">
              <p className="text-[var(--accent1)] font-bold text-base md:text-lg mb-2 md:mb-3 font-display">void</p>
              <p className="text-text-secondary text-xs md:text-sm mb-3 md:mb-4">{t('methods.void.void_desc')}</p>
              <pre className="text-text-primary text-xs font-mono leading-relaxed bg-white/5 rounded p-2 md:p-3">
{`static void PrintLine()
{
    Console.WriteLine("---");
}`}
              </pre>
            </GlassCard>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <GlassCard accentBorder className="p-3 md:p-5">
              <p className="text-[var(--accent1)] font-bold text-base md:text-lg mb-2 md:mb-3 font-display">{t('methods.void.return_label')}</p>
              <p className="text-text-secondary text-xs md:text-sm mb-3 md:mb-4">{t('methods.void.return_desc')}</p>
              <pre className="text-text-primary text-xs font-mono leading-relaxed bg-white/5 rounded p-2 md:p-3">
{`static int Square(int n)
{
    return n * n;
}`}
              </pre>
            </GlassCard>
          </AnimatedText>
        </div>
        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-xs md:text-sm">{t('methods.void.rule')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 9: Takeaway
function Ch7Takeaway() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-7 text-center">
        <AnimatedText>
          <div className="text-[var(--accent1)] font-display text-sm opacity-60 mb-2">// takeaway</div>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary font-display">{t('methods.takeaway.title')}</h2>
        </AnimatedText>
        <AnimatedList
          className="text-left max-w-lg"
          itemClassName="flex items-start gap-3"
          items={[
            <span key="1" className="text-sm md:text-base"><span className="text-[var(--accent1)] mt-1">✓</span> <span className="text-text-primary">{t('methods.takeaway.point1')}</span></span>,
            <span key="2" className="text-sm md:text-base"><span className="text-[var(--accent1)] mt-1">✓</span> <span className="text-text-primary">{t('methods.takeaway.point2')}</span></span>,
            <span key="3" className="text-sm md:text-base"><span className="text-[var(--accent1)] mt-1">✓</span> <span className="text-text-primary">{t('methods.takeaway.point3')}</span></span>,
            <span key="4" className="text-sm md:text-base"><span className="text-[var(--accent1)] mt-1">✓</span> <span className="text-text-primary">{t('methods.takeaway.point4')}</span></span>,
          ]}
        />
        <AnimatedText delay={0.6}>
          <GlassCard accentBorder className="px-5 md:px-8 py-3 md:py-4 mt-2">
            <p className="text-[var(--accent1)] font-mono text-sm md:text-lg">"{t('methods.takeaway.quote')}"</p>
          </GlassCard>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

export const chapter7Slides = [
  Ch7SectionTitle,
  Ch7Problem,
  Ch7WhatIsMethod,
  Ch7SimpleMethod,
  Ch7ParamsReturn,
  Ch7AddExample,
  Ch7Overloading,
  Ch7VoidVsReturn,
  Ch7Takeaway,
]
