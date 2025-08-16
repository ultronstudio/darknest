"use client";

import React, { useState } from 'react';

const votingSites = [
  { name: 'Czech-Craft.eu', url: 'https://czech-craft.eu/server/darknest/vote/?user=' },
  { name: 'Craftlist.org', url: 'https://craftlist.org/darknest/vote?username=' },
  { name: 'Minecraft-List.cz', url: 'https://minecraft-list.cz/server/darknest/vote?nickname=' },
];

const Voting: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleVoteClick = (baseUrl: string) => {
    if (username.trim()) {
      window.open(`${baseUrl}${encodeURIComponent(username.trim())}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="hlasovani" className="py-20 bg-gray-800/20">
      <div className="container mx-auto px-6 text-center scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Hlasuj pro <span className="text-[#6633cc]">server</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Podpoř náš server a získej skvělé odměny ve hře! Stačí zadat své jméno a kliknout na odkaz.
        </p>

        <div className="mt-10 max-w-md mx-auto">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Tvoje herní jméno"
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#6633cc] transition-all"
            aria-label="Herní jméno pro hlasování"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {votingSites.map((site) => (
            <button
              key={site.name}
              onClick={() => handleVoteClick(site.url)}
              disabled={!username.trim()}
              className="bg-gray-800/50 border border-gray-700 text-white font-bold text-lg py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#6633cc] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-800/50 disabled:hover:-translate-y-0"
              aria-label={`Hlasovat na ${site.name}`}
            >
              {site.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voting;