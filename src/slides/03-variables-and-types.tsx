import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { fadeIn, springIn, bounceIn, playfulStagger } from '../lib/animations'

// ─── Slide 1: Section Title ───────────────────────────────────────────────────

function Ch3SectionTitle() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <p className="text-[var(--accent1)] text-base md:text-lg font-display tracking-widest uppercase">
            {t('variables.chapter_label')}
          </p>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <GradientText as="h1" className="text-3xl md:text-6xl font-display font-extrabold text-center leading-tight">
            {t('variables.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.25}>
          <p className="text-text-secondary text-sm md:text-xl">{t('variables.subtitle')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 2: Problem ─────────────────────────────────────────────────────────

function Ch3Problem() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">{t('variables.problem_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <GlassCard accentBorder className="p-4 md:p-8">
            <p className="text-lg md:text-2xl font-semibold leading-relaxed">
              <GradientText>{t('variables.problem_question')}</GradientText>
            </p>
          </GlassCard>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="text-text-secondary text-sm md:text-lg">{t('variables.problem_bullet1')}</span>,
            <span key="2" className="text-text-secondary text-sm md:text-lg">{t('variables.problem_bullet2')}</span>,
            <span key="3" className="text-text-secondary text-sm md:text-lg">{t('variables.problem_bullet3')}</span>,
          ]}
        />
      </div>
    </SlideLayout>
  )
}

// ─── Slide 3: What Is a Variable? ─────────────────────────────────────────────

function Ch3WhatIsVariable() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">{t('variables.concept_title')}</h2>
        </AnimatedText>

        {/* Box metaphor */}
        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-stretch gap-3 md:gap-6"
        >
          {/* Name */}
          <motion.div variants={bounceIn}>
            <GlassCard accentBorder className="flex-1 flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6">
              <GradientText className="text-xl md:text-3xl font-bold">age</GradientText>
              <span className="text-xs text-text-secondary uppercase tracking-widest">
                {t('variables.box_name')}
              </span>
            </GlassCard>
          </motion.div>

          <div className="hidden md:flex items-center text-text-secondary text-2xl">:</div>

          {/* Type */}
          <motion.div variants={bounceIn}>
            <GlassCard className="flex-1 flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6">
              <span className="text-text-primary text-xl md:text-3xl font-bold">int</span>
              <span className="text-xs text-text-secondary uppercase tracking-widest">
                {t('variables.box_type')}
              </span>
            </GlassCard>
          </motion.div>

          <div className="hidden md:flex items-center text-text-secondary text-2xl">=</div>

          {/* Value */}
          <motion.div variants={bounceIn}>
            <GlassCard className="flex-1 flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6">
              <span className="text-text-primary text-xl md:text-3xl font-bold">25</span>
              <span className="text-xs text-text-secondary uppercase tracking-widest">
                {t('variables.box_value')}
              </span>
            </GlassCard>
          </motion.div>
        </motion.div>

        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-sm md:text-lg">{t('variables.concept_desc')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 4: Common Types ────────────────────────────────────────────────────

function Ch3CommonTypes() {
  const { t } = useLanguage()

  const types = [
    { type: 'int', example: '42', desc: t('variables.type_int') },
    { type: 'double', example: '3.14', desc: t('variables.type_double') },
    { type: 'string', example: '"Hello"', desc: t('variables.type_string') },
    { type: 'bool', example: 'true / false', desc: t('variables.type_bool') },
    { type: 'char', example: "'A'", desc: t('variables.type_char') },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">{t('variables.types_title')}</h2>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 md:gap-3"
        >
          {/* Header row — hidden on mobile */}
          <motion.div
            variants={fadeIn}
            className="hidden md:grid grid-cols-3 gap-4 px-4 pb-2 border-b border-border"
          >
            <span className="text-text-secondary text-sm uppercase tracking-widest">
              {t('variables.col_type')}
            </span>
            <span className="text-text-secondary text-sm uppercase tracking-widest">
              {t('variables.col_example')}
            </span>
            <span className="text-text-secondary text-sm uppercase tracking-widest">
              {t('variables.col_desc')}
            </span>
          </motion.div>

          {types.map(({ type, example, desc }) => (
            <motion.div key={type} variants={springIn}>
              <GlassCard className="grid grid-cols-3 gap-2 md:gap-4 px-3 md:px-4 py-2 md:py-3 items-center">
                <GradientText className="font-bold text-base md:text-lg">{type}</GradientText>
                <span className="text-text-primary font-mono text-sm">{example}</span>
                <span className="text-text-secondary text-xs md:text-sm">{desc}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 5: Declaring & Assigning Variables ─────────────────────────────────

const declarationCode = `// Declare and assign in one line
int age = 25;
double price = 9.99;
string name = "Alice";
bool isActive = true;
char grade = 'A';

// Declare first, assign later
int score;
score = 100;

// C# can infer the type with 'var'
var city = "Hanoi";   // compiler knows it's a string
var count = 0;        // compiler knows it's an int

Console.WriteLine($"Name: {name}, Age: {age}");`

function Ch3DeclarationExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('variables.declare_title')}
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <CodeBlock code={declarationCode} filename="Variables.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 6: Type Conversion Concept ────────────────────────────────────────

function Ch3TypeConversionConcept() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('variables.conversion_title')}
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-text-secondary text-sm md:text-lg">{t('variables.conversion_desc')}</p>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="implicit" className="text-sm md:text-lg">
              <GradientText className="font-bold">{t('variables.conv_implicit_label')}</GradientText>
              <span className="text-text-secondary"> — {t('variables.conv_implicit_desc')}</span>
            </span>,
            <span key="explicit" className="text-sm md:text-lg">
              <GradientText className="font-bold">{t('variables.conv_explicit_label')}</GradientText>
              <span className="text-text-secondary"> — {t('variables.conv_explicit_desc')}</span>
            </span>,
            <span key="convert" className="text-sm md:text-lg">
              <GradientText className="font-bold">Convert.ToInt32()</GradientText>
              <span className="text-text-secondary"> — {t('variables.conv_convert_desc')}</span>
            </span>,
            <span key="parse" className="text-sm md:text-lg">
              <GradientText className="font-bold">int.Parse()</GradientText>
              <span className="text-text-secondary"> — {t('variables.conv_parse_desc')}</span>
            </span>,
          ]}
        />
      </div>
    </SlideLayout>
  )
}

// ─── Slide 7: Type Conversion Example ────────────────────────────────────────

const conversionCode = `// Implicit conversion (no data loss)
int x = 42;
double d = x;           // int → double, safe

// Explicit cast (possible data loss)
double pi = 3.14159;
int truncated = (int)pi; // 3  — decimal part is dropped

// Convert class (parses strings & handles nulls)
string input = "100";
int num = Convert.ToInt32(input);   // 100
double val = Convert.ToDouble("2.5"); // 2.5

// int.Parse / double.Parse
int parsed = int.Parse("255");

// Any type → string
int score = 98;
string msg = score.ToString();      // "98"

Console.WriteLine(truncated); // 3
Console.WriteLine(num);       // 100`

function Ch3TypeConversionExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('variables.conversion_example_title')}
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <CodeBlock code={conversionCode} filename="TypeConversion.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 8: Constants & String Interpolation ────────────────────────────────

function Ch3ConstantsAndInterpolation() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('variables.const_title')}
          </h2>
        </AnimatedText>

        {/* const block */}
        <AnimatedText delay={0.1}>
          <GlassCard className="p-4 md:p-6 space-y-2">
            <p className="text-sm uppercase tracking-widest font-bold mb-3">
              <GradientText>const</GradientText>
            </p>
            <p className="text-text-primary text-sm md:text-base">{t('variables.const_desc')}</p>
            <p className="text-text-secondary text-xs md:text-sm">{t('variables.const_example_note')}</p>
          </GlassCard>
        </AnimatedText>

        {/* interpolation block */}
        <AnimatedText delay={0.25}>
          <GlassCard accentBorder className="p-4 md:p-6 space-y-2">
            <p className="text-sm uppercase tracking-widest font-bold mb-3">
              <GradientText>{t('variables.interp_label')}</GradientText>
            </p>
            <p className="text-text-primary text-sm md:text-base">{t('variables.interp_desc')}</p>
            <code className="text-[var(--accent1)] text-xs md:text-sm">{`$"Hello, {name}! You are {age} years old."`}</code>
          </GlassCard>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 9: Constants & Interpolation Example ───────────────────────────────

const constInterpolationCode = `// Constants — value cannot change after declaration
const double Pi = 3.14159;
const string AppName = "MyCSharpApp";
const int MaxRetries = 3;

// Pi = 4.0; // ❌ compile error — cannot reassign const

// String interpolation with $""
string name = "Alice";
int age = 25;
double height = 1.68;

Console.WriteLine($"Name   : {name}");
Console.WriteLine($"Age    : {age}");
Console.WriteLine($"Height : {height:F2} m");

// Expressions are allowed inside {}
Console.WriteLine($"Born around {2026 - age}");
Console.WriteLine($"Pi is approximately {Pi:F4}");`

function Ch3ConstExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('variables.const_example_title')}
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <CodeBlock code={constInterpolationCode} filename="Constants.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 10: Takeaway ───────────────────────────────────────────────────────

function Ch3Takeaway() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <GradientText as="h2" className="text-2xl md:text-5xl font-display font-bold text-center">
            {t('variables.takeaway_title')}
          </GradientText>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full max-w-3xl"
        >
          {[
            { icon: '📦', label: t('variables.takeaway_store') },
            { icon: '🏷️', label: t('variables.takeaway_type') },
            { icon: '🔒', label: t('variables.takeaway_const') },
            { icon: '✨', label: t('variables.takeaway_interp') },
          ].map(({ icon, label }) => (
            <motion.div key={label} variants={bounceIn}>
              <GlassCard hoverGlow className="flex items-center gap-3 md:gap-4 p-3 md:p-5">
                <span className="text-2xl md:text-3xl">{icon}</span>
                <span className="text-text-primary text-sm md:text-base leading-snug">{label}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-sm md:text-xl font-semibold text-center">
            <GradientText>{t('variables.takeaway_cta')}</GradientText>
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const chapter3Slides = [
  Ch3SectionTitle,
  Ch3Problem,
  Ch3WhatIsVariable,
  Ch3CommonTypes,
  Ch3DeclarationExample,
  Ch3TypeConversionConcept,
  Ch3TypeConversionExample,
  Ch3ConstantsAndInterpolation,
  Ch3ConstExample,
  Ch3Takeaway,
]
