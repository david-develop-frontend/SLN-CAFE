import React, { useEffect, useRef } from 'react';

export function Reveal({ 
  children, 
  animation = "fade-up", 
  delay = 0,
  threshold = 0.1,
  className = ""
}) {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add(`animate-${animation}`);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animation, delay, threshold]);
  
  return (
    <div ref={ref} className={`opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function RevealGroup({ children, staggerDelay = 100 }) {
  return React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        delay: index * staggerDelay,
      });
    }
    return child;
  });
}