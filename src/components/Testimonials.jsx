
import React, { useState, useEffect } from 'react';
import { Reveal } from '@/components/ui/reveal';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "ಕಲ್ಮೇಶ್",
      role: "ಗ್ರಾಹಕ",
      quote: "The SLN ಕೆಫೆಯಲ್ಲಿ ಇಡ್ಲಿ-ಸಾಂಬಾರ್ ಸೇವಿಸಿದೆ. ರುಚಿ ಅತ್ಯಂತ ಚೆನ್ನಾಗಿದೆ, ವಿಶೇಷವಾಗಿ ಸಾಂಬಾರ್ ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು.ಶುದ್ಧ ಹಾಗೂ ರುಚಿಕರ ಆಹಾರಕ್ಕಾಗಿ ಖಂಡಿತಾ ಮರುಬಳಸಿ ಭೇಟಿ ನೀಡಲು ಇಚ್ಛಿಸುತ್ತೇನೆ. ",
      image: "https://media.istockphoto.com/id/1681388313/vector/cute-baby-panda-cartoon-on-white-background.jpg?s=612x612&w=0&k=20&c=qFrzn8TqONiSfwevvkYhys1z80NAmDfw3o-HRdwX0d8="
    },
    {
      id: 2,
      name: "ವರುಣ",
      role: "ಗ್ರಾಹಕ",
      quote: "The SLN ಕೆಫೆಯಲ್ಲಿ ಮಾಸಾಲೆ ದೋಸೆ ತಿಂದೆ. ರುಚಿ ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು, ಚಟ್ನಿ ಮತ್ತು ಪಲ್ಯ ಸೂಪರ್ ಆಗಿತ್ತು. ಮತ್ತೆ ಬರುವ ಇಚ್ಛೆ ಇದೆ.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg"
    },
    {
      id: 3,
      name: "ಕಾರ್ತಿಕ್ ರೆಡ್ಡಿ",
      role: "ಗ್ರಾಹಕ",
      quote: "The SLN ಕೆಫೆಯಲ್ಲಿ ರೈಸ್-ಸಾಂಬಾರ್ ಮಿಲ್ಸ್ ತಿಂದೆ. ರುಚಿ ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು, ಸಾಂಬಾರ್ ಮತ್ತು ಪಲ್ಯ ತುಂಬಾ ಸ್ವಾದಿಷ್ಟವಾಗಿತ್ತು.",
      image: "https://thumbs.dreamstime.com/b/cute-panda-cartoon-big-eyes-sitting-isolated-white-background-owl-320854001.jpg"
    },
    {
      id: 4,
      name: "ಕಾವ್ಯ",
      role: "ಗ್ರಾಹಕ",
      quote: "The SLN ಕೆಫೆಯಲ್ಲಿ ತುಪ್ಪ ಮಾಸಾಲೆ ಪುಡಿ ದೋಸೆ ತಿಂದೆ. ದೋಸೆ ಕ್ರಿಸ್ಪಿ ಆಗಿ, ತುಪ್ಪದ ಸುವಾಸನೆ ಮತ್ತು ಪುಡಿಯ ರುಚಿ ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು.",
      image: "https://i.pinimg.com/236x/d5/b3/0d/d5b30db5c2e73b9659795d1caf901fb7.jpg"
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
              <span className="text-restaurant-red"></span>
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