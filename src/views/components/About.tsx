import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
    const { vibe } = useTheme();
    const accentColor = vibe === 'cyan' ? 'cyan-electric' : 'green-hacker';

    return (
        <section id="about" className="py-20 container mx-auto px-6">
            <div className="flex items-center mb-12">
                <span={`font-mono text-${accentColor} text-xl mr-4`}>01.</span>
                <h2 className="text-2xl font-bold text-silver font-mono whitespace-nowrap">About Me</h2>
                <div className={`h-[1px] bg-navy-deep/50 w-full ml-6 bg-gradient-to-r from-${accentColor}/30 to-transparent`}></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-slate-400">
                <div className="md:col-span-2 font-sans text-lg leading-relaxed space-y-4">
                    <p>
                        Hello! My name is Elmerio and I enjoy creating things that live on the internet and in the physical world.
                        My interest in engineering started when I built my first circuit, teaching me the value of first-principles thinking.
                    </p>
                    <p>
                        I hold a <span className={`text-${accentColor}`}>BS in Computer Engineering</span> from <span className="text-silver">Bohol Island State University Main Campus</span>.
                        My work revolves around the intersection of hardware control and software logic—what I call "Industrial Precision."
                    </p>
                    <p>
                        Whether I'm designing PCB traces or architecting a React application, I apply the same level of rigorous attention to detail.
                    </p>
                </div>

                <div className="relative group">
                    {/* Decorative Frame */}
                    <div className={`absolute inset-0 border-2 border-${accentColor} rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300`}></div>
                    <div className={`relative bg-${accentColor}/20 rounded overflow-hidden`}>
                        {/* Profile Image Container */}
                        <div className={`aspect-square bg-navy-deep flex items-center justify-center border border-${accentColor}/50 overflow-hidden`}>
                            <img
                                src="./assets/profile.jpg"
                                alt="Elmerio S. Talara"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
