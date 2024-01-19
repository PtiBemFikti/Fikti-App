// pages/dept.tsx
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { AnimationControls } from "framer-motion";

const Dept: React.FC = () => {
  const containerControls = useAnimation();
  const sectionControls = useAnimation();

  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
  });

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (containerInView) {
      containerControls.start("visible");
    }
  }, [containerInView, containerControls]);

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start("visible");
    }
  }, [sectionInView, sectionControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className=" w-full justify-center items-center my-20"
    >
      <motion.h1
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="rounded-sm p-2 mb-4 mx-auto text-4xl md:text-6xl text-center font-bold text-slate-100"
      >
        OUR GUILD MASTER
      </motion.h1>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className=" flex justify-center items-center"
      >
        {/* Section 1 */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 3 }}
          className=" flex flex-col justify-center items-center mx-auto"
        >
          {/* Elemen div pertama (sebelah kiri) */}
          <motion.div
            className=""
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundImage: "url('/dyz.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "4px solid white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          ></motion.div>
          {/* Elemen div kedua (sebelah kanan) */}
          <motion.div className="">
            <h1 className="text-base text-center mt-6 text-purpleText md:text-2xl font-medium mb-2">
              KETUA UMUM
            </h1>
            <h1 className="text-base md:text-2xl font-medium mb-2">
              Dhiazul Fahaq Budiaji
            </h1>
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 3 }}
          className=" flex flex-col justify-center items-center mx-auto"
        >
          {/* Elemen div pertama (sebelah kiri) */}
          <motion.div
            className=""
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundImage: "url('/dyz.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "4px solid white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          ></motion.div>
          {/* Elemen div kedua (sebelah kanan) */}
          <motion.div className="">
            <h1 className="text-base text-center mt-6 text-purpleText md:text-2xl font-medium mb-2">
              KETUA UMUM
            </h1>
            <h1 className="text-base md:text-2xl font-medium mb-2">
              Dhiazul Fahaq Budiaji
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dept;
