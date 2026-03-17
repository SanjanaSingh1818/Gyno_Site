'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number | number[]
  margin?: string
  once?: boolean
}

export function useInView({
  threshold = 0.2,
  margin = '0px',
  once = false,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          setHasBeenInView(true)
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, margin, once])

  return {
    ref,
    isInView: once ? hasBeenInView : isInView,
  }
}
