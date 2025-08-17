import type { Metadata } from "next";
import "./globals.css";

import MouseFollower from '@/components/MouseFollower';
import { AOSInitializer } from '@/components/AOSInitializer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Rozšířená metadata pro SEO a sociální sítě
export const metadata: Metadata = {
  // Základní metadata
  title: "DarkNest - Váš Minecraft Server", // Lepší titulek pro SEO
  description: "Připojte se na DarkNest, unikátní Minecraft server s přátelskou komunitou a spoustou zábavy.",
  
  // Autor a vlastnictví
  authors: [{ name: 'Petr Vurm', url: 'https://petrvurm.cz' }], // Nahraďte svými údaji

  // Klíčová slova pro vyhledávače
  keywords: ['Minecraft', 'DarkNest', 'Minecraft server', 'CZ/SK server', 'gaming', 'survival', 'multiplayer'],

  // Direktivy pro roboty (indexování a sledování odkazů)
  // Použijte "noindex, nofollow" pouze pokud si přejete, aby stránka NEBYLA indexována vyhledávači
  robots: {
    index: false, // Změňte na 'true' pro produkční web, který chcete mít ve vyhledávačích
    follow: false, // Změňte na 'true' pro produkční web
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Kontrola referreru
  referrer: 'origin-when-cross-origin', // Běžná a bezpečná politika referreru

  // Open Graph metadata (pro Facebook, Discord, atd.)
  openGraph: {
    title: 'DarkNest - Váš Minecraft Server',
    description: 'Připojte se na DarkNest, unikátní Minecraft server s přátelskou komunitou.',
    url: 'https://darknest.petrvurm.cz',
    siteName: 'DarkNest',
    locale: 'cs_CZ',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <AOSInitializer />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Favicony a další ikony můžete přidat sem nebo do metadata objektu */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto+Mono:wght@400;700&display=swap" />
      </head>
      <body className="antialiased">
        <div className="bg-gray-900 text-gray-300 relative overflow-hidden">
          <MouseFollower />

          <div
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at top right, #6633cc, transparent 50%), radial-gradient(circle at bottom left, #6633cc, transparent 50%)`,
            }}
          ></div>
          <div className="relative z-10">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}