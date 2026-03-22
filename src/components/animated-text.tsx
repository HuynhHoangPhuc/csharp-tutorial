import { motion } from 'framer-motion'
import { springIn, playfulStagger } from '../lib/animations'
import type { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      variants={springIn}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedListProps {
  items: ReactNode[]
  className?: string
  itemClassName?: string
}

export function AnimatedList({ items, className = '', itemClassName = '' }: AnimatedListProps) {
  return (
    <motion.ul
      variants={playfulStagger}
      initial="hidden"
      animate="visible"
      className={`space-y-3 ${className}`}
    >
      {items.map((item, i) => (
        <motion.li key={i} variants={springIn} className={itemClassName}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
