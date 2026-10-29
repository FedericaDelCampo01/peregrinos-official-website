import { handleAnchorClick } from '../lib/scroll'
import './DonationTeaser.css'

export function DonationTeaser() {
  return (
    <section className="donation-teaser" aria-labelledby="donation-teaser-title">
      <div className="donation-teaser__inner">
        <div className="donation-teaser__header">
          <p className="donation-teaser__eyebrow">Soñadores</p>
          <h2 id="donation-teaser-title">Hacé posibles muchos sueños</h2>
          <p className="donation-teaser__text">
            Con un aporte mensual acompañás a un niño en su día a día.
          </p>
        </div>

        <a
          className="donation-teaser__button"
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
