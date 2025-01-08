import Image from "next/image";
import aboutImg from "../../../public/about.jpeg";
import { SlArrowRight } from "react-icons/sl";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-10 mt-[150vh] rounded-[20px_20px_0px_0px] max-md:rounded-none w-screen h-[600vh] pt-20 bg-white text-black"
    >
      <div className="flex flex-col items-center justify-center px-12">
        <h1 className="text-[4rem] mb-16 font-bold">About us</h1>
        <div className="flex items-start justify-evenly gap-2 px-12">
          <Image
            src={aboutImg}
            alt="About img"
            className="rounded-xl shadow-lg w-[45%] aspect-[16/9] h-auto"
          />
          <div className="flex flex-col text-left w-[45%]">
            <h1 className="text-[3rem] font-bold">Our Vision</h1>
            <p className="text-xl mb-8">
              Mewujudkan BEM FIKTI UG sebagai wadah yang akrab, informatif,
              memiliki daya guna, serta menjadi support sistem bagi mahasiswa
              sehingga menjadikan FIKTI yang dekat, bersahabat dan produktif.
            </p>
            <h1 className="text-[3rem] font-bold">Our Mission</h1>
            <ul className="list-none space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <span className="mt-2">
                  <SlArrowRight className="w-4 h-4 flex-shrink-0" />
                </span>
                <p className="text-xl">
                  Mewujudkan penyaluran informasi secara masif guna memastikan
                  informasi yang ada agar tersampaikan ke mahasiswa melalui
                  penyampaian secara langsung di kampus dan didukung oleh sosial
                  media.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2">
                  <SlArrowRight className="w-4 h-4 flex-shrink-0" />
                </span>
                <p className="text-xl">
                  Menjadi BEM FIKTI yang suportif dalam hal akademik maupun non
                  akademik dalam rangka meningkatkan kompetensi serta daya saing
                  mahasiswa FIKTI dan juga kedekatan antara BEM dengan
                  mahasiswa.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2">
                  <SlArrowRight className="w-4 h-4 flex-shrink-0" />
                </span>
                <p className="text-xl">
                  Guna memastikan kehadiran BEM FIKTI dalam menyelesaikan
                  permasalahan mahasiswa sebagai bentuk advokasi, BEM FIKTI
                  berkomitmen untuk selalu aktif dan responsif dalam menangani
                  setiap isu dan keluhan yang dihadapi oleh mahasiswa.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2">
                  <SlArrowRight className="w-4 h-4 flex-shrink-0" />
                </span>
                <p className="text-xl">
                  Menempatkan koordinator wilayah di lokasi kampus Salemba,
                  Kalimalang, dan Karawaci sebagai perwakilan BEM FIKTI yang
                  dapat mengakomodasi mahasiswa di luar lokasi kampus Depok.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
