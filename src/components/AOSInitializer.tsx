"use client";

import { useEffect } from "react";
import AOS from "aos";

export const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      // Zde můžete nastavit globální konfiguraci pro AOS
      // Například:
      // offset: 120, // animace se spustí 120px předtím, než se prvek objeví
      // duration: 600, // délka animace v ms
      // easing: 'ease-in-out', // typ animace
      // once: true, // zda se má animace spustit pouze jednou
    });
  }, []); // Prázdné pole závislostí zajistí, že se kód spustí jen jednou

  return null; // Tento komponent nic nerenderuje, pouze spouští skript
};