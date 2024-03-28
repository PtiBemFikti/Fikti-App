import AccordionCard from "./AccordionCard";

export default function FaqPage() {
  return (
    <div className="bg-[#25243A]">
      {/* Dekstop */}
      <div className="md:block hidden">
        <div className="flex justify-center py-32 gap-20">
          <div className="">
            <div className="">
              <p className="text-white text-5xl font-['Circle-Amolens'] font-bold">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <p className="text-white text-xl font-[Poppins] py-2">
                Everything you need to know about FIKTI Learning.
              </p>
            </div>
            <div className="mt-80">
              <p className="text-white font-['Circle-Amolens'] text-4xl font-bold">
                CONTACT US
              </p>
              <p className="text-white text-xl font-[Poppins] py-3">
                Can’t find what you are looking for? feel free to{" "}
                <span>
                  <button className="text-white text-xl font-normal font-['Poppins'] underline">
                    {" "}
                    ask us.
                  </button>
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="w-96 bg-[#31304d] rounded-3xl p-6">
                <AccordionCard
                  title="Apa itu FILING?"
                  content="FILING adalah program pelatihan intensif yang diselenggarakan oleh Departemen Akademik FIKTI UG untuk membekali mahasiswa/i dengan hardskill dan softskill di bidang Teknologi Informasi."
                />

                <AccordionCard
                  title="Apa saja tema yang ditawarkan dalam Bootcamp FILING?"
                  content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
                />

                <AccordionCard
                  title="Siapa saja yang dapat mengikuti Bootcamp FILING?"
                  content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
                />

                <AccordionCard
                  title="Bagaimana cara mendaftar Bootcamp FILING?"
                  content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
                />

                <AccordionCard
                  title="Apa saja yang akan dipelajari dalam Bootcamp FILING?"
                  content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
                />

                <AccordionCard
                  title="Apakah ada biaya untuk mengikuti Bootcamp FILING?"
                  content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
                />

                <AccordionCard
                  title="Apakah Bootcamp FILING memberikan sertifikat?"
                  content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
                />

                <AccordionCard
                  title="Bagaimana cara mendapatkan informasi lebih lanjut tentang Bootcamp FILING?"
                  content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dekstop */}

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex-col justify-center items-center py-32 px-4">
          <div className="text-[#fff4e7] text-center">
            <p className="text-4xl font-bold font-['Circle-Amolens']">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>
          <div className="p-4 flex justify-center items-center">
            <div className="w-96 bg-[#25243A] rounded-3xl p-4">
              <AccordionCard
                title="Apa itu FILING?"
                content="FILING adalah program pelatihan intensif yang diselenggarakan oleh Departemen Akademik FIKTI UG untuk membekali mahasiswa/i dengan hardskill dan softskill di bidang Teknologi Informasi."
              />

              <AccordionCard
                title="Apa saja tema yang ditawarkan dalam Bootcamp FILING?"
                content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
              />

              <AccordionCard
                title="Siapa saja yang dapat mengikuti Bootcamp FILING?"
                content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
              />

              <AccordionCard
                title="Bagaimana cara mendaftar Bootcamp FILING?"
                content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
              />

              <AccordionCard
                title="Apa saja yang akan dipelajari dalam Bootcamp FILING?"
                content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
              />

              <AccordionCard
                title="Apakah ada biaya untuk mengikuti Bootcamp FILING?"
                content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
              />

              <AccordionCard
                title="Apakah Bootcamp FILING memberikan sertifikat?"
                content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
              />

              <AccordionCard
                title="Bagaimana cara mendapatkan informasi lebih lanjut tentang Bootcamp FILING?"
                content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG."
              />
            </div>
          </div>
          <div className="py-7 text-center px-4">
            <p className="font-[Bricolage-Grotesque] font-bold text-4xl text-[#fff4e7]">
              Contact us
            </p>
            <p className="font-[Poppins] text-base py-3">
              Can’t find what you are looking for? feel free to{" "}
              <a href="#" className="underline">
                ask us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/* Mobile  */}
    </div>
  );
}
