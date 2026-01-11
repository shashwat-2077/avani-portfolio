import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import { getWorkBySlug, WORKS } from '../data/works';

// Simple arrow SVG inline
const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const work = slug ? getWorkBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!work) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl mb-6">Project not found</h2>
        <Link 
          to="/work" 
          className="text-earth hover:underline uppercase text-sm tracking-widest"
        >
          Back to Work
        </Link>
      </div>
    );
  }

  // Get next and previous projects for navigation
  const currentIndex = WORKS.findIndex(w => w.slug === slug);
  const prevWork = currentIndex > 0 ? WORKS[currentIndex - 1] : null;
  const nextWork = currentIndex < WORKS.length - 1 ? WORKS[currentIndex + 1] : null;

  return (
    <article className="min-h-screen">
      {/* Header */}
      <div className="bg-sand/30 pt-8 pb-20">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal-light hover:text-charcoal mb-10 group transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
            Back
          </button>
          
          <Section>
            <span className="block text-earth font-medium text-xs tracking-[0.3em] uppercase mb-4">
              {work.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
              {work.title}
            </h1>
          </Section>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Sidebar - Description & Notes */}
          <div className="lg:col-span-1 space-y-10 lg:sticky lg:top-32 lg:self-start">
            <Section delay={100}>
              <h3 className="font-serif text-2xl mb-4 text-charcoal">About</h3>
              <p className="text-charcoal-light leading-relaxed text-lg">
                {work.description}
              </p>
            </Section>

            {/* Captions/Notes if available */}
            {work.captions && work.captions.length > 0 && (
              <Section delay={200}>
                <h3 className="font-serif text-2xl mb-4 text-charcoal">Notes</h3>
                <ul className="space-y-2">
                  {work.captions.map((caption, i) => (
                    <li 
                      key={i} 
                      className="text-charcoal-light flex items-start gap-3"
                    >
                      <span className="text-earth mt-1.5 text-xs">●</span>
                      {caption}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Category Link */}
            <Section delay={300}>
              <Link 
                to={`/work?category=${encodeURIComponent(work.category)}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal hover:text-earth transition-colors border-b border-charcoal/30 pb-1"
              >
                More in {work.category}
              </Link>
            </Section>
          </div>

          {/* Main Images */}
          <div className="lg:col-span-2 space-y-10">
            {/* Primary Image */}
            <Section>
              <figure className="relative">
                {/* Frame effect */}
                <div className="absolute -top-3 -right-3 w-full h-full border border-earth/20 -z-10 hidden md:block"></div>
                <div className="bg-white p-3 md:p-4 shadow-lg">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-charcoal-light text-right">
                  {work.title}
                </figcaption>
              </figure>
            </Section>

            {/* Additional Images */}
            {work.additionalImages && work.additionalImages.map((img, index) => (
              <Section key={index} delay={(index + 1) * 100}>
                <figure className="relative">
                  <div className="bg-white p-3 md:p-4 shadow-lg">
                    <img 
                      src={img.url} 
                      alt={img.caption || `${work.title} - Image ${index + 2}`} 
                      className="w-full h-auto"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-charcoal-light text-right">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              </Section>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation to other projects */}
      <div className="border-t border-sand mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            {prevWork ? (
              <Link 
                to={`/work/${prevWork.slug}`}
                className="group flex items-center gap-3 text-charcoal hover:text-earth transition-colors"
              >
                <span className="group-hover:-translate-x-1 transition-transform"><ArrowLeft /></span>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-light mb-1">Previous</span>
                  <span className="font-serif text-lg">{prevWork.title}</span>
                </div>
              </Link>
            ) : <div />}
            
            {nextWork ? (
              <Link 
                to={`/work/${nextWork.slug}`}
                className="group flex items-center gap-3 text-charcoal hover:text-earth transition-colors text-right"
              >
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-light mb-1">Next</span>
                  <span className="font-serif text-lg">{nextWork.title}</span>
                </div>
                <span className="group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>

      {/* Back to all projects */}
      <Section className="container mx-auto px-6 pb-16 text-center">
        <Link 
          to="/work" 
          className="inline-block px-10 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-500 uppercase tracking-[0.2em] text-sm"
        >
          View All Projects
        </Link>
      </Section>
    </article>
  );
};

export default ProjectDetail;
