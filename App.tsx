import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-navy-deep min-h-screen text-silver font-sans selection:bg-cyan-electric selection:text-navy-deep">
      {/* Top Navigation Bar (Simplistic) */}
      <nav className="flex justify-between items-center px-10 py-6 font-mono text-sm z-50">
        <div className="text-cyan-electric font-bold border border-cyan-electric p-2">E.T.</div>
        <div className="space-x-8 hidden md:block">
          <a href="#about" className="hover:text-cyan-electric">01. About</a>
          <a href="#projects" className="hover:text-cyan-electric">02. Projects</a>
          <a href="#skills" className="hover:text-cyan-electric">03. Skills</a>
        </div>
      </nav>

      <main className="flex flex-col">
        <Hero />
        <About />
        <ProjectGrid />
        <Skills />
      </main>

      <footer className="py-8 text-center font-mono text-xs text-slate-500 hover:text-cyan-electric transition-colors">
        <a href="https://github.com/elmerio" target="_blank" rel="noreferrer">
          Designed & Built by Elmerio S. Talara
        </a>
      </footer>
    </div>
  );
}

export default App;