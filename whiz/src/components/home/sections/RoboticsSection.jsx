function RobotsSection({ programs }) {
  return (
    <section className="section" id="programs">
      <div className="section-head">
        <h2>Our Robots</h2>
        <p className="robotics-intro">
          Explore our signature robot lineup designed for school labs, project showcases, and future-ready learning.
        </p>
        <div className="robotics-cta">
          <a
            className="btn btn-primary"
            href="https://frontend-part-liart.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore Full Robotics Catalog
          </a>
        </div>
      </div>
      <div className="robotics-grid">
        {programs.map((item) => (
          <article className="robotics-card" key={item.title}>
            <div className="robotics-card-media">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="robotics-card-content">
              <p className="robotics-card-level">{item.level}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="robotics-capability-list">
                {item.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RobotsSection
