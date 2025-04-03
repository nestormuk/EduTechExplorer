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

function App() {
  return (
    <div>
      
      <Router>
    
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/universities" element={<UniversityPage />} />
          <Route path="/university/:name" element={<UniversityDetail />} />

          <Route path="/courses" element={<Courses />} />
          <Routes path="course/:id" element={<CourseDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <SpeedInsights />
        <Analytics />
    </Router>
    
    </div>
  )
}

export default App
