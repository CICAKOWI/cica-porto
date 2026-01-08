import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2026 Siti Nurcica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
