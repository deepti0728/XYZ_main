import { useState } from 'react'
import '../components/Home.css'
import { programCatalog } from '../components/home/data'
import DemoModal from '../components/home/sections/DemoModal'
import FooterSection from '../components/home/sections/FooterSection'
import Header from '../components/home/sections/Header'
import KitsSection from '../components/home/sections/KitsSection'

function KitsPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const educationalKits = programCatalog.filter((item) =>
    item.group === 'Whizrobo Educational Kits' ||
    item.name === 'WHIZ IOT' ||
    item.name === 'WHIZ BLUETOOTH'
  )

  function handleDemoSubmit(event) {
    event.preventDefault()
    setIsDemoOpen(false)
  }

  return (
    <div className="home">
      <Header />
      <section className="section programs-page-shell" id="top">
        <div className="page-quick-actions">
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
        <KitsSection kits={educationalKits} />
      </section>
      <FooterSection onBookDemoClick={() => setIsDemoOpen(true)} />
      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} onSubmit={handleDemoSubmit} />
      )}
    </div>
  )
}

export default KitsPage
