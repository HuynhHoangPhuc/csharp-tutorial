import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { AnimatedText, AnimatedList } from '../components/animated-text'
import { CodeBlock } from '../components/code-block'
import { OsSwitcher } from '../components/os-switcher'
import { useLanguage } from '../i18n/language-context'
import { fadeInUp, staggerContainer, scaleIn } from '../lib/animations'

// Slide 1 — Section title
function SetupTitleSlide() {
  const { t } = useLanguage()
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center gap-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-green/50 text-sm font-mono tracking-widest uppercase"
        >
          {t('setup.chapter_label')}
        </motion.div>

        <AnimatedText delay={0.1}>
          <h1 className="text-6xl font-bold text-green leading-tight">
            {t('setup.title')}
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p className="text-2xl text-text-secondary max-w-2xl">
            {t('setup.subtitle')}
          </p>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex gap-4 mt-4"
        >
          {(['.NET SDK', 'VS Code', 'C# Dev Kit'] as const).map((tool) => (
            <motion.div
              key={tool}
              variants={scaleIn}
              className="bg-green/10 border border-green/30 rounded px-5 py-2 text-green font-mono text-sm"
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
      <div className="flex flex-col justify-center h-full gap-8">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-text-primary">
            {t('setup.prereq_title')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          {/* Tool card: .NET SDK */}
          <motion.div
            variants={fadeInUp}
            className="flex items-start gap-5 bg-bg-card border border-border rounded-lg p-5"
          >
            <div className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-xs shrink-0 mt-1">
              01
            </div>
            <div>
              <div className="text-text-primary font-semibold text-lg">{t('setup.tool1_name')}</div>
              <div className="text-text-secondary mt-1">{t('setup.tool1_desc')}</div>
            </div>
          </motion.div>

          {/* Tool card: VS Code */}
          <motion.div
            variants={fadeInUp}
            className="flex items-start gap-5 bg-bg-card border border-border rounded-lg p-5"
          >
            <div className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-xs shrink-0 mt-1">
              02
            </div>
            <div>
              <div className="text-text-primary font-semibold text-lg">{t('setup.tool2_name')}</div>
              <div className="text-text-secondary mt-1">{t('setup.tool2_desc')}</div>
            </div>
          </motion.div>

          {/* Tool card: C# Dev Kit */}
          <motion.div
            variants={fadeInUp}
            className="flex items-start gap-5 bg-bg-card border border-border rounded-lg p-5"
          >
            <div className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-xs shrink-0 mt-1">
              03
            </div>
            <div>
              <div className="text-text-primary font-semibold text-lg">{t('setup.tool3_name')}</div>
              <div className="text-text-secondary mt-1">{t('setup.tool3_desc')}</div>
            </div>
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
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-sm">
              {t('setup.step_label')} 1
            </span>
            <h2 className="text-4xl font-bold text-text-primary">
              {t('setup.install_sdk_title')}
            </h2>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-text-secondary text-lg">
            {t('setup.install_sdk_desc')}
          </p>
        </AnimatedText>

        <motion.div
          variants={scaleIn}
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
          <p className="text-text-secondary text-sm">
            {t('setup.install_sdk_note')}{' '}
            <span className="text-green font-mono">dotnet.microsoft.com</span>
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
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-sm">
              {t('setup.step_label')} 2
            </span>
            <h2 className="text-4xl font-bold text-text-primary">
              {t('setup.verify_title')}
            </h2>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-text-secondary text-lg">
            {t('setup.verify_desc')}
          </p>
        </AnimatedText>

        <motion.div
          variants={scaleIn}
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
          <div className="bg-bg-card border border-green/20 rounded-lg p-4">
            <div className="text-green/60 font-mono text-xs mb-2">{t('setup.verify_output_label')}</div>
            <div className="text-green font-mono text-lg">8.0.xxx</div>
          </div>
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
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-sm">
              {t('setup.step_label')} 3
            </span>
            <h2 className="text-4xl font-bold text-text-primary">
              {t('setup.vscode_title')}
            </h2>
          </div>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-start gap-4 bg-bg-card border border-border rounded-lg p-5"
          >
            <span className="text-green font-mono text-lg shrink-0">1.</span>
            <div>
              <div className="text-text-primary font-semibold">{t('setup.vscode_step1_title')}</div>
              <div className="text-text-secondary text-sm mt-1">
                {t('setup.vscode_step1_desc')}{' '}
                <span className="text-green font-mono">code.visualstudio.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-start gap-4 bg-bg-card border border-border rounded-lg p-5"
          >
            <span className="text-green font-mono text-lg shrink-0">2.</span>
            <div>
              <div className="text-text-primary font-semibold">{t('setup.vscode_step2_title')}</div>
              <div className="text-text-secondary text-sm mt-1">
                {t('setup.vscode_step2_desc')}
              </div>
              <div className="mt-2 flex gap-2 flex-wrap">
                {(['C# Dev Kit', 'IntelliCode for C# Dev Kit'] as const).map((ext) => (
                  <span
                    key={ext}
                    className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-xs"
                  >
                    {ext}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-start gap-4 bg-bg-card border border-border rounded-lg p-5"
          >
            <span className="text-green font-mono text-lg shrink-0">3.</span>
            <div>
              <div className="text-text-primary font-semibold">{t('setup.vscode_step3_title')}</div>
              <div className="text-text-secondary text-sm mt-1">
                {t('setup.vscode_step3_desc')}
              </div>
            </div>
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
      <div className="flex flex-col justify-center h-full gap-7">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-sm">
              {t('setup.step_label')} 4
            </span>
            <h2 className="text-4xl font-bold text-text-primary">
              {t('setup.create_project_title')}
            </h2>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-text-secondary text-lg">
            {t('setup.create_project_desc')}
          </p>
        </AnimatedText>

        <motion.div
          variants={scaleIn}
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
          <div className="bg-bg-card border border-green/20 rounded-lg p-4">
            <div className="text-green/60 font-mono text-xs mb-2">{t('setup.create_project_output_label')}</div>
            <div className="text-green font-mono">Hello, World!</div>
          </div>
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
      <div className="flex flex-col justify-center h-full gap-6">
        <AnimatedText>
          <div className="flex items-center gap-3">
            <span className="bg-green/10 border border-green/30 rounded px-3 py-1 text-green font-mono text-sm">
              {t('setup.step_label')} 5
            </span>
            <h2 className="text-4xl font-bold text-text-primary">
              {t('setup.structure_title')}
            </h2>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-2 gap-6">
          {/* File tree */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <div className="text-text-secondary text-sm font-mono mb-1">
              {t('setup.structure_tree_label')}
            </div>
            <CodeBlock code={PROJECT_STRUCTURE} language="bash" />
          </motion.div>

          {/* Program.cs content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="flex flex-col gap-3"
          >
            <div className="text-text-secondary text-sm font-mono mb-1">
              {t('setup.structure_code_label')}
            </div>
            <CodeBlock code={PROGRAM_CS_CODE} language="csharp" filename="Program.cs" />
          </motion.div>
        </div>

        <AnimatedText delay={0.5}>
          <p className="text-green font-mono text-sm border-l-2 border-green/50 pl-4">
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
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center gap-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-green/50 text-sm font-mono tracking-widest uppercase"
        >
          {t('setup.takeaway_label')}
        </motion.div>

        <AnimatedText delay={0.1}>
          <h2 className="text-5xl font-bold text-green leading-tight max-w-3xl">
            {t('setup.takeaway_title')}
          </h2>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 w-full max-w-lg mt-2"
        >
          {(['takeaway_point1', 'takeaway_point2', 'takeaway_point3'] as const).map((key) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              className="flex items-center gap-3 text-text-secondary text-lg"
            >
              <span className="text-green font-mono shrink-0">✓</span>
              {t(`setup.${key}`)}
            </motion.div>
          ))}
        </motion.div>

        <AnimatedText delay={0.7}>
          <p className="text-text-secondary text-xl max-w-2xl mt-2">
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
