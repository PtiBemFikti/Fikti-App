"use client";

import { useEffect } from "react";
import gsap from "gsap";

const RotatingH1 = ({ className }: { className?: string }) => {
  useEffect(() => {
    const words = ["Begins Now!", "Starts Here!"];
    let currentWordIndex = 0;

    const rotateWords = () => {
      const wordElement = document.getElementById("rotating-text");
      if (!wordElement) return;

      gsap.to(wordElement, {
        duration: 0.5,
        opacity: 0,
        y: "-50%",
        onComplete: () => {
          wordElement.innerText = words[currentWordIndex];
          currentWordIndex = (currentWordIndex + 1) % words.length;
          gsap.fromTo(
            wordElement,
            { opacity: 0, y: "50%" },
            { duration: 0.5, opacity: 1, y: "0%" }
          );
        },
      });
    };

    const intervalId = setInterval(rotateWords, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span id="rotating-text" className={className}>
      Starts Here!
    </span>
  );
};

export default RotatingH1;
