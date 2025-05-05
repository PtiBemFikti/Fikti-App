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
              title="Apakah kompetisi ini bisa diikuti oleh mahasiswa seluruh fakultas?"
              content="Untuk kompetisi olahraga hanya Mahasiswa FIKTI yang bisa berpartisipasi, sedangkan untuk kompetisi seni bisa diikuti oleh seluruh Mahasiswa/i Universitas Gunadarma."
            />
            <AccordionCard
              title="Apa bisa reschedule jadwal? (Khusus Kompetisi Olahraga)"
              content="Panitia telah membuat jadwal yang tidak bertabrakan dengan segala hal yang berkaitan dengan akademik, maka peserta tidak dapat mengubah jadwal pertandingan yang telah ditentukan."
            />
          </div>
        </div>
        <div className="px-8 w-[40%]">
          <div className={`text-2xl text-center mb-2 text-[#E8E8F0] ${Lato.className} `}>
            or.. if you have any other <br />questions you can
          </div>
          <div className={`text-4xl text-center underline text-[#E8E8F0] ${AkiraExpanded.className} `}>
            CONTACT US
          </div>
          {/* <div className="flex mt-4 gap-2">
            <Image
              src={"/fiktispace/wa.svg"}
              alt="whatsapp"
              width={32}
              height={30}
            ></Image>
            <div>
              <Link href="https://wa.me/6281291409632">
                <p className={`text-sm ${Lato.className}`}>
                  0812-9140-9632 (Shinta Dwiapriati)
                </p>
              </Link>
              <Link href="https://wa.me/6285591111068">
                <p className={`text-sm ${Lato.className}`}>
                  0855-9111-1068 (Favian Gusti)
                </p>
              </Link>
            </div>
            <div className="flex ml-4 gap-2">
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
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

{
  /* Desktop */
}

{
  /* <div className="mt-4 md:hidden">
        <div className="px-[120px] my-8">
          <div
            className={`text-sm text-left text-[#E8E8F0] ${Lato.className} `}
          >
            Everything you need to know about FIKTI SPACE.
          </div>
          <div className="mt-4 bg-[#FFFFFF1F] p-4 w-[563px] border-0 rounded-lg">
            <AccordionCard
              title="Apakah kompetisi ini bisa diikuti oleh mahasiswa seluruh fakultas?"
              content="Untuk kompetisi olahraga hanya Mahasiswa FIKTI yang bisa berpartisipasi, sedangkan untuk kompetisi seni bisa diikuti oleh seluruh Mahasiswa/i Universitas Gunadarma."
            />
            <AccordionCard
              title="Apa bisa reschedule jadwal? (Khusus Kompetisi Olahraga)"
              content="Panitia telah membuat jadwal yang tidak bertabrakan dengan segala hal yang berkaitan dengan akademik, maka peserta tidak dapat mengubah jadwal pertandingan yang telah ditentukan"
            />
          </div>
          <div className="flex justify-center mt-4">
            <div
              className={`text-lg text-[#E8E8F0] mr-2 ${AkiraExpanded.className} `}
            >
              Contact
            </div>
            <div className={`text-lg text-[#E8E8F0] ${AkiraExpanded.className} `}>
              Us
            </div>
          </div>
          <div
            className={`text-base text-center px-6 text-[#E8E8F0] ${Lato.className} `}
          >
            Can’t find what you are looking for? feel free to ask us!
          </div>
          <div className="flex mt-4 px-8 gap-2">
            <Image
              src={"/fiktispace/wa.svg"}
              alt="whatsapp"
              width={32}
              height={30}
            ></Image>
            <div>
              <p className={`text-sm ${Lato.className}`}>
                0812-9140-9632 (Shinta Dwiapriati)
              </p>
              <p className={`text-sm ${Lato.className}`}>
                0855-9111-1068 (Favian Gusti)
              </p>
            </div>
          </div>
          <div className="flex mt-4 px-8 gap-2">
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
          </div>
        </div>
      </div>
    </div> */
}
