"use client";

import React from 'react';
import type { Minigame } from '@/types';

const minigamesData: Minigame[] = [
  {
    title: 'Survival Evolved',
    description: 'Klasický survival zážitek s vylepšenou ekonomikou, questy a unikátními dungeony k prozkoumání.',
  },
  {
    title: 'SkyBlock Realms',
    description: 'Postav si své impérium v oblacích! Začni na malém ostrově a rozšiřuj své království za hranice možností.',
  },
  {
    title: 'Creative Plots',
    description: 'Popusť uzdu své fantazii na zabezpečených pozemcích. Stavěj bez omezení a ukaž komunitě své mistrovské dílo.',
  },
  {
    title: 'Event Aréna',
    description: 'Pravidelné eventy od parkouru po PvP turnaje. Získej epické odměny a prokaž své dovednosti proti ostatním.',
  },
];

const MinigameCard: React.FC<{ minigame: Minigame; delay: string }> = ({ minigame, delay }) => (
  <div className="group transition-all duration-300 transform bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#6633cc] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6633cc]/20 scroll-animate" style={{ transitionDelay: delay }}>
    <h3 className="text-xl font-bold text-white mb-2">{minigame.title}</h3>
    <p className="text-gray-400">{minigame.description}</p>
  </div>
);


const Minigames: React.FC = () => {
  return (
    <section id="minihry" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Naše <span className="text-[#6633cc]">minihry</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Ponoř se do našich unikátních herních módů, které jsou plné zábavy a výzev.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {minigamesData.map((game, index) => (
            <MinigameCard key={game.title} minigame={game} delay={`${index * 100}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Minigames;