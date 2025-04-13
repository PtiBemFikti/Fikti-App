import Image from "next/image";
import Link from "next/link";
const dataBiroDepartemen = [
  {
    bidang: "Bidang Administrasi Umum",
    items: [
      {
        id: 6,
        foto: "/adiraka/LOGO/KESTARI.png",
        judul: "Biro Kesekretariatan",
        slug: "/struktur-organisasi/kesekretariatan",
      },
      {
        id: 7,
        foto: "/adiraka/LOGO/KEUANGAN.png",
        judul: "Biro Keuangan",
        slug: "/struktur-organisasi/keuangan",
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
        slug: "/struktur-organisasi/bisnis-kreatif",
      },
      {
        id: 12,
        foto: "/adiraka/LOGO/KEMITRAAN.png",
        judul: "Biro Kemitraan",
        slug: "/struktur-organisasi/kemitraan",
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
        slug: "/struktur-organisasi/media",
      },
      {
        id: 9,
        foto: "/adiraka/LOGO/HUMAS.png",
        judul: "Biro Hubungan Masyarakat",
        slug: "/struktur-organisasi/humas",
      },
      {
        id: 10,
        foto: "/adiraka/LOGO/PTI.png",
        judul: "Biro Pengembangan Teknologi Informasi",
        slug: "/struktur-organisasi/pti",
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
        slug: "/struktur-organisasi/akademik",
      },
      {
        id: 1,
        foto: "/adiraka/LOGO/ORSB.png",
        judul: "Departemen Olahraga dan Seni Budaya",
        slug: "/struktur-organisasi/orsb",
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
        slug: "/struktur-organisasi/sosmas",
      },
      {
        id: 3,
        foto: "/adiraka/LOGO/POLKESMA.png",
        judul: "Departemen Politik dan Kesejahteraan Mahasiswa",
        slug: "/struktur-organisasi/polkesma",
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
        slug: "/struktur-organisasi/litbang",
      },
      {
        id: 5,
        foto: "/adiraka/LOGO/PSDM.png",
        judul: "Biro Pengembangan Sumber Daya Manusia	",
        slug: "/struktur-organisasi/psdm",
      },
    ],
  },
];

const Card = ({
  foto,
  judul,
  slug,
}: {
  foto: string;
  judul: string;
  slug: string;
}) => {
  return (
    <div className="relative flex flex-col items-center group text-center shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3a0d63] to-transparent rounded-2xl z-10"></div>

      <div className="relative z-10 rounded-2xl p-4 flex flex-col items-center justify-center">
        <Image
          src={foto}
          width={200}
          height={200}
          className="rounded-lg"
          alt={judul}
        />
        <h3 className="mt-3 text-xl font-bold text-white">{judul}</h3>
        <Link href={slug}>
          <button className="mt-3 px-6 py-2 bg-[#6a1b9a] text-white rounded-lg hover:bg-[#8e24aa] transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function BiroDepartemenSection() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-20 section-about px-5">
      <h1 className="text-3xl md:text-[3rem] font-bold mb-20 text-center">
        Biro & Departemen
        <span className="block w-[80%] h-1 bg-purple-500 mx-auto mt-5"></span>
      </h1>
      <div className="grid grid-cols-1 gap-10 max-w-7xl px-5 md:px-0">
        {dataBiroDepartemen.map((group) => (
          <div key={group.bidang} className="space-y-5">
            {/* Judul Bidang */}
            <h2 className="text-2xl font-bold text-center text-purple-500">
              {group.bidang}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {group.items.map((item) => (
                <Card
                  key={item.id}
                  foto={item.foto}
                  judul={item.judul}
                  slug={item.slug}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
