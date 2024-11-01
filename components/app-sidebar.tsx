import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar';
import Link from 'next/link';
import { Akaya_Kanadaka } from 'next/font/google';
import { Button } from './ui/button';
import { auth, signIn, signOut } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const akayaKanadaka = Akaya_Kanadaka({
    weight: '400',
});

export async function AppSidebar() {
    const session = await auth();

    return (
        <Sidebar>
            <SidebarHeader>
                <Link href={'/'} className={`${akayaKanadaka.className} text-3xl`}>
                    <span className={'text-destructive px-1'}>YC</span>
                    <span>Directory</span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                {session && session.user ? (
                    <div className="flex gap-5">
                        <Avatar>
                            <AvatarImage src={session.user.image!} />
                            <AvatarFallback>User</AvatarFallback>
                        </Avatar>
                        <Button
                            onClick={async () => {
                                'use server';
                                await signOut({ redirectTo: '/' });
                            }}
                            className="w-3/5"
                        >
                            Logout
                        </Button>
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
            </SidebarFooter>
        </Sidebar>
    );
}
