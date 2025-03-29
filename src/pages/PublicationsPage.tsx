import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, BookOpen } from 'lucide-react';
import { publications } from '../data/publications';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PublicationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="section">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-dental-blue font-medium mb-2">
              Dental Education
            </span>
            <h1 className="section-title">All Publications</h1>
            <p className="max-w-2xl mt-6 text-muted-foreground">
              Explore our comprehensive collection of educational articles and resources about pediatric dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication) => (
              <article
                key={publication.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {publication.imageUrl && (
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={publication.imageUrl}
                      alt={publication.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(publication.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{publication.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{publication.category}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-dental-blue">
                    {publication.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {publication.excerpt}
                  </p>

                  <Link
                    to={`/publications/${publication.id}`}
                    className="inline-flex items-center text-dental-blue hover:text-dental-blue/80 font-medium"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationsPage; 