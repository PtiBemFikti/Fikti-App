"use client";

import { FaMapMarkerAlt, FaTicketAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { Montserrat, MonumentExtendedBold } from "@/styles/font";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GelbudHeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-[#071D2B]">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('/gelar-budaya/bg-dummy.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-4xl"
      >
        {/* Logo with Animation */}
        <motion.div
          variants={logoVariants}
          className="mb-8"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/gelar-budaya/logo-gelar-budaya-nobg.png"
            alt="Logo Gelar Budaya"
            width={300}
            height={300}
            className="w-36 h-36 md:w-64 md:h-64 object-contain gelbud-spin-slow"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className={`${MonumentExtendedBold.className} text-4xl md:text-6xl font-extrabold tracking-wider mb-4 drop-shadow-lg`}
        >
          GELAR BUDAYA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-2xl font-medium mb-4 text-white/80"
        >
          Panggung Kreasi dan Kebersamaan FIKTI
        </motion.p>

        {/* Location Info */}
        <motion.p
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-2 text-white/70 mb-8"
        >
          <FaMapMarkerAlt className="text-[#ECDCC1] text-base" />
          Hype Cafe, Depok.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="#"
            // href="https://bit.ly/RegistrasiPesertaGelarBudaya2025"
            target="_blank"
            className="bg-[#ECDCC1] text-black hover:bg-[#cfbb97] font-bold py-3 px-8 rounded-full transition-all duration-150 flex items-center justify-center gap-2"
          >
            <FaTicketAlt />
            Beli Tiket
          </Link>

          <Link
            href="#tentang"
            className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            Pelajari Lebih
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaArrowRight />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
