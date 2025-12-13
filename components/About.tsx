import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 container mx-auto px-6">
            <div className="flex items-center mb-12">
                <span className="font-mono text-cyan-electric text-xl mr-4">01.</span>
                <h2 className="text-2xl font-bold text-silver font-mono whitespace-nowrap">About Me</h2>
                <div className="h-[1px] bg-navy-deep/50 w-full ml-6 bg-gradient-to-r from-cyan-electric/30 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-slate-400">
                <div className="md:col-span-2 font-sans text-lg leading-relaxed space-y-4">
                    <p>
                        Hello! My name is Elmerio and I enjoy creating things that live on the internet and in the physical world.
                        My interest in engineering started when I built my first circuit, teaching me the value of first-principles thinking.
                    </p>
                    <p>
                        I hold a <span className="text-cyan-electric">BS in Computer Engineering</span> from <span className="text-silver">Bohol Island State University Main Campus</span>.
                        My work revolves around the intersection of hardware control and software logic—what I call "Industrial Precision."
                    </p>
                    <p>
                        Whether I'm designing PCB traces or architecting a React application, I apply the same level of rigorous attention to detail.
                    </p>
                </div>

                <div className="relative group">
                    {/* Decorative Frame */}
                    <div className="absolute inset-0 border-2 border-cyan-electric rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <div className="relative bg-cyan-electric/20 rounded overflow-hidden">
                        {/* Placeholder for Profile or Tech Stack visual if needed, or just a solid block for the 'schematic' look */}
                        <div className="aspect-square bg-navy-deep flex items-center justify-center border border-cyan-electric/50">
                            <span className="font-mono text-cyan-electric text-xs text-center p-4">
                                [ SYSTEM SPECIFICATIONS ]<br />
                                &gt; HW: RISC/CISC<br />
                                &gt; SW: JS/C++/Python<br />
                                &gt; LOC: Bohol, PH
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
