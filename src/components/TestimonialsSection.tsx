import shapeThree from '../assets/shape 3.svg'
import testimonialImage from '../assets/Testimonial Image.png'
import './TestimonialsSection.css'

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__inner">
        <div className="testimonials-section__quote-block">
          <h2>“Bajo Tu manto, caminamos sin miedo”</h2>

          <div className="testimonials-section__image-stack">
            <div className="testimonials-section__image-shell">
              <img src={testimonialImage} alt="Voluntarios y un niño caminando por el barrio" />
            </div>
            <img aria-hidden="true" className="testimonials-section__shape" src={shapeThree} alt="" />
          </div>
        </div>

        <div className="testimonials-section__copy">
          <p className="testimonials-section__lead">
            Aspiramos a que niños y adolescentes crezcan rodeados de herramientas, valores y
            referentes que los impulsen a convertirse en protagonistas de su propio camino.
          </p>
          <p>
            Construyendo una comunidad con acceso a oportunidades reales, donde la educación sea un
            motor de transformación y las familias encuentren redes de apoyo para proyectar un
            futuro con mayor estabilidad y esperanza.
          </p>
        </div>
      </div>
    </section>
  )
}
