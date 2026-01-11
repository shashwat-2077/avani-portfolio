import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import { WORKS, CategoryType } from '../data/works';

const FILTERS: CategoryType[] = [
  'All', 
  'Product Design', 
  'Posters & Typography', 
  'Fashion Design', 
  'Model Making', 
  'Different Art Mediums', 
  'Rough Sketches',
  'Mixed Work'
];

const Work: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as CategoryType) || 'All';
  const [activeFilter, setActiveFilter] = useState<CategoryType>(initialCategory);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') as CategoryType;
    if (cat && FILTERS.includes(cat)) {
      setActiveFilter(cat);
    } else if (!cat) {
      setActiveFilter('All');
    }
  }, [searchParams]);

  const handleFilterChange = (filter: CategoryType) => {
    if (filter === activeFilter) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      if (filter === 'All') {
        setSearchParams({});
      } else {
        setSearchParams({ category: filter });
      }
      setIsAnimating(false);
    }, 200);
  };

  const filteredWorks = activeFilter === 'All' 
    ? WORKS 
    : WORKS.filter(w => w.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-sand/30 pt-8 pb-16">
        <div className="container mx-auto px-6">
          <Section>
            <span className="block text-earth text-xs tracking-[0.3em] uppercase mb-4">Portfolio</span>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal">Selected Work</h1>
          </Section>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Filter Menu */}
        <Section delay={100} className="mb-16">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-b border-sand pb-6">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`text-xs uppercase tracking-[0.15em] py-2 px-1 transition-all duration-300 relative ${
                  activeFilter === filter 
                    ? 'text-charcoal font-bold' 
                    : 'text-charcoal-light hover:text-earth'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-earth"></span>
                )}
              </button>
            ))}
          </div>
        </Section>

        {/* Gallery Grid - Masonry-like with varied sizes */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-200 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {filteredWorks.map((work, index) => {
            // Create visual variety
            const isLarge = index === 0 || index === 4;
            
            return (
              <Section 
                key={work.slug} 
                delay={(index % 3) * 80}
                className={isLarge ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Link 
                  to={`/work/${work.slug}`} 
                  className="group block cursor-pointer"
                >
                  {/* Image with frame effect */}
                  <div className="relative overflow-hidden bg-sand mb-5">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500 flex items-center justify-center">
                      <span className="bg-white px-6 py-3 uppercase tracking-[0.15em] text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        View Project
                      </span>
                    </div>

                    {/* Subtle frame border on hover */}
                    <div className="absolute inset-3 border border-white/0 group-hover:border-white/50 transition-all duration-500 pointer-events-none"></div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-earth">
                      {work.category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl group-hover:text-earth transition-colors duration-300">
                      {work.title}
                    </h3>
                  </div>
                </Link>
              </Section>
            );
          })}
        </div>

        {filteredWorks.length === 0 && (
          <div className="text-center py-24">
            <p className="text-charcoal-light italic text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
