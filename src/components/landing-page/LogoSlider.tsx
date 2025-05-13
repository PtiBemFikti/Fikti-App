"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoSlider() {
  const departments = [
    { logo: "/adiraka/LOGO/AKADEMIK.png", type: "Biro", name: "Akademik" },
    { logo: "/adiraka/LOGO/BISKRE.png", type: "Biro", name: "Biskre" },
    { logo: "/adiraka/LOGO/HUMAS.png", type: "Biro", name: "Humas" },
    { logo: "/adiraka/LOGO/KEMITRAAN.png", type: "Biro", name: "Kemitraan" },
    { logo: "/adiraka/LOGO/KESTARI.png", type: "Biro", name: "Kestari" },
    { logo: "/adiraka/LOGO/KEUANGAN.png", type: "Biro", name: "Keuangan" },
    { logo: "/adiraka/LOGO/LITBANG.png", type: "Biro", name: "Litbang" },
    { logo: "/adiraka/LOGO/MEDIA.png", type: "Biro", name: "Media" },
    { logo: "/adiraka/LOGO/ORSB.png", type: "Departemen", name: "ORSB" },
    {
      logo: "/adiraka/LOGO/POLKESMA.png",
      type: "Departemen",
      name: "Polkesma",
    },
    { logo: "/adiraka/LOGO/PSDM.png", type: "Biro", name: "PSDM" },
    { logo: "/adiraka/LOGO/PTI.png", type: "Departemen", name: "PTI" },
    {
      logo: "/adiraka/LOGO/SOSMAS.png",
      type: "Departemen",
      name: "Sosmas",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden w-full py-6"
    >
      {/* Left Gradient Shadow */}
      <div className="absolute left-0 top-0 h-full w-10 md:w-[10%] z-10 bg-gradient-to-r from-cream-fikti via-cream-fikti to-transparent pointer-events-none" />

      {/* Slider Content */}
      <div className="flex animate-infinite-scroll whitespace-nowrap">
        {Array(4)
          .fill(departments)
          .flat()
          .map((dept, index) => (
            <div
              key={index}
              className="flex-none rounded-xl flex items-center p-3 w-fit md:w-52"
            >
              {/* Logo Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center p-2">
                <Image
                  src={dept.logo}
                  alt={`Logo ${dept.name}`}
                  width={80}
                  height={80}
                  className="object-contain w-12 h-12 md:w-16 md:h-16"
                />
              </div>

              {/* Text Container */}
              <div className="ml-4">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {dept.type}
                </p>
                <h3 className="text-sm md:text-base font-bold text-dark-green-fikti">
                  {dept.name}
                </h3>
              </div>
            </div>
          ))}
      </div>

      {/* Right Gradient Shadow */}
      <div className="absolute right-0 top-0 h-full w-10 md:w-[10%] z-10 bg-gradient-to-l from-cream-fikti via-cream-fikti to-transparent pointer-events-none" />
    </motion.div>
  );
}
