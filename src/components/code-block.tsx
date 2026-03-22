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
      // fallback for older browsers
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
    <div className="rounded-lg border border-border overflow-hidden bg-bg-secondary">
      {filename && (
        <div className="px-4 py-2 text-xs text-text-secondary border-b border-border flex items-center gap-2">
          <span className="text-green">{'>'}</span> {filename}
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded bg-bg-card hover:bg-green/20 text-text-secondary hover:text-green transition-colors z-10 cursor-pointer"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
        <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
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
