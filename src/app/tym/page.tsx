"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// 1. Definice typů
type TeamMember = {
  name: string;
  role: string;
};

type TeamSection = {
  title: string;
  description: string;
  members: TeamMember[];
};

// 2. Mapování rolí na barvy a emoji pro dynamické stylování
const roleStyles: { [key: string]: { color: string; emoji?: string } } = {
  "Majitel": { color: "#ff0000", emoji: "🔰" },
  "Spolumajitel": { color: "#ff0004", emoji: "🛡️" },
  "Admin": { color: "#ff9900", emoji: "⚙️" },
  "Hlavní Developer": { color: "#6633cc", emoji: "💻" },
  "Hlavní Technik": { color: "#9933ff", emoji: "🛠️" },
  "Hlavní Helper": { color: "#0762f4", emoji: "📋" },
  "Hlavní Builder": { color: "#1ad205", emoji: "🧰" },
  "Hlavní Tvůrce": { color: "#f207fa", emoji: "🧰" },
  "Hlavní Designer": { color: "#ff9a03", emoji: "🧰" },
  "Tvůrce": { color: "#ed0769", emoji: "🎥" },
  "Designer": { color: "#f29304", emoji: "🎨" },
  "Zkušební Developer": { color: "#ccccff", emoji: "💻" },
  "Zkušební Helper": { color: "#4597d7", emoji: "🔵" },
  "Helper": { color: "#0762f4", emoji: "🔵" },
  "Zaučenec": { color: "#71bcf5", emoji: "🔵" },
  "Propagátor": { color: "#532c2c", emoji: "🌹" },
  "YouTuber": { color: "#9a3232", emoji: "📹" },
};


// Komponenta pro zobrazení karty člena týmu s fallbackem pro obrázek
const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => {
  const initialSrc = `https://vzge.me/bust/${member.name}.png?no=cape`;
  const fallbackSrc = `https://vzge.me/bust/UnknownAbi.png?no=cape`;

  const [imgSrc, setImgSrc] = useState(initialSrc);
  
  // Rozdělí role, pokud má člen více rolí (např. "Hlavní Technik a Hlavní Builder")
  const roles = member.role.split(" a ");

  return (
    <div
      className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center
                 flex flex-col items-center
                 transition-all duration-200 ease-in-out
                 hover:border-[#6633cc] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6633cc]/20"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative mb-4">
        <Image
          src={imgSrc}
          onError={() => setImgSrc(fallbackSrc)}
          alt={`Avatar of ${member.name}`}
          width={128}
          height={128}
          unoptimized={true}
          className="object-contain transition-all duration-200 transform 
                     group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(102,51,204,0.7)]"
        />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">{member.name}</h2>
      
      {/* Dynamické zobrazení rolí pod sebou */}
      <div className="font-semibold flex flex-col items-center justify-center gap-1">
        {roles.map((role) => {
          const trimmedRole = role.trim();
          const style = roleStyles[trimmedRole];
          
          if (!style) {
            return <div key={trimmedRole}>{trimmedRole}</div>;
          }

          return (
            <div key={trimmedRole} style={{ color: style.color }}>
              {/* {style.emoji && `${style.emoji} `} */}
              {trimmedRole}
            </div>
          );
        })}
      </div>
    </div>
  );
};


// 3. Strukturovaná data týmů
const teamSections: TeamSection[] = [
    {
        title: "Vedení Serveru",
        description: "Lidé, kteří udávají směr a starají se o celkový chod serveru.",
        members: [
          {
            name: "Itzz_April",
            role: "Majitel",
          },
          {
            name: "Flumfy",
            role: "Spolumajitel"
          },
          {
            name: "RostyCZ",
            role: "Admin"
          }
        ],
      },
      {
        title: "Vedení Týmů",
        description: "Zkušení členové, kteří vedou jednotlivé týmy a jejich členy.",
        members: [
            {
                name: "Itzz_April",
                role: "Hlavní Technik a Hlavní Builder a Hlavní Helper",
            },
            {
                name: "Ultronek123",
                role: "Hlavní Developer",
            },
            {
              name: "Albixel",
              role: "Hlavní Tvůrce"
            },
            {
              name: "BATU_cz",
              role: "Hlavní Designer"
            }
        ]
      },
    /*
      {
        title: "Developer Tým",
        description: "Techničtí mágové, kteří programují nové funkce a opravují chyby.",
        members: [
          {
            name: "Ultronek123",
            role: "Zkušební Developer",
          },
        ],
      },
      */
      {
        title: "Helper Tým",
        description: "Přátelská podpora pro všechny hráče přímo ve hře i na Discordu.",
        members: [
          {
            name: "Kubintak",
            role: "Helper",
          },
          {
            name: "zonyp",
            role: "Zkušební Helper",
          },
        ],
      },
      {
        title: "Propagátor Tým",
        description: "Členové, kteří pomáhají šířit povědomí o našem serveru.",
        members: [
          {
            name: "Darqes",
            role: "Propagátor"
          }
        ],
      },
      {
        title: "Kreativní Tým",
        description: "Tvůrci, kteří obohacují server a komunitu svým obsahem a designem.",
        members: [
            {
                name: "Proste_Travex",
                role: "YouTuber",
            },
            {
              name: "AdaVoj12",
              role: "YouTuber",
            }
        ],
      }
];

export default function TeamPage() {
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
      <section id="a-tym" className="py-10">
        <div className="container mx-auto px-6">
          {/* Úvodní hlavička stránky */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Náš <span className="text-[#6633cc]">tým</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
              Seznamte se s lidmi, kteří se s nadšením starají o to, aby byl
              DarkNest skvělým místem pro hraní.
            </p>
          </div>

          {/* Vykreslení jednotlivých sekcí */}
          <div className="flex flex-col gap-16">
            {teamSections.map((section) => (
              <div key={section.title}>
                {/* Hlavička sekce */}
                <div className="mb-8 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                  <p className="text-gray-400 mt-2">{section.description}</p>
                </div>
                
                {/* Mřížka pro členy dané sekce */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {section.members.map((member, index) => (
                    <TeamMemberCard key={member.name} member={member} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}