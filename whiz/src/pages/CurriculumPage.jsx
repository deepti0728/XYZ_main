import { useState } from 'react'
import '../components/Home.css'
import { curriculumByGrade } from '../components/home/data'
import DemoModal from '../components/home/sections/DemoModal'
import FooterSection from '../components/home/sections/FooterSection'
import Header from '../components/home/sections/Header'

function CurriculumPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  function handleDemoSubmit(event) {
    event.preventDefault()
    setIsDemoOpen(false)
  }

  return (
    <div className="home">
      <Header />
      <section className="section curriculum-page-shell" id="top">
        <article className="curriculum-hero-card">
          <p className="curriculum-kicker">Curriculum</p>
          <h2>Curriculum Framework and Grade Pathway</h2>
          <p>
            From curiosity to competence: A 12-year robotics and AI learning journey with creativeness.
          </p>
          <div className="page-quick-actions">
            <a href="/" className="btn btn-primary">Back to Home</a>
          </div>
        </article>
        <div className="curriculum-stage-grid">
          {curriculumByGrade.map((item) => (
            <article className="curriculum-stage-card" key={item.stage}>
              <h3>{item.stage}</h3>
              <p className="curriculum-stage-overview">{item.overview}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="curriculum-outcome">{item.outcome}</p>
            </article>
          ))}
        </div>
      </section>
      <FooterSection onBookDemoClick={() => setIsDemoOpen(true)} />
      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} onSubmit={handleDemoSubmit} />
      )}
    </div>
  )
}

export default CurriculumPage
