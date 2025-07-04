import React from 'react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <ThemeToggle />    {/* fixed top-right toggle */}
      <Navbar />         {/* desktop-only navbar */}

      {/* One and only one copy of each section */}
      <Hero />       {/* Hero.jsx already has id="hero" in its <section> */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;