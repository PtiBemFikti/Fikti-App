import { Montserrat } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";


const sosmed = [
    { href: "https://www.youtube.com/@technofair8644 ", src: "/technofair/logoTF12/youtube.png", alt: "YouTube" },
    { href: "https://www.instagram.com/technofair?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", src: "/technofair/logoTF12/instagram.png", alt: "Instagram" },
    { href: "", src: "/technofair/logoTF12/tiktok.png", alt: "TikTok" },
    { href: "https://www.linkedin.com/company/technofair/posts/?feedView=all ", src: "/technofair/logoTF12/linkedin.png", alt: "LinkedIn" },
    { href: "https://x.com/technofair ", src: "/technofair/logoTF12/twitter.png", alt: "Twitter" },
  ];
  

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#FE8A16] ">
            <div className="w-96 h-px lg:w-[1500px] bg-black mx-auto"></div>
            <div className="mt-10 lg:mt-14 ml-3 lg:ml-20">
                <h1 className={`${Montserrat.className} text-[25px] lg:text-[20px] font-extrabold text-black`}>Contact Info</h1>
            </div>

            <div className="lg:grid grid-cols-3 gap-9 mx-3 lg:mx-20 ">
                <div className=" mt-11">
                    <div className="flex">
                        <Image src="/technofair/gmailsvg.svg" alt="Logo" width={30} height={30}/>
                        <Link href="mailto:bemfikti.ug@gmail.com">
                        <h1 className=" ml-4 font-medium text-black text-[22px] hover:text-[#174082] transition-colors duration-300">bemfiktiug@gmail.com</h1>
                        </Link>
                    </div>
                    <div className="flex mt-[20px]">
                        <Image src="/technofair/callsvg.svg" alt="Logo" width={30} height={30}/>
                        <Link href="https://wa.me/6285150935519">
                            <h1 className="ml-4 font-medium text-black text-[22px] hover:text-[#174082] transition-colors duration-300">+62 858 8084 8140</h1>
                        </Link>
                    </div>
                    <div className="flex mt-[20px] items-start lg:hidden">
                        <Image src="/technofair/locsvg.svg" alt="Logo" width={30} height={30}/>
                        <Link href="https://www.google.com/maps/place/Universitas+Gunadarma/@-6.363234,106.831725,17z">
                            <h1 className="ml-4 font-medium text-black text-[22px] hover:text-[#174082] transition-colors duration-300">Alamat Sekretariat BEM FIKTI : <br /> Pusat Kegiatan Mahasiswa (PUSGIWA) Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol. M. Jasin Kelapa Dua Depok</h1>
                        </Link>
                    </div>
                    
                    <div className=" hidden lg:flex">
                        <div className="w-[45px] h-[50px] bg-[#FE8A16]"></div>
                        <div className="flex mt-6">
                            {sosmed.map((items, index) => (
                                <Link key={index} href={items.href} className="text-gray-400 hover:text-purpleText">
                                <Image
                                    src={items.src}
                                    alt={items.alt}
                                    width={50}
                                    height={50}
                                    className="object-contain hover:scale-110 transition-transform"
                                />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-rows-2 lg:items-end mt-10 lg:mt-0">
                    <div className="flex justify-center items-end">
                        <Image src="/technofair/logoTF12/Logo Gundar Putih.png" alt="Logo" width={80} height={80} className="object-contain hover:scale-110 transition-transform" />
                        <Image src="/technofair/logoTF12/Logo BEM FIKTI Putih.png" alt="Logo" width={100} height={100} className="object-contain hover:scale-110 transition-transform" />
                        <Image src="/technofair/logoTF12/Logo Adiraka Putih.png" alt="Logo" width={80} height={80} className="object-contain hover:scale-110 transition-transform" />
                    </div>
                    <h1 className={`${Montserrat.className} text-[20px] text-center font-semibold text-black lg:items-end`}>BEM FIKTI UG 2024/{`${year}`} <br />TECHNOFAIR 12.0</h1>
                </div>

                <div className="flex lg:hidden justify-center">
                        <div className="flex mt-0 lg:mt-6">
                            {sosmed.map((items, index) => (
                                <Link key={index} href={items.href} className="text-gray-400 hover:text-purpleText">
                                <Image
                                    src={items.src}
                                    alt={items.alt}
                                    width={50}
                                    height={50}
                                    className="object-contain hover:scale-110 transition-transform"
                                />
                                </Link>
                            ))}
                        </div>
                    </div>

                <div className="mt-[20px] hidden lg:block">
                    <div className=" flex justify-between">
                        <div className="w-2 h2 bg-[#FE8A16]"></div>
                        <Image src="/technofair/locsvg.svg" alt="Logo" width={30} height={30} className=""/>
                    </div>
                    <Link href="https://www.google.com/maps/place/Universitas+Gunadarma/@-6.363234,106.831725,17z">
                    <h1 className="ml-4 font-medium text-black text-[20px] text-right hover:text-[#174082] transition-colors duration-300">Alamat Sekretariat BEM FIKTI : <br /> Pusat Kegiatan Mahasiswa (PUSGIWA) Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol. M. Jasin Kelapa Dua Depok</h1>
                    </Link>

                </div>
            </div>

            <div className="pb-4">
                <div className="w-full lg:w-[1500px] h-[1px] bg-black mt-[34px] mx-auto"></div>
                <p className=" mt-4 text-center text-gray-200 text-xs md:text-base font-normal">
                Copyright © {`${year}`} BEM FIKTI UG & Made with 💛 by BIRO PTI
                </p>
            </div>
        </footer>
    )
}