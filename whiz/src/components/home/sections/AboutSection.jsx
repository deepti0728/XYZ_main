function AboutSection() {
  return (
    <section className="section about-spotlight" id="about">
      <div className="section-head">
        <h2>About Us</h2>
      </div>
      <article className="about-simple-card">
        <div className="about-simple-media">
          <img src="/images/whizrobo.jpg" alt="Whizrobo About" loading="lazy" />
        </div>
        <div className="about-simple-content">
          <p className="about-kicker">About Whizrobo</p>
          <h2>Simple, Structured and Scalable STEM Learning for Schools</h2>
          <p>
            Whizrobo enables schools to implement practical Robotics and AI programs through the right balance of
            infrastructure, curriculum, teacher support and classroom execution.
          </p>
          <p className="about-detail">
            From planning to day-to-day delivery, our team works closely with schools to build a culture of
            innovation, strengthen hands-on learning outcomes and prepare students for future technology careers.
          </p>
          <ul className="about-simple-list">
            <li>
              <strong>Robotics and AI Lab</strong>
              <span>
                World-class infrastructure with age-appropriate robotics kits to support project-based learning from
                grades 1 to 12.
              </span>
            </li>
            <li>
              <strong>Robotic Kits</strong>
              <span>High-quality STEM and customized DIY kits designed for practical, hands-on learning.</span>
            </li>
            <li>
              <strong>WHIZFLIX LMS</strong>
              <span>
                A 4th-generation self-learning platform enriched with 21st-century, skill-based content.
              </span>
            </li>
            <li>
              <strong>NEP Aligned Curriculum</strong>
              <span>
                A year-long curriculum for grades 1 to 12 aligned with NEP 2020 and IB/CBSE skill subjects.
              </span>
            </li>
            <li>
              <strong>Teacher Training Programs</strong>
              <span>
                Structured training programs that upskill computer science teachers, STEM faculty and school IT teams.
              </span>
            </li>
            <li>
              <strong>Events & Competitions</strong>
              <span>
                End-to-end mentoring and training for K-12 students to participate in theme-based national and
                international competitions.
              </span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default AboutSection
