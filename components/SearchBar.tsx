import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

const SearchBar = () => {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input placeholder="Search Startup" />
            <Button type="submit">Search</Button>
        </div>
    );
};
export default SearchBar;
