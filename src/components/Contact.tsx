
import React from 'react';
import AnimatedTooth from './AnimatedTooth';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-dental-blue font-medium mb-2">
          Get In Touch
        </span>
        <h2 className="section-title">Contact Me</h2>
        <div className="flex gap-3 items-center mt-3">
          <AnimatedTooth size={24} color="#FFC6D9" animationType="pulse" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <Mail className="w-6 h-6 text-dental-blue" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <AnimatedTooth size={24} color="#FFD3B6" animationType="wiggle" />
        </div>
        
        <p className="max-w-2xl mt-6 text-muted-foreground">
          Have questions about pediatric dental care? Need to schedule a consultation? Feel free to reach out! I'm here to address your concerns and provide the best care for your child.
        </p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-8 animate-slide-up">
          <div className="bg-dental-blue/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center mt-1">
                  <Phone className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+977 9812345678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center mt-1">
                  <Mail className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">dr.smile@pediatricdental.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Office Location</h4>
                  <p className="text-muted-foreground">Children's Dental Center<br/>BPKHS, Dharan, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center mt-1">
                  <Clock className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Consultation Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dental-pink/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
            <p className="text-muted-foreground mb-4">
              For dental emergencies outside of regular hours, please call:
            </p>
            <a 
              href="tel:+9779876543210" 
              className="btn btn-primary flex items-center justify-center gap-2 w-full"
            >
              <Phone className="w-5 h-5" />
              +977 9876543210
            </a>
          </div>
        </div>
        
        <div className="md:col-span-3 animate-slide-in-right">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-dental-blue/30"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-dental-blue/30"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-dental-blue/30"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-dental-blue/30"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-dental-blue/30 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
