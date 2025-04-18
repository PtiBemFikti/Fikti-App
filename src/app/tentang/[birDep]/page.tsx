"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "@/components/tentang/Card";
import { dataBiroDepartemen } from "@/app/tentang/data/BirDep";
import { useParams } from "next/navigation";
import aboutImg from "../../../../public/about.jpeg";
import { Montserrat, MonumentExtendedBold } from "@/styles/font";

export default function BiroDepartemenPage() {
  const { birDep } = useParams() as { birDep: string };

  const [staffIndex, setStaffIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // Jumlah slide yang ditampilkan

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
          <div
            className="relative w-full h-[25rem] md:h-[30rem] flex items-center justify-center bg-cover bg-center mb-8 md:mb-12 overflow-hidden"
            style={{ backgroundImage: `url(${aboutImg.src})` }}
          >
            <div className="absolute inset-0 bg-dark-green-fikti/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-cream-fikti via-cream-fikti/10 to-transparent" />

            <div className="flex flex-col justify-center items-center relative z-10 mx-6 mt-16 md:mt-0">
              <h1
                className={`${MonumentExtendedBold.className} relative text-2xl md:text-4xl tracking-wide font-bold text-center drop-shadow-lg mb-5`}
              >
                {biroDepartemen.judul}
              </h1>
              <h2
                className={`${Montserrat.className} text-base text-white md:text-xl text-center mb-8 md:mb-12 max-w-3xl drop-shadow-lg`}
              >
                {biroDepartemen.deskripsi}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* KONTEN YANG BAWAH */}
      <div className="py-4 w-full h-fit flex flex-col items-center justify-center bg-cream-fikti pb-36 px-5">
        {/* Kepemimpinan */}
        <h2
          className={`${MonumentExtendedBold.className} text-dark-green-fikti text-center text-2xl md:text-[2rem] font-semibold mb-12`}
        >
          Kepemimpinan
          <span className="block w-[80%] h-1 bg-dark-green-fikti mx-auto mt-5"></span>
        </h2>
        <div className="relative overflow-hidden w-full md:w-[100%] lg:w-[70%]">
          <div className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out items-center justify-center">
            {biroDepartemen.kepemimpinan.map((leader, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-4">
                <Card
                  foto={leader.foto}
                  nama={leader.nama}
                  jabatan={leader.jabatan}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Staff */}
        <h2
          className={`${MonumentExtendedBold.className} text-dark-green-fikti text-center text-2xl md:text-[2rem] font-semibold my-12`}
        >
          Our Staff
          <span className="block w-[80%] h-1 bg-dark-green-fikti mx-auto mt-5"></span>
        </h2>
        <div className="relative overflow-hidden w-full md:w-[100%] lg:w-[70%]">
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
          <button
            onClick={staffPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-green-fikti text-cream-fikti p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={staffNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-green-fikti text-cream-fikti p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
