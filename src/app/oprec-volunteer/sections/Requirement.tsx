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
      className="flex flex-col gap-4 items-center justify-center w-full h-fit my-6 pt-24 p-6 rounded-2xl max-md:hidden text-black"
    >
      <div className="text-center">
        <h1
          className={`${MonumentExtendedRegular.className} text-[3rem] font-bold leading-tight`}
        >
          <span className="text-black ">General Requirement</span>
          <br />
          <span className="text-[5rem] bg-gradient-to-r from-[#20202C] via-[#377DFF] to-[#49E0A2] bg-clip-text text-transparent">
            VOLUNTEER
          </span>
        </h1>
      </div>
      <div className="flex mb-4 items-center justify-around gap-20">
        {/* Persyaratan Kiri */}
        <div className="flex flex-col text-center h-fit w-[320px] gap-16">
          <div className="flex flex-col items-center justify-center">
            <FaUserGraduate size={40} />
            <p className="text-base font-semibold">
              Mahasiswa Aktif FIKTI Universitas Gunadarma tingkat 1 dan tingkat
              2.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mr-20">
            <FaHandshake size={40} />
            <p className="text-base font-semibold ">
              Memiliki komitmen tinggi dalam menjadi bagian dari kepanitiaan
              acara.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaClipboardCheck size={40} />
            <p className="text-base font-semibold">
              Bertanggung jawab atas amanah yang diberikan.
            </p>
          </div>
        </div>

        <Image
          src="/yudan_1.png"
          alt="Volunteer Requirements"
          width={600}
          height={600}
          className="w-[30%] bg-gradient-to-br from-green-fikti to-green-fikti/40 rounded-full"
        />

        {/* Persyaratan Kanan */}
        <div className="flex flex-col text-center h-fit w-[320px] gap-16">
          <div className="flex flex-col items-center justify-center">
            <FaUsers size={40} />
            <p className="text-base font-semibold">
              Mampu bekerja sama dalam tim, mengatur waktu, dan prioritas dengan
              baik.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ml-20">
            <FaFileAlt size={40} />
            <p className="text-base font-semibold">
              Mengisi form pendaftaran yang tertera di website oprec Volunteer.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaCommentDots size={40} />
            <p className="text-base font-semibold">
              Mengikuti rangkaian tes wawancara.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center justify-center w-[320px] mb-4">
        <FaRegSmile size={40} />
        <p className="text-base font-semibold">
          Melengkapi seluruh berkas pendaftaran dan tunjukkan dedikasi
          terbaikmu!
        </p>
      </div>
    </section>
  );
}
