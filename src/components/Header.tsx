"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // 1. Import hooku

const Header: React.FC = () => {
  const navLinks = [
    { href: '/minihry', text: 'Minihry' },
    { href: '#o-nas', text: 'O nás' },
    { href: '/tym', text: 'Tým' },
    { href: '#hlasovani', text: 'Hlasování' },
    { href: '#pripojit-se', text: 'Připojit se' },
  ];

  const pathname = usePathname(); // 2. Získání aktuální cesty

  /**
   * Kontroluje, zda je odkaz aktivní.
   * @param path - Cesta odkazu pro porovnání.
   * @returns Vrací true, pokud se cesta odkazu shoduje s aktuální cestou.
   */
  function isActive(path: string): boolean {
    // Porovná href odkazu s aktuální cestou v URL
    return pathname === path;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-800 animate-slide-down">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          Dark<span className="text-[#6633cc]">Nest</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#6633cc] transition-colors duration-300 ${
                isActive(link.href) ? 'font-bold text-[#6633cc]' : 'text-gray-300'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;