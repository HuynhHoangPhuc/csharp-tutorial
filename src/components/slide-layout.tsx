import type { ReactNode } from 'react'
import { useSlideScale } from '../lib/use-slide-scale'

interface SlideLayoutProps {
  children: ReactNode
  className?: string
}

export function SlideLayout({ children, className = '' }: SlideLayoutProps) {
  const { containerStyle } = useSlideScale()

  return (
    <div className="flex items-center justify-center w-full h-full absolute inset-0">
      <div
        style={containerStyle}
        className={`relative overflow-hidden bg-bg-primary p-16 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
