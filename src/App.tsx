import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Certifications from './components/certifications/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/common/BackToTop';
import Lottie from 'lottie-react';
import Animation from './components/Animation.json'

function App() {
  // State for loading animation
  const [loading, setLoading] = useState(true);

  // Simulate a loading time of 2 seconds, then show the website
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 2000 ms = 2 seconds
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Show Lottie animation while loading */}
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Lottie animationData={Animation} loop={true} />
        </div>
      ) : (
        // Show the main content after loading
        <>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
