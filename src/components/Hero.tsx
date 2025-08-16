"use client"; // 1. Označíme jako klientskou komponentu

import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [serverStatus, setServerStatus] = useState<
    "loading" | "online" | "offline"
  >("loading");
  const serverIp = "play.darknest.cz";

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIp}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.online) {
          setPlayerCount(data.players.online);
          setServerStatus("online");
        } else {
          setServerStatus("offline");
        }
      } catch (error) {
        console.error("Failed to fetch server status:", error);
        setServerStatus("offline"); // Treat errors as offline
      }
    };

    fetchServerStatus();
  }, []);

  const titleWords = "Vstup do Světa DarkNest".split(" ");

  // 2. Vytvoříme funkci pro obsluhu kliknutí
  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Zabráníme výchozí akci (přidání # do URL)
    e.preventDefault();

    // Najdeme cílovou sekci
    const targetElement = document.querySelector(href);

    // Pokud existuje, plynule na ni srolujeme
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center bg-gray-900 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-gray-900 to-[#6633cc]/20"></div>
      <div className="container mx-auto px-6 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight word-reveal">
          <span style={{ animationDelay: "0.1s" }}>Vstup</span>{" "}
          <span style={{ animationDelay: "0.2s" }}>do</span>{" "}
          <span style={{ animationDelay: "0.3s" }}>světa</span>
          <br />
          <span
            className="text-[#6633cc] text-glow"
            style={{ animationDelay: "0.4s" }}
          >
            DarkNest
          </span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto scroll-animate"
          style={{ transitionDelay: "0.5s" }}
        >
          Tvoje nové dobrodružství ve světě kostek začíná právě zde.
        </p>
        <div
          className="mt-10 scroll-animate"
          style={{ transitionDelay: "0.6s" }}
        >
          <a
            href="#pripojit-se"
            // 3. Přidáme onClick událost a voláme naši funkci
            onClick={(e) => handleScrollClick(e, "#pripojit-se")}
            className="bg-[#6633cc] hover:bg-[#6633cc]/90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Začít Hrát
          </a>
        </div>

        {/* Server Status */}
        <div
          className="mt-8 text-gray-400 scroll-animate"
          style={{ transitionDelay: "0.8s", minHeight: "24px" }}
        >
          {serverStatus === "loading" && (
            <p className="animate-pulse">Načítání stavu serveru...</p>
          )}
          {serverStatus === "online" && (
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p>
                Právě teď je online{" "}
                <span className="font-bold text-white font-mono">
                  {playerCount}
                </span>{" "}
                hráčů!
              </p>
            </div>
          )}
          {serverStatus === "offline" && (
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <p>
                Server je momentálně{" "}
                <span className="font-bold text-red-400">offline</span>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
