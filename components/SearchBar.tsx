import { Button } from './ui/button';
import Form from 'next/form';
import { Input } from './ui/input';

const SearchBar = () => {
    return (
        <Form action="/" scroll={false} className="flex w-full max-w-sm items-center space-x-2">
            <Input name="query" defaultValue="" placeholder="Search Startups" className="search-input" />
            <Button type="submit">Submit</Button>
        </Form>
    );
};
export default SearchBar;
