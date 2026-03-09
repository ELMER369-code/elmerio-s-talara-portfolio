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
    }
};
