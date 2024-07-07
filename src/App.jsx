import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expect from "./components/Expect"
import Features from './components/Features';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expect />
      <Features />
    </div>
  );
};

export default App;