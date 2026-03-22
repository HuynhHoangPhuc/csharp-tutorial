import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { motion } from 'framer-motion'
import { bounceIn, springIn, playfulStagger } from '../lib/animations'

// Slide 1: Section title
function Ch8SectionTitle() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <AnimatedText>
          <div className="text-[var(--accent1)] font-display text-lg mb-2 opacity-60">// Chapter 8</div>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <GradientText as="h1" className="text-5xl font-display font-extrabold text-center">
            {t('oop.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.3}>
          <p className="text-text-secondary text-xl mt-2 text-center">{t('oop.subtitle')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 2: Problem
function Ch8Problem() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-bold">
            {t('oop.problem.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary text-lg">{t('oop.problem.description')}</p>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="text-text-primary">
              <span className="text-[var(--accent1)] font-mono">string studentName = "Alice";</span>
              <span className="text-text-secondary ml-3 text-sm">// scattered variables</span>
            </span>,
            <span key="2" className="text-text-primary">
              <span className="text-[var(--accent1)] font-mono">int studentAge = 20;</span>
              <span className="text-text-secondary ml-3 text-sm">// hard to manage</span>
            </span>,
            <span key="3" className="text-text-primary">
              <span className="text-[var(--accent1)] font-mono">string student2Name = "Bob";</span>
              <span className="text-text-secondary ml-3 text-sm">// doesn't scale</span>
            </span>,
          ]}
        />
        <AnimatedText delay={0.5}>
          <GlassCard accentBorder className="p-4">
            <p className="text-[var(--accent1)] font-mono">{t('oop.problem.solution_hint')}</p>
          </GlassCard>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 3: Classes and Objects
function Ch8ClassVsObject() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-8">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-bold">
            {t('oop.class_object.title')}
          </GradientText>
        </AnimatedText>
        <div className="grid grid-cols-2 gap-6">
          <AnimatedText delay={0.15}>
            <GlassCard accentBorder className="p-5">
              <div className="text-[var(--accent1)] font-bold text-xl mb-2 font-display">{t('oop.class_object.class_label')}</div>
              <p className="text-text-secondary text-sm mb-4">{t('oop.class_object.class_desc')}</p>
              <div className="text-center text-4xl">📐</div>
              <p className="text-center text-text-secondary text-xs mt-2">{t('oop.class_object.class_analogy')}</p>
            </GlassCard>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <GlassCard hoverGlow className="p-5">
              <div className="text-[var(--accent1)] font-bold text-xl mb-2 font-display">{t('oop.class_object.object_label')}</div>
              <p className="text-text-secondary text-sm mb-4">{t('oop.class_object.object_desc')}</p>
              <div className="text-center text-4xl">🏠</div>
              <p className="text-center text-text-secondary text-xs mt-2">{t('oop.class_object.object_analogy')}</p>
            </GlassCard>
          </AnimatedText>
        </div>
        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-sm text-center">{t('oop.class_object.note')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 4: Define a Student class
const studentClassCode = `public class Student
{
    // Properties
    public string Name { get; set; }
    public int Age { get; set; }
    public double GPA { get; set; }

    // Method
    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {Name}, age {Age}.");
    }
}

// Create an object (instance)
Student alice = new Student();
alice.Name = "Alice";
alice.Age = 20;
alice.Introduce();  // Hi, I'm Alice, age 20.`

function Ch8StudentClass() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-5">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-bold">
            {t('oop.example1.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary">{t('oop.example1.description')}</p>
        </AnimatedText>
        <motion.div variants={bounceIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <CodeBlock code={studentClassCode} filename="Student.cs" />
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 5: Properties vs Fields
function Ch8PropertiesVsFields() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-7">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-bold">
            {t('oop.properties.title')}
          </GradientText>
        </AnimatedText>
        <div className="grid grid-cols-2 gap-6">
          <AnimatedText delay={0.15}>
            <GlassCard className="p-5">
              <p className="text-text-secondary font-bold mb-3">{t('oop.properties.field_label')}</p>
              <pre className="text-text-primary text-xs font-mono leading-relaxed">
{`public class Car
{
    // Field — direct storage
    public string brand;
    public int year;
}`}
              </pre>
              <p className="text-text-secondary text-xs mt-3">{t('oop.properties.field_note')}</p>
            </GlassCard>
          </AnimatedText>
          <AnimatedText delay={0.25}>
            <GlassCard accentBorder hoverGlow className="p-5">
              <p className="text-[var(--accent1)] font-bold mb-3">{t('oop.properties.property_label')}</p>
              <pre className="text-text-primary text-xs font-mono leading-relaxed">
{`public class Car
{
    // Auto-property — preferred!
    public string Brand { get; set; }
    public int Year { get; set; }
}`}
              </pre>
              <p className="text-[var(--accent1)] text-xs mt-3">{t('oop.properties.property_note')}</p>
            </GlassCard>
          </AnimatedText>
        </div>
        <AnimatedText delay={0.4}>
          <p className="text-text-secondary text-sm">{t('oop.properties.tip')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 6: Constructors
function Ch8Constructors() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-7">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-bold">
            {t('oop.constructors.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary">{t('oop.constructors.description')}</p>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="text-text-primary">
              🎯 {t('oop.constructors.rule1')}
            </span>,
            <span key="2" className="text-text-primary">
              🎯 {t('oop.constructors.rule2')}
            </span>,
            <span key="3" className="text-text-primary">
              🎯 {t('oop.constructors.rule3')}
            </span>,
          ]}
        />
        <AnimatedText delay={0.5}>
          <GlassCard className="p-4 font-mono text-sm">
            <span className="text-text-secondary">// syntax: </span>
            <span className="text-[var(--accent1)]">public</span>
            <span className="text-text-primary"> ClassName(</span>
            <span className="text-[var(--accent1)]">parameters</span>
            <span className="text-text-primary">) {'{ ... }'}</span>
          </GlassCard>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 7: Create objects with constructors
const constructorCode = `public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }

    // Constructor
    public Student(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {Name}, age {Age}.");
    }
}

// Create objects using constructor
Student alice = new Student("Alice", 20);
Student bob   = new Student("Bob", 22);

alice.Introduce();  // Hi, I'm Alice, age 20.
bob.Introduce();    // Hi, I'm Bob, age 22.`

function Ch8ConstructorExample() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-5">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-bold">
            {t('oop.example2.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary">{t('oop.example2.description')}</p>
        </AnimatedText>
        <motion.div variants={bounceIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <CodeBlock code={constructorCode} filename="Student.cs" />
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 8: Access modifiers
function Ch8AccessModifiers() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-7">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-bold">
            {t('oop.access.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <p className="text-text-secondary">{t('oop.access.description')}</p>
        </AnimatedText>
        <AnimatedList
          items={[
            <span key="1" className="flex items-baseline gap-3">
              <code className="text-[var(--accent1)] font-bold font-mono w-24 shrink-0">public</code>
              <span className="text-text-primary">{t('oop.access.public_desc')}</span>
            </span>,
            <span key="2" className="flex items-baseline gap-3">
              <code className="text-[var(--accent1)] font-bold font-mono w-24 shrink-0">private</code>
              <span className="text-text-primary">{t('oop.access.private_desc')}</span>
            </span>,
            <span key="3" className="flex items-baseline gap-3">
              <code className="text-[var(--accent1)] font-bold font-mono w-24 shrink-0">protected</code>
              <span className="text-text-primary">{t('oop.access.protected_desc')}</span>
            </span>,
          ]}
        />
        <AnimatedText delay={0.5}>
          <GlassCard className="p-4 font-mono text-xs leading-relaxed">
            <span className="text-text-secondary">// good practice: fields private, properties/methods public</span>
            <br />
            <span className="text-[var(--accent1)]">private</span>
            <span className="text-text-primary"> int _score;{'  '}</span>
            <span className="text-[var(--accent1)]">public</span>
            <span className="text-text-primary"> int Score {'{ get; private set; }'}</span>
          </GlassCard>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 9: Inheritance
const inheritanceCode = `public class Animal
{
    public string Name { get; set; }

    public void Eat()
    {
        Console.WriteLine($"{Name} is eating.");
    }
}

// Dog inherits from Animal
public class Dog : Animal
{
    public string Breed { get; set; }

    public void Bark()
    {
        Console.WriteLine($"{Name} says: Woof!");
    }
}

Dog rex = new Dog();
rex.Name  = "Rex";
rex.Breed = "Labrador";
rex.Eat();   // inherited: Rex is eating.
rex.Bark();  // own method: Rex says: Woof!`

function Ch8Inheritance() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col h-full justify-center gap-5">
        <AnimatedText>
          <GradientText as="h2" className="text-4xl font-bold">
            {t('oop.inheritance.title')}
          </GradientText>
        </AnimatedText>
        <AnimatedText delay={0.15}>
          <p className="text-text-secondary">{t('oop.inheritance.description')}</p>
        </AnimatedText>
        <motion.div variants={bounceIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <CodeBlock code={inheritanceCode} filename="Animals.cs" />
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 10: Congratulations / End slide
function Ch8Congratulations() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full gap-7 text-center">
        {/* Header */}
        <AnimatedText>
          <div className="text-[var(--accent1)] font-display text-sm opacity-60 mb-1">// 8 chapters complete</div>
          <GradientText as="h1" className="text-5xl font-display font-extrabold">
            {t('end.title')}
          </GradientText>
        </AnimatedText>

        {/* Chapters recap */}
        <AnimatedText delay={0.2}>
          <p className="text-text-secondary text-lg">{t('end.recap_label')}</p>
        </AnimatedText>
        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="grid grid-cols-4 gap-3 w-full max-w-2xl"
        >
          {(['end.ch1', 'end.ch2', 'end.ch3', 'end.ch4', 'end.ch5', 'end.ch6', 'end.ch7', 'end.ch8'] as const).map(
            (key, i) => (
              <motion.div key={i} variants={springIn}>
                <GlassCard hoverGlow className="px-3 py-2 text-xs text-text-secondary">
                  <span className="text-[var(--accent1)] font-mono text-xs">{String(i + 1).padStart(2, '0')}. </span>
                  {t(key)}
                </GlassCard>
              </motion.div>
            )
          )}
        </motion.div>

        {/* What's next */}
        <AnimatedText delay={0.55}>
          <p className="text-text-secondary">{t('end.next_label')}</p>
        </AnimatedText>
        <AnimatedList
          className="flex flex-row flex-wrap justify-center gap-3 !space-y-0"
          itemClassName="inline-block"
          items={[
            <span key="linq" className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 text-[var(--accent1)] font-mono text-sm px-4 py-2 rounded-full">LINQ</span>,
            <span key="async" className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 text-[var(--accent1)] font-mono text-sm px-4 py-2 rounded-full">async / await</span>,
            <span key="asp" className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 text-[var(--accent1)] font-mono text-sm px-4 py-2 rounded-full">ASP.NET Core</span>,
            <span key="unity" className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 text-[var(--accent1)] font-mono text-sm px-4 py-2 rounded-full">Unity</span>,
          ]}
        />

        {/* Closing message */}
        <AnimatedText delay={0.85}>
          <p className="text-text-secondary text-sm font-body opacity-70">{t('end.footer')}</p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

export const chapter8Slides = [
  Ch8SectionTitle,
  Ch8Problem,
  Ch8ClassVsObject,
  Ch8StudentClass,
  Ch8PropertiesVsFields,
  Ch8Constructors,
  Ch8ConstructorExample,
  Ch8AccessModifiers,
  Ch8Inheritance,
  Ch8Congratulations,
]
