import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_INFO } from '../data/works';

// Inline SVG icons (no external library)
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/work' && location.pathname.startsWith('/work'));
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 relative py-1 ${
        isActive 
          ? 'text-charcoal font-semibold' 
          : 'text-charcoal-light hover:text-charcoal'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-earth"></span>
      )}
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-cream font-sans text-charcoal selection:bg-earth selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-cream/95 backdrop-blur-md py-4 shadow-sm' 
          : 'bg-transparent py-6 md:py-8'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="font-serif text-xl md:text-2xl tracking-tight hover:opacity-70 transition-opacity"
          >
            AVANI WALTURE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 hover:opacity-70 transition-opacity" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-cream z-40 flex flex-col justify-center items-center gap-10 md:hidden transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/work" onClick={() => setIsMenuOpen(false)}>Work</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 mt-20 border-t border-sand/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
            <div className="max-w-md">
              <span className="font-serif text-3xl md:text-4xl block mb-4 italic text-charcoal">
                "Where Art Meets Purpose"
              </span>
              <p className="text-charcoal-light leading-relaxed">
                Turning ideas, skills, and perception into stories that connect with people.
              </p>
            </div>
            <div className="space-y-3">
              <a 
                href={`mailto:${SITE_INFO.email}`} 
                className="group flex items-center gap-2 text-lg text-charcoal hover:text-earth transition-colors"
              >
                {SITE_INFO.email}
                <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight />
                </span>
              </a>
              <p className="text-charcoal-light">+91 {SITE_INFO.phone}</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-charcoal-light uppercase tracking-[0.15em] pt-8 border-t border-sand/50">
            <p>© {new Date().getFullYear()} Avani Walture</p>
            <p className="mt-3 md:mt-0">{SITE_INFO.email}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
