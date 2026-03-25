function TestimonialsSection({ testimonials }) {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="section-head">
        <h2>What Our Community Says</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.role}>
            <p className="testimonial-role">{item.role}</p>
            <p className="testimonial-feedback">{item.feedback}</p>
            <h3>{item.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
