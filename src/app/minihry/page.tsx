"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

// Typ pro minihry zůstává stejný
type Minigame = {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
};

// Data zůstávají stejná
const minigamesData: Minigame[] = [
    {
        title: 'Survival Evolved',
        description: 'Klasický survival zážitek s vylepšenou ekonomikou, questy a unikátními dungeony k prozkoumání.',
        longDescription: 'Náš Survival Evolved je víc než jen přežívání. Čeká na tebe propracovaný ekonomický systém, stovky questů s odměnami a temné dungeony plné monster a pokladů. Obchoduj s ostatními, buduj základny a staň se legendou tohoto světa.',
        imageUrl: 'https://placehold.co/1920x1080/ffffff/6633cc/png?text=Survival+Evolved', // Nahraďte cestou k vašemu obrázku
    },
    {
        title: 'SkyBlock Realms',
        description: 'Postav si své impérium v oblacích! Začni na malém ostrově a rozšiřuj své království za hranice možností.',
        longDescription: 'Začni s pár bloky a stromem na ostrově plujícím v prázdnotě. Plň výzvy, rozšiřuj svůj ostrov, stavěj farmy a generátory. Můžeš hrát sám nebo pozvat přátele a vytvořit prosperující nebeské království společně.',
        imageUrl: 'https://placehold.co/1920x1080/ffffff/6633cc/png?text=SkyBlock+Realms', // Nahraďte cestou k vašemu obrázku
    },
    {
        title: 'Creative Plots',
        description: 'Popusť uzdu své fantazii na zabezpečených pozemcích. Stavěj bez omezení a ukaž komunitě své mistrovské dílo.',
        longDescription: 'Získej svůj vlastní zabezpečený pozemek a tvoř bez obav, že ti někdo zničí tvé dílo. K dispozici máš neomezené zdroje a nástroje WorldEdit. Pořádáme pravidelné stavitelské soutěže o skvělé ceny!',
        imageUrl: 'https://placehold.co/1920x1080/ffffff/6633cc/png?text=Creative+Plots', // Nahraďte cestou k vašemu obrázku
    },
    {
        title: 'Event Aréna',
        description: 'Pravidelné eventy od parkouru po PvP turnaje. Získej epické odměny a prokaž své dovednosti proti ostatním.',
        longDescription: 'Naše Event Aréna je centrem veškeré akce. Každý víkend pořádáme nové eventy – od napínavých PvP turnajů, přes záludné parkourové mapy, až po speciální eventy jako Spleef nebo závody. Vítězové si odnesou nejen slávu, ale i hodnotné odměny.',
        imageUrl: 'https://placehold.co/1920x1080/ffffff/6633cc/png?text=Event+Aréna', // Nahraďte cestou k vašemu obrázku
    },
];

export default function MinigamesPage() {
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
      <section id="minihry" className="py-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Naše <span className="text-[#6633cc]">minihry</span></h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Ponoř se do našich unikátních herních módů, které jsou plné zábavy a výzev. Každý si zde najde to své.</p>
          </div>

          <div className="flex flex-col gap-16">
            {minigamesData.map((game, index) => (
              <div
                key={game.title}
                className={`
                  scroll-animate group flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 
                  bg-gray-800/50 rounded-xl border border-gray-700
                  
                  // ZDE JSOU PŘIDÁNY NOVÉ TŘÍDY PRO PŘECHODY A HOVER EFEKTY
                  transition-all duration-300 ease-in-out 
                  hover:-translate-y-2 hover:border-[#6633cc] 
                  hover:shadow-2xl hover:shadow-[#6633cc]/20
                  
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`
                }
              >
                {/* Část s obrázkem */}
                <div className="w-full md:w-1/2 lg:w-5/12 flex-shrink-0 overflow-hidden rounded-lg"> {/* PŘIDÁNO: overflow-hidden pro oříznutí zvětšeného obrázku */}
                  <Image
                    src={game.imageUrl}
                    alt={game.title}
                    width={1280}
                    height={720}
                    className="
                      rounded-lg object-cover w-full h-auto shadow-lg shadow-black/30
                      
                      // ZDE JSOU PŘIDÁNY TŘÍDY PRO HOVER EFEKT OBRÁZKU
                      transition-transform duration-300 ease-in-out
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Část s textem */}
                <div className="w-full md:w-1/2 lg:w-7/12">
                  <h2 className="text-3xl font-bold text-white mb-3">{game.title}</h2>
                  <p className="text-gray-400 italic mb-4">{game.description}</p>
                  <p className="text-gray-300 leading-relaxed">{game.longDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}