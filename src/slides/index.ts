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

export const slides: SlideComponent[] = [
  ...chapter1Slides,
  ...chapter2Slides,
  ...chapter3Slides,
  ...chapter4Slides,
  ...chapter5Slides,
  ...chapter6Slides,
  ...chapter7Slides,
  ...chapter8Slides,
]
