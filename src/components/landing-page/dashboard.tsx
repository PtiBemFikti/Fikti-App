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

  return (
    <div
      className="relative overflow-x-hidden w-full h-screen overflow-hidden bg-gradient-to-b section-home flex items-center justify-center max-md:py-44"

      // style={{
      //   // backgroundImage: `url('/bg-home.jpg')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="absolute flex items-center justify-between inset-0 bg-black/50" />
      <ImageSlider />

      <div className="relative flex max-md:flex-col-reverse items-center justify-between w-[80%] max-md:w-full text-left max-md:text-center mx-10 max-md:mx-5 max-md:py-44 z-10">
        {/* Typography */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start animate-fade-in">
          <h1 className="text-white text-6xl max-md:text-3xl font-bold uppercase tracking-wide leading-tight">
            Selamat Datang di <br />
            <span className="text-white">BEM FIKTI UG 2024</span>
          </h1>
          <p className="text-gray-300 mt-6 max-md:mt-3 text-lg max-md:text-sm leading-relaxed font-bold">
            BEM FIKTI UG adalah organisasi mahasiswa yang menjalankan fungsi
            eksekutif di Fakultas Ilmu Komputer dan Teknologi Informasi,
            Universitas Gunadarma. Kami bertujuan untuk menjadi aktif,
            responsif, dan konstruktif melalui berbagai aksi, pengabdian, dan
            layanan.
          </p>
        </div>

        {/* Logo */}
        <div className="lg:w-1/2 max-md:w-[35%] max-md:h-[35%] flex justify-start lg:justify-end mt-10 lg:mt-0 max-md:mt-3">
          <Image
            src={logoAdiraka}
            alt="Logo Adiraka"
            width={400}
            height={400}
            className="drop-shadow-[1px_1px_10px_#efefef] animate-floating"
          />
        </div>
      </div>
      <button
        onClick={handleScrollDown}
        className="absolute bottom-2 flex flex-col items-center text-white transition-transform"
      >
        <FaArrowDown className="w-8 h-8 animate-bounce" />
        <span className="text-base font-light">Scroll Down</span>
      </button>
    </div>
  );
}
