'use client';
// components/Content.js// components/RotatingWords.js
// components/RotatingWords.js
import { useEffect } from 'react';
import gsap from 'gsap';

const RotatingWords = () => {
  useEffect(() => {
    const words = ['Transformations', 'Collaborative Innovation'];
    let currentWordIndex = 0;

    const rotateWords = () => {
      const wordElement: any = document.getElementById('word');

      gsap.to(wordElement, {
        duration: 0.5,
        opacity: 0,
        y: '-50%',
        onComplete: () => {
          wordElement.innerText = words[currentWordIndex];
          currentWordIndex = (currentWordIndex + 1) % words.length;
          gsap.fromTo(wordElement, { opacity: 0, y: '50%' }, { duration: 0.5, opacity: 1, y: '0%' });
          wordElement.classList.remove('animate__fadeOutUp');
          void wordElement.offsetWidth; // Trigger reflow
          wordElement.classList.add('animate__fadeInDown');
        },
      });
    };

    const rotateInterval = setInterval(rotateWords, 3000);

    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <div className="">
      <div id="flip" className="inline-block relative">
        <div id="word" className="animate__animated animate__fadeInDown">
          Transformations
        </div>
      </div>
    </div>
  );
};

export default RotatingWords;
