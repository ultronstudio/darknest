import type { Metadata } from "next";
import "./globals.css";

import MouseFollower from '@/components/MouseFollower';
import { AOSInitializer } from '@/components/AOSInitializer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "DarkNest",
  description: "Minecraft server DarkNest",
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
