import { Guardians, Urbanist } from "@/styles/font";
import AccordionCard from "./AccordionCard";
import Image from "next/image";
export default function FaqPage() {
  return (
    <div className="mt-4">
      <div className="flex justify-center items-center">
        <div className="px-8 my-8">
          <div className="flex justify-center">
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
            className={`text-[#E8E8F0] text-lg text-center ${Guardians.className} `}
          >
            Questions
          </div>
          <div
            className={`text-sm text-center text-[#E8E8F0] ${Urbanist.className} `}
          >
            Everything you need to know about FIKTI SPACE.
          </div>
          <div className="w-[360px] mt-4 bg-[#FFFFFF1F] border-0 rounded-lg">
            <AccordionCard title="SOON" content="SABAR" />
            <AccordionCard title="SOON" content="SABAR" />
            <AccordionCard title="SOON" content="SABAR" />
            <AccordionCard title="SOON" content="SABAR" />
            <AccordionCard title="SOON" content="SABAR" />
            <AccordionCard title="SOON" content="SABAR" />
            <AccordionCard title="SOON" content="SABAR" />
            <AccordionCard title="SOON" content="SABAR" />
            <AccordionCard title="SOON" content="SABAR" />
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
    </div>
  );
}
