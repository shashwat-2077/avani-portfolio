import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { CATEGORIES, SITE_INFO } from '../data/works';

// Simple arrow SVG inline
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 z-10">
            <Section>
              <span className="block text-earth font-sans text-sm tracking-[0.3em] uppercase mb-6">
                Designer • Artist • Storyteller
              </span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-charcoal">
                Avani<br/>Walture
              </h1>
            </Section>
            <Section delay={100}>
              <p className="text-xl md:text-2xl text-charcoal-light font-light leading-relaxed max-w-lg mb-10 italic">
                {SITE_INFO.tagline}
              </p>
            </Section>
            <Section delay={200}>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/work" 
                  className="px-8 py-4 bg-charcoal text-white hover:bg-earth transition-all duration-500 font-sans tracking-widest text-sm uppercase"
                >
                  View Work
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-500 font-sans tracking-widest text-sm uppercase"
                >
                  Get in Touch
                </Link>
              </div>
            </Section>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <Section className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-earth/30 -z-10 hidden md:block"></div>
              <div className="relative overflow-hidden shadow-2xl">
                <img 
                  src="/images/cover.png" 
                  alt="Portfolio Cover - Avani Walture's Design Work" 
                  className="w-full h-auto object-cover transition-transform duration-[1.5s] hover:scale-105"
                />
                {/* Paper texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent pointer-events-none"></div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <Section className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <span className="block text-earth text-xs tracking-[0.3em] uppercase mb-2">Explore</span>
                <h2 className="font-serif text-4xl md:text-5xl">Selected Works</h2>
                <div className="h-0.5 w-16 bg-earth mt-4"></div>
              </div>
              <Link 
                to="/work" 
                className="flex items-center gap-3 text-charcoal hover:text-earth transition-colors uppercase text-xs tracking-[0.2em] group"
              >
                View All Work 
                <span className="group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
              </Link>
            </div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CATEGORIES.map((cat, index) => (
              <Section key={cat.id} delay={(index % 3) * 100}>
                <Link 
                  to={`/work?category=${encodeURIComponent(cat.name)}`} 
                  className="group block relative overflow-hidden"
                >
                  {/* Image container with frame effect */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                      <span className="px-6 py-3 bg-white text-charcoal text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        View Category
                      </span>
                    </div>
                    {/* Frame border on hover */}
                    <div className="absolute inset-4 border border-white/0 group-hover:border-white/60 transition-all duration-500 pointer-events-none"></div>
                  </div>
                  
                  {/* Title below */}
                  <div className="pt-5">
                    <h3 className="font-serif text-xl md:text-2xl group-hover:text-earth transition-colors duration-300">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Contents Preview Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Section>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border border-earth/20 -z-10 hidden md:block"></div>
                <img 
                  src="/images/contents.png" 
                  alt="Portfolio Contents Overview" 
                  className="w-full h-auto shadow-lg"
                />
              </div>
            </Section>
            <Section delay={100}>
              <span className="block text-earth text-xs tracking-[0.3em] uppercase mb-4">The Collection</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">A Journey Through Design</h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                From product concepts to typography, fashion illustrations to architectural models—each piece tells a story of creativity, empathy, and purposeful design.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-3 text-charcoal hover:text-earth transition-colors uppercase text-xs tracking-[0.2em] group border-b border-charcoal pb-1"
              >
                Learn About My Process 
                <span className="group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
              </Link>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
