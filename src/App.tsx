import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Tokenomics from './pages/Tokenomics';
import Nft from './pages/Nft';
import Dao from './pages/Dao';
import Contact from './pages/Contact';
import ParticleBackground from './components/shared/ParticleBackground';
import ScrollToTop from './components/shared/ScrollToTop';
import { useTheme } from './components/hooks/useTheme';

function App() {
  useTheme(); // Initialize theme

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-background overflow-hidden">
        <ParticleBackground />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/nft" element={<Nft />} />
            <Route path="/dao" element={<Dao />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;