import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expect from "./components/Expect"
import Features from './components/Features';
import Invest from './components/Invest';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expect />
      <Features />
      <Invest />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;