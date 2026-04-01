import { useState } from 'react'

function SchoolAccessSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  function handleContactSubmit(event) {
    event.preventDefault()
    setIsContactOpen(false)
  }

  return (
    <section className="section school-access-section" id="school-access" aria-label="School access">
      <div className="school-access-header">
        <h1>School Access</h1>
        <p>We have what you are looking for</p>
      </div>
      <div className="school-access-copy">
        <p className="school-access-title">This section contains exclusive courses curated for partnered institutions.</p>
        <p>To view the content, please log in using your school access key.</p>
        <p className="school-access-note">
          Don’t have a key? Only students from participating institutions can access this area. If you’re unsure about access,
          please contact your school administration or reach out to us for assistance.
        </p>
        <p className="school-access-note-footer">You must be logged in and assigned to a school to view bundles.</p>
        <div className="school-access-actions">
          <a className="btn btn-primary" href="/login">Login with Access Key</a>
          <button className="btn school-contact-btn" type="button" onClick={() => setIsContactOpen(true)}>
            Contact Us
          </button>
        </div>
      </div>
      {isContactOpen && (
        <SchoolContactModal onClose={() => setIsContactOpen(false)} onSubmit={handleContactSubmit} />
      )}
    </section>
  )
}

function SchoolContactModal({ onClose, onSubmit }) {
  return (
    <div className="demo-overlay" role="dialog" aria-modal="true" aria-label="School contact form">
      <div className="demo-modal-card">
        <button className="demo-close" type="button" onClick={onClose}>
          x
        </button>
        <h3>Contact Our School Support</h3>
        <p>Share your details and our team will get back to you soon.</p>
        <form className="demo-form" onSubmit={onSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Enter your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Enter your email" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="Enter subject" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Write your message" rows="4" required />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default SchoolAccessSection
