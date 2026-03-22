import { useState, useEffect } from 'react'
import { Monitor, Terminal } from 'lucide-react'
import { CodeBlock } from './code-block'

type OsKey = 'windows' | 'macos' | 'linux'

interface OsSwitcherProps {
  commands: Record<OsKey, string>
  language?: string
}

const osLabels: Record<OsKey, string> = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
}

const osIcons: Record<OsKey, typeof Monitor> = {
  windows: Monitor,
  macos: Terminal,
  linux: Terminal,
}

const osOrder: OsKey[] = ['windows', 'macos', 'linux']

export function OsSwitcher({ commands, language = 'bash' }: OsSwitcherProps) {
  const [activeOs, setActiveOs] = useState<OsKey>(() => {
    const saved = localStorage.getItem('preferred-os')
    if (saved && osOrder.includes(saved as OsKey)) return saved as OsKey
    return 'windows'
  })

  useEffect(() => {
    localStorage.setItem('preferred-os', activeOs)
  }, [activeOs])

  return (
    <div>
      <div className="flex gap-1 mb-2">
        {osOrder.map((os) => {
          const Icon = osIcons[os]
          const isActive = activeOs === os
          return (
            <button
              key={os}
              onClick={() => setActiveOs(os)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors cursor-pointer ${
                isActive
                  ? 'bg-green/20 text-green border border-green/30'
                  : 'text-text-secondary hover:text-text-primary border border-transparent'
              }`}
            >
              <Icon size={12} />
              {osLabels[os]}
            </button>
          )
        })}
      </div>
      <CodeBlock code={commands[activeOs]} language={language} />
    </div>
  )
}
