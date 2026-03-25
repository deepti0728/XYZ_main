function BlogSection({ blogPosts, showHeading = true }) {
  return (
    <section className="section" id="blog">
      {showHeading && (
        <div className="section-head">
          <h2>Blog</h2>
        </div>
      )}
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.title}>
            <div className="blog-media">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                style={post.image === '/images/nep.png' ? { objectFit: 'contain', background: '#ffffff' } : undefined}
              />
            </div>
            <p className="blog-date">{post.date}</p>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#contact" className="blog-link">Read More</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
