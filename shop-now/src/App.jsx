import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import TopRated from './Components/TopRated/TopRated';
import KidsWear from './Components/KidsWear/KidsWear';
import MensWears from './Components/MansWears/MensWears';
import Electronics from './Components/Electronics/Electronics';
import WomenWear from './Components/WomenWear/WomenWear';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/kidswear" element={<KidsWear />} />
          <Route path="/menswear" element={<MensWears />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/womenwear" element={<WomenWear />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App