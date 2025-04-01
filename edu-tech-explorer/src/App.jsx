import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import UniversityDetail from './pages/UniversityDetail';
import UniversityPage from './pages/Universities';
import NotFound from './pages/NotFound';

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
     
    </Router>

    </div>
  )
}

export default App
