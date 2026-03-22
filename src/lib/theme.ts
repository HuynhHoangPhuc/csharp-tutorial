export const theme = {
  colors: {
    bgPrimary: '#0f0f23',
    bgSecondary: '#1a1a3e',
    bgCard: 'rgba(255, 255, 255, 0.05)',
    textPrimary: '#f0f0f0',
    textSecondary: '#8b8bae',
    border: 'rgba(255, 255, 255, 0.08)',
  },
  fonts: {
    display: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
} as const

export interface ChapterColorPair {
  accent1: string
  accent2: string
}

export const chapterColors: ChapterColorPair[] = [
  { accent1: '#ff6b6b', accent2: '#ffd93d' }, // Ch1 coral+yellow
  { accent1: '#4d96ff', accent2: '#6bcb77' }, // Ch2 blue+mint
  { accent1: '#a855f7', accent2: '#ec4899' }, // Ch3 purple+pink
  { accent1: '#f97316', accent2: '#ffd93d' }, // Ch4 orange+yellow
  { accent1: '#06b6d4', accent2: '#3b82f6' }, // Ch5 cyan+blue
  { accent1: '#6bcb77', accent2: '#14b8a6' }, // Ch6 mint+teal
  { accent1: '#ec4899', accent2: '#a855f7' }, // Ch7 pink+purple
  { accent1: '#4d96ff', accent2: '#ff6b6b' }, // Ch8 blue+coral
]

export const chapterEmojis = ['🚀', '🛠', '📦', '🔀', '🔄', '📚', '⚙️', '🏗']
