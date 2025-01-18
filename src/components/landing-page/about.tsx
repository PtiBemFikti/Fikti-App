import Image from "next/image";
import aboutImg from "../../../public/about.jpeg";
import {
  FaBullhorn,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-10 w-screen h-fit py-24 section-about text-white"
    >
      <div className="flex flex-col items-center justify-center px-6 max-md:px-4">
        {/* Title */}
        <h1 className="relative text-[4rem] max-md:text-[3rem] mb-20 font-bold text-center text-white drop-shadow-lg">
          About Us
          <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 h-1 w-[80%] bg-purple-500 rounded-md" />
        </h1>

        {/* Main Content */}
        <div className="flex items-start justify-between gap-12 px-24 mx-2 max-md:flex-col max-md:gap-8 max-md:px-4">
          {/* Left Image */}
          <Image
            src={aboutImg}
            alt="About img"
            className="rounded-xl shadow-lg w-[40%] max-md:w-full h-auto aspect-[16/9]"
          />
          {/* Right Content */}
          <div className="flex flex-col text-left w-[50%] max-md:w-full">
            {/* Vision */}
            <h2 className="text-[3rem] max-md:text-[2rem] max-md:text-center font-bold mb-6">
              Our Vision
            </h2>
            <p className="text-[1.5rem] max-md:text-[1rem] max-md:text-center leading-relaxed mb-8">
              Mewujudkan BEM FIKTI UG sebagai wadah yang akrab, informatif,
              memiliki daya guna, serta menjadi support sistem bagi mahasiswa
              sehingga menjadikan FIKTI yang dekat, bersahabat, dan produktif.
            </p>
          </div>
        </div>
        {/* Mission Section */}
        <h2 className="text-[3rem] max-md:text-[2rem] font-bold mt-16 mb-8 text-center">
          Our Mission
        </h2>
        <div className="flex flex-wrap gap-8 justify-center px-6 max-md:px-4">
          {/* Mission Cards */}
          {[
            {
              text: "Mewujudkan penyaluran informasi secara masif guna memastikan informasi yang ada agar tersampaikan ke mahasiswa melalui penyampaian secara langsung di kampus dan didukung oleh sosial media.",
              icon: (
                <FaBullhorn
                  size={40}
                  className="text-purple-500 mx-auto mb-4"
                />
              ),
            },
            {
              text: "Menjadi BEM FIKTI yang suportif dalam hal akademik maupun non akademik dalam rangka meningkatkan kompetensi serta daya saing mahasiswa FIKTI dan juga kedekatan antara BEM dengan mahasiswa.",
              icon: (
                <FaUsers size={40} className="text-purple-500 mx-auto mb-4" />
              ),
            },
            {
              text: "Guna memastikan kehadiran BEM FIKTI dalam menyelesaikan permasalahan mahasiswa sebagai bentuk advokasi, BEM FIKTI berkomitmen untuk selalu aktif dan responsif dalam menangani setiap isu dan keluhan yang dihadapi oleh mahasiswa.",
              icon: (
                <FaShieldAlt
                  size={40}
                  className="text-purple-500 mx-auto mb-4"
                />
              ),
            },
            {
              text: "Menempatkan koordinator wilayah di lokasi kampus Salemba, Kalimalang, dan Karawaci sebagai perwakilan BEM FIKTI yang dapat mengakomodasi mahasiswa di luar lokasi kampus Depok.",
              icon: (
                <FaMapMarkerAlt
                  size={40}
                  className="text-purple-500 mx-auto mb-4"
                />
              ),
            },
          ].map((mission, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg p-8 max-md:p-6 w-[45%] max-md:w-full"
            >
              {/* Icon */}
              {mission.icon}
              {/* Mission Text */}
              <p className="text-[1.25rem] max-md:text-[1rem] font-semibold text-center leading-relaxed">
                {mission.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
