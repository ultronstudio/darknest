"use client";

import React, { useEffect } from 'react';

// 1. Definice typů
type VipRank = {
  name: string;
  prefix: string;
  color: 'green' | 'blue' | 'gold';
  perks: string[];
  recommended?: boolean;
};

type SiteContent = {
  vip: {
    title: string;
    subtitle: string;
    ranks: VipRank[];
    store: {
      text: string;
      url: string;
    };
  };
};

// 2. Strukturovaná data pro VIP sekci (NOVĚ AKTUALIZOVANÁ)
const vipContent: SiteContent['vip'] = {
  title: "Získej <span class='text-[#6633cc]'>VIP</span> a odemkni exkluzivní výhody",
  subtitle: "Podpořte server a získejte za odměnu jedinečné výhody, které vám zpříjemní hru a odliší vás od ostatních hráčů.",
  ranks: [
    {
      name: "Basic VIP",
      prefix: "[BasicVIP]",
      color: "green",
      perks: [
        "Prefix [BasicVIP]",
        "/hat, /feed (cooldown), /craft",
        "3x /sethome",
        "Barevný chat (základní barvy)",
        "Kit Basic (iron + enchanty)",
      ],
    },
    {
      name: "VIP",
      prefix: "[VIP]",
      color: "blue",
      perks: [
        "Všechny výhody z Basic VIP",
        "Prefix [VIP]",
        "/fly, /heal (cooldown), /back, /ec, /nick",
        "5x /sethome",
        "Barevný chat + formátování",
        "VIP shop se slevami",
        "Kit VIP (diamond gear)",
      ],
    },
    {
      name: "Legend VIP",
      prefix: "[Legend]",
      color: "gold",
      recommended: true,
      perks: [
        "Všechny výhody z VIP",
        "Prefix [Legend] (zlatý/duhový)",
        "/god, /tpahere, /ptime, /pweather, /disguise",
        "10x /sethome",
        "Duhový text v chatu",
        "Legend shop + speciální itemy",
        "Kit Legend (full prot IV)",
        "Partikly a efekty v lobby",
      ],
    },
  ],
  store: {
    text: "Přejít do obchodu",
    url: "https://store.darknest.cz/", // URL vašeho obchodu
  },
};

// Pomocná komponenta pro ikonu
const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2 text-green-400 inline-block shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

// Komponenta pro zobrazení VIP karty
const VipCard: React.FC<{ rank: VipRank, delay: string }> = ({ rank, delay }) => {
    const colorClasses = {
      green: {
        border: 'border-green-500',
        shadow: 'hover:shadow-green-500/30',
        text: 'text-green-400',
        glow: '',
      },
      blue: {
        border: 'border-blue-500',
        shadow: 'hover:shadow-blue-500/30',
        text: 'text-blue-400',
        glow: '',
      },
      gold: {
        border: 'border-yellow-500',
        shadow: 'hover:shadow-yellow-500/40',
        text: 'text-yellow-400',
        glow: 'animate-pulse-glow-gold'
      }
    };
  
    const classes = colorClasses[rank.color];
  
    return (
      <div 
        className={`relative group bg-gray-800/50 p-8 rounded-xl border border-gray-700 
                   ${rank.recommended ? classes.glow : `hover:${classes.border}`} 
                   transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl 
                   ${classes.shadow} scroll-animate flex flex-col`} 
        style={{ transitionDelay: delay }}
      >
        {rank.recommended && (
          <div className="absolute -top-3.5 right-6 bg-yellow-500 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase transform transition-transform group-hover:scale-110 shadow-lg">
            Doporučeno
          </div>
        )}
        <h3 className={`text-3xl font-bold mb-2 ${classes.text}`}>{rank.name}</h3>
        <p className="text-gray-500 font-mono text-sm mb-6">{rank.prefix}</p>
        
        <ul className="space-y-3 text-gray-300 flex-grow">
          {rank.perks.map((perk, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    );
};

// 3. Hlavní komponenta stránky
export default function VipPage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
              }
            });
          },
          { threshold: 0.1 }
        );
    
        const elements = document.querySelectorAll(".scroll-animate");
        elements.forEach((el) => observer.observe(el));
    
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <main className="bg-gray-900 mt-20">
            <section id="vip" className="py-20">
                <div className="container mx-auto px-6">
                    {/* Úvodní hlavička stránky */}
                    <div className="text-center mb-16 scroll-animate">
                        <h1 className="text-4xl md:text-5xl font-bold text-white" dangerouslySetInnerHTML={{ __html: vipContent.title }}></h1>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">{vipContent.subtitle}</p>
                    </div>
                    
                    {/* Mřížka s VIP balíčky */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {vipContent.ranks.map((rank, index) => (
                            <VipCard key={rank.name} rank={rank} delay={`${index * 100}ms`} />
                        ))}
                    </div>

                    {/* Tlačítko pro přechod do obchodu */}
                    <div className="mt-16 text-center scroll-animate" style={{ transitionDelay: '300ms' }}>
                        <a
                            href={vipContent.store.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#6633cc] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#6633cc]/90 transition-colors duration-300"
                        >
                            {vipContent.store.text}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}