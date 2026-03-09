import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface VisitorLocation {
    id: string;
    latitude: number;
    longitude: number;
    city: string | null;
    country: string | null;
    browser: string | null;
}

export const useAdminAnalytics = () => {
    const [uniqueVisitors, setUniqueVisitors] = useState<number>(0);
    const [totalInteractions, setTotalInteractions] = useState<number>(0);
    const [locations, setLocations] = useState<VisitorLocation[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchAnalytics = async () => {
        try {
            setLoading(true);
            // 1. Get unique visitors count
            const { count: vCount, error: vErr } = await supabase
                .from('visitors')
                .select('*', { count: 'exact', head: true });

            if (!vErr && vCount !== null) {
                setUniqueVisitors(vCount);
            }

            // 2. Get interactions count
            const { count: iCount, error: iErr } = await supabase
                .from('interactions')
                .select('*', { count: 'exact', head: true });

            if (!iErr && iCount !== null) {
                setTotalInteractions(iCount);
            }

            // 3. Get locations for the map
            const { data: locData, error: locErr } = await supabase
                .from('visitors')
                .select('id, latitude, longitude, city, country, browser')
                .not('latitude', 'is', null)
                .not('longitude', 'is', null);

            if (!locErr && locData) {
                setLocations(locData as VisitorLocation[]);
            }

        } catch (err) {
            console.error('Error fetching admin analytics:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnalytics();
    }, []);

    return { uniqueVisitors, totalInteractions, locations, loading, refresh: fetchAnalytics };
};
