import { useEffect, useState } from 'react'

const getActiveNavKey = () => {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const normalizedHash = (window.location.hash || '').toLowerCase()

  if (normalizedPath === '/kits' || normalizedPath === '/programs') return 'kits'
  if (normalizedPath === '/robotics') return 'robots'
  if (normalizedPath === '/blog') return 'blog'
  if (normalizedPath === '/school-access') return 'school'
  if (normalizedPath === '/login') return 'login'

  if (normalizedPath === '/') {
    if (normalizedHash === '' || normalizedHash === '#top') return ''
    if (normalizedHash === '#features') return 'solutions'
    if (normalizedHash === '#achievements') return 'achievements'
    if (normalizedHash === '#testimonials') return 'testimonials'
    if (normalizedHash === '#school-access') return 'school'
    if (normalizedHash === '#about') return 'about'
  }

  return ''
}

const scrollSectionConfig = [
  { id: 'features', key: 'solutions' },
  { id: 'achievements', key: 'achievements' },
  { id: 'about', key: 'about' },
]

const getScrollActiveNavKey = () => {
  const triggerPoint = window.scrollY + window.innerHeight * 0.35
  const firstSection = document.getElementById('features')

  if (firstSection && triggerPoint < firstSection.offsetTop) {
    return ''
  }

  let activeKey = ''

  scrollSectionConfig.forEach(({ id, key }) => {
    const section = document.getElementById(id)

    if (!section) return

    if (section.offsetTop <= triggerPoint) {
      activeKey = key
    }
  })

  return activeKey
}

function Header() {
  const [activeNav, setActiveNav] = useState(getActiveNavKey)

  useEffect(() => {
    const syncActiveNav = () => setActiveNav(getActiveNavKey())
    window.addEventListener('popstate', syncActiveNav)
    window.addEventListener('hashchange', syncActiveNav)
    return () => {
      window.removeEventListener('popstate', syncActiveNav)
      window.removeEventListener('hashchange', syncActiveNav)
    }
  }, [])

  useEffect(() => {
    const handleScrollSpy = () => {
      const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'

      if (normalizedPath !== '/') return

      const scrollKey = getScrollActiveNavKey()

      setActiveNav((prev) => (prev === scrollKey ? prev : scrollKey))
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    handleScrollSpy()

    return () => {
      window.removeEventListener('scroll', handleScrollSpy)
    }
  }, [])

  const handleSectionNav = (event, sectionId, navKey) => {
    event.preventDefault()
    setActiveNav(navKey)
    const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'

    if (normalizedPath !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }

    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.history.replaceState(null, '', `/#${sectionId}`)
  }

  const navClassName = (key, isLogin = false) => `${isLogin ? 'nav-login' : ''}${activeNav === key ? ' active' : ''}`.trim()

  return (
    <header className="topbar">
      <a href="/" className="brand" aria-label="Whizrobo home">
        <img className="brand-logo" src="/images/logo.png" alt="Whizrobo" />
      </a>
      <nav>
        <a className={navClassName('solutions')} href="/#features" onClick={(event) => handleSectionNav(event, 'features', 'solutions')}>
          Solutions
        </a>
        <a className={navClassName('kits')} href="/kits">
          Kits
        </a>
        <a className={navClassName('robots')} href="/robotics">
          Robots
        </a>
        <a
          className={navClassName('achievements')}
          href="/#achievements"
          onClick={(event) => handleSectionNav(event, 'achievements', 'achievements')}
        >
          Achievements
        </a>
        <a className={navClassName('school')} href="/school-access">
          School Access
        </a>
        <a className={navClassName('blog')} href="/blog">
          Blog
        </a>
        <a className={navClassName('about')} href="/#about" onClick={(event) => handleSectionNav(event, 'about', 'about')}>
          About Us
        </a>
        <a className={navClassName('login', true)} href="/login">
          Login
        </a>
      </nav>
    </header>
  )
}

export default Header
