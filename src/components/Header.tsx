"use client";

import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { href: '#minihry', text: 'Minihry' },
    { href: '#o-nas', text: 'O nás' },
    { href: '#a-tym', text: 'A-Tým' },
    { href: '#hlasovani', text: 'Hlasování' },
    { href: '#pripojit-se', text: 'Připojit se' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 1. Zamezí výchozí akci (skoku na kotvu a změně URL)
    e.preventDefault();

    // 2. Najde cílový element na stránce podle jeho ID
    const targetId = href.substring(1); // Odstraní '#' z href
    const targetElement = document.getElementById(targetId);

    // 3. Pokud element existuje, plynule na něj posune stránku
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-800 animate-slide-down">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          Dark<span className="text-[#6633cc]">Nest</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)} // Přidání onClick události
              className="text-gray-300 hover:text-[#6633cc] transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;