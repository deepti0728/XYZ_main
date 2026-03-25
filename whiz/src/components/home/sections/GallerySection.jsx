function GallerySection({ proofGallery }) {
  const getImageStyle = (item) => {
    const style = {}
    if (item.focalPoint) style.objectPosition = item.focalPoint
    if (item.imageFit) style.objectFit = item.imageFit
    if (item.imageBackground) style.background = item.imageBackground
    return Object.keys(style).length ? style : undefined
  }

  return (
    <section className="section" id="gallery">
      <div className="proof-grid">
        {proofGallery.map((item) => (
          <article className="proof-card" key={item.title}>
            <div className="proof-media">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={getImageStyle(item)}
              />
              <span>{item.tag}</span>
            </div>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
