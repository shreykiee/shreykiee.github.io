import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Info from './pages/English/Info';
import Cave1 from './pages/English/cave1'; 
import Cave2 from './pages/English/cave2'; 
import Cave3 from './pages/English/cave3'; 
import Cave4 from './pages/English/cave4'; 
import Cave5 from './pages/English/cave5'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/cave1" element={<Cave1 />} />
          <Route path="/cave2" element={<Cave2 />} />
          <Route path="/cave3" element={<Cave3 />} />
          <Route path="/cave4" element={<Cave4 />} />
          <Route path="/cave5" element={<Cave5 />} />
        
          {/* Add routes for other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
