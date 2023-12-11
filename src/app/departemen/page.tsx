"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About: React.FC = () => {
  const kabinetTextControls = useAnimation();
  const imagesControls = useAnimation();

  const [kabinetTextRef, kabinetTextInView] = useInView({
    triggerOnce: true,
  });
  const [imagesRef, imagesInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (kabinetTextInView) {
      kabinetTextControls.start("visible");
    } else {
      kabinetTextControls.start("hidden");
    }
  }, [kabinetTextInView, kabinetTextControls]);

  useEffect(() => {
    if (imagesInView) {
      imagesControls.start("visible");
    } else {
      imagesControls.start("hidden");
    }
  }, [imagesInView, imagesControls]);

  const kabinetTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imagesVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      {/* section1 */}
      <motion.div className="mx-4 h-[80vh] md:h-[140vh] p-4 bg-[#091534] flex flex-col justify-center items-center rounded-3xl shadow-2xl">
        <motion.div
          className=""
          variants={imagesVariants}
          transition={{ duration: 0.8 }}
          initial="hidden"
          animate="visible"
          ref={imagesRef}
        >
          <Image
            className=" object-cover my-5 "
            src={"/logo-kabinet.png"}
            width={50}
            height={50}
            alt=""
          />
        </motion.div>
        <motion.h1
          className="text-white text-center font-semibold text-6xl md:text-9xl"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          PIMPINAN <br /> KABINET
        </motion.h1>
        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          ref={imagesRef}
          variants={imagesVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            className="object-cover relative z-10 bottom-10"
            src={"/bph/JendralWakjen.png"}
            width={800}
            height={572}
            alt=""
          />
        </motion.div>
      </motion.div>
      {/* section2 */}
      <motion.div className="w-full h-[60vh] md:h-[150vh] p-4 bg-[#060e23] flex flex-col justify-center items-center border-b-2 border-gray-500">
        <motion.h1
          className="text-white text-center font-semibold text-4xl md:text-6xl"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          SEKERTARIS & <br /> BENDAHARA UMUM
        </motion.h1>
        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          ref={imagesRef}
          variants={imagesVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            className="object-cover relative z-10 bottom-10 "
            src={"/bph/SekumBendum.png"}
            width={800}
            height={572}
            alt=""
          />
        </motion.div>
      </motion.div>
      {/* section3 */}
      <motion.div className="w-full h-[150vh] md:h-[350vh] p-4 bg-[#060e23] flex flex-col justify-center items-center border-b-2 border-gray-500">
        <motion.h1
          className="text-white text-center font-semibold text-4xl md:text-6xl"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          KEPALA BIDANG <br /> EKSTERNAL
        </motion.h1>
        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          ref={imagesRef}
          variants={imagesVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            className="object-cover mx-auto relative z-10 bottom-10 "
            src={"/bph/KabidEks.png"}
            width={800}
            height={572}
            alt=""
          />
          <motion.div className="flex flex-col justify-center items-center">
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                BIRO <br /> BISNIS & KEMITRAAN
              </motion.h1>
              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/bismit.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl mt-10"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                BIRO <br /> HUBUNGAN MASYARAKAT
              </motion.h1>
              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/humas.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* section4 */}
      <motion.div className="w-full h-[160vh] md:h-[350vh] p-4 bg-[#060e23] flex flex-col justify-center items-center border-b-2 border-gray-500">
        <motion.h1
          className="text-white text-center font-semibold text-4xl md:text-6xl mt-10"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          KEPALA BIDANG <br /> MANAJEMEN KONTROL
        </motion.h1>
        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          ref={imagesRef}
          variants={imagesVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            className="object-cover mx-auto relative z-10 bottom-10  "
            src={"/bph/KabidManKon.png"}
            width={800}
            height={572}
            alt=""
          />
          <motion.div className="flex flex-col justify-center items-center">
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl mt-10"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                BIRO
                <br /> PENGEMBANGAN & SUMBER DAYA MANUSIA
              </motion.h1>
              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/psdm.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl mt-10"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                BIRO <br /> PENELITIAN & PENGEMBANGAN
              </motion.h1>
              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/Litbang.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* section5 */}
      <motion.div className="w-full h-[170vh] md:h-[380vh] p-4 bg-[#060e23] flex flex-col justify-center items-center border-b-2 border-gray-500">
        <motion.h1
          className="text-white text-center font-semibold text-4xl md:text-6xl"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          KEPALA BIDANG <br /> MEDIA & ADMINISTRASI
        </motion.h1>
        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          ref={imagesRef}
          variants={imagesVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            className="object-cover mx-auto relative z-10 bottom-10 "
            src={"/bph/KabidMed.png"}
            width={800}
            height={572}
            alt=""
          />
          <motion.div className="flex flex-col justify-center items-center">
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                BIRO <br /> ADMINISTRASI UMUM
              </motion.h1>
              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/AU.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                BIRO <br /> PENGEMBANGAN TEKNOLOGI INFORMASI
              </motion.h1>
              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/pti.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                BIRO <br /> MEDIA
              </motion.h1>

              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/media.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* section6 */}
      <motion.div className="w-full h-[140vh] md:h-[330vh] p-4 bg-[#060e23] flex flex-col justify-center items-center border-b-2 border-gray-500">
        <motion.h1
          className="text-white text-center font-semibold text-4xl md:text-6xl"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          KEPALA BIDANG <br /> MINAT BAKAT
        </motion.h1>
        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          ref={imagesRef}
          variants={imagesVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            className="object-cover mx-auto relative z-10 bottom-10 "
            src={"/bph/KabidMinatBakat.png"}
            width={800}
            height={572}
            alt=""
          />
          <motion.div className="flex flex-col justify-center items-center">
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                DEPARTEMEN <br /> AKADEMIK
              </motion.h1>

              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/akademik.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                DEPARTEMEN <br /> OLAHRAGA & SENI BUDAYA
              </motion.h1>
              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/orsb.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* section7 */}
      <motion.div className="w-full h-[150vh] md:h-[350vh] p-4 bg-[#060e23] flex flex-col justify-center items-center border-b-2 border-gray-500">
        <motion.h1
          className="text-white text-center font-semibold text-4xl md:text-6xl"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          KEPALA BIDANG <br /> SOSIAL POLITIK
        </motion.h1>
        <motion.div
          className=""
          initial="hidden"
          animate="visible"
          ref={imagesRef}
          variants={imagesVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            className="object-cover mx-auto relative z-10 bottom-10 "
            src={"/bph/KabidSospol.png"}
            width={800}
            height={572}
            alt=""
          />
          <motion.div className="flex flex-col justify-center items-center">
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                DEPARTEMEN <br /> SOSIAL MASYARAKAT
              </motion.h1>
              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/sosmas.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
            <motion.div>
              <motion.h1
                className="text-white text-center font-semibold text-3xl md:text-4xl"
                initial="hidden"
                animate="visible"
                ref={kabinetTextRef}
                variants={kabinetTextVariants}
                transition={{ duration: 0.5, delay: 1 }}
              >
                DEPARTEMEN <br /> POLITIK DAN KESEJAHTERAAN MASYARAKAT
              </motion.h1>

              <Image
                className="object-cover mx-auto relative z-10 bottom-10 "
                src={"/kabinet/polkesma.png"}
                width={800}
                height={572}
                alt=""
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* section8*/}
      <motion.div className="w-full h-[100vh] md:h-[200vh] p-4 py-2 bg-[#060e23] flex flex-col justify-center items-center border-b-2 border-gray-500">
        <motion.h1
          className="text-white text-center font-semibold text-4xl md:text-6xl mt-10"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          SATUAN PENGENDALI INTERNAL
        </motion.h1>
        <motion.div
          className="flex flex-col  mx-auto"
          initial="hidden"
          animate="visible"
          ref={imagesRef}
          variants={imagesVariants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            className="object-cover "
            src={"/bph/SPI1.png"}
            width={800}
            height={572}
            alt=""
          />
          <Image
            className="object-cover "
            src={"/bph/SPI2.png"}
            width={800}
            height={572}
            alt=""
          />
        </motion.div>
      </motion.div>
      {/* section9 */}
      <motion.div className="w-full h-[50vh] md:h-[200vh] p-4 bg-[#060e23] flex flex-col justify-center items-center">
        <motion.h1
          className="text-white text-center font-semibold text-4xl md:text-6xl mb-10"
          initial="hidden"
          animate="visible"
          ref={kabinetTextRef}
          variants={kabinetTextVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          STRUKTURAL
        </motion.h1>
        <Image
          className="object-cover "
          src={"/STRUKTURAL.png"}
          width={800}
          height={572}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default About;
