
import React, { useState, useEffect } from 'react';
import { Reveal } from '@/components/ui/reveal';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "John Davis",
      role: "Food Critic",
      quote: "The dining experience at Yummy is exceptional. The flavors are authentic, and the presentation is impeccable. Each dish tells a story of tradition and innovation.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Food Blogger",
      quote: "I've visited many restaurants, but Yummy stands out with its perfect balance of flavors, exceptional service, and warm ambiance. A must-visit for any food enthusiast.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Regular Customer",
      quote: "Yummy has become our family's favorite restaurant. The quality of food and service is consistently outstanding. Their chef's special creations never disappoint.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Local Foodie",
      quote: "The attention to detail at Yummy is remarkable. From the thoughtfully designed interior to the carefully prepared dishes, everything speaks of passion and dedication.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop"
    }
  ];
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title text-3xl md:text-4xl">
              What Are They <span className="text-restaurant-red">Saying About Us</span>
            </h2>
          </Reveal>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Reveal animation="fade-in">
            <div className="relative bg-restaurant-light rounded-lg p-6 md:p-10 shadow-md">
              {/* Quotation Mark */}
              <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 12H12V32H32V12Z" fill="#CE1212" fillOpacity="0.2"/>
                  <path d="M68 12H48V32H68V12Z" fill="#CE1212" fillOpacity="0.2"/>
                </svg>
              </div>
              
              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="relative">
                      <img 
                        src={testimonials[activeSlide].image} 
                        alt={testimonials[activeSlide].name}
                        className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <p className="text-restaurant-text text-lg italic mb-4">"{testimonials[activeSlide].quote}"</p>
                    <h3 className="text-xl font-semibold mb-1">{testimonials[activeSlide].name}</h3>
                    <p className="text-restaurant-gray">{testimonials[activeSlide].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-300 ${
                    activeSlide === index ? 'bg-restaurant-red' : 'bg-restaurant-gray'
                  }`}
                >
                  <span className="sr-only">Slide {index + 1}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 