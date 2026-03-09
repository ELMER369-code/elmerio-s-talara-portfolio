import React from 'react';
import { supabase } from '../../lib/supabase';

const AdminDashboard = () => {

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/';
    };

    return (
        <div className="min-h-screen bg-navy p-8 font-sans text-silver selection:bg-cyan-electric selection:text-navy-deep">
            <header className="flex justify-between items-center mb-12 border-b border-cyan-electric/30 pb-4">
                <h1 className="text-3xl font-mono text-cyan-electric font-bold">Admin Control Panel</h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded font-mono transition-colors text-sm"
                >
                    Log Out
                </button>
            </header>

            <main>
                <div className="bg-navy-light p-6 rounded border border-slate-700 shadow-lg">
                    <h2 className="text-xl font-mono text-silver mb-4">Project Database Manager</h2>
                    <p className="text-slate-400 font-mono text-sm">
                        [ SYSTEM READY ] Secure connection established. Future modules will be injected here.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
