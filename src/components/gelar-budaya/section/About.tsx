"use client";

import { Montserrat } from "@/styles/font";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="bg-white h-fit py-20 md:py-28 px-6 md:px-12 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Gambar dengan border radius custom */}
        <div className="relative w-full md:w-1/2">
          <div className="rounded-[120px_20px_0px_80px] overflow-hidden">
            <Image
              src="/gelar-budaya/bg-dummy.jpg"
              alt="About Gelar Budaya"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className={`${Montserrat.className} text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight`}
          >
            Menyatukan Tradisi <br /> dan Kreasi Mahasiswa FIKTI
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Gelar Budaya adalah event seni tahunan yang diselenggarakan oleh BEM
            FIKTI UG sebagai wadah ekspresi mahasiswa dalam menampilkan
            kreativitas dan karya seni. Acara ini menghadirkan pertunjukan
            budaya, lomba seni, dan pameran karya untuk memperkaya pengalaman
            budaya mahasiswa.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-black font-semibold hover:underline"
          >
            Pelajari Selengkapnya →
          </a>
        </div>
      </div>
    </section>
  );
}
