import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-800" />
          <span className="text-xl font-bold text-blue-800">FaceGuard AI</span>
        </NavLink>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-blue-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/demo" 
            className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
          >
            Live Demo
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/technical" 
            className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
          >
            Technical Details
          </NavLink>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => `text-sm font-medium py-2 transition-colors ${isActive ? 'text-blue-800' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/demo" 
              className={({isActive}) => `text-sm font-medium py-2 transition-colors ${isActive ? 'text-blue-800' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Live Demo
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => `text-sm font-medium py-2 transition-colors ${isActive ? 'text-blue-800' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/technical" 
              className={({isActive}) => `text-sm font-medium py-2 transition-colors ${isActive ? 'text-blue-800' : 'text-gray-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Technical Details
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;