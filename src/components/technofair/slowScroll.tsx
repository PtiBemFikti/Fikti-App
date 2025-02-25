"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export function slowScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07, // Lower values produce slower, smoother scrolling.
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

