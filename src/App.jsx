import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useStore } from './store/useStore'
import { useEffect } from 'react'
import { usePerformanceMonitoring, preloadCriticalResources } from './hooks/usePerformance'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const { theme, initializeTheme } = useStore()
  
  // Initialize performance monitoring
  usePerformanceMonitoring()

  useEffect(() => {
    // Initialize theme on app load
    initializeTheme()
    
    // Preload critical resources
    preloadCriticalResources()
  }, [initializeTheme])

  useEffect(() => {
    // Apply theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App