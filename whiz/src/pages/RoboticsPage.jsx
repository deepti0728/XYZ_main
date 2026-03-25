import { useState } from 'react'
import '../components/Home.css'
import { programs } from '../components/home/data'
import DemoModal from '../components/home/sections/DemoModal'
import FooterSection from '../components/home/sections/FooterSection'
import Header from '../components/home/sections/Header'
import RobotsSection from '../components/home/sections/RoboticsSection'

function RoboticsPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  function handleDemoSubmit(event) {
    event.preventDefault()
    setIsDemoOpen(false)
  }

  return (
    <div className="home">
      <Header />
      <section className="section page-quick-nav">
        <div className="page-quick-actions">
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </section>
      <RobotsSection programs={programs} />
      <FooterSection onBookDemoClick={() => setIsDemoOpen(true)} />
      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} onSubmit={handleDemoSubmit} />
      )}
    </div>
  )
}

export default RoboticsPage
