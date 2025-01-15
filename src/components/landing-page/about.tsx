import Image from "next/image";
import aboutImg from "../../../public/about.jpeg";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-10 w-screen h-fit py-24 section-about text-white"
    >
      <div className="flex flex-col items-center justify-center px-6 max-md:px-4">
        {/* Title */}
        <h1 className="text-[2.5rem] max-md:text-[2.5rem] mb-12 font-bold text-center">
          About Us
        </h1>
        {/* Main Content */}
        <div className="flex items-start justify-between gap-8 px-12 max-md:flex-col max-md:gap-6 max-md:px-4">
          {/* Left Image */}
          <Image
            src={aboutImg}
            alt="About img"
            className="rounded-xl shadow-lg w-[40%] max-md:w-full h-auto aspect-[16/9]"
          />
          {/* Right Content */}
          <div className="flex flex-col text-left w-[50%] max-md:w-full">
            {/* Vision */}
            <h2 className="text-[2rem] max-md:text-[2rem] max-md:text-center font-bold mb-4">
              Our Vision
            </h2>
            <p className="text-lg max-md:text-base  max-md:text-center leading-relaxed mb-8">
              Mewujudkan BEM FIKTI UG sebagai wadah yang akrab, informatif,
              memiliki daya guna, serta menjadi support sistem bagi mahasiswa
              sehingga menjadikan FIKTI yang dekat, bersahabat, dan produktif.
            </p>
          </div>
        </div>
        {/* Mission Section */}
        <h2 className="text-[2.5rem] max-md:text-[2rem] font-bold mt-16 mb-8 text-center">
          Our Mission
        </h2>
        <div className="flex flex-wrap gap-6 justify-center px-6 max-md:px-4">
          {/* Mission Cards */}
          {[
            "Mewujudkan penyaluran informasi secara masif guna memastikan informasi yang ada agar tersampaikan ke mahasiswa melalui penyampaian secara langsung di kampus dan didukung oleh sosial media.",
            "Menjadi BEM FIKTI yang suportif dalam hal akademik maupun non akademik dalam rangka meningkatkan kompetensi serta daya saing mahasiswa FIKTI dan juga kedekatan antara BEM dengan mahasiswa.",
            "Guna memastikan kehadiran BEM FIKTI dalam menyelesaikan permasalahan mahasiswa sebagai bentuk advokasi, BEM FIKTI berkomitmen untuk selalu aktif dan responsif dalam menangani setiap isu dan keluhan yang dihadapi oleh mahasiswa.",
            "Menempatkan koordinator wilayah di lokasi kampus Salemba, Kalimalang, dan Karawaci sebagai perwakilan BEM FIKTI yang dapat mengakomodasi mahasiswa di luar lokasi kampus Depok.",
          ].map((mission, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-md rounded-xl shadow-lg p-6 w-full max-md:w-full"
            >
              <p className="text-lg max-md:text-base font-bold text-center leading-relaxed">
                {mission}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
