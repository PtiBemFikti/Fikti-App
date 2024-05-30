import { Guardians, Urbanist } from "@/styles/font";
import AccordionCard from "./AccordionCard";
import Image from "next/image";
import Link from "next/link";
export default function FaqPage() {
  return (
    <div className="mt-4">
      <div className="flex justify-center items-center md:justify-start">
        <div className="px-8 mt-8 md:px-24">
          <div className="flex justify-center md:hidden">
            <div
              className={`text-[#E8E8F0] ml-2 mr-2  text-lg ${Guardians.className} `}
            >
              Frequently
            </div>
            <div className={`text-[#E8E8F0] text-lg ${Guardians.className} `}>
              Asked
            </div>
          </div>
          <div
            className={`text-[#E8E8F0] text-lg text-center md:hidden ${Guardians.className} `}
          >
            Questions
          </div>
          <div className="md:block hidden">
            <div className="flex">
              <div
                className={`text-[#E8E8F0] mr-2 text-2xl ${Guardians.className} `}
              >
                Frequently
              </div>
              <div
                className={`text-[#E8E8F0] text-2xl ${Guardians.className} `}
              >
                Asked
              </div>

              <div
                className={`text-[#E8E8F0] ml-2 text-2xl ${Guardians.className} `}
              >
                Questions
              </div>
            </div>
          </div>
          <div
            className={`text-sm text-center text-[#E8E8F0] md:text-left ${Urbanist.className} `}
          >
            Everything you need to know about FIKTI SPACE.
          </div>
          <div className="w-[320px] mt-4 bg-[#FFFFFF1F] p-4 md:w-[563px] border-0 rounded-lg md:hidden">
            <AccordionCard
              title="Apakah kompetisi ini bisa diikuti oleh mahasiswa seluruh fakultas?"
              content="Untuk kompetisi olahraga hanya Mahasiswa FIKTI yang bisa berpartisipasi, sedangkan untuk kompetisi seni bisa diikuti oleh seluruh Mahasiswa/i Universitas Gunadarma."
            />
            <AccordionCard
              title="Apa bisa reschedule jadwal? (Khusus Kompetisi Olahraga)"
              content="Panitia telah membuat jadwal yang tidak bertabrakan dengan segala hal yang berkaitan dengan akademik, maka peserta tidak dapat mengubah jadwal pertandingan yang telah ditentukan."
            />
          </div>
          <div className="md:hidden">
            <div className="flex justify-center mt-4">
              <div
                className={`text-lg text-[#E8E8F0] mr-2 ${Guardians.className} `}
              >
                Contact
              </div>
              <div className={`text-lg text-[#E8E8F0] ${Guardians.className} `}>
                Us
              </div>
            </div>
            <div
              className={`text-base text-center px-6 text-[#E8E8F0] ${Urbanist.className} `}
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
                <Link href="https://wa.me/6281291409632">
                  <p className={`text-sm ${Urbanist.className}`}>
                    0812-9140-9632 (Shinta Dwiapriati)
                  </p>
                </Link>
                <p className={`text-sm ${Urbanist.className}`}>
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
                <p className={`text-sm ${Urbanist.className}`}>
                  @shintadwiapriati1054 (Shinta Dwiapriati)
                </p>
                <p className={`text-sm ${Urbanist.className}`}>
                  @fcbay (Favian Gusti)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden px-24">
        <div className="flex justify-end">
          <div className="bg-[#FFFFFF1F] p-4 w-[563px] border-0 rounded-lg">
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
      </div>

      <div className="md:block hidden px-24">
        <div className="flex justify-start mt-4">
          <div
            className={`text-2xl text-[#E8E8F0] mr-2 ${Guardians.className} `}
          >
            Contact
          </div>
          <div className={`text-2xl text-[#E8E8F0] ${Guardians.className} `}>
            Us
          </div>
        </div>
        <div
          className={`text-xl text-left text-[#E8E8F0] ${Urbanist.className} `}
        >
          Can’t find what you are looking for? feel free to ask us!
        </div>
        <div className="flex mt-4 gap-2">
          <Image
            src={"/fiktispace/wa.svg"}
            alt="whatsapp"
            width={32}
            height={30}
          ></Image>
          <div>
            <Link href="https://wa.me/6281291409632">
              <p className={`text-sm ${Urbanist.className}`}>
                0812-9140-9632 (Shinta Dwiapriati)
              </p>
            </Link>
            <Link href="https://wa.me/6285591111068">
              <p className={`text-sm ${Urbanist.className}`}>
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
              <p className={`text-sm ${Urbanist.className}`}>
                @shintadwiapriati1054 (Shinta Dwiapriati)
              </p>
              <p className={`text-sm ${Urbanist.className}`}>
                @fcbay (Favian Gusti)
              </p>
            </div>
          </div>
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
            className={`text-sm text-left text-[#E8E8F0] ${Urbanist.className} `}
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
              className={`text-lg text-[#E8E8F0] mr-2 ${Guardians.className} `}
            >
              Contact
            </div>
            <div className={`text-lg text-[#E8E8F0] ${Guardians.className} `}>
              Us
            </div>
          </div>
          <div
            className={`text-base text-center px-6 text-[#E8E8F0] ${Urbanist.className} `}
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
              <p className={`text-sm ${Urbanist.className}`}>
                0812-9140-9632 (Shinta Dwiapriati)
              </p>
              <p className={`text-sm ${Urbanist.className}`}>
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
              <p className={`text-sm ${Urbanist.className}`}>
                @shintadwiapriati1054 (Shinta Dwiapriati)
              </p>
              <p className={`text-sm ${Urbanist.className}`}>
                @fcbay (Favian Gusti)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
