import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4 text-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-xs" />
              <span>+91 (8318424372) LAUNDRY</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-xs" />
              <span>info@purebizlaundry.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>24/7 Support Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              PureBiz<span className="text-secondary-600">Laundry</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-secondary-700 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <div className="py-4 px-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-secondary-700 hover:text-primary-600 font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-secondary-700 hover:text-primary-600 font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-secondary-700 hover:text-primary-600 font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="block w-full text-left text-secondary-700 hover:text-primary-600 font-medium py-2"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-secondary-700 hover:text-primary-600 font-medium py-2"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
