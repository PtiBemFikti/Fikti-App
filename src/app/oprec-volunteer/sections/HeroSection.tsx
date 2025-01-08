import Image from "next/image";
import logoAdiraka from "../../../../public/LOGO ADIRAKA TRANSPARAN.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MonumentExtendedRegular } from "@/styles/font";

export default function HeroSectionOprec() {
  return (
    <section
      id="home"
      className="w-screen h-screen bg-[#0c0b1d] rounded-[0px_0px_0px_200px] flex items-center justify-center overflow-hidden px-10"
      style={{
        backgroundImage: `url('/oprec-volunteer/bg-home.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pl-10 block items-center text-left w-1/2 animate-fade-in">
        <p className="text-2xl font-semibold text-blue-500">
          Ayo Bergabung dalam
        </p>
        <h1
          className={`${MonumentExtendedRegular.className} text-[4rem] font-bold leading-tight`}
        >
          <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Open Recruitment
          </span>
          <br />
          <span className="bg-gradient-to-r text-[7rem] from-blue-500 to-green-500 bg-clip-text text-transparent">
            VOLUNTEER
          </span>
        </h1>
        <h2 className="text-2xl text-white">BEM FIKTI UG Periode 2024/2025</h2>
        <p className="text-2xl text-white">
          Jadilah bagian dari program kerja yang mewadahi Mahasiswa/i aktif
          FIKTI UG untuk berkontribusi dan menciptakan dampak nyata dalam
          berbagai kegiatan yang diselenggarakan oleh BEM FIKTI UG.
        </p>
        <Link href="#">
          <button className="flex items-center justify-center gap-3 bg-gradient-to-br from-blue-500 to-green-500 px-10 py-4 transition-all duration-200 hover:shadow-[0px_0px_10px_2px] group shadow-white bg-green-500 rounded-lg font-bold mt-8">
            Apply Now
            <FaArrowRight className="transition-all duration-200 group-hover:-rotate-45" />
          </button>
        </Link>
      </div>

      <div className="animate-fade-in relative -right-[13%] -bottom-[16%] items-end justify-end w-[60%] h-fit max-md:w-[35%] max-md:h-[35%] flex lg:justify-end mt-10 lg:mt-0 max-md:mt-3">
        <Image
          src={logoAdiraka}
          alt="Logo Adiraka"
          width={1500}
          height={1500}
        />
      </div>
    </section>
  );
}
