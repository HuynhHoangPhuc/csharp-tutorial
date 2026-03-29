import { useChapterTheme } from '../lib/chapter-theme-context'
import { useSlideScale } from '../lib/use-slide-scale'

interface AnimatedBackgroundProps {
  variant?: 'blobs' | 'subtle'
}

export function AnimatedBackground({ variant = 'blobs' }: AnimatedBackgroundProps) {
  const { isMobile } = useSlideScale()
  const { accent1, accent2 } = useChapterTheme()

  if (isMobile) return null

  const opacity = variant === 'blobs' ? 0.3 : 0.15
  const blur = variant === 'blobs' ? '100px' : '80px'

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute animate-blob-drift-1 will-change-transform"
        style={{
          width: '40%', height: '40%',
          top: '10%', left: '15%',
          background: `radial-gradient(circle, ${accent1} 0%, transparent 70%)`,
          opacity, filter: `blur(${blur})`,
        }}
      />
      <div
        className="absolute animate-blob-drift-2 will-change-transform"
        style={{
          width: '35%', height: '35%',
          top: '50%', right: '10%',
          background: `radial-gradient(circle, ${accent2} 0%, transparent 70%)`,
          opacity, filter: `blur(${blur})`,
        }}
      />
      {variant === 'blobs' && (
        <div
          className="absolute animate-blob-drift-3 will-change-transform"
          style={{
            width: '30%', height: '30%',
            bottom: '10%', left: '40%',
            background: `radial-gradient(circle, ${accent1} 0%, ${accent2} 50%, transparent 70%)`,
            opacity: opacity * 0.7, filter: `blur(${blur})`,
          }}
        />
      )}
    </div>
  )
}
