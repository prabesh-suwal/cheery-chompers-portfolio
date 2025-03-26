
import React from 'react';
import BlurImage from './BlurImage';
import AnimatedTooth from './AnimatedTooth';
import { Heart, Smile, Baby } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-dental-mint/10">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-dental-blue font-medium mb-2">
          About Me
        </span>
        <h2 className="section-title">Hi, I'm Dr. Smile</h2>
        <div className="flex gap-3 items-center mt-3">
          <AnimatedTooth size={24} color="#FFD3B6" animationType="pulse" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <AnimatedTooth size={24} color="#A8E6CF" animationType="float" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <AnimatedTooth size={24} color="#FFC6D9" animationType="rotate" />
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 animate-slide-up">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full bg-dental-lavender/20 rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-lg">
              <BlurImage 
                src="https://images.unsplash.com/photo-1594067598377-478c61d59f3f?q=80&w=1374&auto=format&fit=crop"
                alt="Pediatric Dentist" 
                className="w-full h-auto aspect-[3/4] object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 text-dental-blue">
                <Smile className="w-5 h-5" />
                <span className="font-medium">10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 animate-slide-in-right">
          <p className="text-lg mb-6 leading-relaxed">
            I am a dedicated Pedodontist with a passion for providing specialized dental care for infants, children, and adolescents. My journey in pediatric dentistry began with a commitment to create positive dental experiences for young patients, shaping their attitudes toward oral health for a lifetime.
          </p>
          
          <p className="text-lg mb-8 leading-relaxed">
            Currently pursuing my Masters in Pedodontics at BPKHS in 2024, I bring over 2 years of internship experience to my practice. I believe in a holistic approach to dental care that prioritizes gentle techniques, patient education, and preventive measures.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <div className="glass-card p-5 text-center card-hover">
              <div className="w-12 h-12 rounded-full bg-dental-blue/10 flex items-center justify-center mx-auto mb-4">
                <Baby className="w-6 h-6 text-dental-blue" />
              </div>
              <h3 className="font-medium">Child-Friendly Care</h3>
            </div>
            
            <div className="glass-card p-5 text-center card-hover">
              <div className="w-12 h-12 rounded-full bg-dental-pink/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-dental-pink" />
              </div>
              <h3 className="font-medium">Gentle Approach</h3>
            </div>
            
            <div className="glass-card p-5 text-center card-hover">
              <div className="w-12 h-12 rounded-full bg-dental-mint/10 flex items-center justify-center mx-auto mb-4">
                <Smile className="w-6 h-6 text-dental-mint" />
              </div>
              <h3 className="font-medium">Positive Experience</h3>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#education" className="btn btn-primary">
              My Qualifications
            </a>
            <a href="#creative" className="btn btn-secondary">
              My Creative Side
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
