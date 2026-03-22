import { createElement, type ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span'
}

export function GradientText({ children, className = '', as = 'span' }: GradientTextProps) {
  return createElement(as, {
    className: `bg-clip-text text-transparent ${className}`,
    style: { backgroundImage: 'linear-gradient(135deg, var(--accent1), var(--accent2))' },
  }, children)
}
