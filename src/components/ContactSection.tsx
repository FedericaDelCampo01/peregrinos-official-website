import arrowUpright from '../assets/arrow upright.svg'
import contactIconContainer from '../assets/Contact Icon Container.svg'
import { JoinForm } from './JoinForm'
import './ContactSection.css'

type ContactSectionProps = {
  prefilledHelpIntent?: string
}

export function ContactSection({ prefilledHelpIntent = '' }: ContactSectionProps) {
  return (
    <section id="sumate" className="contact-section">
      <div className="contact-section__shell">
        <div aria-hidden="true" className="contact-section__star" />

        <div className="contact-section__inner">
          <div className="contact-section__copy">
            <div className="contact-section__header">
              <p>Contactate con nosotros</p>
              <h2>¿Querés saber más?</h2>
            </div>

            <div className="contact-section__text">
              <p>
                Si querés conocer más sobre Peregrinos, colaborar con el proyecto o sumarte de
                alguna manera, escribinos.{' '}
                <br />
                Nos encantaría escucharte!
              </p>
            </div>

            <a
              className="contact-section__instagram"
              href="https://www.instagram.com/peregrinos.uy"
              target="_blank"
              rel="noreferrer"
            >
              <span>Seguinos en Instagram!</span>
              <img className="contact-section__instagram-icon" src={arrowUpright} alt="" aria-hidden="true" />
            </a>
          </div>

          <img
            aria-hidden="true"
            className="contact-section__icon-container"
            src={contactIconContainer}
            alt=""
          />

          <div className="contact-section__form-card">
            <JoinForm
              className="join-form--contact"
              submitLabel="Enviar mensaje"
              prefilledHelpIntent={prefilledHelpIntent}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
