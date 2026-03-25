const leaderMessages = [
  {
    name: 'Dimple Verma',
    role: "CEO's Message",
    image: '/images/dimplemam.png',
    align: 'left',
    quote:
      'At Whizrobo, we are proud to be at the forefront of revolutionizing education by introducing cutting-edge Innovation Labs tailored specifically for K-12 schools. Our mission is to equip students with future-ready skills, empowering them to thrive in a rapidly evolving technological landscape through hands-on, experimental learning.',
  },
  {
    name: 'Lakshita Verma',
    role: "MD's Message",
    image: '/images/lakshitamam.png',
    align: 'right',
    quote:
      'It gives me immense pleasure to introduce WHIZROBO as a catalyst for educational transformation, where innovation meets purpose. As the Managing Director, I take pride in leading an organization that is deeply commited to redefing how students experience learning in the 21st century. At WHIZROBO, our core belief is that education must evolve with the times.',
  },
]

function MdCeoMessageSection() {
  const handleImageFallback = (event) => {
    if (event.currentTarget.dataset.fallbackApplied) return
    event.currentTarget.dataset.fallbackApplied = 'true'
    event.currentTarget.src = '/images/whizrobo.jpg'
  }

  return (
    <section className="section leadership-message-section" id="leadership-message">
      <div className="leadership-format-grid">
        {leaderMessages.map((leader) => (
          <article className="leadership-format-card" key={leader.name}>
            <div className={`leadership-format-top leadership-format-top-${leader.align}`}>
              <div className="leadership-image-wrap">
                <img
                  className="leadership-main-image"
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  onError={handleImageFallback}
                />
              </div>
              <div className="leadership-top-copy">
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
                <span className="leadership-line" />
              </div>
            </div>

            <div className="leadership-quote-box">
              <span className="leadership-quote-mark">"</span>
              <p>{leader.quote}</p>
              <p className="leadership-quote-sign">- {leader.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MdCeoMessageSection
