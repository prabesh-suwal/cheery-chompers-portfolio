
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedTooth from './AnimatedTooth';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Publications', href: '#publications' },
    { name: 'Creative', href: '#creative' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center gap-2 text-lg font-medium"
        >
          <AnimatedTooth size={30} animationType="pulse" />
          <span className="font-serif font-bold text-xl">Dr. Prakriti Basukala</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium relative overflow-hidden group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dental-blue transform translate-y-1 transition-transform duration-300 group-hover:translate-y-0"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-foreground" />
          ) : (
            <Menu size={24} className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 pt-16 bg-white/95 backdrop-blur-md z-40 md:hidden">
          <nav className="flex flex-col items-center gap-6 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2 px-4 rounded-full hover:bg-muted transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
