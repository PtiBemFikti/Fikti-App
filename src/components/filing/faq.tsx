import { circleAmolens } from "@/styles/font";
import AccordionCard from "./AccordionCard";
import Link from "next/link";

export default function FaqPage() {
  return (
    // bg-gradient-to-r from-[#3F3381] from-[31.41%] via-[#B07FD6] via-[65.27%] to-[#B07FD6] to-[96.84%]
    // itu buat gradient nanti
    <div className="mb-10">
      {/* Dekstop */}
      <div className="md:block hidden">
        <div className="justify-center px-10 pt-20 gap-20">
          <div className="">
            <div className="">
              <p className={`${circleAmolens.className} text-black text-4xl font-medium text-center`}>
                FREQUENTLY ASKED QUESTIONS
              </p>
              <p className="text-black text-md py-2 text-center font-serif">
                Everything you need to know about FIKTI Learning.
              </p>
            </div>
          </div>

          <div className="mx-auto lg:w-4/5 mt-8">
            <div className=" bg-[linear-gradient(113.76deg,#3F3381_31.41%,#B07FD6_65.27%,#91D2F4_96.84%)] rounded-3xl p-6">
              <AccordionCard
                title="Apa itu FILING?"
                content="FIKTI Learning adalah program bootcamp yang dirancang khusus untuk mahasiswa FIKTI UG.  Dalam 4 kali pertemuan selama satu bulan, kamu akan dibimbing oleh mentor berpengalaman untuk mengembangkan minat dan bakat di bidang teknologi informasi."
              />
              <AccordionCard
                title="Materi apa saja yang ditawarkan dalam Bootcamp FILING?"
                content="Di tahun ini, FILING menghadirkan bootcamp Data Science dan Cyber Security yang sangat cocok dengan perkembangan industri saat ini."
              />
              <AccordionCard
                title="Siapa saja yang dapat mengikuti Bootcamp FILING?"
                content="Semua kalangan mahasiswa/i Mahasiswa Gunadarma."
              />
              <AccordionCard
                title="Bagaimana tahapan untuk mendaftar Bootcamp FILING?"
                content="Cara mendaftar bootcamp FILING dapat menuju dashboard lalu klik tombol “Daftar Sekarang”."
              />
              <AccordionCard
                title="Apa saja yang akan dipelajari dalam Bootcamp FILING?"
                content="Peserta akan mendapatkan penjelasan materi mendalam dari mentor profesional serta pelatihan keterampilan yang disesuaikan dengan tema yang dipilih."
              />
              <AccordionCard
                title="Apakah Bootcamp FILING memerlukan biaya pendaftaran?"
                content="Iya akan dikenakan biaya sebesar 30k/peserta dan 75k/3 peserta dan akan dapat banyak benefit lainnya loh!"
              />
              <AccordionCard
                title="Benefit apa saja yang akan di dapatkan pada Bootcamp FILING?"
                content="Peserta akan mendapatkan ilmu dan pengalaman minat bakat denngan tema yang dipilih serta sertifikat bootcamp dan portofolio yang bisa dijadikan personal branding."
              />
              <AccordionCard
                title="Bagaimana cara mendapatkan informasi lebih lanjut tentang Bootcamp FILING?"
                content="Untuk informasi lebih lanjut bisa melalui akun instagram @ug_bemfikti dan @academicc_insight"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="text-center mt-20">
            <p className={`${circleAmolens.className} text-black text-4xl font-medium`}>
              CONTACT US
            </p>
            <p className="text-black text-xl py-3 font-serif font-medium">
              Can’t find what you are looking for? feel free to{" "}
              <span>
                <a href="https://api.whatsapp.com/send/?phone=6285156854807&text=Halo+kak+Rasyid%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-black text-xl underline hover:text-purpleText">
                  {" "}
                  ask us.
                </a>
              </span>
            </p>
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

      <div className="">
        <Link href="#" className="duration-300">
          <img
            src="/filing/scroll up.png"
            alt=""
            className="ml-5 mb-2"
          />
        </Link>
        
      </div>
    </div>
  );
}
