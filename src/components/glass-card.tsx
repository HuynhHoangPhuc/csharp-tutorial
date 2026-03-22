import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  accentBorder?: boolean
  hoverGlow?: boolean
}

export function GlassCard({ children, className = '', accentBorder = false, hoverGlow = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverGlow ? {
        scale: 1.02,
        boxShadow: '0 0 24px color-mix(in srgb, var(--accent1) 25%, transparent)',
      } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        relative rounded-2xl overflow-hidden
        bg-white/5 backdrop-blur-xl
        border border-white/10
        ${className}
      `}
    >
      {/* Optional gradient top border */}
      {accentBorder && (
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, var(--accent1), var(--accent2))' }}
        />
      )}
      {children}
    </motion.div>
  )
}
