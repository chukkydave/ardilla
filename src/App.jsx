// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Hero section and the rest of your app */}
      <Hero />

    </div>
  );
};

export default App;