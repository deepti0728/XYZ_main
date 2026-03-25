import { useRef } from 'react'

function SolutionsSection({ solutions }) {
  const trackRef = useRef(null)

  const scrollCards = (direction) => {
    const track = trackRef.current

    if (!track) return

    const firstCard = track.querySelector('.feature-card')
    const gap = 16
    const scrollAmount = firstCard ? firstCard.clientWidth + gap : 340

    track.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="section" id="features">
      <div className="section-head">
        <h2>Key Solutions</h2>
      </div>
      <div className="feature-slider">
        <button
          type="button"
          className="feature-arrow feature-arrow-left"
          aria-label="View previous solution"
          onClick={() => scrollCards(-1)}
        >
          &#10094;
        </button>
        <div className="feature-grid" ref={trackRef}>
          {solutions.map((item) => (
            <article className="feature-card" key={item.title}>
              <div className="feature-image-wrap">
                <img className="feature-image" src={item.image} alt={item.title} loading="lazy" />
                <span className="feature-icon" aria-hidden="true">&#9679;</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="feature-arrow feature-arrow-right"
          aria-label="View next solution"
          onClick={() => scrollCards(1)}
        >
          &#10095;
        </button>
      </div>
    </section>
  )
}

export default SolutionsSection

