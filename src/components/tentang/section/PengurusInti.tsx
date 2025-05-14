"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "@/components/tentang/Card";
import {
  satuanPengendaliInternal,
  badanPengurusHarian,
} from "@/app/tentang/data/SpiBph";
import { MonumentExtendedBold } from "@/styles/font";
import { motion } from "framer-motion";

export default function PengurusIntiSection() {
  const [pengurusIntiIndex, setPengurusIntiIndex] = useState(0);
  const [kontrolInternalIndex, setKontrolInternalIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Animasi konsisten dengan komponen VisiMisiSection
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

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
    <div className="py-4 w-full h-fit flex flex-col items-center justify-center text-dark-green-fikti bg-cream-fikti">
      {/* Ketua dan Wakil Ketua */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1
          className={`${MonumentExtendedBold.className} text-2xl md:text-[2rem] font-bold text-center`}
        >
          Ketua dan Wakil Ketua BEM FIKTI
          <span className="block w-[80%] h-1 bg-dark-green-fikti mx-auto mt-5"></span>
        </h1>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32 w-full py-10 md:py-20"
      >
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
      </motion.div>

      {/* Our Team */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1.5}
      >
        <h1
          className={`${MonumentExtendedBold.className} text-2xl md:text-[2rem] font-bold text-center`}
        >
          Our Team
          <span className="block w-[80%] h-1 bg-dark-green-fikti mx-auto my-5"></span>
        </h1>
      </motion.div>

      {/* Satuan Pengendali Internal */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        className="w-full mt-12"
      >
        <h2 className="text-center text-2xl font-semibold mb-4">
          Satuan Pengendali Internal
        </h2>
        <div className="relative overflow-hidden w-full md:w-[100%] lg:w-[70%] mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                kontrolInternalIndex * (100 / slidesToShow)
              }%)`,
            }}
          >
            {satuanPengendaliInternal.map((spi, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.2 + 3.2}
                className="w-full flex-shrink-0 p-4"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <Card foto={spi.foto} nama={spi.nama} jabatan={spi.jabatan} />
              </motion.div>
            ))}
          </div>

          {/* Navigasi */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3.5}
            onClick={kontrolInternalPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-green-fikti text-cream-fikti p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaChevronLeft size={24} />
          </motion.button>
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3.5}
            onClick={kontrolInternalNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-green-fikti text-cream-fikti p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>

      {/* Badan Pengurus Harian */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        className="w-full"
      >
        <h2 className="text-center text-2xl font-semibold mb-4">
          Badan Pengurus Harian
        </h2>
        <div className="relative overflow-hidden w-full md:w-[100%] lg:w-[70%] mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                pengurusIntiIndex * (100 / slidesToShow)
              }%)`,
            }}
          >
            {badanPengurusHarian.map((bph, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.2 + 2.2}
                className="w-full flex-shrink-0 p-4"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <Card foto={bph.foto} nama={bph.nama} jabatan={bph.jabatan} />
              </motion.div>
            ))}
          </div>

          {/* Navigasi */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.5}
            onClick={pengurusIntiPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-green-fikti text-cream-fikti p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaChevronLeft size={24} />
          </motion.button>
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.5}
            onClick={pengurusIntiNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-green-fikti text-cream-fikti p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
