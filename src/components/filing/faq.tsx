import { circleAmolens } from "@/styles/font";
import AccordionCard from "./AccordionCard";

export default function FaqPage() {
  return (
    <div className="bg-[#25243A]">
      {/* Dekstop */}
      <div className="md:block hidden">
        <div className="flex justify-center py-32 px-10 gap-20">
          <div className="">
            <div className="">
              <p
                className={`${circleAmolens.className} text-white text-5xl font-medium`}
              >
                FREQUENTLY ASKED QUESTIONS
              </p>
              <p className="text-white text-xl font-[Poppins] py-2">
                Everything you need to know about FIKTI Learning.
              </p>
            </div>
            <div className="mt-80">
              <p
                className={`${circleAmolens.className} text-white text-4xl font-medium`}
              >
                CONTACT US
              </p>
              <p className="text-white text-xl font-[Poppins] py-3">
                Can’t find what you are looking for? feel free to{" "}
                <span>
                  <a
                    href="https://www.evernote.com/shard/s684/sh/6bba8628-a7cf-c26f-84b8-1996b92a3f4e/npUZo0Vd4Dp0pPWO4yUYoBVraTAj-dTPsxKUT6WEnZLH3_DS4NKOaGWuZg"
                    className="text-white text-xl font-normal font-['Poppins'] underline"
                  >
                    {" "}
                    ask us.
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="w-96 bg-[#31304d] rounded-3xl p-6">
                <AccordionCard
                  title="Apa itu FILING?"
                  content="FIKTI Learning (FILING) merupakan program kerja Departemen Akademik yang mendorong mahasiswa/i FIKTI UG dalam mengembangkan minat dan bakat teknologi informasi, yang akan dilaksanakan dalam 4 kali pertemuan secara bertahap dalam sebulan."
                />

                <AccordionCard
                  title="Apa saja tema yang ditawarkan dalam Bootcamp FILING?"
                  content="Data Analyst “Started The Journey as a Data Analyst with Python & Tableau” dan Web Development “Create Interactive Websites to Become a Web Developer With HTML, CSS & JS”."
                />

                <AccordionCard
                  title="Siapa saja yang dapat mengikuti Bootcamp FILING?"
                  content="Semua kalangan mahasiswa FIKTI ya kak! ^^"
                />

                <AccordionCard
                  title="Bagaimana cara mendaftar Bootcamp FILING?"
                  content="Cara mendaftar bootcamp FILING dapat menuju dashboard lalu klik tombol “daftar sekarang”."
                />

                <AccordionCard
                  title="Apa saja yang akan dipelajari dalam Bootcamp FILING?"
                  content="Penjelasan materi oleh pemateri profesional dan pelatihan bakat sesuai tema yang dipilih peserta."
                />

                <AccordionCard
                  title="Apakah ada biaya untuk mengikuti Bootcamp FILING?"
                  content="Untuk biaya 30K/peserta dan 75K/3 peserta."
                />

                <AccordionCard
                  title="Apakah Bootcamp FILING memberikan sertifikat?"
                  content="Peserta akan mendapatkan ilmu dan pengalaman minat bakat tema yang dipilih serta sertifikat bootcamp dan portofolio yang bisa dijadikan personal branding."
                />

                <AccordionCard
                  title="Bagaimana cara mendapatkan informasi lebih lanjut tentang Bootcamp FILING?"
                  content="Untuk informasi lebih lanjut bisa melalui akun instagram @ug_bemfikti dan @academic_insight
"
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
            <p className={`${circleAmolens.className} text-4xl font-bold`}>
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>
          <div className="p-4 flex justify-center items-center">
            <div className="w-96 bg-[#25243A] rounded-3xl p-4">
              <AccordionCard
                title="Apa itu FILING?"
                content="FIKTI Learning (FILING) merupakan program kerja Departemen Akademik yang mendorong mahasiswa/i FIKTI UG dalam mengembangkan minat dan bakat teknologi informasi, yang akan dilaksanakan dalam 4 kali pertemuan secara bertahap dalam sebulan."
              />

              <AccordionCard
                title="Apa saja tema yang ditawarkan dalam Bootcamp FILING?"
                content="Data Analyst “Started The Journey as a Data Analyst with Python & Tableau” dan Web Development “Create Interactive Websites to Become a Web Developer With HTML, CSS & JS”."
              />

              <AccordionCard
                title="Siapa saja yang dapat mengikuti Bootcamp FILING?"
                content="Semua kalangan mahasiswa FIKTI ya kak! ^^"
              />

              <AccordionCard
                title="Bagaimana cara mendaftar Bootcamp FILING?"
                content="Cara mendaftar bootcamp FILING dapat menuju dashboard lalu klik tombol “Daftar Sekarang”."
              />

              <AccordionCard
                title="Apa saja yang akan dipelajari dalam Bootcamp FILING?"
                content="Penjelasan materi oleh pemateri profesional dan pelatihan bakat sesuai tema yang dipilih peserta."
              />

              <AccordionCard
                title="Apakah ada biaya untuk mengikuti Bootcamp FILING?"
                content="Untuk biaya 30K/peserta dan 75K/3 peserta."
              />

              <AccordionCard
                title="Apakah Bootcamp FILING memberikan sertifikat?"
                content="Peserta akan mendapatkan ilmu dan pengalaman minat bakat tema yang dipilih serta sertifikat bootcamp dan portofolio yang bisa dijadikan personal branding."
              />

              <AccordionCard
                title="Bagaimana cara mendapatkan informasi lebih lanjut tentang Bootcamp FILING?"
                content="Untuk informasi lebih lanjut bisa melalui akun instagram @ug_bemfikti dan @academic_insight
"
              />
            </div>
          </div>
          <div className="py-7 text-center px-4">
            <p
              className={`${circleAmolens.className} font-bold text-4xl text-[#fff4e7]`}
            >
              Contact us
            </p>
            <p className="font-[Poppins] text-base py-3">
              Can’t find what you are looking for? feel free to{" "}
              <a
                href="https://www.evernote.com/shard/s684/sh/6bba8628-a7cf-c26f-84b8-1996b92a3f4e/npUZo0Vd4Dp0pPWO4yUYoBVraTAj-dTPsxKUT6WEnZLH3_DS4NKOaGWuZg"
                className="underline"
              >
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
