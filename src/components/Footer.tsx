"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 flex flex-row items-center justify-between text-gray-500 text-sm">
        <div className="text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} DarkNest. Všechna práva vyhrazena.</p>
          <p className="mt-1">Nejsme spojeni s Mojang Studios ani Microsoft.</p>
        </div>
        <div className="text-right">
          <p>
            Web vytvořil <a href="https://petrvurm.cz/?utm_source=darknest&utm_medium=website&utm_campaign=footer_credit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6633cc] transition-colors">Petr Vurm</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;