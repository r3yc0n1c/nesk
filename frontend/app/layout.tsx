import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
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
