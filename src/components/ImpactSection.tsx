import impactContainer from '../assets/Impact Container.png'
import impactBoxMobile from '../assets/Impact Box_Mobile.png'
import './ImpactSection.css'

export function ImpactSection() {
  return (
    <section className="impact-section">
      <img
        className="impact-section__image impact-section__image--desktop"
        src={impactContainer}
        alt="Collage de impacto de Peregrinos"
      />
      <img
        className="impact-section__image impact-section__image--mobile"
        src={impactBoxMobile}
        alt="Collage de impacto de Peregrinos"
      />
    </section>
  )
}
