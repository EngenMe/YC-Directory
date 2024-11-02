import { cn } from '@/lib/utils';
import { Akaya_Kanadaka } from 'next/font/google';
import Link from 'next/link';

const akayaKanadaka = Akaya_Kanadaka({ weight: '400' });

const Logo = () => {
    return (
        <div className={cn(akayaKanadaka.className, 'md:text-4xl text-3xl')}>
            <Link href="/">
                <span className="text-destructive">YC</span>
                <span>Directory</span>
            </Link>
        </div>
    );
};
export default Logo;
