// C:\Users\Andi\KMU-Foerderung\App.jsx

import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom' // HIER: Link hinzugefügt
import { AnimatePresence } from 'framer-motion'
import Loader from './components/ui/Loader'
import Footer from './components/Footer'
// MODIFIED: Import Sun, Moon, AND HelpCircle for FAQ
import { Sun, Moon, HelpCircle } from 'lucide-react' 

// ... (Lazy Loads und AnimatedRoutes bleiben exakt gleich) ...

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

  // GEMEINSAMER, MINIMALISTISCHER STYLE FÜR BEIDE HEADER-BUTTONS
  const iconButtonStyle = {
      background: 'var(--color-surface-glass)',
      // MODIFIED: 'Less harsh' - fine border (1px instead of 2px) and transparent gray
      border: '1px solid rgba(128,128,128,0.15)', 
      borderRadius: '50%',
      width: '38px', // Slightly more compact
      height: '38px',
      color: 'var(--color-text-main)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(5px)',
      boxShadow: 'var(--shadow-sm)', // Subtler shadow
      textDecoration: 'none',
      transition: 'all 0.2s'
  }

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* GLOBAL HEADER BAR - NOW TOP RIGHT */}
        {/* Positioned TOP RIGHT (zIndex added to ensure clickability) */}
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 100, display: 'flex', gap: '0.5rem' }}>
            
            {/* Theme Toggle Button (moved from left to right, made compact) */}
            <button
                onClick={toggleTheme}
                style={iconButtonStyle}
                title={isDarkMode ? "In den hellen Modus wechseln" : "In den dunklen Modus wechseln"}
            >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Global FAQ / Help Button (moved from Home.jsx, simplified to Icon) */}
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