import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const CoreValue: React.FC = () => {
  const coreValueControls = useAnimation();
  const pointsControls = useAnimation();
  // Tambah kontrol untuk elemen FIKTI

  const [coreValueRef, coreValueInView] = useInView({
    triggerOnce: true,
  });

  const [pointsRef, pointsInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (coreValueInView) {
      coreValueControls.start("visible");
    }
  }, [coreValueInView, coreValueControls]);

  useEffect(() => {
    if (pointsInView) {
      pointsControls.start("visible");
    }
  }, [pointsInView, pointsControls]);

  const coreValueVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const pointsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="flex flex-col w-full justify-center py-20 rounded-md bg-[#060E23] 84%"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className=" p-4 mb-4 mx-auto text-4xl md:text-6xl text-center font-bold"
        ref={coreValueRef}
        variants={coreValueVariants} // Gunakan varian untuk elemen FIKTI
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 3 }}
      >
        CORE VALUE
      </motion.h1>
      <motion.div
        className="p-4 flex w-full items-center justify-center align-top"
        ref={pointsRef}
        initial="hidden"
        animate={pointsControls}
        variants={pointsVariants}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div className="md:1/3 mx-auto align-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            width="40"
            viewBox="0 0 640 512"
            className="mx-auto md:w-32 md:h-20"
          >
            <path
              fill="#ff801f"
              d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
            />
          </svg>
          <motion.h1 className="mt-5 mx-auto text-base md:text-3xl text-center font-medium">
            Dekat
          </motion.h1>
          <motion.h1 className="mt-5 mx-auto text-xs md:text-xl text-center font-normal">
            Hubungan dekat dengan mahasiswa FIKTI
          </motion.h1>
        </motion.div>
        <motion.div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            width="38"
            viewBox="0 0 576 512"
            className="mx-auto md:w-32 md:h-20 "
          >
            <path
              fill="#ff801f"
              d="M80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zM64 128c-35.3 0-64 28.7-64 64V320c0 17.7 14.3 32 32 32c9.8 0 18.5-4.4 24.4-11.2L80.4 485.3c2.9 17.4 19.4 29.2 36.8 26.3s29.2-19.4 26.3-36.8L123.1 352h15.7l30 134.9c3.8 17.3 20.9 28.1 38.2 24.3s28.1-20.9 24.3-38.2l-57.3-258 116.3 53.8c.5 .3 1.1 .5 1.6 .7c8.6 3.6 18 3.1 25.9-.7c3.4-1.6 6.6-3.9 9.3-6.7c3.1-3.2 5.5-7 7.1-11.4c.1-.3 .2-.7 .3-1l2.5-7.5c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L537 232.7l-15.3-36.8C504.5 154.8 464.3 128 419.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-24.4 10.9-44.6 29-58.1 51.6L157.3 136.9C144.7 131 130.9 128 117 128H64zM464 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM349.7 335.6l-25 62.4-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L372.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6z"
            />
          </svg>
          <motion.h1 className="mt-5 mx-auto text-base md:text-3xl text-center font-medium">
            Kolaboratif
          </motion.h1>
          <motion.h1 className="mt-5 mx-auto text-xs md:text-xl text-center font-normal">
            Kerjasama kepada setiap Stakeholders
          </motion.h1>
        </motion.div>
        <motion.div className="md:1/3 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            width="40"
            viewBox="0 0 640 512"
            className="mx-auto md:w-32 md:h-20"
          >
            <path
              fill="#ff801f"
              d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
            />
          </svg>
          <motion.h1 className="mt-5 mx-auto text-base md:text-3xl text-center font-medium">
            Serasi
          </motion.h1>
          <motion.h1 className="mt-5 mx-auto text-xs md:text-xl text-center font-normal">
            Seiringan antar kampus & mahasiswa
          </motion.h1>
        </motion.div>
      </motion.div>{" "}
    </motion.div>
  );
};

export default CoreValue;
