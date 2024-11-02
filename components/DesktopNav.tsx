import { auth, signIn, signOut } from '@/auth';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DesktopNav = async () => {
    const session = await auth();

    return (
        <div className="hidden lg:flex">
            {session && session.user ? (
                <div className="flex gap-3">
                    <Button>Create</Button>
                    <Button
                        variant="secondary"
                        onClick={async () => {
                            'use server';
                            await signOut();
                        }}
                    >
                        Logout
                    </Button>
                    <Avatar>
                        <AvatarImage src={session.user.image!} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            ) : (
                <Button
                    onClick={async () => {
                        'use server';
                        await signIn('github');
                    }}
                >
                    Login
                </Button>
            )}
        </div>
    );
};
export default DesktopNav;
