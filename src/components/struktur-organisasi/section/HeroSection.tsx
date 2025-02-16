import aboutImg from "../../../../public/about.jpeg";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-10 w-screen h-fit text-white bg-black"
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className="relative w-full h-[25rem] md:h-[30rem] flex items-center justify-center bg-cover bg-center mb-8 md:mb-12 overflow-hidden"
          style={{ backgroundImage: `url(${aboutImg.src})` }}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="flex flex-col justify-center items-center relative z-10">
            <h1 className="relative text-2xl md:text-6xl font-bold text-center drop-shadow-lg mb-5">
              Struktur Organisasi
            </h1>
            <h2 className="text-base text-white md:text-xl font-bold text-center mb-8 md:mb-12 max-w-3xl drop-shadow-lg">
              Kami berkomitmen untuk menghubungkan aspirasi, mendorong inovasi,
              dan menciptakan perubahan positif untuk FIKTI UG.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
