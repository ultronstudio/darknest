"use client";

import React, { useState, useEffect } from 'react';

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Přidáme posluchač události při připojení komponentu
    window.addEventListener('mousemove', handleMouseMove);

    // Odebereme posluchač při odpojení komponentu, abychom předešli únikům paměti
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-200"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 51, 204, 0.15), transparent 80%)`,
      }}
    />
  );
}