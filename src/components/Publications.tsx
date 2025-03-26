
import React, { useState } from 'react';
import AnimatedTooth from './AnimatedTooth';
import { BookText, FileText, BookOpen, ChevronRight } from 'lucide-react';
import BlurImage from './BlurImage';
import { cn } from '@/lib/utils';

type PublicationType = 'research' | 'blog' | 'all';

interface Publication {
  type: 'research' | 'blog';
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
}

const Publications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PublicationType>('all');
  
  const publications: Publication[] = [
    {
      type: 'research',
      title: 'Effectiveness of Fluoride Varnish in Preventing Early Childhood Caries',
      description: 'A comprehensive study on the long-term effects of fluoride varnish application in preventing tooth decay among preschool children.',
      date: 'March 2023',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop'
    },
    {
      type: 'blog',
      title: 'Creating Positive Dental Experiences for Children with Autism',
      description: 'Strategies and approaches for making dental visits comfortable and stress-free for children with autism spectrum disorders.',
      date: 'January 2023',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1374&auto=format&fit=crop'
    },
    {
      type: 'research',
      title: 'Pulp Therapy Techniques for Primary Teeth: A Comparative Analysis',
      description: 'An evaluation of different pulp therapy techniques for primary teeth, assessing success rates and clinical outcomes.',
      date: 'October 2022',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop'
    },
    {
      type: 'blog',
      title: 'Nutritional Guidelines for Optimal Dental Health in Children',
      description: 'Evidence-based dietary recommendations to promote healthy tooth development and prevent dental problems in children.',
      date: 'July 2022',
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1374&auto=format&fit=crop'
    },
    {
      type: 'research',
      title: 'Behavioral Management Techniques in Pediatric Dentistry',
      description: 'A systematic review of non-pharmacological behavioral management strategies for anxious pediatric dental patients.',
      date: 'April 2022',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1469&auto=format&fit=crop'
    },
    {
      type: 'blog',
      title: 'The Impact of Digital Technology on Pediatric Dental Education',
      description: 'How digital tools and interactive technology are transforming dental education for children and improving oral health awareness.',
      date: 'February 2022',
      image: 'https://images.unsplash.com/photo-1606166187734-a4cb74079037?q=80&w=1470&auto=format&fit=crop'
    }
  ];
  
  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === activeFilter);
  
  return (
    <section id="publications" className="section bg-gradient-to-b from-white to-dental-lavender/10">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-dental-blue font-medium mb-2">
          Knowledge Sharing
        </span>
        <h2 className="section-title">Publications & Blogs</h2>
        <div className="flex gap-3 items-center mt-3">
          <AnimatedTooth size={24} color="#A8E6CF" animationType="pulse" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <BookText className="w-6 h-6 text-dental-blue" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <AnimatedTooth size={24} color="#FFC6D9" animationType="wiggle" />
        </div>
        
        <div className="mt-10 inline-flex bg-muted rounded-full p-1">
          <button
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === 'all' 
                ? "bg-dental-blue text-white shadow-sm" 
                : "hover:bg-muted-foreground/10"
            )}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === 'research' 
                ? "bg-dental-blue text-white shadow-sm" 
                : "hover:bg-muted-foreground/10"
            )}
            onClick={() => setActiveFilter('research')}
          >
            Research Papers
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === 'blog' 
                ? "bg-dental-blue text-white shadow-sm" 
                : "hover:bg-muted-foreground/10"
            )}
            onClick={() => setActiveFilter('blog')}
          >
            Blogs
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPublications.map((publication, index) => (
          <div 
            key={index}
            className="glass-card overflow-hidden rounded-xl card-hover animate-zoom-in"
          >
            {publication.image && (
              <div className="relative h-48">
                <BlurImage
                  src={publication.image}
                  alt={publication.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    publication.type === 'research' 
                      ? "bg-dental-blue/90 text-white" 
                      : "bg-dental-pink/90 text-dental-pink-800"
                  )}>
                    {publication.type === 'research' ? 'Research Paper' : 'Blog Post'}
                  </span>
                </div>
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {publication.type === 'research' 
                  ? <FileText className="w-4 h-4 text-dental-blue" />
                  : <BookOpen className="w-4 h-4 text-dental-pink" />
                }
                <span className="text-xs text-muted-foreground">{publication.date}</span>
              </div>
              
              <h3 className="text-lg font-medium mb-3">
                {publication.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {publication.description}
              </p>
              
              <button className="text-dental-blue flex items-center gap-1 text-sm font-medium hover:underline">
                Read More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <a
          href="#"
          className="btn btn-primary flex items-center gap-2"
        >
          <BookText className="w-5 h-5" />
          View All Publications
        </a>
      </div>
    </section>
  );
};

export default Publications;
