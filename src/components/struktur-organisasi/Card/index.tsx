import Image from "next/image";
import React from "react";

interface CardProps {
  foto: string;
  nama: string;
  jabatan: string;
}

const Card: React.FC<CardProps> = ({ foto, nama, jabatan }) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Efek lingkaran hijau di belakang */}
      <div className="absolute top-1/2 -translate-y-1/2 w-40 h-40 bg-green-500 rounded-full blur-xl opacity-60"></div>

      {/* Foto Profil */}
      <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <Image
          height={300}
          width={300}
          className="w-[15rem] h-[15rem] object-cover"
          src={foto}
          alt={nama}
        />
      </div>

      {/* Nama & Jabatan */}
      <div className="mt-4">
        <h3 className="text-white font-bold text-xl">{nama}</h3>
        <p className="text-gray-300">{jabatan}</p>
      </div>
    </div>
  );
};

export default Card;
