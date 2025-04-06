import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import UniversityDetail from './pages/UniversityDetail';
import UniversityPage from './pages/Universities';
import NotFound from './pages/NotFound';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import CourseDetail from './pages/CourseDetail';
import Courses from './pages/Courses';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import TechTrends from './pages/TechTrends';
import Maintenance from './components/Maintenance';

function App() {
  return (
    <div>
      
      <Router>
        <div className='fixed top-0 left-0 right-0 z-50'>
        <Header  />
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/universities" element={<UniversityPage />} />
          <Route path="/university/:name" element={<UniversityDetail />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/tech-trends" element={<TechTrends />} />

          <Route path="/blog" element={<Maintenance />} />
          <Route path="/career-advice" element={<Maintenance />} />
          <Route path="/success-stories" element={<Maintenance />} />
          <Route path="/faq" element={<Maintenance />} />
          <Route path="/support" element={<Maintenance />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <SpeedInsights />
        <Analytics />
       
       
        
    </Router>
    
    </div>
  )
}

export default App
