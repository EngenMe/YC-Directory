import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Logo from './Logo';
import { Button } from './ui/button';
import { auth, signIn, signOut } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const MobileNav = async () => {
    const session = await auth();

    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            <Logo />
                        </SheetTitle>
                        <SheetDescription>Directory for the new era of startups.</SheetDescription>
                    </SheetHeader>
                    {session && session.user ? (
                        <div className="flex flex-col gap-3 py-5">
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
                            <div className="flex justify-center">
                                <Avatar className="mt-10">
                                    <AvatarImage src={session.user.image!} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 py-5">
                            <Button
                                onClick={async () => {
                                    'use server';
                                    await signIn('github');
                                }}
                            >
                                Login
                            </Button>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
};
export default MobileNav;
