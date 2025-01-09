import { MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import {
  FaClipboardCheck,
  FaCommentDots,
  FaFileAlt,
  FaHandshake,
  FaRegSmile,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

export default function Requirement() {
  return (
    <section
      id="requirement"
      className="flex flex-col gap-4 items-center justify-center w-full h-fit my-6 pt-24 px-6 rounded-2xl text-black"
    >
      <div className="text-center">
        <h1
          className={`${MonumentExtendedRegular.className} text-[3rem] font-bold leading-tight max-md:text-[1.2rem]`}
        >
          <span className="text-black">General Requirement</span>
          <br />
          <span className="text-[5rem] max-md:text-[2.5rem] bg-gradient-to-r from-[#20202C] via-[#377DFF] to-[#49E0A2] bg-clip-text text-transparent">
            VOLUNTEER
          </span>
        </h1>
      </div>
      <div className="flex mb-4 items-center justify-around gap-20 max-md:flex-col max-md:gap-12">
        {/* Persyaratan Kiri */}
        <div className="flex flex-col text-center h-fit w-[320px] gap-16 max-md:w-full max-md:gap-8">
          <div className="flex flex-col items-center justify-center max-md:bg-white max-md:shadow-md max-md:rounded-2xl">
            <FaUserGraduate size={40} className="max-md:text-[2rem]" />
            <p className="text-base font-semibold max-md:text-md max-md:px-5 max-md:mt-3">
              Mahasiswa Aktif FIKTI Universitas Gunadarma tingkat 1 dan tingkat
              2.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mr-20 max-md:mr-0 max-md:bg-white max-md:shadow-md max-md:rounded-2xl">
            <FaHandshake size={40} className="max-md:text-[2rem]" />
            <p className="text-base font-semibold max-md:text-md max-md:px-5 max-md:mt-3">
              Memiliki komitmen tinggi dalam menjadi bagian dari kepanitiaan
              acara.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-md:bg-white max-md:shadow-md max-md:rounded-2xl">
            <FaClipboardCheck size={40} className="max-md:text-[2rem]" />
            <p className="text-base font-semibold max-md:text-md max-md:px-5 max-md:mt-3">
              Bertanggung jawab atas amanah yang diberikan.
            </p>
          </div>
        </div>

        {/* Gambar */}
        <Image
          src="/yudan_1.png"
          alt="Volunteer Requirements"
          width={600}
          height={600}
          className="w-[30%] bg-gradient-to-br from-green-fikti to-green-fikti/40 rounded-full max-md:w-[60%] max-md:order-first"
        />

        {/* Persyaratan Kanan */}
        <div className="flex flex-col text-center h-fit w-[320px] gap-16 max-md:w-full max-md:gap-8">
          <div className="flex flex-col items-center justify-center max-md:bg-white max-md:shadow-md max-md:rounded-2xl">
            <FaUsers size={40} className="max-md:text-[2rem]" />
            <p className="text-base font-semibold max-md:text-md max-md:px-5 max-md:mt-3">
              Mampu bekerja sama dalam tim, mengatur waktu, dan prioritas dengan
              baik.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ml-20 max-md:ml-0 max-md:bg-white max-md:shadow-md max-md:rounded-2xl">
            <FaFileAlt size={40} className="max-md:text-[2rem]" />
            <p className="text-base font-semibold max-md:text-md max-md:px-5 max-md:mt-3">
              Mengisi form pendaftaran yang tertera di website oprec Volunteer.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-md:bg-white max-md:shadow-md max-md:rounded-2xl">
            <FaCommentDots size={40} className="max-md:text-[2rem]" />
            <p className="text-base font-semibold max-md:text-md max-md:px-5 max-md:mt-3">
              Mengikuti rangkaian tes wawancara.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center justify-center w-[320px] mb-4 max-md:w-full max-md:bg-white max-md:shadow-md max-md:rounded-2xl">
        <FaRegSmile size={40} className="max-md:text-[2rem]" />
        <p className="text-base font-semibold max-md:text-md max-md:px-5 max-md:mt-3">
          Melengkapi seluruh berkas pendaftaran dan tunjukkan dedikasi
          terbaikmu!
        </p>
      </div>
    </section>
  );
}
