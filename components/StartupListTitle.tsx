'use client';

import { useSearchParams } from 'next/navigation';

const StartupListTitle = () => {
    const searchParams = useSearchParams();
    const query = searchParams?.get('query') || '';

    return (
        <div className="text-3xl font-semibold">
            {query.trim().length === 0 ? 'All Startups' : `Searching For "${query}"`}
        </div>
    );
};
export default StartupListTitle;
