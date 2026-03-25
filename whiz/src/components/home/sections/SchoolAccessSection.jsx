function SchoolAccessSection() {
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
          <a className="btn school-contact-btn" href="/#contact">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default SchoolAccessSection
