import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/ui/Loader'
import Footer from './components/Footer'
// NEW: Import the minimalist icons from lucide-react
import { Sun, Moon } from 'lucide-react'

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
  // Theme State (liest beim Starten, ob zuvor "dark" gespeichert wurde)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme')
    return savedTheme === 'dark'
  })

  // Setzt das data-theme Attribut auf dem <html> Tag und speichert die Wahl
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

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Theme Toggle Button (oben links platziert) */}
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
            <button
                onClick={toggleTheme}
                style={{
                    background: 'transparent',
                    border: '2px solid var(--color-text-main)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'var(--color-text-main)',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)'
                }}
                title={isDarkMode ? "In den hellen Modus wechseln" : "In den dunklen Modus wechseln"}
            >
                {/* MODIFIED: Use minimalist icons from lucide-react */}
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
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