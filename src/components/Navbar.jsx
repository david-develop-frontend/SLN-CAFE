import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Ensure this utility is available
import Logo from "../images/slnCafe.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check which section is currently in view
      const sections = ["home", "about", "menu", "testimonials", "gallery", "contact"];
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

    const debounceScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debounceScroll);
    return () => window.removeEventListener("scroll", debounceScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "testimonials", label: "Testimonials" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center text-2xl md:text-2xl font-bold font-amatic text-restaurant-dark hover:text-restaurant-primary transition-all">
          ದಿ  ಎಸ್ ಎಲ್ ಎನ್ ಕೆಫೆ
          <img src={Logo} alt="SLN Cafe Logo" className="h-8 w-auto ml-2" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "font-medium text-sm transition-all duration-300 hover:text-restaurant-red",
                activeSection === item.id ? "menu-active text-restaurant-red" : "text-restaurant-dark"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button (☰ / ✖) */}
        <button
          className="md:hidden text-restaurant-dark text-2xl z-50 relative p-3 bg-white rounded-full shadow-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen bg-white shadow-lg p-6 md:hidden transform transition-transform duration-500",
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex flex-col space-y-4 mt-16">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "font-medium text-left px-3 py-2 rounded-md transition-all duration-300",
                  activeSection === item.id
                    ? "bg-restaurant-red bg-opacity-10 text-restaurant-red"
                    : "text-restaurant-dark hover:bg-gray-100"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
