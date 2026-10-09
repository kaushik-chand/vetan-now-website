import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import './App.css'
import Employee from './pages/Employee.jsx'
import Footer from './pages/Footer.jsx'
import Employer from './pages/Employer.jsx'
import Faq from './pages/Faq.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfUse from './pages/TermsOfUse.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogPost from './pages/BlogPost.jsx'

const PageTransition = ({ children }) => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reducedMotion ? 'auto' : 'smooth'

    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    if (!hash) {
      window.scrollTo({ top: 0, behavior })
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previousScrollBehavior

    let frame = 0
    const started = performance.now()
    const scrollToSection = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' })
        return
      }
      if (performance.now() - started < 1200) {
        frame = requestAnimationFrame(scrollToSection)
      }
    }

    frame = requestAnimationFrame(scrollToSection)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/employee" element={<Employee />} />
          <Route path="/services/employer" element={<Employer />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </PageTransition>
      <Footer />
    </Router>
  )
}

export default App
