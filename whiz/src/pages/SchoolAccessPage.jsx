import { useState } from 'react'
import '../components/Home.css'
import DemoModal from '../components/home/sections/DemoModal'
import FooterSection from '../components/home/sections/FooterSection'
import Header from '../components/home/sections/Header'
import SchoolAccessSection from '../components/home/sections/SchoolAccessSection'

function SchoolAccessPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  function handleDemoSubmit(event) {
    event.preventDefault()
    setIsDemoOpen(false)
  }

  return (
    <div className="home">
      <Header />
      <SchoolAccessSection />
      <FooterSection onBookDemoClick={() => setIsDemoOpen(true)} />
      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} onSubmit={handleDemoSubmit} />
      )}
    </div>
  )
}

export default SchoolAccessPage
