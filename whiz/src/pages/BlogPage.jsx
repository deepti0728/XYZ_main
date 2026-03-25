import { useState } from 'react'
import '../components/Home.css'
import { blogPosts } from '../components/home/data'
import BlogSection from '../components/home/sections/BlogSection'
import DemoModal from '../components/home/sections/DemoModal'
import FooterSection from '../components/home/sections/FooterSection'
import Header from '../components/home/sections/Header'

function BlogPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  function handleDemoSubmit(event) {
    event.preventDefault()
    setIsDemoOpen(false)
  }

  return (
    <div className="home">
      <Header />
      <section className="section page-hero" id="top">
        <div className="section-head">
          <h2>Whizrobo Blogs</h2>
          <p>Feel free to Reach Out to Us! We will be happy to help you.</p>
        </div>
        <div className="page-quick-actions">
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </section>
      <BlogSection blogPosts={blogPosts} showHeading={false} />
      <FooterSection onBookDemoClick={() => setIsDemoOpen(true)} />
      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} onSubmit={handleDemoSubmit} />
      )}
    </div>
  )
}

export default BlogPage
