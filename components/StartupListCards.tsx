import StartupListOneCard from './StartupListOneCard';
import fakeDataArray from '@/public/fakeData';

const StartupListCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {fakeDataArray.map((item) => (
                <StartupListOneCard key={item.author._id} data={item} />
            ))}
        </div>
    );
};
export default StartupListCards;
