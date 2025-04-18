"use client";

import Image from "next/image";
import {
  FaBullhorn,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function VisiMisiSection() {
  const year = new Date().getFullYear();

  // Animasi muncul dari bawah
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section
      id="about"
      className="relative z-10 w-screen h-fit py-12 md:py-24 text-white bg-cream-fikti"
    >
      <div className="flex flex-col items-center justify-center px-8 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full px-4 md:px-24">
          {/* Left Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative top-0 lg:sticky lg:top-60 rounded-xl shadow-lg aspect-[16/9]"
          >
            <Image
              src="/about.jpeg"
              alt="About img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-md"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-8 -left-8 bg-dark-green-fikti text-cream-fikti rounded-full w-24 h-24 md:w-40 md:h-40 flex flex-col items-center justify-center transform shadow-lg"
            >
              <span className="text-xs md:text-xl font-bold text-cream-fikti ">
                2024/{`${year}`}
              </span>
              <span className="text-xs md:text-base font-bold">
                BEM FIKTI UG
              </span>
              <span className="text-[8px] md:text-xs font-bold">
                KABINET ADIRAKA
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="flex flex-col gap-8">
            {/* Vision */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-dark-green-fikti backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Visi Kami
              </h2>
              <p className="flex flex-col items-center text-base md:text-lg font-semibold text-center leading-relaxed">
                <FaHandsHelping
                  size={40}
                  className="text-white inline-block mb-4"
                />
                Mewujudkan BEM FIKTI UG sebagai wadah yang akrab, informatif,
                memiliki daya guna, serta menjadi support sistem bagi mahasiswa
                sehingga menjadikan FIKTI yang dekat, bersahabat, dan produktif.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-dark-green-fikti backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
                Misi Kami
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    text: "Mewujudkan penyaluran informasi secara masif guna memastikan informasi yang ada agar tersampaikan ke mahasiswa melalui penyampaian secara langsung di kampus dan didukung oleh sosial media.",
                    icon: <FaBullhorn size={30} className="text-white mb-4" />,
                  },
                  {
                    text: "Menjadi BEM FIKTI yang suportif dalam hal akademik maupun non akademik dalam rangka meningkatkan kompetensi serta daya saing mahasiswa FIKTI dan juga kedekatan antara BEM dengan mahasiswa.",
                    icon: <FaUsers size={30} className="text-white mb-4" />,
                  },
                  {
                    text: "Guna memastikan kehadiran BEM FIKTI dalam menyelesaikan permasalahan mahasiswa sebagai bentuk advokasi, BEM FIKTI berkomitmen untuk selalu aktif dan responsif dalam menangani setiap isu dan keluhan yang dihadapi oleh mahasiswa.",
                    icon: <FaShieldAlt size={30} className="text-white mb-4" />,
                  },
                  {
                    text: "Menempatkan koordinator wilayah di lokasi kampus Salemba, Kalimalang, dan Karawaci sebagai perwakilan BEM FIKTI yang dapat mengakomodasi mahasiswa di luar lokasi kampus Depok.",
                    icon: (
                      <FaMapMarkerAlt size={30} className="text-white mb-4" />
                    ),
                  },
                ].map((mission, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    custom={index + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    {mission.icon}
                    <p className="text-base md:text-lg font-semibold leading-relaxed">
                      {mission.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
