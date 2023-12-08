import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";
import { useInView } from "react-intersection-observer";
import { url } from "inspector";
import Image from "next/image";
const Dashboard: React.FC = () => {
  const letsPresentControls = useAnimation();
  const harsasiControls = useAnimation();
  const fiktiControls = useAnimation(); // Tambah kontrol untuk elemen FIKTI

  const [letsPresentRef, letsPresentInView] = useInView({
    triggerOnce: true,
  });

  const [harsasiRef, harsasiInView] = useInView({
    triggerOnce: true,
  });

  const [fiktiRef, fiktiInView] = useInView(); // Tambah ref untuk elemen FIKTI

  useEffect(() => {
    if (letsPresentInView) {
      letsPresentControls.start("visible");
    }
  }, [letsPresentInView, letsPresentControls]);

  useEffect(() => {
    if (harsasiInView) {
      harsasiControls.start("visible");
    }
  }, [harsasiInView, harsasiControls]);

  useEffect(() => {
    if (fiktiInView) {
      fiktiControls.start("visible");
    }
  }, [fiktiInView, fiktiControls]);

  const letsPresentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const harsasiVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const fiktiVariants = {
    // Varians animasi untuk elemen FIKTI
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-[#091534] to-[#060E23] to-[84%] border-b-2 shadow-xl border-slate-700 w-full py-20 flex flex-col items-center justify-center "
      // style={{ backgroundImage: "url('/dyz.jpg')" }}
    >
      <Image
        src="/logo-kabinet.png"
        alt="Logo"
        width={100}
        height={100}
        className="mb-5"
        ref={fiktiRef}
      />
      <motion.h1
        variants={fiktiVariants} // Gunakan varian untuk elemen FIKTI
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 3 }}
        className="text-base text-center font-medium text-purpleText border-2 border-purpleText rounded-full px-2 py-1"
        ref={fiktiRef} // Gunakan ref untuk elemen FIKTI
      >
        Unlock New Generation
      </motion.h1>

      <motion.h1
        variants={fiktiVariants} // Gunakan varian untuk elemen FIKTI
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 4 }}
        className="text-8xl md:text-9xl text-center font-black text-white"
        ref={fiktiRef} // Gunakan ref untuk elemen FIKTI
      >
        FIKTI
      </motion.h1>
      <div className="flex align-top justify-center">
        <motion.div
          initial="hidden"
          animate={letsPresentControls}
          variants={letsPresentVariants}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex w-full justify-center md:w-1/2 mx-auto text-orangeText mt-4"
          ref={letsPresentRef}
        >
          <motion.div className="p-2 text-start">
            <h1 className="text-xl md:text-7xl font-bold">
              LET&apos;S PRESENT
            </h1>
            <p className="text-base">#HarmoniYangSerasi</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={harsasiControls}
          variants={harsasiVariants}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex w-full justify-center md:w-1/2 mx-auto text-orangeText mt-4"
          ref={harsasiRef}
        >
          <motion.div className="p-2 text-end">
            <h1 className="text-xl md:text-7xl font-bold">#HARSASI</h1>
            <p className="text-base">
              Start with thunder <br /> & Grow with the rain
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
