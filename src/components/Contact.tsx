import React, { useState, useEffect } from 'react';
import AnimatedTooth from './AnimatedTooth';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using environment variables for EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        },
        publicKey
      );
      
      if (response.status === 200) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! We\'ll get back to you soon.'
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Status alert component
  const StatusAlert = () => {
    if (!submitStatus) return null;
    
    return (
      <div className={`p-4 rounded-lg mb-5 ${
        submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        <p>{submitStatus.message}</p>
      </div>
    );
  };
  
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
                  <p className="text-muted-foreground">+977 9843159433</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center mt-1">
                  <Mail className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">basukalaprakriti@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Office Location</h4>
                  <p className="text-muted-foreground">College of Dental Surgery<br/>BPKIHS, Dharan, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center mt-1">
                  <Clock className="w-5 h-5 text-dental-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Consultation Hours</h4>
                  <p className="text-muted-foreground">Sunday - Thrusday: 9:00 AM - 5:00 PM<br/>Friday: 9:00 AM - 1:00 PM</p>
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
              href="tel:+9843159433" 
              className="btn btn-primary flex items-center justify-center gap-2 w-full"
            >
              <Phone className="w-5 h-5" />
              +977 9843159433
            </a>
          </div>
        </div>
        
        <div className="md:col-span-3 animate-slide-in-right">
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            <StatusAlert />
            
            <form className="space-y-5" onSubmit={handleSubmit}>
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
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                  value={formData.subject}
                  onChange={handleChange}
                  required
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
