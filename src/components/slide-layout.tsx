import type { ReactNode } from 'react'
import { useSlideScale } from '../lib/use-slide-scale'
import { AnimatedBackground } from './animated-background'

interface SlideLayoutProps {
  children: ReactNode
  className?: string
  showBackground?: boolean
}

export function SlideLayout({ children, className = '', showBackground = false }: SlideLayoutProps) {
  const { containerStyle, isMobile } = useSlideScale()

  if (isMobile) {
    return (
      <div className={`w-full min-h-[100dvh] px-4 pt-6 pb-16 bg-bg-primary overflow-y-auto font-body ${className}`}>
        {showBackground && <AnimatedBackground />}
        <div className="relative z-10 flex flex-col justify-center min-h-[calc(100dvh-5.5rem)]">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center w-full h-full absolute inset-0">
      <div
        style={containerStyle}
        className={`relative overflow-hidden bg-bg-primary px-16 py-12 font-body ${className}`}
      >
        {showBackground && <AnimatedBackground />}
        <div className="relative z-10 h-full">
          {children}
        </div>
      </div>
    </div>
  )
}
