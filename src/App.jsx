import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import UniversityDetail from './pages/UniversityDetail';
import UniversityPage from './pages/Universities';
import NotFound from './pages/NotFound';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div>
      
      <Router>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<UniversityPage />} />
          <Route path="/university/:name" element={<UniversityDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SpeedInsights />
    </Router>
    
    </div>
  )
}

export default App
