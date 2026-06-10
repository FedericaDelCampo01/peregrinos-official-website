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
              Peregrinos nace como respuesta a las necesidades que dejó la pandemia en muchas familias de Malvín Norte. Lo que comenzó como una iniciativa para acompañar a niños y adolescentes del barrio fue creciendo hasta convertirse en un espacio de encuentro para la comunidad.
            </p>

            <p>
              El proyecto se desarrolla en el barrio Aquiles Lanza, donde generamos espacios de aprendizaje, juego y crecimiento.
            </p>

            <p>
              Hoy, Peregrinos es el apostolado del Movimiento Apostólico de Schoenstatt en Uruguay y continúa creciendo gracias al compromiso de quienes forman parte y apoyan el proyecto.
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
