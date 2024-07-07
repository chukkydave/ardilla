import React from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Interests from './pages/Interests';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;