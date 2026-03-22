import { useState, useCallback } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = 'csharp', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = code
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden bg-bg-secondary">
      {/* Gradient accent bar */}
      <div
        className="h-[3px]"
        style={{ background: 'linear-gradient(90deg, var(--accent1), var(--accent2))' }}
      />

      {filename && (
        <div className="px-4 py-2 text-xs text-text-secondary border-b border-white/8 flex items-center gap-3">
          {/* Traffic light dots */}
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#febc2e]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
          </span>
          <span className="font-mono">{filename}</span>
        </div>
      )}

      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded bg-white/5 hover:bg-[var(--accent1)]/20 text-text-secondary hover:text-[var(--accent1)] transition-colors z-10 cursor-pointer"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
        <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className="overflow-x-auto p-5 text-[13px] leading-normal font-mono">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="flex">
                  <span className="select-none text-text-secondary/40 w-8 text-right mr-4 shrink-0">
                    {i + 1}
                  </span>
                  <span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
