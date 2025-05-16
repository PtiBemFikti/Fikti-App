import { Lato } from "@/styles/font";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-4 -mb-20 md:mb-0">
      <div className="flex items-center justify-center">
        <div className="py-5 md:py-12 px-6 md:px-14 flex flex-col lg:flex-row gap-y-10 ">
          <div className="lg:pr-16">
            <p className={`${Lato.className} text-justify text-white text-lg font-medium md:text-xl`}>
            <span className='font-bold font-size[1.3rem]'>FIKTI SPACE 4.0</span> adalah program kerja unggulan BEM FIKTI Gunadarma yang diselenggarakan oleh Departemen Olahraga dan Seni Budaya (ORSB),  sebagai wahana eksplorasi kreativitas <span className='font-bold font-size[1.3rem]'>khususnya di bidang Seni dan Olahraga</span> bagi mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Gunadarma.
            <br />
            <br />
            <span className='font-bold font-size[1.3rem]'>FIKTI SPACE 4.0</span> tahun 2025 hadir mengajakmu untuk meluncur dari zona nyaman, menjelajahi galaksi kreativitas, berkompetisi di orbit penuh tantangan, dan bersinar seterang bintang di langit FIKTI. Bersiaplah menembus atmosfer 
            keterbatasan, dan jadikan perjalananmu di FIKTI SPACE 4.0 sebagai misi luar biasa yang dipenuhi warna, semangat, dan inspirasi tanpa gravitasi.
            {/* <br/>
            <br/>
            Fuel the passion, embrace the challenge! */}
            </p>
          </div>
          <div className=" flex border-t lg:border-t-0 lg:border-l border-white items-center">
            <div className="-mr-5 lg:-mr-10">
              <Image
                src={"/fiktispace/Nebula_polos.png"}
                alt="back"
                width={500}
                height={500}
                className="w-[50rem] h-[17,75rem]"
              ></Image>
            </div>
            <div className="-ml-5 lg:-ml-10">
            <Image
                src={"/fiktispace/Stella_polos.png"}
                alt="back"
                width={500}
                height={500}
                className="w-[50rem] h-[17,75rem]"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
