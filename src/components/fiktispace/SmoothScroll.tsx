"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function useSmoothScroll() { 
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const lerpValue = isMobile ? 2 : 0.07; 

    const lenis = new Lenis({
      lerp: lerpValue
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
