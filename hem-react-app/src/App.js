// src/App.js
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/Home/HomeSection';
import TeamSection from './components/Home/TeamSection';
import ContactSection from './components/Home/ContactSection';
import About from './components/About/AboutSection';

const Predict = () => <div style={{ padding: '60px', textAlign: 'center' }}><h2>Predict Page</h2></div>;

function ScrollToContact({ contactRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, contactRef]);

  return null;
}

function App() {
  const contactRef = useRef(null);

  return (
    <Router>
      <div>
        <Header contactRef={contactRef} />

        <Routes>
          {/* Home Page with Contact Ref and Scroll Logic */}
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
