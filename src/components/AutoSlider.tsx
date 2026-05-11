import { slides } from '../data/slides'
import './AutoSlider.css'

export function AutoSlider() {
  const loopingSlides = [...slides, ...slides]

  return (
    <div className="auto-slider" aria-label="Galeria de Peregrinos">
      <div className="auto-slider__track">
        {loopingSlides.map((slide, index) => (
          <article
            key={`${slide.id}-${index}`}
            className={`auto-slider__card ${index >= slides.length ? 'auto-slider__card--duplicate' : ''}`}
            aria-hidden={index >= slides.length ? 'true' : undefined}
          >
            <img src={slide.src} alt={slide.alt} />
          </article>
        ))}
      </div>
    </div>
  )
}
