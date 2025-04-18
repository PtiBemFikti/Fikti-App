"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "@/components/tentang/Card";
import { dataBiroDepartemen } from "@/app/tentang/data/BirDep";
import { useParams } from "next/navigation";
import aboutImg from "../../../../public/about.jpeg";
import { Montserrat, MonumentExtendedBold } from "@/styles/font";
import { motion } from "framer-motion";

// Animasi konsisten dengan komponen sebelumnya
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function BiroDepartemenPage() {
  const { birDep } = useParams() as { birDep: string };

  const [staffIndex, setStaffIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const biroDepartemen = dataBiroDepartemen.find(
    (data) => data.slug === `/tentang/${birDep}`
  );

  if (!biroDepartemen) {
    return <div>Data tidak ditemukan</div>;
  }

  // Navigasi Staff
  const staffPrev = () => {
    setStaffIndex((prevIndex) =>
      prevIndex === 0
        ? biroDepartemen.staff.length - slidesToShow
        : prevIndex - 1
    );
  };

  const staffNext = () => {
    setStaffIndex((prevIndex) =>
      prevIndex >= biroDepartemen.staff.length - slidesToShow
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <>
      {/* KONTEN YANG ATAS */}
      <div className="relative z-10 w-screen h-fit text-cream-fikti bg-cream-fikti">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full h-[25rem] md:h-[30rem] flex items-center justify-center bg-cover bg-center mb-8 md:mb-12 overflow-hidden"
            style={{ backgroundImage: `url(${aboutImg.src})` }}
          >
            <div className="absolute inset-0 bg-dark-green-fikti/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-cream-fikti via-cream-fikti/10 to-transparent" />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center relative z-10 mx-6 mt-16 md:mt-0"
            >
              <motion.h1
                variants={fadeUp}
                custom={0.2}
                className={`${MonumentExtendedBold.className} relative text-2xl md:text-4xl tracking-wide font-bold text-center drop-shadow-lg mb-5`}
              >
                {biroDepartemen.judul}
              </motion.h1>
              <motion.h2
                variants={fadeUp}
                custom={0.4}
                className={`${Montserrat.className} text-base text-white md:text-xl text-center mb-8 md:mb-12 max-w-3xl drop-shadow-lg`}
              >
                {biroDepartemen.deskripsi}
              </motion.h2>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* KONTEN YANG BAWAH */}
      <div className="py-4 w-full h-fit flex flex-col items-center justify-center bg-cream-fikti pb-36 px-5">
        {/* Kepemimpinan */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
        >
          <h2
            className={`${MonumentExtendedBold.className} text-dark-green-fikti text-center text-2xl md:text-[2rem] font-semibold mb-12`}
          >
            Kepemimpinan
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.8}
              className="block w-[80%] h-1 bg-dark-green-fikti mx-auto mt-5"
            ></motion.span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="relative overflow-hidden w-full md:w-[100%] lg:w-[70%]"
        >
          <div className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out items-center justify-center">
            {biroDepartemen.kepemimpinan.map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1 + index * 0.2}
                className="w-full md:w-1/3 flex-shrink-0 p-4"
              >
                <Card
                  foto={leader.foto}
                  nama={leader.nama}
                  jabatan={leader.jabatan}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Staff */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1.6}
        >
          <h2
            className={`${MonumentExtendedBold.className} text-dark-green-fikti text-center text-2xl md:text-[2rem] font-semibold my-12`}
          >
            Our Staff
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1.8}
              className="block w-[80%] h-1 bg-dark-green-fikti mx-auto mt-5"
            ></motion.span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="relative overflow-hidden w-full md:w-[100%] lg:w-[70%]"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${staffIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {biroDepartemen.staff.map((staff, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-4"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <Card
                  foto={staff.foto}
                  nama={staff.nama}
                  jabatan={staff.jabatan}
                />
              </div>
            ))}
          </div>

          {/* Navigasi */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.2}
            onClick={staffPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-green-fikti text-cream-fikti p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaChevronLeft size={24} />
          </motion.button>
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.2}
            onClick={staffNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-green-fikti text-cream-fikti p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaChevronRight size={24} />
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
