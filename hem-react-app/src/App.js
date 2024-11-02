// src/App.js
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/Home/HomeSection';
import TeamSection from './components/Home/TeamSection';
import ContactSection from './components/Home/ContactSection';
import About from './components/About/AboutSection';
import Predict from './components/Predict/Predict';

function ScrollToContact({ contactRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, contactRef]);

  return null;
}

// Function to scroll to top when navigating to home
function ScrollToTopOnHomeClick() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  const contactRef = useRef(null);

  return (
    <Router>
      <div>
        <Header contactRef={contactRef} />
        <ScrollToTopOnHomeClick /> {/* ensures page scrolls to top on Home click */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HomeSection />
                <TeamSection />
                <div id="contact-section" ref={contactRef}>
                  <ContactSection />
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>

        <ScrollToContact contactRef={contactRef} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
