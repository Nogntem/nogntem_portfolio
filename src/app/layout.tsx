import type {Metadata} from "next";
import {Cormorant_Garamond, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant",
    display: "swap",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nogntem",
    description: "Portfolio de Nogntem",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body
            className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F9F7] text-neutral-900`}
        >
        <Cursor />
        {children}
        </body>
        </html>
    );
}