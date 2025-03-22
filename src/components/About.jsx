import React from 'react';
import { Reveal, RevealGroup } from '@/components/ui/reveal';

const About = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/>
        </svg>
      ),
      title: 'Delicious Food',
      description: 'Our chefs prepare every dish with high quality ingredients and love.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
        </svg>
      ),
      title: 'Professional Service',
      description: 'Our team of professionals ensures you have the finest dining experience.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v6c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Quality Ingredients',
      description: 'We source the freshest ingredients from local and organic producers.'
    }
  ];
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <Reveal animation="fade-in" className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                alt="About The SLN Cafe" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{ height: '600px' }}
              />
              
              {/* Experience Badge */}
              {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-full shadow-lg">
                <div className="w-32 h-32 rounded-full bg-restaurant-red flex flex-col items-center justify-center text-center p-2 transition-300 hover:scale-105">
                  <span className="text-4xl font-bold text-white">15</span>
                  <span className="text-white font-medium text-sm">Years of<br/>Experience</span>
                </div>
              </div> */}
           <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-full shadow-2xl">
  <div className="w-44 h-44 rounded-full bg-restaurant-red flex flex-col items-center justify-center text-center p-6 transition-transform duration-300 hover:scale-110">
    <span className="text-2xl font-bold text-white tracking-wide leading-snug">
      Budget <br /> Friendly
    </span>
    <span className="text-white font-medium text-sm opacity-90 mt-2">
      Delicious meals <br /> at affordable prices!
    </span>
  </div>



</div>

            </div>
          </Reveal>
          
          {/* Right Column - Content */}
          <div>
            <RevealGroup>
              <Reveal>
                <span className="section-subtitle">About Us</span>
                {/* <h2 className="section-title text-3xl md:text-4xl mb-6">
                  Learn More <span className="text-restaurant-red">About Us</span>
                </h2> */}
              </Reveal>
              
              <Reveal delay={300}>
                <p className="text-restaurant-text mb-6 leading-relaxed">
                  Welcome to SLN Cafe, where passion meets cuisine.we've been serving 
                  exceptional dishes crafted with love and the finest ingredients. Our restaurant 
                  is a place where culinary art and warm hospitality create memorable dining experiences.
                </p>
              </Reveal>
              
              <Reveal delay={400}>
                <p className="text-restaurant-text mb-8 leading-relaxed">
                  Our philosophy is simple: use the freshest seasonal ingredients, prepare them with 
                  care, and serve them with warmth. Every plate tells a story of tradition, innovation, 
                  and commitment to excellence.
                </p>
              </Reveal>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <Reveal key={index} delay={500 + (index * 200)}>
                    <div className="flex items-start">
                      <div className="mr-4 text-restaurant-red">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                        <p className="text-restaurant-text">{feature.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;