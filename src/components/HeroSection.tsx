import { AutoSlider } from './AutoSlider'
import { RotatingShape } from './RotatingShape'
import heroAccent from '../assets/hero/Shape grow.svg'
import './HeroSection.css'

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__copy">
        <h1>Donde el acompañamiento se convierte en futuro.</h1>
        <p>
          Impulsamos el crecimiento de niños, adolescentes y sus familias a través de la educación,
          el vínculo cercano y una comunidad comprometida con su desarrollo.
        </p>
      </div>

      <div className="hero-section__gallery">
        <div className="hero-section__shape">
          <RotatingShape />
        </div>
        <AutoSlider />
        <img aria-hidden="true" className="hero-section__accent" src={heroAccent} alt="" />
      </div>
    </section>
  )
}
