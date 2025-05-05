import { AkiraExpanded, Lato } from "@/styles/font";
import AccordionCard from "./AccordionCard";
import Image from "next/image";
import Link from "next/link";
export default function FaqPage() {
  return (
    <div className="pb-8 pt-28">
      <div className="flex flex-wrap items-center md:justify-start px-20">
        <div className="px-8 mt-2 w-[60%]">
          <div className="text-center">
            <div className={`text-2xl md:text-[2.5rem] bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className} `}>           
              FAQ
            </div>
            <div className={`text-sm text-[#E8E8F0] ${Lato.className} `}>
              Everything you need to know about FIKTI SPACE.
            </div>
          </div>
          <div className=" mt-4 bg-[#FECB62] py-4 px-6 w-full border-0 rounded-lg text-[#112C70]">
            <AccordionCard
              title="Apakah FIKTI SPACE 4.0 bisa untuk semua Region?"
              content="Fikti Space 4.0 bisa untuk seluruh region Universitas Gunadarma ya!"
            />
            <AccordionCard
              title="Untuk Per-Team nya, boleh dari kelas masing-masing atau gabungan dari beberapa kelas?"
              content="Untuk team futsal, basket,  volley, dan Mobile Legends boleh banget nih buat gabungan kelas asalkan dengan syarat harus per-Angkatan dan maksimal 3 kelas gabungan ya. Untuk Badminton,boleh juga untuk digabung dengan kelas lain."
            />
            <AccordionCard
              title="Apakah boleh ikut lomba lebih dari satu?"
              content="Diperbolehkan asalkan sesuaikan jadwal mainnya ya!!"
            />
            <AccordionCard
              title="Misal dari team, satu orang ada yang berhalangan hadir karena sakit, apakah boleh digantikan?"
              content="Boleh digantikan dengan pemain cadangan yang dari awal sudah disiapkan & diregistrasikan para team ya!"
            />
            <AccordionCard
              title="Lokasi untuk setiap lombanya sama atau berbeda?"
              content="Untuk beberapa mata lomba,lokasi nya berbeda-beda. Namun untuk Futsal, Basket, dan Voli terletak di Sportcentre Kampus H Gunadarma, Kelapa Dua, Depok."
            />
            <AccordionCard
              title="Apakah boleh bawa suporter untuk team yang bermain?"
              content="Boleh sekali!! Bawa supporter sebanyak-banyaknya agar peserta lomba bersemangat memenangkan FIKTI SPACE 4.0!"
            />
          </div>
        </div>
        <div className="px-8 w-[40%]">
          <div className={`text-2xl text-center mb-2 text-[#E8E8F0] ${Lato.className} `}>
            or.. if you have any other <br />questions you can
          </div>
          <div className={`text-4xl text-center text-[#E8E8F0] ${AkiraExpanded.className} `}>
            CONTACT US
          </div>
          <div className="flex mt-4 gap-4 justify-center">
            <Image
              src={"/fiktispace/wa.svg"}
              alt="whatsapp"
              width={50}
              height={30}
            ></Image>
            <div className="flex flex-col gap-y-2">
              <Link href="https://wa.me/62085819191776" target="_blank">
                <p className={`text-lg ${Lato.className} hover:underline hover:font-semibold`}>
                  0858-1919-1776 (Siti Nazua)
                </p>
              </Link>
              <Link href="https://wa.me/6285883321315" target="_blank">
                <p className={`text-lg ${Lato.className} hover:underline hover:font-semibold`}>
                  0858-8332-1315 (Nayla)
                </p>
              </Link>
            </div>
            {/* <div className="flex ml-4 gap-2">
              <Image
                src={"/fiktispace/line.svg"}
                alt="line"
                width={32}
                height={30}
              ></Image>
              <div>
                <p className={`text-sm ${Lato.className}`}>
                  @shintadwiapriati1054 (Shinta Dwiapriati)
                </p>
                <p className={`text-sm ${Lato.className}`}>
                  @fcbay (Favian Gusti)
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}