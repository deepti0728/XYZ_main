import { useEffect, useState } from 'react'
import '../Home.css'
import { solutions, proofGallery, stats, testimonials } from './data'
import AboutSection from './sections/AboutSection'
import AchievementsSection from './sections/AchievementsSection'
import CertificationSection from './sections/CertificationSection'
import CtaSection from './sections/CtaSection'
import DemoModal from './sections/DemoModal'
import SolutionsSection from './sections/SolutionsSection'
import FooterSection from './sections/FooterSection'
import GallerySection from './sections/GallerySection'
import Header from './sections/Header'
import HeroSection from './sections/HeroSection'
import MdCeoMessageSection from './sections/MdCeoMessageSection'
import TestimonialsSection from './sections/TestimonialsSection'
import PartnersSection from './sections/PartnersSection'

function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash

      if (!hash) return

      const sectionId = hash.replace('#', '')
      const section = document.getElementById(sectionId)

      if (!section) return

      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const navigationEntry = window.performance?.getEntriesByType?.('navigation')?.[0]
    const isReload = navigationEntry?.type === 'reload' || window.performance?.navigation?.type === 1
    const initialHash = window.location.hash
    let initialScrollTimer

    if (initialHash) {
      if (isReload) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      } else {
        initialScrollTimer = window.setTimeout(scrollToHashTarget, 80)
      }
    }

    window.addEventListener('hashchange', scrollToHashTarget)

    return () => {
      if (initialScrollTimer) {
        window.clearTimeout(initialScrollTimer)
      }
      window.removeEventListener('hashchange', scrollToHashTarget)
    }
  }, [])

  function handleDemoSubmit(event) {
    event.preventDefault()
    setIsDemoOpen(false)
  }

  return (
    <div className="home">
      <Header />
      <HeroSection onBookDemoClick={() => setIsDemoOpen(true)} />
      <SolutionsSection solutions={solutions} />
      <AchievementsSection stats={stats} />
      <GallerySection proofGallery={proofGallery} />
      <TestimonialsSection testimonials={testimonials} />
      <AboutSection />
      <section className="section leadership-heading-only" aria-label="Leadership message heading">
        <div className="section-head">
          <h2>Leadership Message</h2>
        </div>
      </section>
      <MdCeoMessageSection />
      <CtaSection onBookDemoClick={() => setIsDemoOpen(true)} />
      <CertificationSection />
      <PartnersSection />
      <FooterSection onBookDemoClick={() => setIsDemoOpen(true)} />
      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} onSubmit={handleDemoSubmit} />
      )}
    </div>
  )
}

export default Home
