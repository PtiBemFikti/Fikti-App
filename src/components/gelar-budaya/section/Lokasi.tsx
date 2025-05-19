"use client";

import { motion } from "framer-motion";
import { MonumentExtendedBold } from "@/styles/font";
import { FaParking, FaWalking, FaTrain, FaBus } from "react-icons/fa";
import Link from "next/link";
export default function GelbudLokasi() {
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
      id="lokasi"
      className="w-full px-4 py-10 lg:px-8 bg-white text-black"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="flex flex-col items-center"
      >
        <motion.h2
          variants={item}
          className={`${MonumentExtendedBold.className} text-3xl md:text-4xl font-bold mb-8 text-center`}
        >
          Lokasi Acara
        </motion.h2>
        {/* KETERANGAN */}
        {/* <motion.div variants={item} className="mb-6 text-center max-w-2xl">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            voluptatibus amet perspiciatis ab, temporibus dignissimos itaque a
            nam alias dolore, reiciendis voluptatum explicabo cupiditate enim
            sint at similique facere illum?
          </p>
        </motion.div> */}

        {/* MAP */}
        <motion.div
          variants={item}
          className="w-full max-w-4xl overflow-hidden rounded-[30px] shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4274.675826034588!2d106.81664147499198!3d-6.404731693585994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb26a97b04fb%3A0x23b9b69723b42885!2sKafe%20Hype%20Depok!5e1!3m2!1sid!2sid!4v1747242312110!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center mt-6 p-5 border-black border-2 w-full max-w-6xl overflow-hidden rounded-[30px] shadow-lg"
        >
          <h2
            className={`${MonumentExtendedBold.className} text-xl tracking-wide font-bold mb-4`}
          >
            Akses Menuju Lokasi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Parking */}
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <FaParking className="text-xl mt-1 text-blue-600" />
              <div>
                <h3 className="font-semibold">Parkir Motor dan Mobil</h3>
                <p className="text-sm text-gray-600">
                  Tersedia parkiran motor dan mobil dengan biaya parkir.
                </p>
              </div>
            </div>

            {/* Walking */}
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <FaWalking className="text-xl mt-1 text-green-600" />
              <div>
                <h3 className="font-semibold">Jalan Kaki</h3>
                <p className="text-sm text-gray-600">
                  Bisa jalan kaki bagi yang menggunakan transportasi umum.
                </p>
              </div>
            </div>

            {/* Commuter Line */}
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <FaTrain className="text-xl mt-1 text-red-600" />
              <div>
                <h3 className="font-semibold">KRL Commuter Line</h3>
                <p className="text-sm text-gray-600">
                  Bagi yang menggunakan transportasi umum
                </p>
              </div>
            </div>

            {/* Transjakarta */}
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <FaBus className="text-xl mt-1 text-yellow-600" />
              <div>
                <h3 className="font-semibold">Angkutan Umum</h3>
                <p className="text-sm text-gray-600">
                  Dapat menggunakan angkot bernomor D05
                </p>
              </div>
            </div>
          </div>

          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Kafe+Hype+Depok/@-6.4047317,106.8166361,982m/data=!3m1!1e3!4m6!3m5!1s0x2e69eb26a97b04fb:0x23b9b69723b42885!8m2!3d-6.4047317!4d106.8192164!16s%2Fg%2F11kj8fpbd8?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
            className=" mt-6 px-6 py-3 bg-black text-white rounded-2xl"
          >
            Petunjuk Arah
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
