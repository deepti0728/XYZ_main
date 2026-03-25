function CtaSection({ onBookDemoClick }) {
  return (
    <section className="cta" id="cta">
      <div>
        <h2>Preparing Future Ready Children</h2>
        <p>We aim to empower young minds and eventually help them become Lifelong learners</p>
      </div>
      <button type="button" className="btn btn-light cta-demo-btn" onClick={onBookDemoClick}>
        Book Free Demo
      </button>
    </section>
  )
}

export default CtaSection

