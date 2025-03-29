import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { publications } from '../data/publications';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const publication = publications.find(pub => pub.id === id);

  if (!publication) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="section text-center pt-20">
          <h2 className="text-2xl font-bold text-dental-blue mb-4">Publication Not Found</h2>
          <Link to="/publications" className="text-dental-blue hover:text-dental-blue/80">
            Return to Publications
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="section pt-20">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/publications"
            className="inline-flex items-center text-dental-blue hover:text-dental-blue/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Publications
          </Link>

          {publication.imageUrl && (
            <div className="aspect-video relative rounded-2xl overflow-hidden mb-8">
              <img
                src={publication.imageUrl}
                alt={publication.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
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

          <h1 className="text-3xl font-bold text-dental-blue mb-6">
            {publication.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            {publication.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link
              to="/publications"
              className="inline-flex items-center text-dental-blue hover:text-dental-blue/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Publications
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default PublicationDetail; 