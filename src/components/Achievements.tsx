
import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import CertificateIcon from './icons/CertificateIcon';
import { cn } from '@/lib/utils';
import AnimatedTooth from './AnimatedTooth';

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  year: string;
  className?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon,
  title,
  description,
  year,
  className
}) => {
  return (
    <div className={cn(
      "glass-card p-6 card-hover animate-zoom-in",
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="mt-1">{icon}</div>
        <div>
          <div className="text-xs font-medium text-dental-blue uppercase tracking-wider mb-1">{year}</div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-dental-blue font-medium mb-2">
          Recognitions
        </span>
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="flex gap-3 items-center mt-3">
          <AnimatedTooth size={24} color="#FFD3B6" animationType="pulse" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <Trophy className="w-6 h-6 text-dental-blue" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <AnimatedTooth size={24} color="#FFC6D9" animationType="float" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-serif font-bold mb-2 flex items-center gap-2">
            <Award className="w-6 h-6 text-dental-blue" />
            Awards & Honors
          </h3>
          
          <AchievementCard
            icon={<Trophy className="w-10 h-10 text-yellow-500" />}
            title="Outstanding Pediatric Dental Care"
            description="Recognized for exceptional care and innovative approaches to pediatric dentistry by the Dental Association."
            year="2023"
          />
          
          <AchievementCard
            icon={<Medal className="w-10 h-10 text-blue-500" />}
            title="Excellence in Dental Research"
            description="Awarded for research contribution in the field of preventive pediatric dentistry."
            year="2022"
            className="transform md:translate-x-12"
          />
          
          <AchievementCard
            icon={<Award className="w-10 h-10 text-purple-500" />}
            title="Community Service Award"
            description="Honored for dedication to providing dental care to underserved children in rural communities."
            year="2021"
          />
        </div>
        
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-serif font-bold mb-2 flex items-center gap-2">
            <CertificateIcon className="w-6 h-6 text-dental-blue" />
            Certifications & Training
          </h3>
          
          <AchievementCard
            icon={<CertificateIcon className="w-10 h-10 text-dental-mint" />}
            title="Advanced Pediatric Dental Care"
            description="Specialized training in managing dental anxiety and behavioral issues in young patients."
            year="2023"
          />
          
          <AchievementCard
            icon={<CertificateIcon className="w-10 h-10 text-dental-peach" />}
            title="Pediatric Dental Emergency Management"
            description="Certified in handling dental emergencies specific to children and adolescents."
            year="2022"
            className="transform md:translate-x-12"
          />
          
          <AchievementCard
            icon={<CertificateIcon className="w-10 h-10 text-dental-pink" />}
            title="Special Needs Dentistry"
            description="Specialized training in providing dental care for children with special healthcare needs."
            year="2021"
          />
        </div>
      </div>
      
      <div className="mt-16 relative">
        <div className="absolute -left-4 -top-4 w-16 h-16">
          <AnimatedTooth size={40} color="#D4C4FB" animationType="float" />
        </div>
        <div className="absolute -right-4 -bottom-4 w-16 h-16">
          <AnimatedTooth size={40} color="#FFD3B6" animationType="rotate" />
        </div>
        
        <div className="bg-gradient-to-r from-dental-blue/10 to-dental-lavender/20 rounded-2xl p-8 text-center animate-slide-up">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Professional Memberships
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "International Association of Pediatric Dentistry",
              "Dental Association Member",
              "Society for Pediatric Oral Health",
              "Child Dental Care Network",
              "Pediatric Dental Research Group",
              "National Pedodontic Society"
            ].map((membership, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-dental-blue"></div>
                <span className="text-sm">{membership}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
