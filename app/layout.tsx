import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'YC Directory',
    description: 'Directory for the new era of startups.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
