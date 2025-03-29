import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from 'lucide-react';
import HeartIcon from './icons/HeartIcon';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Card 1 */}
        <div className="glass-card p-6 card-hover">
          <div className="flex items-center mb-4">
            <GraduationCap className="mr-2 w-6 h-6 text-dental-blue" />
            <h3 className="font-semibold text-xl">
              Masters of Dental Surgery (MDS)
            </h3>
          </div>
          <p className="text-muted-foreground">
            BPKIHS
          </p>
          <div className="flex items-center mt-2">
            <Calendar className="mr-2 w-4 h-4 text-gray-500" />
            <span>2024 - Present</span>
          </div>
          <div className="flex items-center mt-2">
            <MapPin className="mr-2 w-4 h-4 text-gray-500" />
            <span>Dharan, Nepal</span>
          </div>
          <p className="mt-4">
            Relevant coursework: Pedodontics and Preventive Dentistry
          </p>
        </div>

        {/* Education Card 2 */}
        <div className="glass-card p-6 card-hover">
          <div className="flex items-center mb-4">
            <BookOpen className="mr-2 w-6 h-6 text-dental-blue" />
            <h3 className="font-semibold text-xl">
              Bachelor of Dental Surgery
            </h3>
          </div>
          <p className="text-muted-foreground">
            Kist Medical College, Tribhuvan University
          </p>
          <div className="flex items-center mt-2">
            <Calendar className="mr-2 w-4 h-4 text-gray-500" />
            <span>2014 - 2020</span>
          </div>
          <div className="flex items-center mt-2">
            <MapPin className="mr-2 w-4 h-4 text-gray-500" />
            <span>Lalitpur, Nepal</span>
          </div>
          <p className="mt-4">
            Relevant coursework: Microbiology, Pathology, Biochemistry, Anatomy, Physiology, Pharmacology, Radiology, Oral Medicine, 
            Oral Surgery, Oral Radiology.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default Education;
