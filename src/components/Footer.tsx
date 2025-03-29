
import React from 'react';
import AnimatedTooth from './AnimatedTooth';
import { Instagram, Linkedin, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dental-blue/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AnimatedTooth size={30} animationType="pulse" />
              <span className="font-serif font-bold text-xl">Dr. Prakriti Basukala</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Dedicated to providing excellent pediatric dental care in a comfortable and child-friendly environment.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/prakritibasukala1" className="w-9 h-9 rounded-full bg-dental-blue/10 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://np.linkedin.com/in/prakriti-basukala-361b39356" className="w-9 h-9 rounded-full bg-dental-blue/10 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/prakriti.basukala" className="w-9 h-9 rounded-full bg-dental-blue/10 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-dental-blue/10 flex items-center justify-center text-dental-blue hover:bg-dental-blue hover:text-white transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Education', 'Achievements', 'Publications', 'Creative', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-dental-blue transition-colors duration-200 flex items-center gap-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-dental-blue/50"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Preventive Care',
                'Dental Check-ups',
                'Dental Sealants',
                'Fluoride Treatment',
                'Pediatric Fillings',
                'Special Needs Dentistry'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-dental-blue transition-colors duration-200 flex items-center gap-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-dental-pink/50"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Information</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>College of Dental Surgery</p>
              <p>BPKIHS, Dharan, Nepal</p>
              <p>
                <a href="mailto:basukalaprakriti@gmail.com" className="hover:text-dental-blue transition-colors duration-200">
                  basukalaprakriti@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+9779843159433" className="hover:text-dental-blue transition-colors duration-200">
                  +977 9843159433
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-dental-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Dr. Prakriti Basukala. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-dental-blue font-medium px-4 py-2 rounded-full bg-dental-blue/10 hover:bg-dental-blue hover:text-white transition-colors duration-300"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
