import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start container mx-auto px-6 py-20 relative overflow-hidden">
      {/* Schematic Lines Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full border-r border-cyan-electric/10 pointer-events-none opacity-20 transform skew-x-12"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l border-b border-cyan-electric/30 pointer-events-none"></div>

      <p className="font-mono text-cyan-electric mb-5 tracking-widest text-sm">
        HI, MY NAME IS
      </p>

      <h1 className="font-mono text-5xl md:text-7xl font-bold text-silver mb-4 tracking-tight">
        Elmerio S. Talara.
      </h1>

      <h2 className="font-sans text-4xl md:text-6xl font-bold text-slate-400 mb-8 max-w-2xl bg-clip-text">
        Bridging Silicon & Software.
      </h2>

      <p className="font-sans text-slate-400 text-lg max-w-xl leading-relaxed mb-12 border-l-2 border-cyan-electric pl-6">
        I am a <span className="text-cyan-electric">Hybrid Engineer</span> specializing in Hardware and Software integration.
        Graduated with a BS in Computer Engineering from Bohol Island State University Main Campus.
        I build digital blueprints that come to life.
      </p>

      <a href="#projects" className="group font-mono text-cyan-electric border border-cyan-electric px-8 py-4 rounded-sm hover:bg-cyan-electric/10 transition-all duration-300">
        Check out my work
        <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">-&gt;</span>
      </a>
    </section>
  );
};

export default Hero;