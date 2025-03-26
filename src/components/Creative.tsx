
import React, { useState } from 'react';
import AnimatedTooth from './AnimatedTooth';
import { Music, BookText, Pencil, Play, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CreativeType = 'poems' | 'songs' | 'stories' | 'all';

interface CreativeWork {
  type: 'poems' | 'songs' | 'stories';
  title: string;
  excerpt: string;
  date: string;
  backgroundColor: string;
  icon: React.ReactNode;
}

const Creative: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CreativeType>('all');
  
  const creativeWorks: CreativeWork[] = [
    {
      type: 'poems',
      title: "A Child's Smile",
      excerpt: "Like sunshine after rain, a child's smile brightens the day. Pure joy, innocent and free, chasing all worries away...",
      date: "April 2023",
      backgroundColor: "bg-dental-pink/10",
      icon: <Pencil className="w-10 h-10 text-dental-pink" />
    },
    {
      type: 'songs',
      title: "Brushing Time",
      excerpt: "It's time to brush, it's time to shine! Let's make those teeth sparkle divine. Up and down, left and right, brushing makes your smile so bright...",
      date: "March 2023",
      backgroundColor: "bg-dental-blue/10",
      icon: <Music className="w-10 h-10 text-dental-blue" />
    },
    {
      type: 'stories',
      title: "The Adventures of Toothy and Friends",
      excerpt: "Once upon a time in Smileville, there lived a brave little tooth named Toothy. Every day, Toothy and his friends would protect their home from the sugar monsters...",
      date: "February 2023",
      backgroundColor: "bg-dental-lavender/10",
      icon: <BookText className="w-10 h-10 text-dental-lavender" />
    },
    {
      type: 'poems',
      title: "The Tooth Fairy's Dance",
      excerpt: "Under moonlight's gentle gleam, the tooth fairy dances in a dream. Collecting treasures with tender care, leaving magic everywhere...",
      date: "December 2022",
      backgroundColor: "bg-dental-pink/10",
      icon: <Pencil className="w-10 h-10 text-dental-pink" />
    },
    {
      type: 'songs',
      title: "Smile Like the Sun",
      excerpt: "Your smile is like the sun, so bright and warm. Sharing your joy from dusk till dawn. Let it shine through every day, chasing the clouds away...",
      date: "November 2022",
      backgroundColor: "bg-dental-blue/10",
      icon: <Music className="w-10 h-10 text-dental-blue" />
    },
    {
      type: 'stories',
      title: "The Brave Little Brush",
      excerpt: "In the land of Bath, there lived a small toothbrush named Bristle. Though small in size, Bristle had the biggest dreams of all the bathroom accessories...",
      date: "October 2022",
      backgroundColor: "bg-dental-lavender/10",
      icon: <BookText className="w-10 h-10 text-dental-lavender" />
    }
  ];
  
  const filteredWorks = activeFilter === 'all' 
    ? creativeWorks 
    : creativeWorks.filter(work => work.type === activeFilter);
  
  return (
    <section id="creative" className="section bg-gradient-to-b from-dental-lavender/10 to-white">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-dental-blue font-medium mb-2">
          Creative Expression
        </span>
        <h2 className="section-title">My Creative Corner</h2>
        <div className="flex gap-3 items-center mt-3">
          <AnimatedTooth size={24} color="#FFD3B6" animationType="wiggle" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <Pencil className="w-6 h-6 text-dental-blue" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <AnimatedTooth size={24} color="#A8E6CF" animationType="float" />
        </div>
        
        <p className="max-w-2xl mt-6 text-muted-foreground">
          Beyond dentistry, I express my creativity through writing poems, composing songs, and crafting stories. This artistic outlet complements my professional life and helps me connect with my young patients through the power of imagination.
        </p>
        
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
            All Works
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === 'poems' 
                ? "bg-dental-blue text-white shadow-sm" 
                : "hover:bg-muted-foreground/10"
            )}
            onClick={() => setActiveFilter('poems')}
          >
            Poems
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === 'songs' 
                ? "bg-dental-blue text-white shadow-sm" 
                : "hover:bg-muted-foreground/10"
            )}
            onClick={() => setActiveFilter('songs')}
          >
            Songs
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === 'stories' 
                ? "bg-dental-blue text-white shadow-sm" 
                : "hover:bg-muted-foreground/10"
            )}
            onClick={() => setActiveFilter('stories')}
          >
            Stories
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work, index) => (
          <div 
            key={index}
            className={cn(
              "rounded-xl p-6 card-hover animate-zoom-in",
              work.backgroundColor
            )}
          >
            <div className="mb-4">{work.icon}</div>
            
            <div className="mb-1 text-xs text-muted-foreground">
              {work.date}
            </div>
            
            <h3 className="text-xl font-medium mb-3">
              {work.title}
            </h3>
            
            <p className="text-muted-foreground mb-4">
              "{work.excerpt}"
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-medium tracking-wider">
                {work.type === 'poems' && 'Poem'}
                {work.type === 'songs' && 'Song'}
                {work.type === 'stories' && 'Story'}
              </span>
              
              <button 
                className={cn(
                  "flex items-center gap-1 text-sm font-medium rounded-full p-2",
                  work.type === 'poems' && "text-dental-pink hover:bg-dental-pink/20",
                  work.type === 'songs' && "text-dental-blue hover:bg-dental-blue/20",
                  work.type === 'stories' && "text-dental-lavender hover:bg-dental-lavender/20",
                )}
              >
                {work.type === 'songs' ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-16">
        <div className="bg-gradient-to-r from-dental-pink/20 to-dental-blue/20 rounded-2xl p-8 max-w-3xl text-center animate-slide-up">
          <h3 className="text-2xl font-serif font-medium mb-6">
            How Creativity Enhances My Practice
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-dental-pink/20 flex items-center justify-center mb-4">
                <Pencil className="w-8 h-8 text-dental-pink" />
              </div>
              <p className="text-sm">Creates meaningful connections with young patients</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-dental-blue/20 flex items-center justify-center mb-4">
                <Music className="w-8 h-8 text-dental-blue" />
              </div>
              <p className="text-sm">Transforms dental care into engaging experiences</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-dental-lavender/20 flex items-center justify-center mb-4">
                <BookText className="w-8 h-8 text-dental-lavender" />
              </div>
              <p className="text-sm">Helps children overcome dental anxiety</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
