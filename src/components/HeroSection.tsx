import { AutoSlider } from './AutoSlider'
import { RotatingShape } from './RotatingShape'
import heroAccent from '../assets/hero/Shape grow.svg'
import './HeroSection.css'

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__copy">
        <h1>”Ella es la gran misionera, Ella obrará milagros”</h1>
        <p>
          Peregrinos acompaña a niños en contexto vulnerable a través de la educación, el apoyo
          escolar y la formación en valores.
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
