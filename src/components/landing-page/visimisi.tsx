// VisiMisi.tsx

import { motion } from "framer-motion";
import Image from "next/image";

const VisiMisi: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full py-20 md:px-48 border-t-2 border-slate-700 rounded-md bg-gradient-to-b  from-[#091534]  to-[#060E23] to-[84%]">
      {/* Section 1 */}

      <motion.div
        className="p-4 flex flex-col md:flex-row "
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.div
          className=" p-4 mb-4 md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Konten Section 1 */}
          <Image
            src="/Observation.png"
            alt="Section 1 Image"
            className="object-cover mb-2"
            width={250}
            height={250}
          />
        </motion.div>
        <motion.div
          className="text-end p-4 md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Konten Section 1 */}

          <h1 className="text-orange-500 text-4xl font-semibold ">VISI</h1>
          <p className="text-white">
            Menjadikan Badan Eksekutif yang terbuka dan berorientasi kepada
            kebutuhan serta keinginan mahasiswa FIKTI untuk membangun hubungan
            yang erat antara Badan Eksekutif dengan mahasiswa agar dapat
            menciptakan lingkungan kampus yang inklusif dan progresif.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 2 */}

      <motion.div
        className=" p-4 flex flex-col md:flex-row"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.div
          className=" p-4 md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* Konten Section 2 */}
          <h2 className="text-orange-500 text-4xl font-semibold ">MISI</h2>
          <ol className="list-decimal text-base">
            <li>
              Memperkuat hubungan yang erat antara Badan Eksekutif dan mahasiswa
              FIKTI, dengan mendengarkan dan memahami kebutuhan serta keinginan
              Mahasiswa
            </li>
            <li>
              Berkomitmen untuk menyikapi, mengawal, dan mengadvokasikan
              peningkatan progresif dalam segala aspek kehidupan kampus
            </li>
            <li>
              Meningkatkan performa BEM FIKTI UG dengan penggunaan OKR
              (Objective Key Result) untuk mencapai efisiensi yang lebih baik
              guna memperbaiki kualitas kinerja fungsionaris terhadap
              pelaksanaan program kerja
            </li>
          </ol>
        </motion.div>
        <motion.div
          className=" p-4 mb-4 md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Konten Section 2 */}
          <Image
            src="/Reading-Book.png"
            alt="Section 1 Image"
            className="object-cover mb-2 mx-auto"
            width={250}
            height={250}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VisiMisi;
