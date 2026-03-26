function HeroSection({ onBookDemoClick }) {
  return (
    <section className="hero" id="top">
      <div className="hero-video-bg" aria-hidden="true">
        <video
          className="hero-video"
          src="/videos/IBR%20Whizobo%20HD.mp4"
          title="Whizrobo hero background video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        />
      </div>
        <div className="hero-content">
          <h1>
            <span className="hero-line-accent">EMPOWERING SCHOOLS WITH FUTURE READY LABS</span>
          </h1>
        <p className="hero-subline">
          STEM | ROBOTICS | CODING | MECHATRONICS | IOT | AI | AR/VR
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={onBookDemoClick}>
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
