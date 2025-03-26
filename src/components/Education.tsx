
import React from 'react';
import AnimatedTooth from './AnimatedTooth';
import { BookOpen, GraduationCap, Calendar, Briefcase } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  location,
  description,
  icon,
  isLast = false
}) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-dental-blue/10 flex items-center justify-center z-10">
          {icon}
        </div>
        {!isLast && <div className="w-0.5 bg-dental-blue/20 grow mt-3"></div>}
      </div>
      <div className={`pb-10 ${isLast ? '' : 'mb-2'}`}>
        <div className="flex items-center gap-2 mb-1">
          <Calendar className="w-4 h-4 text-dental-blue" />
          <span className="text-sm font-medium text-dental-blue">{year}</span>
        </div>
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground mb-3">{location}</p>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="section bg-gradient-to-b from-dental-mint/10 to-white">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-dental-blue font-medium mb-2">
          Education & Qualifications
        </span>
        <h2 className="section-title">My Academic Journey</h2>
        <div className="flex gap-3 items-center mt-3">
          <AnimatedTooth size={24} color="#FFC6D9" animationType="wiggle" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <GraduationCap className="w-6 h-6 text-dental-blue" />
          <div className="w-16 h-0.5 bg-dental-blue/20 rounded-full"></div>
          <AnimatedTooth size={24} color="#A8E6CF" animationType="float" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-8 animate-slide-up">
          <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-dental-blue" />
            Educational Background
          </h3>
          
          <TimelineItem 
            year="2024 - Present"
            title="Masters in Pedodontics"
            location="B.P. Koirala Institute of Health Sciences (BPKHS)"
            description="Currently pursuing specialized training in advanced pediatric dental care, focusing on treatment methodologies for complex dental issues in children."
            icon={<GraduationCap className="w-5 h-5 text-dental-blue" />}
          />
          
          <TimelineItem 
            year="2018 - 2022"
            title="Bachelor of Dental Surgery (BDS)"
            location="Dental College"
            description="Completed comprehensive dental education with special interest in pediatric dentistry. Developed foundational skills in dental diagnostics, treatment planning, and patient care."
            icon={<BookOpen className="w-5 h-5 text-dental-blue" />}
            isLast={true}
          />
        </div>
        
        <div className="space-y-8 animate-slide-in-right">
          <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-dental-blue" />
            Professional Experience
          </h3>
          
          <TimelineItem 
            year="2022 - 2024"
            title="Dental Internship"
            location="Children's Dental Hospital"
            description="Completed a rigorous 2-year internship program focused on pediatric dental care. Gained extensive hands-on experience in behavior management techniques, preventive care, restorative procedures, and emergency dental treatments for children."
            icon={<Briefcase className="w-5 h-5 text-dental-blue" />}
          />
          
          <TimelineItem 
            year="2022"
            title="Volunteer Dentist"
            location="Rural Health Initiative"
            description="Participated in dental camps in underserved communities, providing essential dental care and oral health education to children with limited access to healthcare services."
            icon={<Heart className="w-5 h-5 text-dental-blue" />}
            isLast={true}
          />
        </div>
      </div>
      
      <div className="mt-16 bg-dental-blue/5 rounded-2xl p-8 animate-zoom-in">
        <h3 className="text-2xl font-serif font-bold mb-6 text-center">Specialized Skills</h3>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Pediatric Behavior Management",
            "Preventive Dentistry",
            "Children's Restorative Care",
            "Pediatric Dental Emergencies",
            "Special Needs Dentistry",
            "Pulp Therapy",
            "Interceptive Orthodontics",
            "Child-Friendly Communication"
          ].map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm"
            >
              <AnimatedTooth 
                size={20} 
                color="#33C3F0" 
                animationType={index % 2 === 0 ? "pulse" : "float"} 
              />
              <span className="text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
