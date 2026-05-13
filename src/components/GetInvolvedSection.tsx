import { useState } from 'react'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { helpOptions } from '../data/helpOptions'
import { smoothScrollToId } from '../lib/scroll'
import './GetInvolvedSection.css'

type GetInvolvedSectionProps = {
  onSelectHelpIntent: (value: string) => void
}

export function GetInvolvedSection({ onSelectHelpIntent }: GetInvolvedSectionProps) {
  const [activeValue, setActiveValue] = useState('')
  const { elementRef, isInView } = useInViewOnce({ threshold: 0.3, rootMargin: '0px 0px -5% 0px' })

  function handleActivation(event: React.MouseEvent<HTMLAnchorElement>, value: string) {
    event.preventDefault()
    onSelectHelpIntent(value)
    setActiveValue(value)

    const isCoarsePointer =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(hover: none), (pointer: coarse)').matches
        : false
    const delay = isCoarsePointer ? 220 : 0

    window.setTimeout(() => {
      smoothScrollToId('sumate')
    }, delay)
  }

  return (
    <section id="como-ayudar" className="get-involved-section">
      <div className="get-involved-section__inner">
        <div className="get-involved-section__header">
          <div>
            <p>¿Cómo ayudar?</p>
            <h2>¡Formá parte!</h2>
          </div>

          <div className="get-involved-section__copy">
            <p>
              Peregrinos es posible gracias a personas que donan su tiempo, su trabajo y su apoyo
              para que el proyecto siga creciendo.
            </p>
            <p>Si querés ser parte, podés colaborar de distintas maneras.</p>
          </div>
        </div>

        <div ref={elementRef} className={`get-involved-section__list ${isInView ? 'is-visible' : ''}`.trim()}>
          {helpOptions.map((option) => (
            <a
              key={option.title}
              href="#sumate"
              className={`get-involved-section__item ${activeValue === option.value ? 'is-active' : ''}`}
              style={{ ['--help-accent' as string]: option.color }}
              onClick={(event) => handleActivation(event, option.value)}
            >
              <span className="get-involved-section__content">
                <span className="get-involved-section__title">{option.title}</span>
                <span className="get-involved-section__description">{option.description}</span>
              </span>
              <span className="get-involved-section__icon">
                <svg width="32" height="32" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M4 11h14M12 5l6 6-6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
