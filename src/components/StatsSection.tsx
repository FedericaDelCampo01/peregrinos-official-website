import { useEffect, useMemo, useRef, useState } from 'react'
import { useInViewOnce } from '../hooks/useInViewOnce'
import './StatsSection.css'

const stats = [
  { value: 5, label: 'años juntos' },
  { value: 50, label: 'voluntarios' },
  { value: 100, label: 'niños alcanzados' },
]

export function StatsSection() {
  const { elementRef, isInView } = useInViewOnce()
  const [counts, setCounts] = useState(() => stats.map(() => 0))
  const hasAnimatedRef = useRef(false)

  const targets = useMemo(() => stats.map((stat) => stat.value), [])

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) {
      return
    }

    hasAnimatedRef.current = true

    const duration = 1200
    const steps = 40
    const intervalMs = duration / steps
    let step = 0

    const interval = window.setInterval(() => {
      step += 1
      const progress = Math.min(step / steps, 1)

      setCounts(targets.map((target) => Math.round(target * progress)))

      if (progress >= 1) {
        window.clearInterval(interval)
      }
    }, intervalMs)

    return () => window.clearInterval(interval)
  }, [isInView, targets])

  return (
    <section ref={elementRef} className="stats-section" aria-label="Impacto inicial de Peregrinos">
      <div className="stats-section__inner">
        <p className="stats-section__eyebrow">Un camino que crece con cada encuentro</p>

        <div className="stats-section__grid">
          {stats.map((stat, index) => (
            <article key={stat.label} className="stats-section__item">
              <p className="stats-section__value">+{counts[index]}</p>
              <p className="stats-section__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
