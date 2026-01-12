import React from 'react';
import Section from '../components/Section';
import { SITE_INFO } from '../data/works';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-sand/30 pt-8 pb-16">
        <div className="container mx-auto px-6">
          <Section>
            <span className="block text-earth text-xs tracking-[0.3em] uppercase mb-4">Get to Know</span>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal">About Me</h1>
          </Section>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Image Column */}
          <Section className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-5 -left-5 w-full h-full border border-earth/25 -z-10 hidden md:block"></div>
            
              <div className="relative overflow-hidden shadow-xl bg-white p-3 md:p-4">
              <img 
                src="/images/about_me.webp" 
                alt="Avani Walture - Designer and Artist" 
                className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
            
            {/* Caption card */}
            <div className="bg-white shadow-lg p-6 mt-6 max-w-xs">
              <span className="font-serif text-2xl block mb-1">Avani Walture</span>
              <span className="text-xs uppercase tracking-[0.2em] text-earth">Student Designer & Artist</span>
            </div>
          </Section>

          {/* Text Column */}
          <div className="space-y-10">
            <Section delay={100}>
              <h3 className="font-serif text-2xl md:text-3xl italic text-earth mb-8 leading-relaxed">
                "Designing is a way of connecting with people and experiencing their problems."
              </h3>
            </Section>
            
            <Section delay={200}>
              <div className="space-y-6 text-charcoal-light text-lg leading-relaxed">
                <p>
                  Art has always been an inspiration for me. For me, designing is a way of connecting with people and experiencing their problems and working on it.
                </p>
                <p>
                  Hi, I am <strong className="text-charcoal">Avani Walture</strong>, a 12th grader with dreams of becoming a successful designer. My goal is not just to design a solution, but to ensure that the solution conveys the stories behind it and the connections it creates.
                </p>
                <p>
                  I also love playing badminton, spending time with my close ones, and travelling. I am empathetic—some of my works represent fashion designs, some are skill-based artworks, rough sketches, and posters.
                </p>
              </div>
            </Section>

            <Section delay={300}>
              <div className="pt-8 border-t border-sand">
                <span className="block text-xs uppercase tracking-[0.3em] text-charcoal mb-5">
                  Interests & Focus Areas
                </span>
                <div className="flex flex-wrap gap-3">
                  {SITE_INFO.interests.map(interest => (
                    <span 
                      key={interest} 
                      className="px-5 py-2.5 bg-white border border-sand text-sm text-charcoal hover:border-earth hover:text-earth transition-all duration-300 cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Section>
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border border-earth/15 -z-10 hidden md:block"></div>
                <img 
                  src="/images/thank_you.webp" 
                  alt="Thank You" 
                  className="w-full h-auto shadow-lg"
                />
              </div>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
