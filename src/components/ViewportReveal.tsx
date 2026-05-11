import type { ReactNode } from 'react'
import { useInViewOnce } from '../hooks/useInViewOnce'

type ViewportRevealProps = {
  children: ReactNode
  className?: string
}

export function ViewportReveal({ children, className = '' }: ViewportRevealProps) {
  const { elementRef, isInView } = useInViewOnce()

  return (
    <div
      ref={elementRef}
      className={`viewport-reveal ${isInView ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
