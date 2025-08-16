"use client";

import React, { useEffect } from "react";

import Hero from "@/components/Hero";
import Minigames from "@/components/Minigames";
import About from "@/components/About";
import Join from "@/components/Join";

export default function Home() {
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
    <>
      <Hero />
      <Minigames />
      <About />
      <Join />
    </>
  );
}
