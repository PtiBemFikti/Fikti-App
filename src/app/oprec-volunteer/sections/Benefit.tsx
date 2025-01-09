import { MonumentExtendedRegular } from "@/styles/font";

export default function Benefit() {
  return (
    <section
      id="benefit"
      className="w-full h-auto flex flex-col items-center pt-24"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h1
          className={`${MonumentExtendedRegular.className} text-[3rem] max-md:text-[2rem] font-bold leading-tight`}
        >
          <span className="text-[5rem] max-md:text-[2.5rem] bg-gradient-to-r from-[#20202C] via-[#377DFF] to-[#49E0A2] bg-clip-text text-transparent">
            BENEFIT
          </span>
          <br />
          <span className="text-black">Volunteer</span>
        </h1>
      </div>
      {/* Benefits */}
      <div className="flex flex-col gap-8 w-[70%] max-md:w-full max-md:px-5 max-md:gap-4">
        {[
          {
            title: "Pengalaman Berharga",
            description:
              "Terlibat langsung dalam pengelolaan acara besar dan mendapatkan pengalaman yang dapat meningkatkan keterampilan soft skills.",
          },
          {
            title: "Peluang Berkolaborasi",
            description:
              "Bekerja sama dengan sesama mahasiswa dan panitia dari berbagai bidang untuk mencapai tujuan bersama.",
          },
          {
            title: "Meningkatkan Portofolio",
            description:
              "Menambah pengalaman yang dapat dilampirkan di CV dan menjadi nilai tambah dalam dunia profesional.",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#111827] text-white rounded-[60px] shadow-lg shadow-black p-8 max-md:p-4 cursor-pointer hover:scale-[1.02] transition-all duration-400"
          >
            <h2 className="text-[2rem] font-semibold mb-3 max-md:text-[1.3rem]">
              {benefit.title}
            </h2>
            <p className="text-center text-[1.8rem] max-md:text-[0.8rem]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[70%] max-md:w-full mt-10 items-center text-black rounded-[60px] p-8 max-md:p-4">
        <h2 className="text-[2rem] font-bold mb-3 max-md:text-[1.3rem]">
          Let`s Join Us!
        </h2>
        <p className="text-center text-[1.8rem] max-md:text-[1rem]">
          Jadilah bagian dari perubahan dan kesuksesan acara BEM FIKTI UG. Ayo,
          jadi volunteer sekarang dan buktikan kontribusimu untuk kemajuan
          bersama!
        </p>
      </div>
    </section>
  );
}
