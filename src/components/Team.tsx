"use client";

import React from 'react';
import type { TeamMember } from '@/types';

const teamData: TeamMember[] = [
  {
    name: 'Ultronek123',
    role: 'Majitel',
  },
  {
    name: 'Notch',
    role: 'Developer',
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember, delay: string }> = ({ member, delay }) => (
  <div className="text-center group flex flex-col items-center scroll-animate w-40" style={{ transitionDelay: delay }}>
    <div className="relative">
      <img 
        src={`https://vzge.me/bust/${member.name}.png?no=cape`}
        alt={`Avatar of ${member.name}`}
        className="w-32 h-32 object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(102,51,204,0.7)]"
      />
    </div>
    <h3 className="mt-4 text-xl font-bold text-white">{member.name}</h3>
    <p className="text-[#6633cc]">{member.role}</p>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="a-tym" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Náš <span className="text-[#6633cc]">tým</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Lidé, kteří se starají o to, aby server běžel hladce a byl plný zábavy.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {teamData.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} delay={`${index * 100}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;