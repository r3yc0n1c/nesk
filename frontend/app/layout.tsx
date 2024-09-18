import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    title: "Nesk",
    description: "Go to your Next Task",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                // className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full max-w-screen-4xl mx-auto scrollbar-hide`}
                className={`${poppins.variable} antialiased w-full h-full max-w-screen-4xl mx-auto scrollbar-hide`}
            >
                {children}
            </body>
        </html>
    );
}
