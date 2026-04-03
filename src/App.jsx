import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/ui/Loader'
import Footer from './components/Footer'
import { Sun, Moon, HelpCircle } from 'lucide-react' 

// Lazy load views for performance
const Home = lazy(() => import('./views/Home'))
const Wizard = lazy(() => import('./views/Wizard'))
const Roadmap = lazy(() => import('./views/Roadmap'))
const Resources = lazy(() => import('./views/Resources'))
const Faq = lazy(() => import('./views/Faq'))
const Imprint = lazy(() => import('./views/Imprint'))
const Privacy = lazy(() => import('./views/Privacy'))

// Component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/datenschutz" element={<Privacy />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('app-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('app-theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  // Gemeinsamer, minimalistischer Style für beide Header-Buttons
  const iconButtonStyle = {
      background: 'var(--color-surface-glass)',
      border: '1px solid rgba(128,128,128,0.15)', 
      borderRadius: '50%',
      width: '38px', 
      height: '38px',
      color: 'var(--color-text-main)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(5px)',
      boxShadow: 'var(--shadow-sm)', 
      textDecoration: 'none',
      transition: 'all 0.2s'
  }

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* GLOBAL HEADER BAR - NOW TOP RIGHT */}
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 100, display: 'flex', gap: '0.5rem' }}>
            
            <button
                onClick={toggleTheme}
                style={iconButtonStyle}
                title={isDarkMode ? "In den hellen Modus wechseln" : "In den dunklen Modus wechseln"}
            >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link to="/faq" style={iconButtonStyle} title="Häufige Fragen">
                <HelpCircle size={18} />
            </Link>

        </div>

        <Suspense fallback={<Loader />}>
          <AnimatedRoutes />
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App