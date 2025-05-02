"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MonumentExtendedBold } from "@/styles/font";
import Link from "next/link";

export default function GelbudPendaftaran() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="pendaftaran"
      className="w-full px-4 py-16 mb-10 lg:px-8 bg-black text-white"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="flex flex-col items-center text-center"
      >
        <motion.h2
          variants={item}
          className={`${MonumentExtendedBold.className} text-3xl md:text-4xl font-bold mb-4`}
        >
          Pendaftaran Peserta
        </motion.h2>
        <motion.p variants={item} className="text-gray-300 mb-10 max-w-xl">
          Kamu bebas tampil apa aja! Bisa nyanyi, main musik, baca puisi,
          stand-up comedy, atau apapun yang ingin kamu tunjukkan di atas
          panggung
        </motion.p>

        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-7xl"
        >
          <div className="bg-white/5 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gelar-budaya/musik.jpeg"
              alt="Tampil Musik"
              width={800}
              height={800}
              className="w-full h-fit object-cover aspect-video"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Tampil Musik</h3>
              <p className="text-gray-300 text-sm">
                Main alat musik solo, band, atau instrumental - semua boleh!
              </p>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gelar-budaya/cas.jpg"
              alt="Tampil Nyanyi"
              width={800}
              height={800}
              className="w-full h-fit object-cover aspect-video"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Tampil Nyanyi</h3>
              <p className="text-gray-300 text-sm">
                Solo, duet, grup vokal, atau karaoke bareng? Kamu yang tentukan!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <Link
            href="https://forms.gle/xxx-link-form-pendaftaran"
            target="_blank"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Daftar Sekarang
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
