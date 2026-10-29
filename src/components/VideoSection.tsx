import './VideoSection.css'

export function VideoSection() {
  return (
    <section className="video-section" aria-labelledby="video-section-title">
      <div className="video-section__header">
        <p className="video-section__eyebrow">Nuestra historia</p>
        <h2 id="video-section-title">Soñar también se aprende</h2>
        <p className="video-section__intro">
          Todos los chicos tienen sueños. Ayudemos a que los chicos y las familias del barrio
          sigan soñando.
        </p>
      </div>

      <div className="video-section__frame">
        <video
          className="video-section__video"
          src="/videos/peregrinos.mp4"
          controls
          playsInline
          preload="metadata"
          aria-label="Video Soñar también se aprende"
        />
      </div>
    </section>
  )
}
