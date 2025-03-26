
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Publications from '@/components/Publications';
import Creative from '@/components/Creative';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedTooth from '@/components/AnimatedTooth';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling with offset for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          const navbarHeight = 80; // Approximate navbar height
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Floating animated teeth background
  const floatingTeeth = Array.from({ length: 8 }).map((_, index) => {
    const size = Math.floor(Math.random() * 40) + 20; // Random size between 20 and 60
    const top = `${Math.floor(Math.random() * 100)}%`;
    const left = `${Math.floor(Math.random() * 100)}%`;
    const delay = Math.floor(Math.random() * 5);
    const animationType = ['float', 'pulse', 'wiggle', 'rotate'][Math.floor(Math.random() * 4)];
    const color = ['#33C3F0', '#FFC6D9', '#A8E6CF', '#FFD3B6', '#D4C4FB'][Math.floor(Math.random() * 5)];
    
    return (
      <div 
        key={index}
        className="fixed pointer-events-none opacity-10"
        style={{ top, left, animationDelay: `${delay}s` }}
      >
        <AnimatedTooth 
          size={size} 
          color={color} 
          animationType={animationType as any} 
        />
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Background floating teeth */}
      {floatingTeeth}
      
      {/* Site Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Publications />
        <Creative />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
