import aboutIconContainer from '../assets/about/about-icon-container.svg'
import aboutImageCard from '../assets/about/about-image.svg'
import aboutPhoto from '../assets/fotos pere/about_image_2x.webp'
import aboutPhotoLarge from '../assets/fotos pere/peregrinos_quienes_somos.jpg'
import './AboutSection.css'

export function AboutSection() {
  return (
    <section id="quienes-somos" className="about-section">
      <div aria-hidden="true" className="about-section__background-star" />

      <div className="about-section__inner">
        <div className="about-section__content">
          <div className="about-section__header">
            <p>¿Quiénes somos?</p>
            <h2>Nuestra historia</h2>
          </div>

          <div className="about-section__text">
            <p>
              Peregrinos nace en 2022 y hoy es el apostolado del Movimiento Apostólico de Schoenstatt en Uruguay.
              Inspirado por la misión educativa y apostólica de este movimiento de la Iglesia
              Católica, el proyecto busca acompañar a niños y familias a través de la educación y
              la formación en valores.
            </p>

            <p>
              El proyecto se desarrolla en el barrio Aquiles Lanza, en Malvín Norte, donde
              generamos espacios de aprendizaje, juego y encuentro para los chicos del barrio.
            </p>

            <p>
              A través de estas actividades, buscamos acompañar su crecimiento, apoyar a sus
              familias y fortalecer la comunidad.
            </p>
          </div>
        </div>

        <div className="about-section__aside">
          <div className="about-section__logo-card">
            <img src={aboutImageCard} alt="Identidad Peregrinos" />
          </div>

          <div className="about-section__decorative-card">
            <img src={aboutIconContainer} alt="Composición decorativa Peregrinos" />
          </div>

          <div className="about-section__image about-section__image--small-right">
            <img src={aboutPhotoLarge} alt="Encuentro de Peregrinos en el barrio" loading="lazy" decoding="async" />
          </div>

          <div className="about-section__image about-section__image--large-bottom">
            <img src={aboutPhoto} alt="Grupo grande de Peregrinos con los chicos" loading="lazy" decoding="async" />
          </div>

          <div className="about-section__image about-section__image--small-top">
            <img src={aboutPhoto} alt="Paisaje del barrio Aquiles Lanza" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  )
}
