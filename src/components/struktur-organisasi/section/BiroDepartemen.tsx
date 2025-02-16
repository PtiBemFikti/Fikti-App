import Image from "next/image";
import React from "react";
import { dataBiroDepartemen } from "../Card/data";

const Card = ({ foto, judul }: { foto: string; judul: string }) => {
  return (
    <div className="relative flex flex-col items-center group text-center cursor-pointer">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3a0d63] to-transparent rounded-2xl z-10"></div>

      {/* Gambar dan Konten */}
      <div className="relative z-10 rounded-2xl shadow-lg p-4">
        <Image
          src={foto}
          width={1000}
          height={1000}
          className="rounded-lg"
          alt={judul}
        />
        <h3 className="mt-3 text-2xl font-bold text-white">{judul}</h3>
        <button className="mt-3 px-6 py-2 bg-[#6a1b9a] text-white rounded-lg hover:bg-[#8e24aa] transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default function BiroDepartemenSection() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-20 section-about">
      <h1 className="text-3xl md:text-[3rem] font-bold mb-20 text-center">
        Biro & Departemen
        <span className="block w-[80%] h-1 bg-purple-500 mx-auto mt-5"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl px-5 md:gap-20 md:px-0">
        {dataBiroDepartemen.map((item) => (
          <Card key={item.id} foto={item.foto} judul={item.judul} />
        ))}
      </div>
    </div>
  );
}
