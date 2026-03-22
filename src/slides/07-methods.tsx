import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { useLanguage } from '../i18n/language-context'
import { motion } from 'framer-motion'
import { scaleIn } from '../lib/animations'

// Slide 1: Section title
function Ch7SectionTitle() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <AnimatedText>
          <div className="text-green font-mono text-lg mb-2 opacity-60">// Chapter 7</div>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h1 className="text-6xl font-bold text-green">{t('methods.title')}</h1>
        </AnimatedText>
        <AnimatedText delay={0.3}>
          <p className="text-text-secondary text-xl mt-2">{t('methods.subtitle')}</p>
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
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-green">{t('methods.problem.title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <div className="bg-bg-card border border-border rounded-lg p-6">
            <p className="text-text-secondary text-sm mb-3 font-mono">// Main.cs</p>
            <p className="text-text-primary text-xl font-mono leading-relaxed">
              {t('methods.problem.code_comment')}
            </p>
          </div>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1"><span className="text-green">→</span> <span className="text-text-primary">{t('methods.problem.issue1')}</span></span>,
            <span key="2"><span className="text-green">→</span> <span className="text-text-primary">{t('methods.problem.issue2')}</span></span>,
            <span key="3"><span className="text-green">→</span> <span className="text-text-primary">{t('methods.problem.issue3')}</span></span>,
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
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-green">{t('methods.concept.title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary text-lg">{t('methods.concept.description')}</p>
        </AnimatedText>
        <AnimatedText delay={0.25}>
          <div className="bg-bg-card border border-green/30 rounded-lg p-5 font-mono text-sm">
            <div className="flex flex-wrap gap-3 items-center text-lg">
              <span className="text-green font-bold">{t('methods.concept.return_type')}</span>
              <span className="text-text-secondary">MethodName</span>
              <span className="text-text-primary">(</span>
              <span className="text-green/70">{t('methods.concept.params')}</span>
              <span className="text-text-primary">)</span>
              <span className="text-text-primary">{'{ ... }'}</span>
            </div>
          </div>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="text-text-primary">
              <span className="text-green font-semibold">{t('methods.concept.part_return')}:</span> {t('methods.concept.part_return_desc')}
            </span>,
            <span key="2" className="text-text-primary">
              <span className="text-green font-semibold">{t('methods.concept.part_name')}:</span> {t('methods.concept.part_name_desc')}
            </span>,
            <span key="3" className="text-text-primary">
              <span className="text-green font-semibold">{t('methods.concept.part_params')}:</span> {t('methods.concept.part_params_desc')}
            </span>,
            <span key="4" className="text-text-primary">
              <span className="text-green font-semibold">{t('methods.concept.part_body')}:</span> {t('methods.concept.part_body_desc')}
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
      <div className="flex flex-col h-full justify-center gap-6">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-green">{t('methods.example1.title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary">{t('methods.example1.description')}</p>
        </AnimatedText>
        <motion.div variants={scaleIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <CodeBlock code={simpleMethodCode} filename="Program.cs" />
        </motion.div>
        <AnimatedText delay={0.5}>
          <p className="text-green text-sm font-mono">{t('methods.example1.note')}</p>
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
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-green">{t('methods.params.title')}</h2>
        </AnimatedText>
        <div className="grid grid-cols-2 gap-6">
          <AnimatedText delay={0.15}>
            <div className="bg-bg-card border border-border rounded-lg p-5 h-full">
              <p className="text-green font-bold mb-3">{t('methods.params.input_label')}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{t('methods.params.input_desc')}</p>
              <p className="text-text-primary font-mono text-sm mt-3">
                void Greet(<span className="text-green">string name</span>)
              </p>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <div className="bg-bg-card border border-border rounded-lg p-5 h-full">
              <p className="text-green font-bold mb-3">{t('methods.params.output_label')}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{t('methods.params.output_desc')}</p>
              <p className="text-text-primary font-mono text-sm mt-3">
                <span className="text-green">int</span> Square(<span className="text-green">int n</span>)
              </p>
            </div>
          </AnimatedText>
        </div>
        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-sm italic">{t('methods.params.note')}</p>
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
      <div className="flex flex-col h-full justify-center gap-6">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-green">{t('methods.example2.title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary">{t('methods.example2.description')}</p>
        </AnimatedText>
        <motion.div variants={scaleIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
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
      <div className="flex flex-col h-full justify-center gap-5">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-green">{t('methods.overload.title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary">{t('methods.overload.description')}</p>
        </AnimatedText>
        <motion.div variants={scaleIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
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
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-green">{t('methods.void.title')}</h2>
        </AnimatedText>
        <div className="grid grid-cols-2 gap-6">
          <AnimatedText delay={0.15}>
            <div className="bg-bg-card border border-green/20 rounded-lg p-5">
              <p className="text-green font-bold text-lg mb-3 font-mono">void</p>
              <p className="text-text-secondary text-sm mb-4">{t('methods.void.void_desc')}</p>
              <pre className="text-text-primary text-xs font-mono leading-relaxed bg-bg-secondary rounded p-3">
{`static void PrintLine()
{
    Console.WriteLine("---");
}`}
              </pre>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <div className="bg-bg-card border border-green/20 rounded-lg p-5">
              <p className="text-green font-bold text-lg mb-3 font-mono">{t('methods.void.return_label')}</p>
              <p className="text-text-secondary text-sm mb-4">{t('methods.void.return_desc')}</p>
              <pre className="text-text-primary text-xs font-mono leading-relaxed bg-bg-secondary rounded p-3">
{`static int Square(int n)
{
    return n * n;
}`}
              </pre>
            </div>
          </AnimatedText>
        </div>
        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-sm">{t('methods.void.rule')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 9: Takeaway
function Ch7Takeaway() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
        <AnimatedText>
          <div className="text-green font-mono text-sm opacity-60 mb-2">// takeaway</div>
          <h2 className="text-4xl font-bold text-text-primary">{t('methods.takeaway.title')}</h2>
        </AnimatedText>
        <AnimatedList
          className="text-left max-w-lg"
          itemClassName="flex items-start gap-3"
          items={[
            <span key="1"><span className="text-green mt-1">✓</span> <span className="text-text-primary">{t('methods.takeaway.point1')}</span></span>,
            <span key="2"><span className="text-green mt-1">✓</span> <span className="text-text-primary">{t('methods.takeaway.point2')}</span></span>,
            <span key="3"><span className="text-green mt-1">✓</span> <span className="text-text-primary">{t('methods.takeaway.point3')}</span></span>,
            <span key="4"><span className="text-green mt-1">✓</span> <span className="text-text-primary">{t('methods.takeaway.point4')}</span></span>,
          ]}
        />
        <AnimatedText delay={0.6}>
          <div className="bg-bg-card border border-green/30 rounded-lg px-8 py-4 mt-2">
            <p className="text-green font-mono text-lg">"{t('methods.takeaway.quote')}"</p>
          </div>
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
