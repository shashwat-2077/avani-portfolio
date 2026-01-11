import React from 'react';
import Section from '../components/Section';
import { SITE_INFO } from '../data/works';

// Simple inline SVGs
const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-sand/30 pt-8 pb-16">
        <div className="container mx-auto px-6">
          <Section>
            <span className="block text-earth text-xs tracking-[0.3em] uppercase mb-4">Say Hello</span>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal">Get in Touch</h1>
          </Section>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <Section delay={100}>
                <p className="text-charcoal-light text-lg leading-relaxed mb-10">
                  Whether you have a project in mind, want to collaborate, or just want to say hello—I'd love to hear from you.
                </p>
              </Section>

              <Section delay={200}>
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-sand/50 text-earth">
                      <MailIcon />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-[0.2em] text-charcoal-light mb-2">Email</span>
                      <a 
                        href={`mailto:${SITE_INFO.email}`} 
                        className="text-xl text-charcoal hover:text-earth transition-colors break-all"
                      >
                        {SITE_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-sand/50 text-earth">
                      <PhoneIcon />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-[0.2em] text-charcoal-light mb-2">Phone</span>
                      <a 
                        href={`tel:+91${SITE_INFO.phone}`} 
                        className="text-xl text-charcoal hover:text-earth transition-colors"
                      >
                        +91 {SITE_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </Section>

              {/* CTA Button */}
              <Section delay={300}>
                <a 
                  href={`mailto:${SITE_INFO.email}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white hover:bg-earth transition-all duration-500 uppercase tracking-[0.15em] text-sm group"
                >
                  Send an Email
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight />
                  </span>
                </a>
              </Section>
            </div>

            {/* Thank You Image */}
            <Section delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border border-earth/20 -z-10 hidden md:block"></div>
                <div className="bg-white p-3 shadow-lg">
                  <img 
                    src="/images/thank_you.png" 
                    alt="Thank You - Avani Walture" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>

      {/* Simple footer message */}
      <section className="py-16 bg-white border-t border-sand">
        <div className="container mx-auto px-6 text-center">
          <Section>
            <p className="font-serif text-2xl md:text-3xl italic text-charcoal-light max-w-2xl mx-auto">
              "Looking forward to connecting and creating something meaningful together."
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
