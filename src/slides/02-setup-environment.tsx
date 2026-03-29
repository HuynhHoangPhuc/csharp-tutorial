import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { OsSwitcher } from '../components/os-switcher'
import { GlassCard } from '../components/glass-card'
import { GradientText } from '../components/gradient-text'
import { useLanguage } from '../i18n/language-context'
import { springIn, bounceIn, playfulStagger } from '../lib/animations'

// Slide 1 — Section title
function SetupTitleSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full text-center gap-4 md:gap-7">
        <motion.div
          variants={springIn}
          initial="hidden"
          animate="visible"
          className="text-[var(--accent1)]/50 text-sm font-display tracking-widest uppercase"
        >
          {t('setup.chapter_label')}
        </motion.div>

        <AnimatedText delay={0.1}>
          <GradientText as="h1" className="text-3xl md:text-6xl font-display font-extrabold leading-tight">
            {t('setup.title')}
          </GradientText>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p className="text-lg md:text-2xl text-text-secondary max-w-2xl">
            {t('setup.subtitle')}
          </p>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4"
        >
          {(['.NET SDK', 'VS Code', 'C# Dev Kit'] as const).map((tool) => (
            <motion.div
              key={tool}
              variants={bounceIn}
              className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-4 md:px-5 py-2 text-[var(--accent1)] text-sm"
            >
              {tool}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 2 — What you need (prerequisites overview)
function PrerequisitesSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <h2 className="text-xl md:text-4xl font-bold text-text-primary">
            {t('setup.prereq_title')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 md:gap-4"
        >
          {/* Tool card: .NET SDK */}
          <motion.div variants={springIn}>
            <GlassCard accentBorder className="p-3 md:p-5">
              <div className="flex items-start gap-3 md:gap-5">
                <div className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-xs shrink-0 mt-1">
                  01
                </div>
                <div>
                  <div className="text-text-primary font-semibold text-base md:text-lg">{t('setup.tool1_name')}</div>
                  <div className="text-text-secondary text-sm mt-1">{t('setup.tool1_desc')}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Tool card: VS Code */}
          <motion.div variants={springIn}>
            <GlassCard accentBorder className="p-3 md:p-5">
              <div className="flex items-start gap-3 md:gap-5">
                <div className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-xs shrink-0 mt-1">
                  02
                </div>
                <div>
                  <div className="text-text-primary font-semibold text-base md:text-lg">{t('setup.tool2_name')}</div>
                  <div className="text-text-secondary text-sm mt-1">{t('setup.tool2_desc')}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Tool card: C# Dev Kit */}
          <motion.div variants={springIn}>
            <GlassCard accentBorder className="p-3 md:p-5">
              <div className="flex items-start gap-3 md:gap-5">
                <div className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-xs shrink-0 mt-1">
                  03
                </div>
                <div>
                  <div className="text-text-primary font-semibold text-base md:text-lg">{t('setup.tool3_name')}</div>
                  <div className="text-text-secondary text-sm mt-1">{t('setup.tool3_desc')}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 3 — Install .NET SDK
function InstallSdkSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-sm">
              {t('setup.step_label')} 1
            </span>
            <h2 className="text-xl md:text-4xl font-bold text-text-primary">
              {t('setup.install_sdk_title')}
            </h2>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-text-secondary text-sm md:text-lg">
            {t('setup.install_sdk_desc')}
          </p>
        </AnimatedText>

        <motion.div
          variants={bounceIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <OsSwitcher
            commands={{
              windows: 'winget install Microsoft.DotNet.SDK.8',
              macos: 'brew install dotnet-sdk',
              linux: 'sudo apt-get install -y dotnet-sdk-8.0',
            }}
          />
        </motion.div>

        <AnimatedText delay={0.5}>
          <p className="text-text-secondary text-xs md:text-sm">
            {t('setup.install_sdk_note')}{' '}
            <span className="text-[var(--accent1)]">dotnet.microsoft.com</span>
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 4 — Verify installation
function VerifyInstallSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-sm">
              {t('setup.step_label')} 2
            </span>
            <h2 className="text-xl md:text-4xl font-bold text-text-primary">
              {t('setup.verify_title')}
            </h2>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-text-secondary text-sm md:text-lg">
            {t('setup.verify_desc')}
          </p>
        </AnimatedText>

        <motion.div
          variants={bounceIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <OsSwitcher
            commands={{
              windows: 'dotnet --version',
              macos: 'dotnet --version',
              linux: 'dotnet --version',
            }}
          />
        </motion.div>

        <AnimatedText delay={0.5}>
          <GlassCard className="p-3 md:p-4">
            <div className="text-[var(--accent1)]/60 text-xs mb-2">{t('setup.verify_output_label')}</div>
            <div className="text-[var(--accent1)] text-base md:text-lg">8.0.xxx</div>
          </GlassCard>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 5 — Install VS Code + extension
function InstallVsCodeSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-sm">
              {t('setup.step_label')} 3
            </span>
            <h2 className="text-xl md:text-4xl font-bold text-text-primary">
              {t('setup.vscode_title')}
            </h2>
          </div>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 md:gap-4"
        >
          <motion.div variants={springIn}>
            <GlassCard className="p-3 md:p-5">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-[var(--accent1)] text-lg shrink-0">1.</span>
                <div>
                  <div className="text-text-primary font-semibold">{t('setup.vscode_step1_title')}</div>
                  <div className="text-text-secondary text-sm mt-1">
                    {t('setup.vscode_step1_desc')}{' '}
                    <span className="text-[var(--accent1)]">code.visualstudio.com</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={springIn}>
            <GlassCard className="p-3 md:p-5">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-[var(--accent1)] text-lg shrink-0">2.</span>
                <div>
                  <div className="text-text-primary font-semibold">{t('setup.vscode_step2_title')}</div>
                  <div className="text-text-secondary text-sm mt-1">
                    {t('setup.vscode_step2_desc')}
                  </div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {(['C# Dev Kit', 'IntelliCode for C# Dev Kit'] as const).map((ext) => (
                      <span
                        key={ext}
                        className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-xs"
                      >
                        {ext}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={springIn}>
            <GlassCard className="p-3 md:p-5">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-[var(--accent1)] text-lg shrink-0">3.</span>
                <div>
                  <div className="text-text-primary font-semibold">{t('setup.vscode_step3_title')}</div>
                  <div className="text-text-secondary text-sm mt-1">
                    {t('setup.vscode_step3_desc')}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}

// Slide 6 — Create first project
function CreateProjectSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-sm">
              {t('setup.step_label')} 4
            </span>
            <h2 className="text-xl md:text-4xl font-bold text-text-primary">
              {t('setup.create_project_title')}
            </h2>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-text-secondary text-sm md:text-lg">
            {t('setup.create_project_desc')}
          </p>
        </AnimatedText>

        <motion.div
          variants={bounceIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <OsSwitcher
            commands={{
              windows: 'dotnet new console -n HelloWorld\ncd HelloWorld\ndotnet run',
              macos: 'dotnet new console -n HelloWorld\ncd HelloWorld\ndotnet run',
              linux: 'dotnet new console -n HelloWorld\ncd HelloWorld\ndotnet run',
            }}
          />
        </motion.div>

        <AnimatedText delay={0.5}>
          <GlassCard className="p-3 md:p-4">
            <div className="text-[var(--accent1)]/60 text-xs mb-2">{t('setup.create_project_output_label')}</div>
            <div className="text-[var(--accent1)]">Hello, World!</div>
          </GlassCard>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 7 — Explore project structure
const PROGRAM_CS_CODE = `// .NET 6+ top-level statements style
// No class or Main() needed!
Console.WriteLine("Hello, World!");`

const PROJECT_STRUCTURE = `HelloWorld/
├── HelloWorld.csproj   // project config
└── Program.cs          // entry point`

function ProjectStructureSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full gap-4 md:gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-[var(--accent1)]/15 border border-[var(--accent1)]/30 rounded px-3 py-1 text-[var(--accent1)] text-sm">
              {t('setup.step_label')} 5
            </span>
            <h2 className="text-xl md:text-4xl font-bold text-text-primary">
              {t('setup.structure_title')}
            </h2>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* File tree */}
          <motion.div
            variants={springIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <div className="text-text-secondary text-sm mb-1">
              {t('setup.structure_tree_label')}
            </div>
            <CodeBlock code={PROJECT_STRUCTURE} language="bash" />
          </motion.div>

          {/* Program.cs content */}
          <motion.div
            variants={springIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="flex flex-col gap-3"
          >
            <div className="text-text-secondary text-sm mb-1">
              {t('setup.structure_code_label')}
            </div>
            <CodeBlock code={PROGRAM_CS_CODE} language="csharp" filename="Program.cs" />
          </motion.div>
        </div>

        <AnimatedText delay={0.5}>
          <p className="text-[var(--accent1)] text-xs md:text-sm border-l-2 border-[var(--accent1)]/50 pl-4">
            {t('setup.structure_note')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

// Slide 8 — Takeaway / Environment ready
function SetupTakeawaySlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout showBackground>
      <div className="flex flex-col items-center justify-center h-full text-center gap-4 md:gap-7">
        <motion.div
          variants={springIn}
          initial="hidden"
          animate="visible"
          className="text-[var(--accent1)]/50 text-sm font-display tracking-widest uppercase"
        >
          {t('setup.takeaway_label')}
        </motion.div>

        <AnimatedText delay={0.1}>
          <GradientText as="h2" className="text-2xl md:text-5xl font-display font-bold leading-tight max-w-3xl">
            {t('setup.takeaway_title')}
          </GradientText>
        </AnimatedText>

        <motion.div
          variants={playfulStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 w-full max-w-lg mt-2"
        >
          {(['takeaway_point1', 'takeaway_point2', 'takeaway_point3'] as const).map((key) => (
            <motion.div
              key={key}
              variants={springIn}
              className="flex items-center gap-3 text-text-secondary text-sm md:text-lg"
            >
              <span className="text-[var(--accent1)] shrink-0">✓</span>
              {t(`setup.${key}`)}
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.7}>
          <p className="text-text-secondary text-sm md:text-xl max-w-2xl mt-2">
            {t('setup.takeaway_desc')}
          </p>
        </AnimatedText>
      </div>
    </SlideLayout>
  )
}

export const chapter2Slides = [
  SetupTitleSlide,
  PrerequisitesSlide,
  InstallSdkSlide,
  VerifyInstallSlide,
  InstallVsCodeSlide,
  CreateProjectSlide,
  ProjectStructureSlide,
  SetupTakeawaySlide,
]
