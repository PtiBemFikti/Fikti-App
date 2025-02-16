import Image from "next/image";
import aboutImg from "../../../../public/about.jpeg";
import {
  FaBullhorn,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

export default function AboutPage() {
  const values = [
    {
      title: "Akrab",
      description: "Hubungan erat dengan mahasiswa FIKTI",
      imageSrc: "/main/akrab.png",
    },
    {
      title: "Advokatif",
      description: "Menyuarakan kebutuhan dan aspirasi mahasiswa FIKTI",
      imageSrc: "/main/adfokatif.png",
    },
    {
      title: "Supportif",
      description: "Saling memberikan dukungan antar mahasiswa FIKTI",
      imageSrc: "/main/supportif.png",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <section
      id="about"
      className="relative z-10 w-screen h-fit text-white bg-black"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Title dengan gambar sebagai latar belakang */}
        <div
          className="relative w-full h-[25rem] md:h-[30rem] flex items-center justify-center bg-cover bg-center mb-8 md:mb-12 overflow-hidden"
          style={{ backgroundImage: `url(${aboutImg.src})` }}
        >
          {/* Overlay untuk membuat teks lebih mudah dibaca */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Efek Smoke dari Bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Konten Teks */}
          <div className="flex flex-col justify-center items-center relative z-10">
            <h1 className="relative text-2xl md:text-6xl font-bold text-center drop-shadow-lg mb-5">
              Struktur Organisasi
            </h1>
            {/* Subtitle */}
            <h2 className="text-base text-white md:text-xl font-bold text-center mb-8 md:mb-12 max-w-3xl drop-shadow-lg">
              Kami berkomitmen untuk menghubungkan aspirasi, mendorong inovasi,
              dan menciptakan perubahan positif untuk FIKTI UG.
            </h2>
          </div>
        </div>

        {/* Main Content */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full px-4 md:px-24">
          <div className="flex flex-col gap-8">
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
          <div className="relative top-0 lg:sticky lg:top-60 rounded-xl shadow-lg aspect-[16/9]">
            <Image
              src={aboutImg}
              alt="About img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute -top-8 -left-8 bg-white text-black rounded-full w-24 h-24 md:w-40 md:h-40 flex flex-col items-center justify-center transform shadow-lg">
              <span className="text-xs md:text-xl font-bold text-purple-500">
                2024/{`${year}`}
              </span>
              <span className="text-xs md:text-base font-bold">
                BEM FIKTI UG
              </span>
              <span className="text-[8px] md:text-xs font-bold">
                KABINET ADIRAKA
              </span>
            </div>
          </div>
        </div> */}
        <div className="relative z-10 w-screen h-fit text-white section-about">
          <div className="flex flex-col items-center justify-center px-6">
            {/* Title */}
            <h1 className="relative text-[4rem] max-md:text-[3rem] mb-20 font-bold text-center text-white drop-shadow-lg">
              Our Values
              <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 h-1 w-[80%] bg-purple-500 rounded-md" />
            </h1>

            <div className="w-full flex flex-col items-center justify-center gap-12 md:flex-row md:w-[80%]">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="relative flex w-full h-[300px] cursor-pointer bg-gradient-to-tr from-[#3a0d63] to-transparent rounded-2xl flex-col justify-center items-center text-center p-5 shadow-lg overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-xl z-10 transition-transform duration-300 group-hover:-translate-y-6">
                    <Image
                      src={value.imageSrc}
                      alt={`${value.title} icon`}
                      width={40}
                      height={40}
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold my-2 text-white z-10 transition-transform duration-300 group-hover:-translate-y-6">
                    {value.title}
                  </h2>

                  {/* Description (Hidden by default) */}
                  <div className=" flex items-center md:items-end lg:items-center justify-center absolute bottom-0 left-0 w-full h-full bg-black/50 text-white p-2 lg:p-4 rounded-2xl transform translate-y-full transition-transform duration-700 group-hover:translate-y-0">
                    <p className="text-sm md:text-sm lg:text-base mt-24">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
