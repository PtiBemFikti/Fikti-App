import { Montserrat, MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const dataBiroDepartemen = [
  {
    bidang: "Bidang Administrasi Umum",
    items: [
      {
        id: 6,
        foto: "/adiraka/LOGO/KESTARI.png",
        judul: "Biro Kesekretariatan",
        slug: "/tentang/kesekretariatan",
      },
      {
        id: 7,
        foto: "/adiraka/LOGO/KEUANGAN.png",
        judul: "Biro Keuangan",
        slug: "/tentang/keuangan",
      },
    ],
  },
  {
    bidang: "Bidang Bisnis & Kemitraan",
    items: [
      {
        id: 11,
        foto: "/adiraka/LOGO/BISKRE.png",
        judul: "Biro Bisnis Kreatif",
        slug: "/tentang/bisnis-kreatif",
      },
      {
        id: 12,
        foto: "/adiraka/LOGO/KEMITRAAN.png",
        judul: "Biro Kemitraan",
        slug: "/tentang/kemitraan",
      },
    ],
  },
  {
    bidang: "Bidang Komunikasi & Informatika",
    items: [
      {
        id: 8,
        foto: "/adiraka/LOGO/MEDIA.png",
        judul: "Biro Media Kreatif",
        slug: "/tentang/media",
      },
      {
        id: 9,
        foto: "/adiraka/LOGO/HUMAS.png",
        judul: "Biro Hubungan Masyarakat",
        slug: "/tentang/humas",
      },
      {
        id: 10,
        foto: "/adiraka/LOGO/PTI.png",
        judul: "Biro Pengembangan Teknologi Informasi",
        slug: "/tentang/pti",
      },
    ],
  },
  {
    bidang: "Bidang Minat & Bakat",
    items: [
      {
        id: 0,
        foto: "/adiraka/LOGO/AKADEMIK.png",
        judul: "Departemen Akademik",
        slug: "/tentang/akademik",
      },
      {
        id: 1,
        foto: "/adiraka/LOGO/ORSB.png",
        judul: "Departemen Olahraga dan Seni Budaya",
        slug: "/tentang/orsb",
      },
    ],
  },
  {
    bidang: "Bidang Sosial & Politik",
    items: [
      {
        id: 2,
        foto: "/adiraka/LOGO/SOSMAS.png",
        judul: "Departemen Sosial Masyarakat",
        slug: "/tentang/sosmas",
      },
      {
        id: 3,
        foto: "/adiraka/LOGO/POLKESMA.png",
        judul: "Departemen Politik dan Kesejahteraan Mahasiswa",
        slug: "/tentang/polkesma",
      },
    ],
  },
  {
    bidang: "Bidang Manajemen Kontrol",
    items: [
      {
        id: 4,
        foto: "/adiraka/LOGO/LITBANG.png",
        judul: "Biro Penelitian & Pengembangan",
        slug: "/tentang/litbang",
      },
      {
        id: 5,
        foto: "/adiraka/LOGO/PSDM.png",
        judul: "Biro Pengembangan Sumber Daya Manusia	",
        slug: "/tentang/psdm",
      },
    ],
  },
];

// Animasi konsisten dengan komponen sebelumnya
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const Card = ({
  foto,
  judul,
  slug,
  customDelay = 0,
}: {
  foto: string;
  judul: string;
  slug: string;
  customDelay?: number;
}) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={customDelay}
      className="relative flex flex-col items-center group text-center shadow-lg rounded-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-cream-fikti to-transparent rounded-2xl z-10"></div>

      <div className="relative z-10 rounded-2xl p-4 flex flex-col items-center justify-center">
        <Image
          src={foto}
          width={200}
          height={200}
          className="rounded-lg"
          alt={judul}
        />
        <h3
          className={`${Montserrat.className} mt-3 text-xl font-bold text-dark-green-fikti`}
        >
          {judul}
        </h3>
        <Link href={slug}>
          <button className="mt-3 px-6 py-2 bg-dark-green-fikti text-cream-fikti rounded-lg hover:bg-dark-green-fikti/80 transition">
            Read More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default function BiroDepartemenSection() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-20 text-dark-green-fikti bg-cream-fikti px-5">
      {/* Judul Utama */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1
          className={`${MonumentExtendedRegular.className} text-3xl md:text-[3rem] font-bold mb-20 text-center`}
        >
          Biro & Departemen
          <motion.span
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="block w-[80%] h-1 bg-dark-green-fikti mx-auto mt-5"
          ></motion.span>
        </h1>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-10 max-w-7xl px-5 md:px-0"
      >
        {dataBiroDepartemen.map((group, groupIndex) => (
          <motion.div
            key={group.bidang}
            className="space-y-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={groupIndex * 0.2 + 0.5}
          >
            {/* Judul Bidang */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={groupIndex * 0.2 + 0.7}
              className={`${Montserrat.className} text-2xl font-bold text-center text-dark-green-fikti`}
            >
              {group.bidang}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {group.items.map((item, itemIndex) => (
                <Card
                  key={item.id}
                  foto={item.foto}
                  judul={item.judul}
                  slug={item.slug}
                  customDelay={groupIndex * 0.2 + itemIndex * 0.1 + 0.9}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
