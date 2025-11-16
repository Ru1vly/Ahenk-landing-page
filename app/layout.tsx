import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=IBM+Plex+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background-dark text-text-light relative">
        {children}
      </body>
    </html>
  );
}
