import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgba(51, 51, 51, 1)']
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 2px 4px rgba(0,0,0,0.1)']
  );

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{ backgroundColor, boxShadow }}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-serif" onClick={scrollToTop}>
          <motion.span style={{ color: textColor }}>PA Real Estate Support</motion.span>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to={item.path} 
                  className="transition duration-300"
                  onClick={scrollToTop}
                >
                  <motion.span style={{ color: textColor }}>{item.label}</motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.span style={{ color: textColor }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.span>
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-white py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="text-primary hover:text-gray-medium transition duration-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;