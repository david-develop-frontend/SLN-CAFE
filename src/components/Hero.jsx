import React, { useEffect, useRef } from 'react';
import { Reveal, RevealGroup } from '@/components/ui/reveal';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const heroImage = document.querySelector('.hero-image');
      if (heroImage) {
        heroImage.style.transform = `translate(${x * -20}px, ${y * -20}px) scale(1.05)`;
      }
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-image absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-[3000ms] ease-out scale-105"
          style={{
            backgroundImage: "url('https://steemitimages.com/p/7ohP4GDMGPrUMp8dW6yuJTR9MKNu8P8DCXDU9qmmiwE1hZgP3v5iXko7YrJGqz7T1jP28JNUq8DT8F6wKVH7uzxNtSSBsPWTogVe?format=match&mode=fit&width=640')"
          }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <RevealGroup>
            <Reveal animation="fade-in" delay={300}>
              <h2 className="font-amatic text-5xl md:text-7xl text-white mb-4">
                Enjoy Your Budget Friendly
                <br /> 
                Delicious Food
              </h2>
            </Reveal>
            
            <Reveal animation="fade-up" delay={600}>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Experience fine dining with our chef's special creations, made with fresh ingredients
                and served with passion and creativity.
              </p>
            </Reveal>
            
            <Reveal animation="fade-up" delay={900}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#menu" className="bg-restaurant-red text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-300 text-center">
                  Our Menu
                </a>
                {/* <a href="#book-table" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-300 text-center">
                  Book a Table
                </a> */}
              </div>
            </Reveal>
          </RevealGroup>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/80 text-sm mb-2">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
            <line x1="12" x2="12" y1="5" y2="19"/><polyline points="19 12 12 19 5 12"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
