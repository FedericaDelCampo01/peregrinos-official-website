import { useEffect, useRef, useState } from 'react'

type UseInViewOnceOptions = {
  rootMargin?: string
  threshold?: number
}

export function useInViewOnce(options: UseInViewOnceOptions = {}) {
  const [isInView, setIsInView] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element || isInView) {
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setIsInView(true)
        observer.disconnect()
      },
      {
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
        threshold: options.threshold ?? 0.15,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isInView, options.rootMargin, options.threshold])

  return { elementRef, isInView }
}
