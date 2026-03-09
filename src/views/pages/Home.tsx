import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectGrid from '../components/ProjectGrid';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            {/* Top Navigation Bar (Simplistic) */}
            <nav className="sticky top-0 bg-navy-deep/90 backdrop-blur-md flex justify-between items-center px-10 py-6 font-mono text-sm z-50 border-b border-navy-light shadow-lg transition-all duration-300">
                <div className="text-cyan-electric font-bold border border-cyan-electric p-2">E.T.</div>
                <div className="space-x-8 hidden md:flex items-center">
                    <a href="#about" className="hover:text-cyan-electric transition-colors">01. About</a>
                    <a href="#projects" className="hover:text-cyan-electric transition-colors">02. Projects</a>
                    <a href="#skills" className="hover:text-cyan-electric transition-colors">03. Skills</a>
                    <a
                        href="#contact"
                        className="px-4 py-2 border border-cyan-electric text-cyan-electric rounded hover:bg-cyan-electric/10 transition-all duration-300"
                    >
                        04. Contact
                    </a>
                </div>
            </nav>

            <main className="flex flex-col">
                <Hero />
                <About />
                <ProjectGrid />
                <Skills />
                <Contact />
            </main>

            <footer className="py-8 text-center font-mono text-xs text-slate-500 hover:text-cyan-electric transition-colors">
                <a href="https://github.com/elmerio" target="_blank" rel="noreferrer">
                    Designed & Built by Elmerio S. Talara
                </a>
            </footer>
        </>
    );
};

export default Home;
