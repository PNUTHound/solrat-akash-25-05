import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X,  Sun, Moon } from 'lucide-react';
import Container from '../shared/Container';
import RatMascot from '../shared/RatMascot';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [isDark, setIsDark] = useState(() => {
  return localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
});

useEffect(() => {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [isDark]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'NFT', path: '/nft' },
    { name: 'DAO', path: '/dao' },
    { name: 'Contact', path: '/contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 glassmorphism' : 'py-4 bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 z-50">
          <RatMascot size="sm" />
          <span className="text-xl font-display font-bold gradient-text">SolRat</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : 'text-white/80'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setIsDark(!isDark)}
          className="hidden md:flex items-center justify-center text-white dark:text-black bg-accent p-2 rounded-full hover:bg-accent-light transition"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-white focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-background-dark z-40 md:hidden flex flex-col"
            >
              <Container className="flex flex-col items-center justify-center h-full">
                <nav className="flex flex-col items-center space-y-6 text-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-xl font-medium transition-colors hover:text-accent ${
                        location.pathname === link.path ? 'text-accent' : 'text-white/80'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Navbar;