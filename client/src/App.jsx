import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Certificates from './components/sections/Certificates';
import FeaturedProject from './components/sections/FeaturedProject';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import CustomCursor from './components/shared/CustomCursor';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      
      {/* Subtle scanline overlay */}
      <div className="scanline-overlay" />

      <Navbar />
      
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <FeaturedProject />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
