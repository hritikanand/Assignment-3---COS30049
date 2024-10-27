// src/App.js
import React from 'react';
import Header from './components/Header';
import HomeSection from './components/Home/HomeSection';
import TeamSection from './components/Home/TeamSection';
import ContactSection from './components/Home/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HomeSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
