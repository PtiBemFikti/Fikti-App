import Image from "next/image";
import logoAdiraka from "../../../public/LOGO ADIRAKA ROUND.png";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import ImageSlider from "./ImageSlider";

export default function HeroSection() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollDown = () => {
    setIsScrolling(true);
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const year = new Date().getFullYear();

  return (
    <div className="relative w-full h-screen bg-gradient-to-b section-home flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Background Image Slider */}
      <ImageSlider />

      {/* Content */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:w-[85%] xl:w-[80%] text-center lg:text-left z-10">
        {/* Text Section */}
        <div className="w-full md:w-[60%] lg:w-1/2 flex flex-col items-center lg:items-start animate-fade-in">
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold uppercase leading-tight">
            Selamat Datang di <br />
            <span className="text-white">BEM FIKTI UG 2024/{year}</span>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-3">
              Kabinet Adiraka
            </p>
          </h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base lg:text-lg xl:text-xl  leading-relaxed font-bold">
            BEM FIKTI UG adalah organisasi mahasiswa yang menjalankan fungsi
            eksekutif di Fakultas Ilmu Komputer dan Teknologi Informasi,
            Universitas Gunadarma. Kami bertujuan untuk menjadi aktif,
            responsif, dan konstruktif melalui berbagai aksi, pengabdian, dan
            layanan.
          </p>
        </div>

        {/* Logo Section */}
        <div className="w-[40%] md:w-[40%] lg:w-[40%] xl:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={logoAdiraka}
            alt="Logo Adiraka"
            width={400}
            height={400}
            className="drop-shadow-[1px_1px_10px_#efefef] animate-floating"
          />
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-4 flex flex-col items-center text-white transition-transform"
      >
        <FaArrowDown className="w-8 h-8 animate-bounce" />
        <span className="text-sm sm:text-base font-light">Scroll Down</span>
      </button>
    </div>
  );
}
