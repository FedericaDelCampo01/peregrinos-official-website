import { useInViewOnce } from '../hooks/useInViewOnce'
import { programOptions } from '../data/programOptions'
import { smoothScrollToId } from '../lib/scroll'
import './ProgramsSection.css'

export function ProgramsSection() {
  const { elementRef, isInView } = useInViewOnce({ threshold: 0.3, rootMargin: '0px 0px -5% 0px' })

  return (
    <section id="que-hacemos" className="programs-section">
      <div className="programs-section__inner">
        <div className="programs-section__header">
          <div>
            <p>¿Qué hacemos?</p>
            <h2>Nuestros espacios</h2>
          </div>

          <a
            href="#sumate"
            className="programs-section__cta"
            onClick={(e) => { e.preventDefault(); smoothScrollToId('sumate') }}
          >
            Quiero formar parte
          </a>
        </div>

        <div ref={elementRef} className={`programs-section__grid ${isInView ? 'is-visible' : ''}`.trim()}>
          {programOptions.map((program) => (
            <article
              key={program.title}
              className="programs-section__card"
              style={{ backgroundColor: program.color }}
            >
              <div className="programs-section__shape" aria-hidden="true">
                <img src={program.shape} alt="" />
              </div>
              <h3>{program.title}</h3>
              <img className="programs-section__photo" src={program.image} alt={program.title} loading="lazy" decoding="async" />
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
