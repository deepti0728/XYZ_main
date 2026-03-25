function DemoModal({ onClose, onSubmit }) {
  return (
    <div className="demo-overlay" role="dialog" aria-modal="true" aria-label="Book Demo Form">
      <div className="demo-modal-card">
        <button className="demo-close" type="button" onClick={onClose}>
          x
        </button>
        <h3>Book a Free Demo Session</h3>
        <p>Share your details and our academic team will contact you.</p>
        <form className="demo-form" onSubmit={onSubmit}>
          <label>
            School Name
            <input type="text" name="schoolName" placeholder="Enter school name" required />
          </label>
          <label>
            Contact Person
            <input type="text" name="contactPerson" placeholder="Enter full name" required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="Enter phone number" required pattern="[0-9+\-\s]{8,15}" />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="Enter email address" required />
          </label>
          <label>
            City
            <input type="text" name="city" placeholder="Enter city" required />
          </label>
          <label>
            Requirement
            <select name="requirement" defaultValue="" required>
              <option value="" disabled>
                Select requirement
              </option>
              <option value="lab-setup">Robotics Lab Setup</option>
              <option value="curriculum">Curriculum Program</option>
              <option value="teacher-training">Teacher Training</option>
              <option value="full-package">Complete STEM Package</option>
            </select>
          </label>
          <button className="btn btn-primary" type="submit">
            Submit Demo Request
          </button>
        </form>
      </div>
    </div>
  )
}

export default DemoModal
