import { Montserrat } from "@/styles/font";
import Image from "next/image";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#FE8A16]">
            <div className="w-[1500px] h-[3px] bg-black mx-auto"></div>
            <div className="mt-14 ml-20">
                <h1 className={`${Montserrat.className} text-[20px] font-extrabold text-black`}>Contact Info</h1>
            </div>

            <div className="ml-20 mt-11">
                <div className="flex">
                    <Image src="/technofair/gmailsvg.svg" alt="Logo" width={30} height={30}/>
                    <h1 className=" ml-4 font-medium text-black text-[22px]">bemfiktiug@gmail.com</h1>
                </div>
                <div className="flex mt-[20px]">
                    <Image src="/technofair/callsvg.svg" alt="Logo" width={30} height={30}/>
                    <h1 className="ml-4 font-medium text-black text-[22px]">+62 858 8084 8140</h1>
                </div>
                <div className="flex mt-[20px]">
                    <Image src="/technofair/locsvg.svg" alt="Logo" width={30} height={30}/>
                    <h1 className="ml-4 font-medium text-black text-[22px]">Alamat Sekretariat BEM FIKTI : Pusat Kegiatan Mahasiswa (PUSGIWA) Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol. M. Jasin Kelapa Dua Depok</h1>
                </div>
            </div>

            <div className="pb-4">
                <div className="w-[1500px] h-[1px] bg-black mt-[34px] mx-auto"></div>
                <p className=" mt-4 text-center text-gray-200 text-xs md:text-base font-normal">
                Copyright © {`${year}`} BEM FIKTI UG & Made with 💛 by BIRO PTI
                </p>
            </div>
        </footer>
    )
}