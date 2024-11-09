import { client } from '@/sanity/lib/client';
import StartupListOneCard from './StartupListOneCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import startupType from '@/types/startup.type';

const StartupListCards = async () => {
    const postsData: startupType[] = await client.fetch(STARTUPS_QUERY);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {postsData.map((item: startupType) => (
                <StartupListOneCard key={item._id} data={item} />
            ))}
        </div>
    );
};
export default StartupListCards;
