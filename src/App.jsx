import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expect from "./components/Expect"
import Features from './components/Features';
import Invest from './components/Invest';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expect />
      <Features />
      <Invest />
    </div>
  );
};

export default App;