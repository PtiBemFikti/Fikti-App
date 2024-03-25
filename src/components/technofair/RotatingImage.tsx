'use client';
// components/RotatingImage.js
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const RotatingImage = () => {
  useEffect(() => {
    const rotateImage = () => {
      gsap.fromTo('.rotating-image', { opacity: 1, y: '0%' }, { duration: 1, opacity: 0, y: '100%', onComplete: () => {
        // Setelah animasi selesai, kembali ke posisi awal dan ulangi animasi
        gsap.fromTo('.rotating-image', { opacity: 0, y: '-100%' }, { duration: 0, opacity: 1, y: '0%' });
      }});
    };

    const rotateInterval = setInterval(rotateImage, 1000);

    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <div className="opacity-20">
      <Image src="/technofair/arrow.png" alt="Arrow ke bawah" width={30} height={30} className="rotating-image opacity-20" />
    </div>
  );
};

export default RotatingImage;
