// components/biro.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Desc: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-40 md:space-x-4">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold mb-4"
      >
        Apasih HARSASI itu ?
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/3"
        >
          <Image
            src="/New Year Ball.png"
            alt="Biro Image 1"
            className="w-40 mx-auto h-40 md:h-60 object-cover mb-2"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/3"
        >
          <Image
            src="/1.png"
            alt="Biro Image 1"
            className="w-40 mx-auto bg-slate-300 h-40 md:h-60 object-cover rounded-full mb-2"
            width={500}
            height={500}
          />
          <p className="text-sm text-justify md:text-base">
            Kehadiran kabinet Ruang Refleksi diharapkan dapat membantu Mahasiswa
            FIKTI untuk merenungkan perilaku dan pilihan yang diambil, serta
            menjawab permasalahan yang ada secara lebih relevan. Dengan
            kehadiran kabinet Ruang Refleksi diharapkan Mahasiswa FIKTI dapat
            membangun kemampuan intelektual yang diperlukan untuk menjawab
            keadaan yang serba disruptif. Kabinet Ruang Refleksi juga mempunyai
            makna dimana fungsionaris BEM FIKTI selalu mempunyai ruang untuk
            membuat kesalahan dan dapat berefleksi dengan cara selalu belajar
            dari kesalahan tersebut. Karena kabinet Ruang Refleksi percaya
            bahwasanya ruh utama BEM FIKTI terdapat pada kebebasan untuk
            belajar, kebebasan untuk berbuat kesalahan dan belajar dari
            kesalahan tersebut.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/3"
        >
          <Image
            src="/Fireworks.png"
            alt="Biro Image 1"
            className="w-40 mx-auto h-40 md:h-60 mb-2"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Desc;
