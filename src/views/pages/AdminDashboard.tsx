import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAdminProjects } from '../../controllers/useAdminProjects';

const AdminDashboard = () => {
    const { projects, loading, error, addProject, updateProject, deleteProject } = useAdminProjects();
    const [editingId, setEditingId] = useState<number | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image_url: '',
        tech_stack: '',
        category: 'Software',
        tag: 'Web Dev'
    });

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/';
    };

    const resetForm = () => {
        setFormData({ title: '', description: '', image_url: '', tech_stack: '', category: 'Software', tag: 'Web Dev' });
        setEditingId(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formattedData = {
            ...formData,
            tech_stack: formData.tech_stack.split(',').map(s => s.trim())
        };

        if (editingId) {
            if (await updateProject(editingId, formattedData)) resetForm();
        } else {
            if (await addProject(formattedData)) resetForm();
        }
    };

    const handleEdit = (project: any) => {
        setEditingId(project.id);
        setFormData({
            title: project.title,
            description: project.description,
            image_url: project.image_url,
            tech_stack: project.tech_stack.join(', '),
            category: project.category,
            tag: project.tag
        });
    };

    return (
        <div className="min-h-screen bg-navy p-4 md:p-8 font-sans text-silver selection:bg-cyan-electric selection:text-navy-deep">
            <header className="flex justify-between items-center mb-8 border-b border-cyan-electric/20 pb-4">
                <h1 className="text-2xl font-mono text-cyan-electric">ADMIN CONTROL PANEL</h1>
                <button onClick={handleLogout} className="text-xs font-mono text-slate-400 hover:text-red-500 transition-colors uppercase">[ Terminate Session ]</button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Editor Form */}
                <section className="bg-navy-light p-6 rounded border border-cyan-electric/10 h-fit">
                    <h2 className="text-lg font-mono text-silver mb-6 flex items-center">
                        <span className="w-2 h-2 bg-cyan-electric rounded-full mr-3 animate-pulse"></span>
                        {editingId ? 'Edit Project' : 'Add New Project'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">PROJECT TITLE</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-navy border border-slate-700 rounded px-3 py-2 text-sm focus:border-cyan-electric outline-none"
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">CATEGORY</label>
                                <select
                                    className="w-full bg-navy border border-slate-700 rounded px-3 py-2 text-sm outline-none"
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>Software</option>
                                    <option>Hardware</option>
                                    <option>Embedded System</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-1">TAG (SHORT)</label>
                                <input
                                    type="text"
                                    className="w-full bg-navy border border-slate-700 rounded px-3 py-2 text-sm outline-none"
                                    value={formData.tag}
                                    onChange={e => setFormData({ ...formData, tag: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">DESCRIPTION</label>
                            <textarea
                                className="w-full bg-navy border border-slate-700 rounded px-3 py-6 text-sm outline-none"
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">IMAGE URL (REL PATH OR LINK)</label>
                            <input
                                type="text"
                                className="w-full bg-navy border border-slate-700 rounded px-3 py-2 text-sm outline-none"
                                value={formData.image_url}
                                onChange={e => setFormData({ ...formData, image_url: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-slate-400 mb-1">TECH STACK (COMMA SEPARATED)</label>
                            <input
                                type="text"
                                placeholder="React, Typescript, IoT, etc"
                                className="w-full bg-navy border border-slate-700 rounded px-3 py-2 text-sm outline-none"
                                value={formData.tech_stack}
                                onChange={e => setFormData({ ...formData, tech_stack: e.target.value })}
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button type="submit" className="flex-1 bg-cyan-electric/10 border border-cyan-electric text-cyan-electric py-2 rounded font-mono hover:bg-cyan-electric hover:text-navy transition-all">
                                {editingId ? 'UPDATE RECORD' : 'SAVE TO DATABASE'}
                            </button>
                            {editingId && (
                                <button type="button" onClick={resetForm} className="px-4 border border-slate-600 text-slate-400 rounded font-mono hover:text-silver">
                                    CANCEL
                                </button>
                            )}
                        </div>
                    </form>
                </section>

                {/* List of Projects */}
                <section>
                    <h2 className="text-lg font-mono text-silver mb-6 px-2">Project Registry</h2>
                    <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                        {loading ? <div className="text-cyan-electric animate-pulse font-mono">[ LOADING... ]</div> :
                            projects.map(p => (
                                <div key={p.id} className="bg-navy-light p-4 rounded border border-slate-800 flex justify-between items-center group">
                                    <div>
                                        <h3 className="text-silver font-bold text-sm">{p.title}</h3>
                                        <p className="text-xs text-slate-500 font-mono italic">{p.category} | {p.tag}</p>
                                    </div>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => handleEdit(p)} className="text-xs text-cyan-electric font-mono hover:underline">EDIT</button>
                                        <button onClick={() => deleteProject(p.id)} className="text-xs text-red-400 font-mono hover:underline">DELETE</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminDashboard;
