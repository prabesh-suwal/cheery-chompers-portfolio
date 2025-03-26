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
              Doctor of Dental Surgery (DDS)
            </h3>
          </div>
          <p className="text-muted-foreground">
            University of Example, Dental School
          </p>
          <div className="flex items-center mt-2">
            <Calendar className="mr-2 w-4 h-4 text-gray-500" />
            <span>2018 - 2022</span>
          </div>
          <div className="flex items-center mt-2">
            <MapPin className="mr-2 w-4 h-4 text-gray-500" />
            <span>City, Country</span>
          </div>
          <p className="mt-4">
            Relevant coursework: Oral Surgery, Periodontics, Prosthodontics,
            Endodontics, Pediatric Dentistry.
          </p>
        </div>

        {/* Education Card 2 */}
        <div className="glass-card p-6 card-hover">
          <div className="flex items-center mb-4">
            <BookOpen className="mr-2 w-6 h-6 text-dental-blue" />
            <h3 className="font-semibold text-xl">
              Bachelor of Science in Biology
            </h3>
          </div>
          <p className="text-muted-foreground">
            Science University of Examples
          </p>
          <div className="flex items-center mt-2">
            <Calendar className="mr-2 w-4 h-4 text-gray-500" />
            <span>2014 - 2018</span>
          </div>
          <div className="flex items-center mt-2">
            <MapPin className="mr-2 w-4 h-4 text-gray-500" />
            <span>City, Country</span>
          </div>
          <p className="mt-4">
            Relevant coursework: General Biology, Organic Chemistry,
            Biochemistry, Anatomy, Physiology.
          </p>
        </div>

        {/* Education Card 3 */}
        <div className="glass-card p-6 card-hover">
          <div className="flex items-center mb-4">
            <Award className="mr-2 w-6 h-6 text-dental-blue" />
            <h3 className="font-semibold text-xl">
              Continuing Education in Implant Dentistry
            </h3>
          </div>
          <p className="text-muted-foreground">
            International Dental Implant Association
          </p>
          <div className="flex items-center mt-2">
            <Calendar className="mr-2 w-4 h-4 text-gray-500" />
            <span>2023</span>
          </div>
          <div className="flex items-center mt-2">
            <MapPin className="mr-2 w-4 h-4 text-gray-500" />
            <span>Online</span>
          </div>
          <p className="mt-4">
            Advanced training in implant placement, restoration, and
            maintenance.
          </p>
        </div>

        {/* Education Card 4 */}
        <div className="glass-card p-6 card-hover">
          <div className="flex items-center mb-4">
            <HeartIcon className="mr-2 w-6 h-6 text-dental-blue" />
            <h3 className="font-semibold text-xl">
              Certification in Cosmetic Dentistry
            </h3>
          </div>
          <p className="text-muted-foreground">
            American Academy of Cosmetic Dentistry
          </p>
          <div className="flex items-center mt-2">
            <Calendar className="mr-2 w-4 h-4 text-gray-500" />
            <span>2022</span>
          </div>
          <div className="flex items-center mt-2">
            <MapPin className="mr-2 w-4 h-4 text-gray-500" />
            <span>City, Country</span>
          </div>
          <p className="mt-4">
            Specialized training in smile design, veneers, and teeth
            whitening.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
