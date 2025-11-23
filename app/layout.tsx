import type { Metadata } from "next";
import { Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahenk - Sync Without Conflict | Rust P2P Database Sync",
  description: "Batteries-included Rust library for cross-platform database synchronization. P2P networking with libp2p, CRDT conflict resolution, and offline-first architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${oswald.variable} ${ibmPlexMono.variable}`}>
      <body className="font-body bg-background-dark text-text-light relative">
        {children}
      </body>
    </html>
  );
}
