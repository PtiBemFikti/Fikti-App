import Image from "next/image";

export default function CoreValue() {
  return (
    <section
      id="core-value"
      className="relative z-10 pb-20 w-screen h-fit section-about text-white max-md:py-10"
    >
      <div className="flex flex-col items-center justify-center px-6">
        {/* Title */}
        <h1 className="relative text-[4rem] max-md:text-[3rem] mb-20 font-bold text-center text-white drop-shadow-lg">
          Core Value
          <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 h-1 w-[80%] bg-purple-500 rounded-md" />
        </h1>

        {/* Core Values Container */}
        <div className="w-[80%] flex justify-between items-center gap-8 max-md:flex-col max-md:w-full max-md:gap-12">
          {[
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
          ].map((value, index) => (
            <div
              key={index}
              className="flex w-[300px] h-[600px] bg-white/30 rounded-full flex-col justify-start items-center text-center max-md:w-[200px] max-md:h-[400px]"
            >
              {/* Image Container */}
              <div className="w-[300px] h-[300px] flex items-center justify-center bg-white rounded-full max-md:w-[200px] max-md:h-[200px]">
                <Image
                  src={value.imageSrc}
                  alt={`${value.title} logo`}
                  width={200}
                  height={200}
                  className="max-md:w-[130px] max-md:h-[130px] w-[200px] h-[200px]"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold my-5 max-md:text-xl">
                {value.title}
              </h2>

              {/* Description */}
              <p className="text-xl font-semibold px-5 max-md:text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
