import Image from "next/image";
import aboutImg from "../../../public/about.jpeg";
import { SlArrowRight } from "react-icons/sl";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-10 max-md:rounded-none w-screen h-fit py-36 section-about text-white"
    >
      <div className="flex flex-col items-center justify-center px-12">
        <h1 className="text-[4rem] mb-16 font-bold">About us</h1>
        <div className="flex items-start justify-evenly gap-8 px-20 max-md:flex-col">
          {/* Left Image */}
          <Image
            src={aboutImg}
            alt="About img"
            className="rounded-xl shadow-lg w-[40%] aspect-[16/9] h-auto max-md:w-full"
          />
          {/* Right Content */}
          <div className="flex flex-col text-left w-[50%] max-md:w-full">
            {/* Vision */}
            <h1 className="text-[3rem] font-bold">Our Vision</h1>
            <p className="text-3xl mb-8">
              Mewujudkan BEM FIKTI UG sebagai wadah yang akrab, informatif,
              memiliki daya guna, serta menjadi support sistem bagi mahasiswa
              sehingga menjadikan FIKTI yang dekat, bersahabat dan produktif.
            </p>
          </div>
        </div>
        {/* Mission Section */}
        <h1 className="text-[3rem] font-bold mt-16 mb-8">Our Mission</h1>
        <div className="flex flex-wrap gap-8 justify-center px-14">
          {/* Mission Card 1 */}
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg p-6 w-[45%] max-md:w-full">
            <div className="flex items-start gap-3">
              <p className="text-center text-xl font-bold">
                Mewujudkan penyaluran informasi secara masif guna memastikan
                informasi yang ada agar tersampaikan ke mahasiswa melalui
                penyampaian secara langsung di kampus dan didukung oleh sosial
                media.
              </p>
            </div>
          </div>
          {/* Mission Card 2 */}
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg p-6 w-[45%] max-md:w-full">
            <div className="flex items-start gap-3">
              <p className="text-center text-xl font-bold">
                Menjadi BEM FIKTI yang suportif dalam hal akademik maupun non
                akademik dalam rangka meningkatkan kompetensi serta daya saing
                mahasiswa FIKTI dan juga kedekatan antara BEM dengan mahasiswa.
              </p>
            </div>
          </div>
          {/* Mission Card 3 */}
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg p-6 w-[45%] max-md:w-full">
            <div className="flex items-start gap-3">
              <p className="text-center text-xl font-bold">
                Guna memastikan kehadiran BEM FIKTI dalam menyelesaikan
                permasalahan mahasiswa sebagai bentuk advokasi, BEM FIKTI
                berkomitmen untuk selalu aktif dan responsif dalam menangani
                setiap isu dan keluhan yang dihadapi oleh mahasiswa.
              </p>
            </div>
          </div>
          {/* Mission Card 4 */}
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg p-6 w-[45%] max-md:w-full">
            <div className="flex items-start gap-3">
              <p className="text-center text-xl font-bold">
                Menempatkan koordinator wilayah di lokasi kampus Salemba,
                Kalimalang, dan Karawaci sebagai perwakilan BEM FIKTI yang dapat
                mengakomodasi mahasiswa di luar lokasi kampus Depok.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
