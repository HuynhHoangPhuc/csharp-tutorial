import { useState, useEffect, useCallback } from 'react'

const MOBILE_BREAKPOINT = 768
const SLIDE_WIDTH = 1280
const SLIDE_HEIGHT = 720

export function useSlideScale() {
  const calc = useCallback(() => {
    const w = window.innerWidth
    const isMobile = w < MOBILE_BREAKPOINT
    const scale = isMobile ? 1 : Math.min(w / SLIDE_WIDTH, window.innerHeight / SLIDE_HEIGHT)
    return { scale, isMobile }
  }, [])

  const [state, setState] = useState(calc)

  useEffect(() => {
    const onResize = () => setState(calc())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [calc])

  return {
    ...state,
    containerStyle: state.isMobile
      ? {}
      : {
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          transform: `scale(${state.scale})`,
          transformOrigin: 'center center' as const,
        },
  }
}
