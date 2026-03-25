import { useState } from 'react'
import '../components/Home.css'
import { programCatalog } from '../components/home/data'
import DemoModal from '../components/home/sections/DemoModal'
import FooterSection from '../components/home/sections/FooterSection'
import Header from '../components/home/sections/Header'

function ProgramsPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const educationalKits = programCatalog.filter((item) => item.group === 'Whizrobo Educational Kits')
  const innovativeTech = programCatalog.filter((item) => item.group === 'Innovative Technology')

  function handleDemoSubmit(event) {
    event.preventDefault()
    setIsDemoOpen(false)
  }

  return (
    <div className="home">
      <Header />
      <section className="section programs-page-shell" id="top">
        <article className="programs-hero-card">
          <p className="programs-kicker">Whizrobo Programs</p>
          <h2>Future-Ready Robotics Programs for Schools</h2>
          <p>
            Empower your educators to be the driving force of innovation and excellence in your school.
          </p>
          <div className="page-quick-actions">
            <a href="/" className="btn btn-primary">Back to Home</a>
          </div>
        </article>

        <div className="section-head">
          <h2>Whizrobo Educational Kits</h2>
        </div>
        <div className="programs-track">
          {educationalKits.map((item, index) => (
            <article className="program-stage-card" key={item.name}>
              <div className="program-stage-step">
                <span>{`0${index + 1}`}</span>
              </div>
              <h3>{item.name}</h3>
              <p className="program-stage-overview">{item.description}</p>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="program-outcome">{`Ideal for ${item.idealFor}`}</p>
            </article>
          ))}
        </div>

        <div className="section-head">
          <h2>Innovative Technology</h2>
        </div>
        <div className="programs-track">
          {innovativeTech.map((item, index) => (
            <article className="program-stage-card" key={item.name}>
              <div className="program-stage-step">
                <span>{`0${index + 1}`}</span>
              </div>
              <p className="program-stage-chip">Technology Kit</p>
              <h3>{item.name}</h3>
              <p className="program-stage-overview">{item.description}</p>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="program-outcome">{`Ideal for ${item.idealFor}`}</p>
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

export default ProgramsPage
