import { Montserrat, poppins } from "@/styles/font";
import Image from "next/image";

export function About() {

    const poin = [
        { judul: "Innovation", penjelasan: "Memperkenalkan kepada mahasiswa UG dan masyarakat umum mengenai perkembangan teknologi saat ini melalui seminar, workshop dan kompetisi." },
        { judul: "Creativity", penjelasan: "Menumbuhkan ide kreatif mahasiswa/i Universitas Gunadarma dan masyarakat umum dalam menghadapi pesatnya perkembangan teknologi digital saat ini." },
        { judul: "Education", penjelasan: "Sebagai sarana media pembelajaran dan pembekalan ilmu mahasiswa Universitas Gunadarma dan masyarakat umum di bidang teknologi informasi dalam menghadapi pesatnya perkembangan teknologi digital saat ini." },
        { judul: "Reputation", penjelasan: "Mempertegas identitas Universitas Gunadarma di masyarakat umum sebagai kampus yang berbasis di bidang IT." },
    ];

    

    return (
        <div>
            <div className="lg:grid grid-cols-[auto_auto_auto] items-start  px-5 lg:px-0 lg:container lg:mx-auto mt-[65px] lg:mt-48">
                <div className="justify-center items-center lg:w-[600px]">
                    <h1 className={`${poppins.className} text-black  text-[35px] lg:text-[54px] tracking-tight font-semibold`}>
                        What is TechnoFair?
                    </h1> 
                    <div className="mx-auto sm:container sm:mx-auto bg-[#FFE9CF] p-7 rounded-3xl shadow-xl lg:bg-transparent lg:shadow-none">
                        <p className={`${Montserrat.className} text-black text-lg lg:text-[20px] tracking-tight lg:mt-[36px]`}>
                            Wadah bagi mahasiswa FIKTI Universitas Gunadarma untuk belajar berinovasi dan menciptakan masa depan melalui teknologi.
                        </p>
                        <p className={`${Montserrat.className} text-black text-lg lg:text-[20px] tracking-tight mt-[30px]`}>
                            Lewat webinar, kompetisi, dan workshop, TechnoFair mengupas tuntas tema &quot;Building Tomorrow&apos;s World with Innovation and Collaboration.&quot;
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block h-[450px] w-[1px] bg-black mx-10"></div>
                <div>
                    <div className="pt-10 lg:pt-0 flex">
                        
                            <div className="items-center justify-center mx-auto ">
                                
                                    <h1 className={`${poppins.className} hidden lg:block text-black text-[15px] tracking-tight font-medium `}>
                                        Maskot
                                    </h1>
                                    <h1 className={`${poppins.className} text-black text-[54px] tracking-tight font-semibold mt-[-12px] text-center lg:text-left`}>
                                        NeowBit
                                    </h1>
                                    <div className="">
                                        <div className="w-80 aspect-[7/9] relative mx-auto lg:hidden">
                                            <Image
                                                src="/technofair/logoTF12/maskot.png"
                                                alt="maskot"
                                                layout="fill"
                                                objectFit="cover"
                                                quality={90}
                                            />
                                        </div>
                                    </div>

                                    <div className="">
                                        <p className={`${Montserrat.className} bg-white lg:bg-transparent lg:p-0 lg:shadow-none p-8 rounded-3xl shadow-xl text-black text-lg tracking-tight mt-[24px]  sm:text-center lg:text-left`}>
                                            NeowBit berasal dari kata &quot;Neo&quot; yang berarti baru atau modern, melambangkan inovasi dan pembaruan. &quot;Bit&quot; Mengacu pada unit dasar data dalam komputasi, melambangkan teknologi dan dunia digital.
                                        </p>
                                    </div>
                            </div>
                        

                    
                        <div className="hidden lg:block">
                            <div className="w-80 aspect-[7/9] relative">
                                <Image
                                    src="/technofair/logoTF12/maskot.png"
                                    alt="maskot"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={90}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block pt-5 justify-center items-center mx-auto">
                        <p className=" bg-white px-7 py-3 rounded-2xl text-black shadow-xl">NeowBit bisa diartikan sebaga “Kucing robot modern yang membawa inovasi digital” sesuai dengan tema Technofair: Building Tomorrow&apos;s World with Innovation and Collaboration. </p>
                    </div>
                </div> 
            </div>
            
            <div className="lg:bg-[#053B64] mt-28 lg:mt-60 lg:container lg:mx-auto lg:p-14 rounded-[42px]">
                <h1 className={`${poppins.className} text-[#FFFAF0] font-semibold text-5xl text-center lg:text-[60px] lg:text-left`}>TechnoFair, in 4 <span className={`${poppins.className} text-[#053B64] lg:text-[#FE8A16] font-bold text-5xl lg:text-[60px]`}>Points</span></h1>

                <div className="hidden lg:grid lg:grid-cols-2 content-start gap-6 mt-10">
                    {poin.map((item, index) => (
                            <div key={index} className=" bg-[#043255] py-9 px-11 rounded-3xl transform transition-color hover:shadow-xl duration-300 hover:bg-[#052741] ">
                                <h1 className={`${poppins.className} text-[#FFFAF0] font-medium text-[35px]`}>{item.judul}</h1>
                                <p className={`${Montserrat.className} text-[#FFFAF0] font-medium mt-4`}>{item.penjelasan}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10  mx-5 lg:hidden">
                    {poin.map((item, index) => (
                        <div key={index} className="mt-4 bg-[#053B64] py-4 px-4 h-fit rounded-3xl transform transition-transform duration-300  border-[#FE8A16] hover:border">
                            <h1 className={`${poppins.className} text-[#FFFAF0] font-bold text-[20px] sm:text-3xl text-center`}>{item.judul}</h1>
                            <p className={`${Montserrat.className} text-[#FFFAF0] font-medium text-[12px] sm:text-lg mt-4 bg-[#043255] px-9 py-3 rounded-2xl`}>{item.penjelasan}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}