"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Konfigurace ---
const votingSites = [
  { name: 'Craftlist.org', url: 'https://craftlist.org/darknest/vote?username=' },
  { name: 'Minecraft-List.cz', url: 'https://minecraft-list.cz/server/darknest/vote?nickname=' },
  { name: 'MinecraftServery.eu', url: 'https://minecraftservery.eu/server/darknest/vote?user=' },
];

const rewards = [
    { name: 'Hlasovací klíč', image: '/images/reward1.png' },
    { name: 'Obnos 100€', image: '/images/reward2.png' },
];
// ------------------

// Hook pro zpoždění (debounce) - optimalizuje načítání hlavy hráče
const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedValue(value); }, delay);
        return () => { clearTimeout(handler); };
    }, [value, delay]);
    return debouncedValue;
};


export default function VotingPage() {
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username, 500);
  const isUsernameEntered = username.trim().length > 0;

  const handleVoteClick = (baseUrl: string) => {
    if (username.trim()) {
      window.open(`${baseUrl}${encodeURIComponent(username.trim())}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    // Hlavní kontejner s tmavým pozadím a centrováním obsahu
    <section className="min-h-screen bg-[#0d0c14] text-white flex items-center justify-center p-4">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-28">
                
                {/* Levý sloupec: Hlasovací formulář */}
                <div className="w-full max-w-md flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Změna fontu pro hlavní nadpis */}
                    <h1 className="text-5xl mb-8 text-shadow-lg">
                        HLASOVÁNÍ
                    </h1>

                    {/* Vstupní pole pro jméno */}
                    <div className="flex items-center gap-3 w-full bg-white/5 p-3 rounded-lg border border-white/10 mb-6 focus-within:border-[#6633cc] transition-colors">
                        <Image 
                            src={`https://minotar.net/avatar/${debouncedUsername || 'Steve'}/30.png`} 
                            alt="Hlava hráče" 
                            width={32} 
                            height={32}
                            unoptimized
                            className="rounded-sm"
                            style={{ imageRendering: 'pixelated' }}
                        />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Zadej svůj herní nick"
                            className="w-full bg-transparent text-lg text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    
                    {/* Hlasovací tlačítka */}
                    <div className="w-full flex flex-col gap-3">
                        {votingSites.map((site) => (
                            <button
                                key={site.name}
                                onClick={() => handleVoteClick(site.url)}
                                disabled={!isUsernameEntered}
                                className="w-full bg-[#6633cc] cursor-pointer py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 disabled:hover:shadow-none hover:shadow-lg hover:shadow-purple-500/20 disabled:bg-white/10 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {site.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pravý sloupec: Odměny (skrytý na mobilech a tabletech) */}
                <div className="w-full max-w-lg hidden lg:block">
                    {/* Větší inventář s odměnami */}
                    <div className="bg-[#d1d1d1] rounded-md p-2.5 border border-gray-400/50 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                        {/* Změna fontu pro nadpis inventáře */}
                        <h2 className="text-lg text-[#3a3a3a] px-2 pb-2 font-bold uppercase">
                            Odměna za hlasování
                        </h2>
                        <div className="grid grid-cols-8 gap-2">
                            {/* Sloty pro odměny s hover efektem */}
                            {rewards.map((reward, i) => (
                                <div key={i} className="group relative aspect-square bg-[#8b8b8b] hover:bg-[#c5c5c5] transition-colors rounded-sm border-2 border-solid border-t-[#f0f0f0] border-l-[#f0f0f0] border-b-[#5a5a5a] border-r-[#5a5a5a] flex items-center justify-center p-1.5">
                                    <Image src={reward.image} alt={reward.name} width={52} height={52} unoptimized style={{imageRendering: 'pixelated'}}/>
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full mb-3 w-max px-3 py-1.5 bg-[#1e1c29]/90 text-white text-base rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-sm">
                                        {reward.name}
                                    </div>
                                </div>
                            ))}
                            
                            {/* Prázdné sloty s hover efektem */}
                            {Array.from({ length: 8 - rewards.length }).map((_, i) => (
                                 <div key={`empty-${i}`} className="aspect-square bg-[#8b8b8b] hover:bg-[#c5c5c5] transition-colors rounded-sm border-2 border-solid border-t-[#f0f0f0] border-l-[#f0f0f0] border-b-[#5a5a5a] border-r-[#5a5a5a]"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};