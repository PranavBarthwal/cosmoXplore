import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, triggerOnce = false }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          observer.unobserve(containerRef.current);
        }
      } else {
        setIsVisible(false);
      }
    });
  }, observerOptions);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  useEffect(() => {
    if (initialRender) {
      setIsVisible(false);
      setInitialRender(false);
    }
  }, [initialRender]);

  return (
    <div
      ref={containerRef}
      style={{
        transform: `translateY(${isVisible ? '0' : '-100%'})`,
        transition: 'transform 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;