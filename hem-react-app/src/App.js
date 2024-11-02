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
import Box from '@mui/material/Box';

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
      {/* Main container with full height to ensure footer is pushed to the bottom */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header contactRef={contactRef} />

        {/* Scroll handlers */}
        <ScrollToTopOnHomeClick />
        <ScrollToContact contactRef={contactRef} />

        {/* Main content area */}
        <Box component="main" sx={{ flexGrow: 1 }}>
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
        </Box>

        {/* Footer at the bottom */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
