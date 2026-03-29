import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { fadeIn, springIn, bounceIn, playfulStagger } from '../lib/animations'

// ─── Slide 1: Section Title ───────────────────────────────────────────────────

function Ch4SectionTitle() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <p className="text-[var(--accent1)] text-base md:text-lg font-display tracking-widest uppercase">
            {t('control.chapter_label')}
          </p>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <GradientText as="h1" className="text-3xl md:text-6xl font-display font-extrabold text-center leading-tight">
            {t('control.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.25}>
          <p className="text-text-secondary text-sm md:text-xl">{t('control.subtitle')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 2: Problem ─────────────────────────────────────────────────────────

function Ch4Problem() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">{t('control.problem_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <GlassCard accentBorder className="p-4 md:p-8">
            <p className="text-lg md:text-2xl font-semibold leading-relaxed">
              <GradientText>{t('control.problem_question')}</GradientText>
            </p>
          </GlassCard>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="text-text-secondary text-sm md:text-lg">{t('control.problem_bullet1')}</span>,
            <span key="2" className="text-text-secondary text-sm md:text-lg">{t('control.problem_bullet2')}</span>,
            <span key="3" className="text-text-secondary text-sm md:text-lg">{t('control.problem_bullet3')}</span>,
          ]}
        />
      </div>
    </SlideLayout>
  )
}

// ─── Slide 3: if / else if / else Syntax ─────────────────────────────────────

function Ch4IfElseSyntax() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">{t('control.if_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-text-secondary text-sm md:text-lg">{t('control.if_desc')}</p>
        </AnimatedText>

        {/* Syntax anatomy */}
        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 md:gap-3"
        >
          {[
            { keyword: 'if (condition)', desc: t('control.if_if_desc'), highlight: true },
            { keyword: 'else if (condition)', desc: t('control.if_elseif_desc'), highlight: false },
            { keyword: 'else', desc: t('control.if_else_desc'), highlight: false },
          ].map(({ keyword, desc, highlight }) => (
            <motion.div key={keyword} variants={springIn}>
              <GlassCard className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 px-3 md:px-5 py-3 md:py-4">
                <code className={`text-sm md:text-lg font-bold md:min-w-[220px] ${highlight ? 'text-[var(--accent1)]' : 'text-text-primary'}`}>
                  {keyword}
                </code>
                <span className="text-text-secondary text-sm">{desc}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 4: Grade Checker Example ──────────────────────────────────────────

const gradeCheckerCode = `int score = 78;
string grade;

if (score >= 90)
{
    grade = "A";
}
else if (score >= 80)
{
    grade = "B";
}
else if (score >= 70)
{
    grade = "C";
}
else if (score >= 60)
{
    grade = "D";
}
else
{
    grade = "F";
}

Console.WriteLine($"Score: {score} → Grade: {grade}"); // Score: 78 → Grade: C`

function Ch4GradeCheckerExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('control.grade_title')}
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <CodeBlock code={gradeCheckerCode} filename="GradeChecker.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 5: Comparison & Logical Operators ──────────────────────────────────

function Ch4Operators() {
  const { t } = useLanguage()

  const comparisonOps = [
    { op: '==', label: t('control.op_eq') },
    { op: '!=', label: t('control.op_neq') },
    { op: '<  >', label: t('control.op_lt_gt') },
    { op: '<= >=', label: t('control.op_lte_gte') },
  ]

  const logicalOps = [
    { op: '&&', label: t('control.op_and') },
    { op: '||', label: t('control.op_or') },
    { op: '!', label: t('control.op_not') },
  ]

  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">{t('control.operators_title')}</h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Comparison */}
          <motion.div variants={playfulStagger} initial="hidden" animate="visible">
            <motion.p variants={fadeIn} className="text-[var(--accent1)] text-sm uppercase tracking-widest mb-2 md:mb-3">
              {t('control.op_comparison_label')}
            </motion.p>
            <div className="flex flex-col gap-2">
              {comparisonOps.map(({ op, label }) => (
                <motion.div key={op} variants={springIn}>
                  <GlassCard className="flex items-center gap-3 md:gap-4 px-3 md:px-4 py-2 md:py-3">
                    <code className="text-[var(--accent1)] font-bold text-base md:text-lg w-14 md:w-16 shrink-0">{op}</code>
                    <span className="text-text-secondary text-xs md:text-sm">{label}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Logical */}
          <motion.div variants={playfulStagger} initial="hidden" animate="visible">
            <motion.p variants={fadeIn} className="text-[var(--accent1)] text-sm uppercase tracking-widest mb-2 md:mb-3">
              {t('control.op_logical_label')}
            </motion.p>
            <div className="flex flex-col gap-2">
              {logicalOps.map(({ op, label }) => (
                <motion.div key={op} variants={springIn}>
                  <GlassCard className="flex items-center gap-3 md:gap-4 px-3 md:px-4 py-2 md:py-3">
                    <code className="text-[var(--accent1)] font-bold text-base md:text-lg w-14 md:w-16 shrink-0">{op}</code>
                    <span className="text-text-secondary text-xs md:text-sm">{label}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 6: switch Statement Syntax ────────────────────────────────────────

function Ch4SwitchSyntax() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">{t('control.switch_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-text-secondary text-sm md:text-lg">{t('control.switch_desc')}</p>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 md:gap-3"
        >
          {[
            { keyword: 'switch (variable)', desc: t('control.switch_switch_desc') },
            { keyword: 'case value:', desc: t('control.switch_case_desc') },
            { keyword: 'break;', desc: t('control.switch_break_desc') },
            { keyword: 'default:', desc: t('control.switch_default_desc') },
          ].map(({ keyword, desc }) => (
            <motion.div key={keyword} variants={springIn}>
              <GlassCard className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 px-3 md:px-5 py-2 md:py-3">
                <code className="text-[var(--accent1)] font-bold text-sm md:text-base md:min-w-[200px]">{keyword}</code>
                <span className="text-text-secondary text-xs md:text-sm">{desc}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 7: Day of Week Switch Example ─────────────────────────────────────

const dayOfWeekCode = `int day = 3; // 1 = Monday ... 7 = Sunday
string dayName;

switch (day)
{
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 6:
    case 7:
        dayName = "Weekend!";  // multiple cases, same result
        break;
    default:
        dayName = "Weekday";
        break;
}

Console.WriteLine($"Day {day} is {dayName}"); // Day 3 is Wednesday`

function Ch4DayOfWeekExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('control.switch_example_title')}
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <CodeBlock code={dayOfWeekCode} filename="DayOfWeek.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 8: Ternary Operator ────────────────────────────────────────────────

function Ch4TernaryOperator() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">{t('control.ternary_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-text-secondary text-sm md:text-lg">{t('control.ternary_desc')}</p>
        </AnimatedText>

        {/* Syntax breakdown */}
        <AnimatedText delay={0.2}>
          <GlassCard accentBorder className="p-4 md:p-6">
            <div className="flex flex-wrap items-center gap-2 text-base md:text-xl font-mono">
              <span className="text-text-secondary px-2 md:px-3 py-1 rounded bg-white/5 border border-white/10">
                condition
              </span>
              <GradientText className="font-bold">?</GradientText>
              <span className="text-text-primary px-2 md:px-3 py-1 rounded bg-white/5 border border-white/10">
                valueIfTrue
              </span>
              <GradientText className="font-bold">:</GradientText>
              <span className="text-text-primary px-2 md:px-3 py-1 rounded bg-white/5 border border-white/10">
                valueIfFalse
              </span>
            </div>
          </GlassCard>
        </AnimatedText>

        <AnimatedList
          items={[
            <span key="1" className="text-text-secondary text-sm md:text-base">
              {t('control.ternary_bullet1')}
            </span>,
            <span key="2" className="text-text-secondary text-sm md:text-base">
              {t('control.ternary_bullet2')}
            </span>,
            <span key="3" className="text-text-secondary text-sm md:text-base">
              <code className="text-[var(--accent1)]">
                {`int abs = (n >= 0) ? n : -n;`}
              </code>
            </span>,
          ]}
        />
      </div>
    </SlideLayout>
  )
}

// ─── Slide 9: Combining Conditions Example ────────────────────────────────────

const combiningConditionsCode = `int age = 20;
bool hasLicense = true;
bool hasCar = false;

// Ternary
string access = (age >= 18) ? "Allowed" : "Denied";
Console.WriteLine($"Access: {access}"); // Allowed

// Logical AND — both must be true
bool canDrive = age >= 18 && hasLicense;
Console.WriteLine($"Can drive: {canDrive}"); // True

// Logical OR — at least one must be true
bool canTravel = hasLicense || hasCar;
Console.WriteLine($"Can travel: {canTravel}"); // True

// NOT operator
bool isMinor = !(age >= 18);
Console.WriteLine($"Is minor: {isMinor}"); // False

// Combined condition
if (age >= 18 && hasLicense && !hasCar)
{
    Console.WriteLine("Old enough and licensed, but needs a car.");
}`

function Ch4CombiningConditionsExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('control.combining_title')}
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <CodeBlock code={combiningConditionsCode} filename="Conditions.cs" />
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Slide 10: Takeaway ───────────────────────────────────────────────────────

function Ch4Takeaway() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <GradientText as="h2" className="text-2xl md:text-5xl font-display font-bold text-center">
            {t('control.takeaway_title')}
          </GradientText>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full max-w-3xl"
        >
          {[
            { icon: '🔀', label: t('control.takeaway_if') },
            { icon: '🔁', label: t('control.takeaway_switch') },
            { icon: '⚡', label: t('control.takeaway_ternary') },
            { icon: '🔗', label: t('control.takeaway_logical') },
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
            <GradientText>{t('control.takeaway_cta')}</GradientText>
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const chapter4Slides = [
  Ch4SectionTitle,
  Ch4Problem,
  Ch4IfElseSyntax,
  Ch4GradeCheckerExample,
  Ch4Operators,
  Ch4SwitchSyntax,
  Ch4DayOfWeekExample,
  Ch4TernaryOperator,
  Ch4CombiningConditionsExample,
  Ch4Takeaway,
]
