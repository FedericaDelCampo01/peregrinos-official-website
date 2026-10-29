import { useInViewOnce } from '../hooks/useInViewOnce'
import { donationOptions, oneTimeDonationHref } from '../data/donationOptions'
import './DonationsSection.css'

export function DonationsSection() {
  const { elementRef, isInView } = useInViewOnce({ threshold: 0.2, rootMargin: '0px 0px -5% 0px' })

  return (
    <section id="donar" className="donations-section">
      <div className="donations-section__inner">
        <div className="donations-section__header">
          <p>Soñadores</p>
          <h2>Sumate a ser Soñador</h2>
          <p className="donations-section__intro">
            Aportá un monto mensual que se debita automáticamente y hacé posibles muchos sueños.
          </p>
        </div>

        <div
          ref={elementRef}
          className={`donations-section__grid ${isInView ? 'is-visible' : ''}`.trim()}
        >
          {donationOptions.map((option) => (
            <a
              key={option.amount}
              href={option.href}
              target="_blank"
              rel="noreferrer"
              className={`donations-section__card ${option.featured ? 'is-featured' : ''}`.trim()}
              style={{ backgroundColor: option.color, color: option.textColor }}
            >
              <div>
                {option.featured && (
                  <span className="donations-section__badge">El aporte que más transforma</span>
                )}
                <div className="donations-section__amount">
                  {option.amount}
                  <span className="donations-section__period"> /mes</span>
                </div>
                {option.description && (
                  <p className="donations-section__description">{option.description}</p>
                )}
              </div>
              <span className="donations-section__cta">
                Ser Soñador
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12M10 4l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <div className="donations-section__custom">
          <p>¿Preferís donar una única vez?</p>
          <a
            href={oneTimeDonationHref}
            target="_blank"
            rel="noreferrer"
            className="donations-section__custom-link"
          >
            Doná el monto que quieras
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 10h12M10 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
