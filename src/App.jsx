// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Hero section and the rest of your app */}
      <div className="hero-section bg-[#240053] h-screen flex items-center justify-center text-white">
        {/* Hero content */}
        <h1>Welcome to Our Site</h1>
      </div>
      <div className="content-section h-screen">
        {/* Other content */}
        <h2>More Content Here</h2>
      </div>
    </div>
  );
};

export default App;