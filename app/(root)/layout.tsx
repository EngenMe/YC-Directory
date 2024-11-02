import Hero from '@/components/Hero';
import NavBar from '../../components/NavBar';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <NavBar />
            <Hero />
            {children}
        </main>
    );
}
