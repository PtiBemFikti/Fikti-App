// pages/dept.tsx
import React from "react";
import { motion } from "framer-motion";

const Dept: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className=" justify-center items-center my-40 md:space-x-4"
    >
      <motion.h1
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="shadow-inner shadow-orange-500  rounded-sm p-4 mx-auto text-4xl md:text-6xl text-center font-bold mb-4 text-slate-100"
      >
        OUR GUILD MASTER
      </motion.h1>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center mt-10"
      >
        {/* Section 1 */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 3 }}
          className="flex flex-col bg-orange-600 mx-auto w-full md:w-1/2 justify-center mb-4"
        >
          {/* Elemen div pertama (sebelah kiri) */}
          <motion.div
            className="bg-cover bg-center bg-no-repeat w-full h-60  rounded-sm mx-auto p-4 mb-4"
            style={{ backgroundImage: "url('/bg-dash2.jpg')" }}
          >
            <h1 className="text-xl text-indigo-950 md:text-2xl font-bold mb-2">
              Diazul Ibrahim
            </h1>
          </motion.div>
          {/* Elemen div kedua (sebelah kanan) */}
          <motion.div className="mb-4 mx-auto">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              Pencari memew
            </h1>
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 4 }}
          className="flex flex-col mx-auto w-full md:w-1/2 justify-center mb-4"
        >
          {/* Elemen div pertama (sebelah kiri) */}
          <motion.div
            className="bg-cover bg-center bg-no-repeat w-full h-60  rounded-sm mx-auto p-4 mb-4"
            style={{ backgroundImage: "url('/bg-dumy.jpg')" }}
          >
            <h1 className="text-xl text-indigo-950 md:text-2xl font-bold mb-2">
              Reza Padri Oktovian
            </h1>
          </motion.div>
          {/* Elemen div kedua (sebelah kanan) */}
          <motion.div className="mb-4 mx-auto">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              Revolusioner 5.0
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dept;
