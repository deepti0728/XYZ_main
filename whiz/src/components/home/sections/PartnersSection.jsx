import { useEffect, useRef, useState } from 'react'

const governmentLogos = [
  '/images/partners/niti.png',
  '/images/partners/atal.png',
  '/images/partners/g20.png',
  '/images/partners/isro.png',
  '/images/iso.png',
  '/images/rohs.png',
  '/images/qro.png',
  '/images/partners/pscst.png',
  '/images/partners/moef.png',
  '/images/partners/green.png',
  '/images/partners/imp.png',
  '/images/partners/lifestyle.png',
  '/images/partners/startup.png',
  '/images/partners/aryaman.png',
]

const corporateLogos = [
  '/images/partners/stem.png',
  '/images/partners/itic.png',
  '/images/partners/iimb.png',
  '/images/partners/canon.png',
  '/images/partners/intel.png',
  '/images/partners/hp.png',
  '/images/partners/lenovo.png',
  '/images/partners/tata.png',
]

const schoolLogos = [
  '/images/partners/bal.png',
  '/images/partners/BCM.png',
  '/images/partners/calling.png',
  '/images/partners/chitkara.png',
  '/images/partners/D.A.V.webp',
  '/images/partners/Delhi.png',
  '/images/partners/didactius.png',
  '/images/partners/G.H.png',
  '/images/partners/GRD.png',
  '/images/partners/guru.png',
  '/images/partners/guru2.png',
  '/images/partners/heart.png',
  '/images/partners/jesus.png',
  '/images/partners/khalsa.png',
  '/images/partners/LPU.png',
  '/images/partners/madhavrao.png',
  '/images/partners/MBCIE.png',
  '/images/partners/millennium.png',
  '/images/partners/mount.png',
  '/images/partners/roop.png',
  '/images/partners/satpaul.png',
  '/images/partners/shamrock.png',
  '/images/partners/shreeram.png',
  '/images/partners/wisdom.png',
]

function LogoRow({ logos, label }) {
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

  const scrollRow = (direction) => {
    const track = trackRef.current

    if (!track) return

    const firstLogo = track.querySelector('.partner-logo')
    const gap = 16
    const scrollAmount = firstLogo ? firstLogo.clientWidth + gap : 180

    track.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    })

    window.requestAnimationFrame(updateScrollState)
  }

  return (
    <div className="partners-row" aria-label={label}>
      <button
        type="button"
        className={`feature-arrow partners-arrow${canScrollLeft ? '' : ' feature-arrow--disabled'}`}
        aria-label="Scroll partners left"
        onClick={() => scrollRow(-1)}
        disabled={!canScrollLeft}
      >
        &#10094;
      </button>
      <div className="partners-row__track" ref={trackRef}>
        {logos.map((logo, index) => (
          <figure className="partner-logo" key={`${label}-${index}`}>
            <img src={logo} alt={`${label}-${index}`} loading="lazy" />
          </figure>
        ))}
      </div>
      <button
        type="button"
        className={`feature-arrow partners-arrow${canScrollRight ? '' : ' feature-arrow--disabled'}`}
        aria-label="Scroll partners right"
        onClick={() => scrollRow(1)}
        disabled={!canScrollRight}
      >
        &#10095;
      </button>
    </div>
  )
}

function PartnersSection() {
  return (
    <section className="section partners-section" aria-label="Our partners">
      <div className="section-head partners-head">
        <h2>Our partners</h2>
      </div>
      <div className="partners-head partners-head--secondary partners-head__subtitle-row">
        <p>Key Indian Government Partnerships</p>
        <span className="partners-head__line" aria-hidden="true" />
      </div>
      <LogoRow logos={governmentLogos} label="Government partners" />
      <div className="partners-head partners-head--secondary">
        <p>Key Institution / Corporate Partnerships</p>
        <span className="partners-head__line" aria-hidden="true" />
      </div>
      <LogoRow logos={corporateLogos} label="Institution corporate partners" />
      <div className="partners-head partners-head--secondary">
        <p>Key School/Colleges Partnerships</p>
        <span className="partners-head__line" aria-hidden="true" />
      </div>
      <LogoRow logos={schoolLogos} label="School partners" />
    </section>
  )
}

export default PartnersSection
