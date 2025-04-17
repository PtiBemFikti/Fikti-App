import React from "react";
import Image from "next/image";
import { MonumentExtendedBold, MonumentExtendedRegular } from "@/styles/font";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen max-h-[850px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main/hero-bg.jpg" // Ganti dengan path gambar Anda
          alt="BENA FIKTI UG Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Green Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-dark-green-fikti to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className={`${MonumentExtendedRegular.className} text-cream-fikti text-2xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-wider`}
          >
            Bersama Berkarya, <br />
            Mewujudkan Aspirasi, <br />
            Menciptakan Perubahan.
          </h1>

          <p className="text-base md:text-xl lg:text-2xl     mb-8 leading-tight">
            Kami hadir untuk membangun inovasi, memperjuangkan aspirasi <br />
            mahasiswa, dan menciptakan gerakan nyata yang berdampak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
