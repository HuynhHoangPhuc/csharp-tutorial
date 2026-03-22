import type { ComponentType } from 'react'
import { chapter1Slides } from './01-introduction'
import { chapter2Slides } from './02-setup-environment'
import { chapter3Slides } from './03-variables-and-types'
import { chapter4Slides } from './04-control-flow'
import { chapter5Slides } from './05-loops'
import { chapter6Slides } from './06-arrays-and-collections'
import { chapter7Slides } from './07-methods'
import { chapter8Slides } from './08-oop-basics'

export type SlideComponent = ComponentType

export interface Chapter {
  id: number
  titleKey: string
  slides: SlideComponent[]
}

export const chapters: Chapter[] = [
  { id: 1, titleKey: 'intro.title', slides: chapter1Slides },
  { id: 2, titleKey: 'setup.title', slides: chapter2Slides },
  { id: 3, titleKey: 'variables.title', slides: chapter3Slides },
  { id: 4, titleKey: 'control.title', slides: chapter4Slides },
  { id: 5, titleKey: 'loops.title', slides: chapter5Slides },
  { id: 6, titleKey: 'arrays.title', slides: chapter6Slides },
  { id: 7, titleKey: 'methods.title', slides: chapter7Slides },
  { id: 8, titleKey: 'oop.title', slides: chapter8Slides },
]

export const slides: SlideComponent[] = chapters.flatMap((ch) => ch.slides)

// Returns the chapter and its start index in the flat slides array for a given slide index
export function getChapterForSlide(slideIndex: number): {
  chapter: Chapter
  chapterIndex: number
  chapterStart: number
} | null {
  let cumulative = 0
  for (let i = 0; i < chapters.length; i++) {
    const nextCumulative = cumulative + chapters[i].slides.length
    if (slideIndex < nextCumulative) {
      return { chapter: chapters[i], chapterIndex: i, chapterStart: cumulative }
    }
    cumulative = nextCumulative
  }
  return null
}

// Returns the flat slide index where each chapter starts
export function getChapterStartIndices(): number[] {
  const starts: number[] = []
  let cumulative = 0
  for (const ch of chapters) {
    starts.push(cumulative)
    cumulative += ch.slides.length
  }
  return starts
}
