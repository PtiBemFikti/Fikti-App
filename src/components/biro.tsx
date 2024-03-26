import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Biro: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // List gambar yang akan ditampilkan
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      transition={{ duration: 0.5, delay: 2 }}
      ref={ref}
      className="py-32 flex flex-wrap justify-center mx-2 mt-10"
    >
      <motion.div
        animate={controls}
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="flex mx-auto text-center w-full justify-center mb-4"
      >
        <motion.div className="w-1/3 rounded-sm mb-4">
          <h1 className="text-[30px] md:text-6xl font-black mb-2">kBID</h1>
        </motion.div>
        <motion.div className="w-1/3 rounded-sm mb-4">
          <h1 className="text-[30px] md:text-6xl font-black mb-2">kDEP</h1>
        </motion.div>
        <motion.div className="w-1/3 rounded-sm mb-4">
          <h1 className="text-[30px] md:text-6xl font-black mb-2">kBIR</h1>
        </motion.div>
      </motion.div>
      {/* Section 1 */}
      <motion.div
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 3 }}
        className="flex mx-auto w-full justify-center mb-4"
      >
        <motion.div
          className="w-1/2 rounded-sm mb-4 mx-auto"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <h1 className="text-2xl text-right md:text-8xl font-black pr-12 mb-2">
            BIDANG
          </h1>
          <h1 className="text-2xl text-right md:text-8xl font-black pr-12 mb-2">
            MINAT
          </h1>
          <h1 className="text-2xl text-right md:text-8xl font-black pr-12 mb-2">
            BAKAT
          </h1>
        </motion.div>
        <motion.div
          className="w-1/2 rounded-sm mb-4"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 4 }}
        >
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Additional Div ${currentImage + 1}`}
            className="w-full rounded-sm mb-4"
            style={{ objectFit: "cover", objectPosition: "center" }}
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 4.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        variants={sectionVariants}
        className="flex mx-auto w-full justify-center mb-4"
        transition={{ duration: 0.5, delay: 5 }}
      >
        <motion.div className="w-1/2 rounded-sm mb-4">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Additional Div ${currentImage + 2}`}
            className="w-full rounded-sm mb-4"
            style={{ objectFit: "cover", objectPosition: "center" }}
            transition={{ duration: 0.5, delay: 5.5 }}
          />
        </motion.div>
        <motion.div
          className="w-1/2 rounded-sm mb-4"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 6 }}
        >
          <h1 className="text-2xl md:text-6xl font-black pl-12 mb-2">BIDANG</h1>
          <h1 className="text-2xl md:text-6xl font-black pl-12 mb-2">MIA</h1>
          <h1 className="text-2xl md:text-6xl font-black pl-12 mb-2">
            #PTIONTOP
          </h1>
        </motion.div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        variants={sectionVariants}
        className="flex mx-auto w-full  justify-center mb-4"
        transition={{ duration: 0.5, delay: 6.5 }}
      >
        <motion.div
          className="w-1/2 rounded-sm mb-4"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 7 }}
        >
          <h1 className="text-2xl md:text-6xl text-right font-black pr-12 mb-2">
            BIDANG
          </h1>
          <h1 className="text-2xl md:text-6xl text-right font-black pr-12 mb-2">
            SOSIAL
          </h1>
          <h1 className="text-2xl md:text-6xl text-right font-black pr-12 mb-2">
            POLITIK
          </h1>
        </motion.div>
        <motion.div
          className="w-1/2 rounded-sm mb-4"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 7.5 }}
        >
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Additional Div ${currentImage + 3}`}
            className="w-full rounded-sm mb-4"
            style={{ objectFit: "cover", objectPosition: "center" }}
            transition={{ duration: 0.5, delay: 8 }}
          />
        </motion.div>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        variants={sectionVariants}
        className="flex mx-auto w-full justify-center mb-4"
        transition={{ duration: 0.5, delay: 8.5 }}
      >
        <motion.div className="w-1/2 rounded-sm mb-4">
          <motion.img
            transition={{ duration: 0.5, delay: 9 }}
            key={currentImage}
            src={images[currentImage]}
            alt={`Additional Div ${currentImage + 4}`}
            className="w-full rounded-sm mb-4"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
        <motion.div
          className="w-1/2 rounded-sm mb-4"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 9.5 }}
        >
          <h1 className="text-2xl md:text-6xl font-black pl-12 mb-2">BIDANG</h1>
          <h1 className="text-2xl md:text-6xl font-black pl-12 mb-2">
            MANAJEMEN
          </h1>
          <h1 className="text-2xl md:text-6xl font-black pl-12 mb-2">
            KONTROL
          </h1>
        </motion.div>
      </motion.div>

      {/* Section 5 */}
      <motion.div
        variants={sectionVariants}
        className="flex mx-auto w-full justify-center mb-4"
        transition={{ duration: 0.5, delay: 10 }}
      >
        <motion.div
          className="w-1/2 mx-auto rounded-sm mb-4"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 10.5 }}
        >
          <h1 className="text-2xl md:text-6xl text-right font-black pr-12 mb-2">
            BIDANG
          </h1>
          <h1 className="text-2xl md:text-6xl text-right font-black pr-12 mb-2">
            EKS
          </h1>
          <h1 className="text-2xl md:text-6xl text-right font-black pr-12 mb-2">
            TERNAL
          </h1>
        </motion.div>
        <motion.div
          className="w-1/2 mx-auto rounded-sm mb-4"
          transition={{ duration: 0.5, delay: 11 }}
        >
          <motion.img
            transition={{ duration: 0.5, delay: 11.5 }}
            key={currentImage}
            src={images[currentImage]}
            alt={`Additional Div ${currentImage + 5}`}
            className="w-full rounded-sm mb-4"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Biro;
