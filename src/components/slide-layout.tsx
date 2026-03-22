import type { ReactNode } from 'react'
import { useSlideScale } from '../lib/use-slide-scale'
import { AnimatedBackground } from './animated-background'

interface SlideLayoutProps {
  children: ReactNode
  className?: string
  showBackground?: boolean
}

export function SlideLayout({ children, className = '', showBackground = false }: SlideLayoutProps) {
  const { containerStyle } = useSlideScale()

  return (
    <div className="flex items-center justify-center w-full h-full absolute inset-0">
      <div
        style={containerStyle}
        className={`relative overflow-hidden bg-bg-primary p-16 font-body ${className}`}
      >
        {showBackground && <AnimatedBackground />}
        <div className="relative z-10 h-full">
          {children}
        </div>
      </div>
    </div>
  )
}
