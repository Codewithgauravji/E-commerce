import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import TopRated from './Components/TopRated/TopRated';
import KidsWear from './Components/KidsWear/KidsWear';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/kidswear" element={<KidsWear />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App