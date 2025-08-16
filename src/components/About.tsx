"use client";

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="o-nas" className="py-20 bg-gray-800/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 scroll-animate">
          <div className="lg:w-1/2 w-full">
            <img 
              src="https://placehold.co/800x600/1f2937/6633cc.png?text=Epická+Stavba" 
              alt="Minecraft server in-game screenshot" 
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Co je <span className="text-[#6633cc]">DarkNest</span>?</h2>
            <div className="mt-6 space-y-4 text-gray-300 text-lg">
              <p>
                DarkNest není jen další Minecraft server. Jsme úzce spjatá komunita hráčů, stavitelů a dobrodruhů, kteří společně tvoří jedinečný svět. Naším cílem je poskytnout stabilní, zábavné a férové prostředí, kde se každý cítí vítán.
              </p>
              <p>
                S aktivním admin týmem, pravidelnými aktualizacemi a eventy se staráme o to, aby byl tvůj herní zážitek vždy svěží a vzrušující. Přidej se k nám a staň se součástí našeho příběhu!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;