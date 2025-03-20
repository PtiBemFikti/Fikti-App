"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "@/components/struktur-organisasi/Card";
import {
  satuanPengendaliInternal,
  badanPengurusHarian,
} from "@/app/struktur-organisasi/data/SpiBph";

export default function PengurusIntiSection() {
  const [pengurusIntiIndex, setPengurusIntiIndex] = useState(0);
  const [kontrolInternalIndex, setKontrolInternalIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // Jumlah slide yang ditampilkan

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Navigasi Pengurus Inti
  const pengurusIntiPrev = () => {
    setPengurusIntiIndex((prevIndex) =>
      prevIndex === 0
        ? badanPengurusHarian.length - slidesToShow
        : prevIndex - 1
    );
  };

  const pengurusIntiNext = () => {
    setPengurusIntiIndex((prevIndex) =>
      prevIndex >= badanPengurusHarian.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  // Navigasi Kontrol Internal
  const kontrolInternalPrev = () => {
    setKontrolInternalIndex((prevIndex) =>
      prevIndex === 0
        ? satuanPengendaliInternal.length - slidesToShow
        : prevIndex - 1
    );
  };

  const kontrolInternalNext = () => {
    setKontrolInternalIndex((prevIndex) =>
      prevIndex >= satuanPengendaliInternal.length - slidesToShow
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div className="py-4 w-full h-fit flex flex-col items-center justify-center section-about">
      <h1 className="text-3xl md:text-[3rem] font-bold text-center">
        Ketua dan Wakil Ketua BEM FIKTI
        <span className="block w-[80%] h-1 bg-purple-500 mx-auto mt-5"></span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 w-full py-10 md:py-20">
        <Card
          foto="/adiraka/BPH/aming.webp"
          nama="Muhammad Naufal Kamil"
          jabatan="Ketua BEM FIKTI"
        />
        <Card
          foto="/adiraka/BPH/aryo.webp"
          nama="Aryo Dwi Prasetyo"
          jabatan="Wakil Ketua BEM FIKTI"
        />
      </div>
      <h1 className="text-3xl md:text-[3rem] font-bold text-center">
        Our Team
        <span className="block w-[80%] h-1 bg-purple-500 mx-auto my-5"></span>
      </h1>

      {/* Pengurus Inti */}
      <h2 className="text-center text-2xl font-semibold mb-4">
        Badan Pengurus Harian
      </h2>
      <div className="relative overflow-hidden w-full md:w-[100%] lg:w-[70%] ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              pengurusIntiIndex * (100 / slidesToShow)
            }%)`,
          }}
        >
          {badanPengurusHarian.map((bph, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <Card foto={bph.foto} nama={bph.nama} jabatan={bph.jabatan} />
            </div>
          ))}
        </div>

        {/* Navigasi */}
        <button
          onClick={pengurusIntiPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={pengurusIntiNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Satuan Pengendali Internal */}
      <h2 className="text-center text-2xl font-semibold mb-4 mt-6">
        Satuan Pengendali Internal
      </h2>
      <div className="relative overflow-hidden w-full md:w-[100%] lg:w-[70%] ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              kontrolInternalIndex * (100 / slidesToShow)
            }%)`,
          }}
        >
          {satuanPengendaliInternal.map((spi, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <Card foto={spi.foto} nama={spi.nama} jabatan={spi.jabatan} />
            </div>
          ))}
        </div>

        {/* Navigasi */}
        <button
          onClick={kontrolInternalPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={kontrolInternalNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
