import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Services } from './components/Services';
import { WorkProcess } from './components/WorkProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioHighlights } from './components/PortfolioHighlights';
import { SkillsTicker } from './components/SkillsTicker';

export const App: React.FC = () => {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:rounded-lg focus:font-bold focus:shadow-xl"
      >
        Skip to main content
      </a>

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <PortfolioHighlights />
        <SkillsTicker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Services />
        <WorkProcess />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
