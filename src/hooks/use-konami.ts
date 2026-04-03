"use client";

import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function useKonami() {
  const [triggered, setTriggered] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI[indexRef.current]) {
        indexRef.current++;
        if (indexRef.current === KONAMI.length) {
          setTriggered(true);
          indexRef.current = 0;
          // Reset after 5 seconds
          setTimeout(() => setTriggered(false), 5000);
        }
      } else {
        indexRef.current = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return triggered;
}
