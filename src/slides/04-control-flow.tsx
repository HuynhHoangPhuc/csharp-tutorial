import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { useLanguage } from '../i18n/language-context'
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from '../lib/animations'

// ─── Slide 1: Section Title ───────────────────────────────────────────────────

function Ch4SectionTitle() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <AnimatedText>
          <p className="text-green text-lg tracking-widest uppercase">
            {t('control.chapter_label')}
          </p>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h1 className="text-6xl font-bold text-text-primary text-center leading-tight">
            {t('control.title')}
          </h1>
        </AnimatedText>
        <AnimatedText delay={0.25}>
          <p className="text-text-secondary text-xl">{t('control.subtitle')}</p>
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
      <div className="flex flex-col justify-center h-full gap-10">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">{t('control.problem_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <div className="bg-bg-card border border-border rounded-xl p-8">
            <p className="text-2xl text-green font-semibold leading-relaxed">
              {t('control.problem_question')}
            </p>
          </div>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="text-text-secondary text-lg">{t('control.problem_bullet1')}</span>,
            <span key="2" className="text-text-secondary text-lg">{t('control.problem_bullet2')}</span>,
            <span key="3" className="text-text-secondary text-lg">{t('control.problem_bullet3')}</span>,
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
      <div className="flex flex-col justify-center h-full gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">{t('control.if_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-text-secondary text-lg">{t('control.if_desc')}</p>
        </AnimatedText>

        {/* Syntax anatomy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
          {[
            { keyword: 'if (condition)', desc: t('control.if_if_desc'), highlight: true },
            { keyword: 'else if (condition)', desc: t('control.if_elseif_desc'), highlight: false },
            { keyword: 'else', desc: t('control.if_else_desc'), highlight: false },
          ].map(({ keyword, desc, highlight }) => (
            <motion.div
              key={keyword}
              variants={fadeInUp}
              className="flex items-center gap-5 bg-bg-card border border-border rounded-lg px-5 py-4"
            >
              <code
                className={`text-lg font-bold min-w-[220px] ${highlight ? 'text-green' : 'text-text-primary'}`}
              >
                {keyword}
              </code>
              <span className="text-text-secondary">{desc}</span>
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
      <div className="flex flex-col justify-center h-full gap-6">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
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
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">{t('control.operators_title')}</h2>
        </AnimatedText>

        <div className="grid grid-cols-2 gap-6">
          {/* Comparison */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeIn} className="text-green text-sm uppercase tracking-widest mb-3">
              {t('control.op_comparison_label')}
            </motion.p>
            <div className="flex flex-col gap-2">
              {comparisonOps.map(({ op, label }) => (
                <motion.div
                  key={op}
                  variants={fadeInUp}
                  className="flex items-center gap-4 bg-bg-card border border-border rounded-lg px-4 py-3"
                >
                  <code className="text-green font-bold text-lg w-16 shrink-0">{op}</code>
                  <span className="text-text-secondary text-sm">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Logical */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeIn} className="text-green text-sm uppercase tracking-widest mb-3">
              {t('control.op_logical_label')}
            </motion.p>
            <div className="flex flex-col gap-2">
              {logicalOps.map(({ op, label }) => (
                <motion.div
                  key={op}
                  variants={fadeInUp}
                  className="flex items-center gap-4 bg-bg-card border border-border rounded-lg px-4 py-3"
                >
                  <code className="text-green font-bold text-lg w-16 shrink-0">{op}</code>
                  <span className="text-text-secondary text-sm">{label}</span>
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
      <div className="flex flex-col justify-center h-full gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">{t('control.switch_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-text-secondary text-lg">{t('control.switch_desc')}</p>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
          {[
            { keyword: 'switch (variable)', desc: t('control.switch_switch_desc') },
            { keyword: 'case value:', desc: t('control.switch_case_desc') },
            { keyword: 'break;', desc: t('control.switch_break_desc') },
            { keyword: 'default:', desc: t('control.switch_default_desc') },
          ].map(({ keyword, desc }) => (
            <motion.div
              key={keyword}
              variants={fadeInUp}
              className="flex items-center gap-5 bg-bg-card border border-border rounded-lg px-5 py-3"
            >
              <code className="text-green font-bold min-w-[200px]">{keyword}</code>
              <span className="text-text-secondary text-sm">{desc}</span>
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
      <div className="flex flex-col justify-center h-full gap-6">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
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
      <div className="flex flex-col justify-center h-full gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">{t('control.ternary_title')}</h2>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-text-secondary text-lg">{t('control.ternary_desc')}</p>
        </AnimatedText>

        {/* Syntax breakdown */}
        <AnimatedText delay={0.2}>
          <div className="bg-bg-card border border-green/30 rounded-xl p-6">
            <div className="flex flex-wrap items-center gap-2 text-xl font-mono">
              <span className="text-text-secondary px-3 py-1 rounded bg-bg-primary border border-border">
                condition
              </span>
              <span className="text-green font-bold">?</span>
              <span className="text-text-primary px-3 py-1 rounded bg-bg-primary border border-border">
                valueIfTrue
              </span>
              <span className="text-green font-bold">:</span>
              <span className="text-text-primary px-3 py-1 rounded bg-bg-primary border border-border">
                valueIfFalse
              </span>
            </div>
          </div>
        </AnimatedText>

        <AnimatedList
          items={[
            <span key="1" className="text-text-secondary text-base">
              {t('control.ternary_bullet1')}
            </span>,
            <span key="2" className="text-text-secondary text-base">
              {t('control.ternary_bullet2')}
            </span>,
            <span key="3" className="text-text-secondary text-base">
              <code className="text-green">
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
      <div className="flex flex-col justify-center h-full gap-6">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
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
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <AnimatedText>
          <h2 className="text-5xl font-bold text-text-primary text-center">
            {t('control.takeaway_title')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 w-full max-w-3xl"
        >
          {[
            { icon: '🔀', label: t('control.takeaway_if') },
            { icon: '🔁', label: t('control.takeaway_switch') },
            { icon: '⚡', label: t('control.takeaway_ternary') },
            { icon: '🔗', label: t('control.takeaway_logical') },
          ].map(({ icon, label }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="flex items-center gap-4 bg-bg-card border border-border rounded-xl p-5"
            >
              <span className="text-3xl">{icon}</span>
              <span className="text-text-primary text-base leading-snug">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-green text-xl font-semibold text-center">
            {t('control.takeaway_cta')}
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
