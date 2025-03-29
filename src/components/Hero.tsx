
import React from 'react';
import AnimatedTooth from './AnimatedTooth';
import BlurImage from './BlurImage';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center tooth-bg">
      <div className="absolute right-0 top-1/4 -translate-y-1/2">
        <AnimatedTooth 
          size={80} 
          color="#A8E6CF" 
          className="opacity-20" 
          animationType="float" 
        />
      </div>
      <div className="absolute left-10 bottom-20">
        <AnimatedTooth 
          size={60} 
          color="#FFD3B6" 
          className="opacity-20" 
          animationType="wiggle" 
        />
      </div>
      <div className="absolute right-20 bottom-40">
        <AnimatedTooth 
          size={50} 
          color="#FFC6D9" 
          className="opacity-20" 
          animationType="pulse" 
        />
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-slide-up">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-dental-pink text-dental-pink-800 mb-4">
            Pediatric Dental Specialist
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
            Creating <span className="text-dental-blue">Healthy Smiles</span> for Your Little Ones
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I'm a passionate Pedodontist committed to making dental care a positive experience for children. From preventive care to specialized treatments, I ensure each child leaves with a healthy smile.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#about" 
              className="btn btn-primary"
            >
              About Me
            </a>
            <a 
              href="#contact" 
              className="btn border-2 border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white focus:ring-blue-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-slide-in-right">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/20 to-dental-pink/20 rounded-full animate-pulse-gentle"></div>
            <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <BlurImage 
                src="/src/assets/prakriti.jpg"
                alt="Pediatric Dentist" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <a href="#about" className="p-2 rounded-full bg-white shadow-md">
          <ArrowDown size={20} className="text-dental-blue" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
