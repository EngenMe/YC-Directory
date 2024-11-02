import SearchBar from './SearchBar';

const Hero = () => {
    return (
        <section className="py-20 bg-secondary gap-5 flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold bg-card py-2 px-5 rounded-md shadow-md">Pitch, vote, and grow</h1>
            <h2 className="text-6xl text-center font-bold bg-primary p-4 text-primary-foreground rotate-1 shadow-sm">
                pitch your startup, <br /> connect with enterpreneurs
            </h2>
            <p className="text-muted-foreground text-center">
                Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
            </p>
            <SearchBar />
        </section>
    );
};
export default Hero;
