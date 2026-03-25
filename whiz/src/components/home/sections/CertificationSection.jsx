const certificationItems = [
  { src: '/images/c1.png' },
  { src: '/images/c2.png' },
  { src: '/images/c3.png' },
  { src: '/images/c4.png' },
  { src: '/images/c5.png' },
  { src: '/images/c6.png' },
]

function CertificationSection() {
  const handleImageFallback = (event) => {
    if (event.currentTarget.dataset.fallbackApplied) return
    event.currentTarget.dataset.fallbackApplied = 'true'
    event.currentTarget.src = '/images/certification.png'
  }

  return (
    <section className="section certification-section" id="certifications">
      <div className="section-head">
        <h2>Certifications</h2>
      </div>
      <div className="certification-grid">
        {certificationItems.map((item, index) => (
          <article className="certification-card" key={item.src}>
            <img
              src={item.src}
              alt={`Certification ${index + 1}`}
              loading="lazy"
              onError={handleImageFallback}
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default CertificationSection
