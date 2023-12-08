import React, { useState, useEffect } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function KabinetImage({ fileName }: { fileName: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const imagePath = `/bph/${fileName}.png`;

  return (
    <section className="h-[100vh] w-[80%] mx-10 flex justify-center items-center relative snap-center bg-slate-300 mb-10 shadow-2xl rounded-3xl">
      <div
        className=" w-[400px] h-[300px] md:w-[800px] md:h-[500px] relative m-[20px] overflow-hidden"
        ref={ref}
      >
        <Image
          src={imagePath}
          alt={`/${fileName}.png`}
          layout="responsive"
          width={1030}
          height={572}
          className="absolute top-0 left-0 right-0 bottom-0 object-cover  "
        />
      </div>
      <motion.div
        className="left-[50% + 130px] m-2  bottom-60 w-full py-72 absolute"
        style={{ y }}
      ></motion.div>
      <motion.div
        className="left-[50% + 130px] bottom-40 w-full py-80 font-medium text-6xl absolute "
        style={{ y }}
      >
        <Image
          src={{ src: "/test.png", height: 200, width: 200 }}
          alt="/"
          className="absolute top-0 left-0 right-0 bottom-0 object-cover drop-shadow-lg  "
        />
        {/* {`#${fileName}`} */}
      </motion.div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Daftar nama file PNG
  const fileNames = [
    "JendralWakjen",
    "KabidEks",
    "KabidManKon",
    "KabidMed1",
    "KabidMed2",
    "KabidMinatBakat",
    "KabidSospol",
    "SekumBendum",
    "SPI1",
    "SPI2",
  ];

  return (
    <>
      {fileNames.map((fileName, index) => (
        <KabinetImage key={index} fileName={fileName} />
      ))}
      <motion.div
        className="progress fixed left-0 right-0 h-[5px] top-[66px] md:top-[76px]"
        style={{ scaleX }}
      />
    </>
  );
}
