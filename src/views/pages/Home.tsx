import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectGrid from '../components/ProjectGrid';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['about', 'projects', 'skills', 'contact'];
        const observers = sections.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.5 }
            );
            observer.observe(el);
            return observer;
        });

        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    const NavLink = ({ href, label, number }: { href: string, label: string, number: string }) => {
        const id = href.replace('#', '');
        const isActive = activeSection === id;

        return (
            <a
                href={href}
                className={`
                    px-6 py-2 rounded-full border transition-all duration-300 font-mono text-xs relative group
                    ${isActive
                        ? 'border-green-hacker text-navy bg-green-hacker shadow-[0_0_20px_rgba(0,255,65,0.4)]'
                        : 'border-transparent text-slate-400 hover:text-green-hacker hover:border-green-hacker/30'}
                `}
            >
                <span className={`${isActive ? 'text-navy/80' : 'text-green-hacker/60'} group-hover:text-green-hacker mr-2`}>{number}.</span>
                {label}
            </a>
        );
    };

    return (
        <div className="bg-navy-deep min-h-screen">
            {/* Top Navigation Bar (Enhanced) */}
            <nav className="sticky top-0 bg-navy-deep/90 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-5 font-mono text-sm z-[100] border-b border-cyan-electric/20 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.9)] transition-all duration-500">
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="w-11 h-11 border-2 border-cyan-electric rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,242,255,0.3)] group-hover:scale-110 transition-all duration-300 bg-navy-light">
                        <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-cyan-electric font-bold tracking-tighter text-lg group-hover:text-silver transition-colors">STe.</span>
                </div>

                <div className="space-x-4 hidden md:flex items-center">
                    <NavLink href="#about" label="About" number="01" />
                    <NavLink href="#projects" label="Projects" number="02" />
                    <NavLink href="#skills" label="Skills" number="03" />

                    <a
                        href="#contact"
                        className={`
                            ml-4 px-6 py-2.5 rounded-full border-2 border-green-hacker text-green-hacker font-bold tracking-widest uppercase text-[10px]
                            transition-all duration-300 hover:scale-105 active:scale-95 bg-transparent hover:bg-green-hacker hover:text-navy
                        `}
                        style={{ animation: 'hire-me-glow 2s infinite ease-in-out' }}
                    >
                        04. Contact Me
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
                <a href="https://github.com/ELMER369-code/elmerio-s-talara-portfolio" target="_blank" rel="noreferrer">
                    Designed & Built by Elmerio S. Talara
                </a>
            </footer>
        </div>
    );
};

export default Home;
