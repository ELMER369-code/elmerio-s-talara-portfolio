import React from 'react';
import { useProjects } from '../../controllers/useProjects';

const ProjectGrid = () => {
    const { projects, loading, error, filter, setFilter, categories } = useProjects();

    if (error) {
        return (
            <section id="projects" className="py-20 container mx-auto px-6 flex justify-center items-center min-h-[400px]">
                <div className="font-mono text-red-500 text-xl">[ ERROR: {error} ]</div>
            </section>
        );
    }

    if (loading) {
        return (
            <section id="projects" className="py-20 container mx-auto px-6 flex justify-center items-center min-h-[400px]">
                <div className="font-mono text-cyan-electric animate-pulse text-xl">[ LOADING DATA FROM SECURE SERVER . . . ]</div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-20 container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
                <div className="flex items-center mb-6 md:mb-0">
                    <span className="font-mono text-cyan-electric text-xl mr-4">02.</span>
                    <h2 className="text-2xl font-bold text-silver font-mono whitespace-nowrap">My Works</h2>
                    <div className="h-[1px] bg-navy-deep/50 w-24 ml-6 bg-gradient-to-r from-cyan-electric/30 to-transparent hidden md:block"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 text-sm font-mono border rounded transition-all duration-300 ${filter === cat
                                ? 'border-cyan-electric text-cyan-electric shadow-[0_0_10px_rgba(100,255,218,0.3)] bg-cyan-electric/10'
                                : 'border-slate-700 text-slate-400 hover:text-cyan-electric hover:border-cyan-electric/50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project: any, index: number) => (
                    <div
                        key={index}
                        className="group relative bg-navy-deep border border-cyan-electric/30 hover:border-cyan-electric overflow-hidden transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden border-b border-cyan-electric/20">
                            <div className="absolute inset-0 bg-cyan-electric/20 group-hover:bg-transparent transition-all z-10 duration-300"></div>
                            <img
                                src={project.image_url}
                                alt={project.title}
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-mono text-xs text-cyan-electric border border-cyan-electric/50 px-2 py-1 rounded">
                                    {project.tag}
                                </span>
                                <div className="flex space-x-2 text-slate-400">
                                    {/* Folder Icon Placeholder */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-silver mb-2 font-mono group-hover:text-cyan-electric transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-3 mt-auto">
                                {(project.tech_stack || []).map((tech: string, i: number) => (
                                    <li key={i} className="font-mono text-xs text-slate-500">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
