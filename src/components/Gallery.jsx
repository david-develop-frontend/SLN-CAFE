import React, { useState } from 'react';
import { Reveal, RevealGroup } from '@/components/ui/reveal';
import Image1 from "../images/one.png";
import Image2 from "../images/2.jpeg";
import Image3 from "../images/3.jpeg";
import Image4 from "../images/4.jpeg";
import Image5 from "../images/5.jpeg";
import Image6 from "../images/owner.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      id: 1,
      src: Image1,
      alt: "Food plating",
      category: "food"
    },
    {
      id: 2,
      src: Image6,
      alt: "Restaurant interior",
      category: "interior"
    },
    {
      id: 3,
      src: Image3,
      alt: "Fine dining",
      category: "food"
    },
    {
      id: 4,
      src: Image4,
      alt: "Gourmet plate",
      category: "food"
    },
    {
      id: 5,
      src: Image5,
      alt: "Restaurant event",
      category: "events"
    },
    {
      id: 6,
      src: Image2,
      alt: "Chef preparing food",
      category: "kitchen"
    }
  ];
  
  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };
  
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="section-subtitle">Gallery</span>
            {/* <h2 className="section-title text-3xl md:text-4xl">
              Check Our <span className="text-restaurant-red">Food Gallery</span>
            </h2> */}
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <RevealGroup>
            {galleryImages.map((image) => (
              <Reveal key={image.id} animation="fade-up">
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg h-64"
                  onClick={() => openImageModal(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-300 flex flex-col items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                      <path d="m22 16.92-6.37-6.37a10 10 0 1 0-5.55 5.55l6.37 6.37a4 4 0 1 0 5.55-5.55Z"/><circle cx="10" cy="10" r="3"/>
                    </svg>
                    <p className="font-medium">View Image</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-restaurant-red transition-300"
              onClick={closeImageModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg animate-fade-in shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
