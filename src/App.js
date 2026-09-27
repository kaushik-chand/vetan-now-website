import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import './App.css'
import Employee from './pages/Employee.jsx'
import Footer from './pages/Footer.jsx'
import Employer from './pages/Employer.jsx'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/services/employee" element={<Employee />} />
        <Route path="/services/employer" element={<Employer />} />

       
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
