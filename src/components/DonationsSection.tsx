import { useInViewOnce } from '../hooks/useInViewOnce'
import { donationOptions } from '../data/donationOptions'
import './DonationsSection.css'

export function DonationsSection() {
  const { elementRef, isInView } = useInViewOnce({ threshold: 0.2, rootMargin: '0px 0px -5% 0px' })

  return (
    <section id="donar" className="donations-section">
      <div className="donations-section__inner">
        <div className="donations-section__header">
          <p>Tu donación</p>
          <h2>Hacé posible seguir acompañando</h2>
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
              className="donations-section__card"
              style={{ backgroundColor: option.color, color: option.textColor }}
            >
              <div>
                <div className="donations-section__amount">{option.amount}</div>
                <p className="donations-section__description">{option.description}</p>
              </div>
              <span className="donations-section__cta">
                Donar
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
      </div>
    </section>
  )
}
