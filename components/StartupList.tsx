'use client';

import { useSearchParams } from 'next/navigation';

const StartupList = () => {
    const searchParams = useSearchParams();
    const query = searchParams?.get('query') || '';

    return (
        <section className="pt-20 px-10">
            <div className="text-3xl font-semibold">
                {query.trim().length === 0 ? 'All Startups' : `Searching For "${query}"`}
            </div>
        </section>
    );
};
export default StartupList;
