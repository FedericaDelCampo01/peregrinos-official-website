import { useInViewOnce } from '../hooks/useInViewOnce'
import { donationOptions } from '../data/donationOptions'
import { handleAnchorClick } from '../lib/scroll'
import './DonationTeaser.css'

export function DonationTeaser() {
  const { elementRef, isInView } = useInViewOnce({ threshold: 0.2, rootMargin: '0px 0px -5% 0px' })

  return (
    <section className="donation-teaser" aria-labelledby="donation-teaser-title">
      <div className="donation-teaser__inner">
        <div className="donation-teaser__header">
          <p className="donation-teaser__eyebrow">Soñadores</p>
          <h2 id="donation-teaser-title">Con poco por mes se sostiene mucho</h2>
        </div>

        <div
          ref={elementRef}
          className={`donation-teaser__grid ${isInView ? 'is-visible' : ''}`.trim()}
        >
          {donationOptions.map((option) => (
            <a
              key={option.amount}
              href="#donar"
              onClick={(e) => handleAnchorClick(e, '#donar')}
              className="donation-teaser__chip"
              style={{ backgroundColor: option.color, color: option.textColor }}
            >
              <span className="donation-teaser__amount">
                {option.amount}
                <span className="donation-teaser__period"> /mes</span>
              </span>
              {option.description && (
                <span className="donation-teaser__description">{option.description}</span>
              )}
            </a>
          ))}
        </div>

        <a
          className="donation-teaser__link"
          href="#donar"
          onClick={(e) => handleAnchorClick(e, '#donar')}
        >
          Sumate a ser Soñador
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
    </section>
  )
}
