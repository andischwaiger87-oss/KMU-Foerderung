import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/ui/Loader'
import Footer from './components/Footer'

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
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Suspense fallback={<Loader />}>
          <AnimatedRoutes />
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App
