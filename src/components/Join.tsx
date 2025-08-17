"use client";

import React, { useState } from 'react';

const Join: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const serverIp = 'play.darknest.cz';

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIp).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="pripojit-se" className="py-20 bg-gray-900/70 backdrop-blur-lg">
    <div className="absolute inset-0 bg-gradient-to-b to-gray-900 via-gray-900 from-[#6633cc]/20 z-0"></div>
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Připoj <span className="text-[#6633cc]">se</span></h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Dobrodružství čeká. Zkopíruj si IP adresu a vstup do světa DarkNest ještě dnes!</p>
        
        <div className="mt-10 max-w-md mx-auto flex items-center bg-gray-900 rounded-lg p-2 border border-gray-700">
          <p className="flex-grow text-gray-300 font-mono text-lg text-left pl-4">{serverIp}</p>
          <button 
            onClick={handleCopy}
            className={`font-bold py-2 px-6 rounded-md transition-all duration-200 ${copied ? 'cursor-not-allowed pointer-none bg-green-600 text-white' : 'cursor-pointer bg-[#6633cc] hover:bg-[#6633cc]/90'}`}
          >
            {copied ? 'Zkopírováno!' : 'Zkopírovat'}
          </button>
        </div>
         <div className="mt-8">
            <a href="#" className="text-gray-300 font-semibold transition-colors hover:underline">
                Nebo se připoj k našemu Discordu!
            </a>
        </div>
      </div>
    </section>
  );
};

export default Join;