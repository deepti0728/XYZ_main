import { useState } from 'react'
import '../components/Home.css'
import FooterSection from '../components/home/sections/FooterSection'
import Header from '../components/home/sections/Header'

function LoginPage() {
  const [authMode, setAuthMode] = useState('login')

  function handleLoginSubmit(event) {
    event.preventDefault()
  }

  function handleRegisterSubmit(event) {
    event.preventDefault()
    setAuthMode('login')
  }

  return (
    <div className="home">
      <Header />
      <section className="section auth-page-shell" id="top">
        <div className="auth-page-card">
          <div className="auth-switch">
            <button className={authMode === 'login' ? 'active' : ''} type="button" onClick={() => setAuthMode('login')}>
              Login
            </button>
            <button className={authMode === 'register' ? 'active' : ''} type="button" onClick={() => setAuthMode('register')}>
              Register
            </button>
          </div>
          {authMode === 'login' ? (
            <>
              <h3>Portal Login</h3>
              <p>Use this for student and teacher access.</p>
              <form onSubmit={handleLoginSubmit}>
                <label>
                  Email
                  <input type="email" name="loginEmail" placeholder="Enter email" required />
                </label>
                <label>
                  Password
                  <input type="password" name="loginPassword" placeholder="Enter password" required />
                </label>
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </form>
            </>
          ) : (
            <>
              <h3>Create Account</h3>
              <p>Register and continue to login.</p>
              <form onSubmit={handleRegisterSubmit}>
                <label>
                  Full Name
                  <input type="text" name="registerName" placeholder="Enter full name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="registerEmail" placeholder="Enter email" required />
                </label>
                <label>
                  Password
                  <input type="password" name="registerPassword" placeholder="Create password" minLength="6" required />
                </label>
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </form>
            </>
          )}
          <div className="page-quick-actions">
            <a href="/" className="btn btn-primary">Back to Home</a>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  )
}

export default LoginPage
