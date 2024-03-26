import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";
import { useInView } from "react-intersection-observer";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const { className: bricolageClassName } = font;

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
      className="bg-cover md:bg-contain md:bg-right bg-center bg-no-repeat w-full h-screen flex flex-wrap items-center justify-center md:mb-96"
      style={{ backgroundImage: "url('/bg-dash.jpg')" }}
    >
      <motion.h1
        variants={fiktiVariants} // Gunakan varian untuk elemen FIKTI
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 3 }}
        className={`text-[150px] md:text-[500px] -mt-40 text-center font-black mb-4 ${bricolageClassName}`}
        ref={fiktiRef} // Gunakan ref untuk elemen FIKTI
      >
        FIKTI
      </motion.h1>
      <div className="flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate={letsPresentControls}
          variants={letsPresentVariants}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex w-full justify-center md:w-1/2 text-white -mt-96 md:mt-4"
          ref={letsPresentRef}
        >
          <motion.div className="bg-indigo-200 rounded-sm p-4 mb-4 ml-4 md:ml-0">
            <h1 className="text-xl md:text-7xl font-bold mb-2">
              LET&apos;S PRESENT
            </h1>
            <p className="text-sm">#HarmoniYangSerasi 1</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={harsasiControls}
          variants={harsasiVariants}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex w-full justify-center md:w-1/2 text-white -mt-96 md:mt-4"
          ref={harsasiRef}
        >
          <motion.div className="mb-4 ml-4 md:ml-0">
            <h1 className="text-xl md:text-8xl font-bold mb-2">#HARSASI</h1>
            <p className="text-base">
              Start with thunder and Grow with the rain
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
