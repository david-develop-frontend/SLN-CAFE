import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Check which section is currently in view
      const sections = ['home', 'about', 'menu', 'testimonials', 'chefs', 'gallery', 'contact','abcd'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'chefs', label: 'Chefs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'abcd', label: 'abcd' },
  ];
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-4 transition-500",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl md:text-4xl font-amatic font-bold text-restaurant-dark">
          SLN Cafe<span className="text-restaurant-red">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "font-medium text-sm transition-300 hover:text-restaurant-red",
                activeSection === item.id ? "menu-active" : "text-restaurant-dark"
              )}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-restaurant-red text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-300 font-medium"
          >
            Book a Table
          </button>
        </nav>
        
        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-restaurant-dark text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed top-[60px] right-0 left-0 bg-white shadow-lg p-6 md:hidden transform transition-500",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}>
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "font-medium text-left px-3 py-2 rounded-md transition-300",
                  activeSection === item.id 
                    ? "bg-restaurant-red bg-opacity-10 text-restaurant-red" 
                    : "text-restaurant-dark hover:bg-gray-100"
                )}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-restaurant-red text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-300 font-medium mt-2"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;