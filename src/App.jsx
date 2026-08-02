import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <hr className="divider wrap" style={{ maxWidth: '1120px', margin: '0 auto' }} />
        <WorkSection />
        <hr className="divider wrap" style={{ maxWidth: '1120px', margin: '0 auto' }} />
        <SkillsSection />
        <hr className="divider wrap" style={{ maxWidth: '1120px', margin: '0 auto' }} />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
