import Home from './components/Home'
import BlogPage from './pages/BlogPage'
import CurriculumPage from './pages/CurriculumPage'
import KitsPage from './pages/KitsPage'
import LoginPage from './pages/LoginPage'
import ProgramsPage from './pages/ProgramsPage'
import RoboticsPage from './pages/RoboticsPage'
import SchoolAccessPage from './pages/SchoolAccessPage'

function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'

  if (normalizedPath === '/blog') {
    return <BlogPage />
  }

  if (normalizedPath === '/robotics') {
    return <RoboticsPage />
  }

  if (normalizedPath === '/kits') {
    return <KitsPage />
  }

  if (normalizedPath === '/programs') {
    return <ProgramsPage />
  }

  if (normalizedPath === '/curriculum') {
    return <CurriculumPage />
  }

  if (normalizedPath === '/school-access') {
    return <SchoolAccessPage />
  }

  if (normalizedPath === '/login') {
    return <LoginPage />
  }

  return <Home />
}

export default App
