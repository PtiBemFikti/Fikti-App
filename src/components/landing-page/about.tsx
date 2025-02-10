import Image from "next/image";
import aboutImg from "../../../public/about.jpeg";
import {
  FaBullhorn,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-10 w-screen h-fit py-12 md:py-24 text-white section-about"
    >
      <div className="flex flex-col items-center justify-center px-8 md:px-6 lg:px-0">
        {/* Title */}
        <h1 className="relative text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 drop-shadow-lg">
          Tentang Kami
          <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 h-1 w-[80%] bg-purple-500 rounded-md" />
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg md:text-xl font-bold text-center mb-8 md:mb-12 max-w-3xl">
          Kami berkomitmen untuk menghubungkan aspirasi, mendorong inovasi, dan
          menciptakan perubahan positif untuk FIKTI UG.
        </h2>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full px-4 md:px-24">
          {/* Left Image */}
          <div className="relative top-0 lg:sticky lg:top-60 rounded-xl shadow-lg aspect-[16/9]">
            <Image
              src={aboutImg}
              alt="About img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            {/* Tulisan 2025 Oval */}
            <div className="absolute -top-8 -left-8 bg-white text-black rounded-full w-24 h-24 md:w-40 md:h-40 flex flex-col items-center justify-center transform shadow-lg">
              <span className="text-lg md:text-3xl font-bold text-purple-500">
                2025
              </span>
              <span className="text-xs md:text-lg font-bold">BEM FIKTI UG</span>
            </div>
          </div>

          {/* Right Content - Vision and Mission */}
          <div className="flex flex-col gap-8">
            {/* Vision */}
            <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Visi Kami
              </h2>
              <p className="flex flex-col items-center text-base md:text-lg font-semibold text-center leading-relaxed">
                <FaHandsHelping
                  size={40}
                  className="text-purple-500 inline-block mb-4"
                />
                Mewujudkan BEM FIKTI UG sebagai wadah yang akrab, informatif,
                memiliki daya guna, serta menjadi support sistem bagi mahasiswa
                sehingga menjadikan FIKTI yang dekat, bersahabat, dan produktif.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
                Misi Kami
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    text: "Mewujudkan penyaluran informasi secara masif guna memastikan informasi yang ada agar tersampaikan ke mahasiswa melalui penyampaian secara langsung di kampus dan didukung oleh sosial media.",
                    icon: (
                      <FaBullhorn
                        size={30}
                        className="text-purple-500 inline-block mb-4"
                      />
                    ),
                  },
                  {
                    text: "Menjadi BEM FIKTI yang suportif dalam hal akademik maupun non akademik dalam rangka meningkatkan kompetensi serta daya saing mahasiswa FIKTI dan juga kedekatan antara BEM dengan mahasiswa.",
                    icon: (
                      <FaUsers
                        size={30}
                        className="text-purple-500 inline-block mb-4"
                      />
                    ),
                  },
                  {
                    text: "Guna memastikan kehadiran BEM FIKTI dalam menyelesaikan permasalahan mahasiswa sebagai bentuk advokasi, BEM FIKTI berkomitmen untuk selalu aktif dan responsif dalam menangani setiap isu dan keluhan yang dihadapi oleh mahasiswa.",
                    icon: (
                      <FaShieldAlt
                        size={30}
                        className="text-purple-500 inline-block mb-4"
                      />
                    ),
                  },
                  {
                    text: "Menempatkan koordinator wilayah di lokasi kampus Salemba, Kalimalang, dan Karawaci sebagai perwakilan BEM FIKTI yang dapat mengakomodasi mahasiswa di luar lokasi kampus Depok.",
                    icon: (
                      <FaMapMarkerAlt
                        size={30}
                        className="text-purple-500 inline-block mb-4"
                      />
                    ),
                  },
                ].map((mission, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    {mission.icon}
                    <p className="text-base md:text-lg font-semibold leading-relaxed">
                      {mission.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
