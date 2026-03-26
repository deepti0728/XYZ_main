import { useEffect, useRef, useState } from 'react'

function SolutionsSection({ solutions }) {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const track = trackRef.current

    if (!track) return

    const { scrollLeft, scrollWidth, clientWidth } = track
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
  }

  useEffect(() => {
    const track = trackRef.current

    if (!track) return undefined

    updateScrollState()
    track.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      track.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

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

    window.requestAnimationFrame(updateScrollState)
  }

  return (
    <section className="section" id="features">
      <div className="section-head">
        <h2>Key Solutions</h2>
      </div>
      <div className="feature-slider">
        <button
          type="button"
          className={`feature-arrow feature-arrow-left${canScrollLeft ? '' : ' feature-arrow--disabled'}`}
          aria-label="View previous solution"
          onClick={() => scrollCards(-1)}
          disabled={!canScrollLeft}
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
          className={`feature-arrow feature-arrow-right${canScrollRight ? '' : ' feature-arrow--disabled'}`}
          aria-label="View next solution"
          onClick={() => scrollCards(1)}
          disabled={!canScrollRight}
        >
          &#10095;
        </button>
      </div>
    </section>
  )
}

export default SolutionsSection

