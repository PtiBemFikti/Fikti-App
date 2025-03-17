import { circleAmolens } from "@/styles/font";
import AccordionCard from "./AccordionCard";
import Link from "next/link";
import Image from "next/image";
import {FaWhatsapp, FaWhatsappSquare} from "react-icons/fa";

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
              KONTAK KAMI
            </p>
            <p className="text-black text-xl py-3 font-serif font-medium">
              Punya pertanyaan lain? jangan ragu untuk bertanya kepada kami.
              {/* <span>
                <a href="https://wa.me/628174932917?text=Halo+kak+Rafa%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer" className="text-black text-xl underline hover:text-purpleText">
                  {" "}
                  Kak Rafa
                </a>
              </span>
              {" "}Atau{" "}
              <span>
                <a href="https://wa.me/6285727635590?text=Halo+kak+Rizky%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer" className="text-black text-xl underline hover:text-purpleText">
                  {" "}
                  Kak Rizky.
                </a>
              </span> */}
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-5">
              <Link href="https://wa.me/628174932917?text=Halo+kak+Rafa%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
                <button className="w-full px-6 py-3 text-[18px] rounded-2xl font-serif font-thin tracking-wide text-white bg-gradient-to-r from-[#3F3381] to-[#B07FD6] cursor-pointer group-hover:scale-110 transition-all duration-300 flex flex-row gap-2">
                  <FaWhatsapp size={25}/>
                  CP Rafa
                </button>
              </Link>

              <Link href="https://wa.me/6285727635590?text=Halo+kak+Rizky%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
                <button className="w-full px-6 py-3 text-[18px] rounded-2xl font-serif font-thin tracking-wide text-ehite bg-gradient-to-r from-[#3F3381] to-[#B07FD6] cursor-pointer group-hover:scale-110 transition-all duration-300 flex flex-row gap-2">
                  <FaWhatsapp size={25}/>
                  CP Rizky
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Dekstop */}

      {/* Mobile */}
      <div className="md:hidden">
      <div className="justify-center px-5 pt-20 gap-20">
          <div className="">
            <div className="">
              <p className={`${circleAmolens.className} text-black text-2xl font-medium text-center`}>
                FREQUENTLY ASKED QUESTIONS
              </p>
              <p className="text-black text-sm py-2 text-center font-serif">
              Semua yang perlu Anda ketahui tentang FIKTI Learning.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-5">
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
              KONTAK KAMI
            </p>
            <p className="text-black text-xl py-3 font-serif font-medium">
              Punya pertanyaan lain? jangan ragu untuk bertanya kepada kami.
              {/* <span>
                <a href="https://wa.me/628174932917?text=Halo+kak+Rafa%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer" className="text-black text-xl underline hover:text-purpleText">
                  {" "}
                  Kak Rafa
                </a>
              </span>
              {" "}Atau{" "}
              <span>
                <a href="https://wa.me/6285727635590?text=Halo+kak+Rizky%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer" className="text-black text-xl underline hover:text-purpleText">
                  {" "}
                  Kak Rizky.
                </a>
              </span> */}
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-3 mt-2 mb-5">
              <Link href="https://wa.me/628174932917?text=Halo+kak+Rafa%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
                <button className="w-full px-6 py-3 text-[18px] rounded-2xl font-serif font-thin tracking-wide text-white bg-gradient-to-r from-[#3F3381] to-[#B07FD6] cursor-pointer group-hover:scale-110 transition-all duration-300 flex flex-row gap-2">
                  <FaWhatsapp size={25}/>
                  CP Rafa
                </button>
              </Link>

              <Link href="https://wa.me/6285727635590?text=Halo+kak+Rizky%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
                <button className="w-full px-6 py-3 text-[18px] rounded-2xl font-serif font-thin tracking-wide text-ehite bg-gradient-to-r from-[#3F3381] to-[#B07FD6] cursor-pointer group-hover:scale-110 transition-all duration-300 flex flex-row gap-2">
                  <FaWhatsapp size={25}/>
                  CP Rizky
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile  */}

      <div className="">
        <Link href="#" className="duration-300">
          <Image
            src="/filing/scroll up.png"
            alt=""
            className='ml-5 mb-2'
            width={50}
            height={50}
          />
        </Link>
        
      </div>
    </div>
  );
}
