import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-gray-900">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;