import { supabase } from '../lib/supabase';

export interface Project {
    id: number;
    title: string;
    description: string;
    image_url: string;
    tech_stack: string[];
    category: string;
    tag: string;
}

export const ProjectModel = {
    /**
     * Fetches all projects from the database, ordered by ID descending.
     */
    async getAllProjects(): Promise<{ data: Project[] | null; error: any }> {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('id', { ascending: false });

        return { data, error };
    },

    async createProject(project: Omit<Project, 'id'>): Promise<{ data: Project | null; error: any }> {
        const { data, error } = await supabase
            .from('projects')
            .insert([project])
            .select()
            .single();
        return { data, error };
    },

    async updateProject(id: number, updates: Partial<Project>): Promise<{ data: Project | null; error: any }> {
        const { data, error } = await supabase
            .from('projects')
            .update(updates)
            .eq('id', id)
            .select()
            .single();
        return { data, error };
    },

    async deleteProject(id: number): Promise<{ error: any }> {
        const { error } = await supabase
            .from('projects')
            .delete()
            .eq('id', id);
        return { error };
    }
};
