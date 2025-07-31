"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PemiraSlidingText from "./SlidingText";

export default function PemiraAboutSection() {
  return (
    <section
      id="tentang"
      className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#DADED1]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#19554B]"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.3,
                filter: "blur(40px)",
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#19554B] mb-8 leading-tight">
              <span className="block mb-3">Apa Itu</span>
              <span className="text-transparent bg-clip-text bg-[#19554b]">
                PEMIRA 2025?
              </span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-[#19554B]">
              <p>
                <span className="font-semibold">PEMIRA</span> atau Pemilihan
                Raya adalah ajang demokrasi kampus yang menjadi wadah bagi
                mahasiswa untuk memilih perwakilan mereka di organisasi
                kemahasiswaan.
              </p>

              <p>
                Melalui <span className="font-semibold">PEMIRA</span>, mahasiswa
                dapat menyalurkan aspirasi serta turut menentukan arah kebijakan
                kampus.
              </p>

              <p className="text-2xl md:text-3xl font-bold mt-8 bg-clip-text text-transparent bg-[#19554b]">
                Suaramu berarti! Jadilah bagian dari perubahan.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <Image
                src="/pemira/logo-pemira-adiraka.png"
                alt="Logo PEMIRA 2025"
                fill
                className="object-contain drop-shadow-[0_10px_30px_rgba(222,218,209,0.3)] rounded-full"
                priority
              />

              <div className="absolute inset-0 rounded-full bg-[#DEDAD1] opacity-20 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
      <PemiraSlidingText direction="right" />
    </section>
  );
}
