import { useState, useEffect, useCallback } from 'react'

const SLIDE_WIDTH = 1280
const SLIDE_HEIGHT = 720

export function useSlideScale() {
  const calcScale = useCallback(() => {
    return Math.min(
      window.innerWidth / SLIDE_WIDTH,
      window.innerHeight / SLIDE_HEIGHT
    )
  }, [])

  const [scale, setScale] = useState(calcScale)

  useEffect(() => {
    const onResize = () => setScale(calcScale())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [calcScale])

  return {
    scale,
    containerStyle: {
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      transform: `scale(${scale})`,
      transformOrigin: 'center center' as const,
    },
  }
}
