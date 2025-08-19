import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-red-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Compact Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md"
              >
                <Volume2 className="h-5 w-5 text-white" />
              </motion.div>
              <div>
                <span className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  FINS CAR AUDIO
                </span>
              </div>
            </Link>

            {/* Compact Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'bg-red-500 text-white shadow-md' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Compact CTA & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <div className="hidden lg:flex items-center space-x-3">
                <a
                  href="tel:+94778686555"
                  className="flex items-center space-x-1 text-sm text-gray-300 hover:text-red-400 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+94 77 868 6555</span>
                </a>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Simplified Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-black/95 backdrop-blur-md z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <Volume2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">FINS CAR AUDIO</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>

                <div className="space-y-2 mb-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'bg-red-500 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4 p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Phone className="h-4 w-4 text-red-400" />
                    <span className="text-sm">+94 77 868 6555</span>
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 bg-red-500 text-white text-center rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;