import { Montserrat, OpenSauceSans, poppins } from "@/styles/font";
import { useState, useRef } from "react";

interface CardData {
    id: number;
    category: string;
    mode: string;
    title: string;
    subtitle: string;
    date: string;
    details: {
      text: string;
    }[];
  }

  const cardData: CardData[] = [
    {
      id: 1,
      category: "Competition",
      mode: "Hybrid",
      title: "Capture the Flag",
      subtitle: "Securing the Network & Be a Cyber Defender",
      date: "May 24 - July 27, 2024",
      details: [
        { text: "May 24 - July 27, 2024" },
        { text: "Information & Cybersecurity" },
      ],
    },
    {
      id: 2,
      category: "Competition",
      mode: "Hybrid",
      title: "Capture the Flag",
      subtitle: "Securing the Network & Be a Cyber Defender",
      date: "May 24 - July 27, 2024",
      details: [
        { text: "May 24 - July 27, 2024" },
        { text: "Information & Cybersecurity" },
      ],
    },
    {
      id: 3,
      category: "Competition",
      mode: "Hybrid",
      title: "Capture the Flag",
      subtitle: "Securing the Network & Be a Cyber Defender",
      date: "May 24 - July 27, 2024",
      details: [
        { text: "May 24 - July 27, 2024" },
        { text: "Information & Cybersecurity" },
      ],
    },
    {
      id: 4,
      category: "Competition",
      mode: "Hybrid",
      title: "Capture the Flag",
      subtitle: "Securing the Network & Be a Cyber Defender",
      date: "May 24 - July 27, 2024",
      details: [
        { text: "May 24 - July 27, 2024" },
        { text: "Information & Cybersecurity" },
      ],
    },
  ];

  function Card({ data }: { data: CardData }) {
    return (
      <div className="bg-[#FFEFD7] w-[320px] rounded-[30px] shadow-[10px_9px_5px_0px_rgba(94,77,73,0.50)]">
        <div className="ml-5 pt-4 pb-12">
          <div className="h-[150px] w-[280px] rounded-3xl bg-white mb-6">

          </div>
          <div className="flex">
            <h5 className="text-[#FFFAF0] text-xs px-3 py-[2px] tracking-tight font-semibold bg-[#053B64] rounded-full">
              {data.category}
            </h5>
            <h5 className="text-[#FFFAF0] text-xs ml-1 px-3 py-[2px] tracking-tight font-semibold bg-[#053B64] rounded-full">
              {data.mode}
            </h5>
          </div>
          <div>
            <h1 className="tracking-tight text-3xl font-extrabold text-[#0E0D1F]">
              {data.title}
            </h1>
            <p className="tracking-tight text-base text-[#0E0D1F]">
              {data.subtitle}
            </p>
          </div>
          <div className="mt-[30px]">
            {data.details.map((detail, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none">
                  <path d="..." fill="#0E0D1F" />
                </svg>
                <p className="tracking-tight text-base text-[#0E0D1F]">
                  {detail.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


export default function WorkshopSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const scrollNext = () => {
        if (sliderRef.current) {
     
          sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      };
    
      const scrollPrev = () => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
        }
      };

    return(
        <div className="relative">

            <div className="absolute right-0 top-0 bg-[#FE8A16] rounded-l-[50px] w-[70%] h-[600px]"></div>

            <div className="grid grid-cols-[60%_40%] h-[550px]">
      
                <div className="relative flex flex-col gap-5 items-center mt-10">
                    <div ref={sliderRef} className="relative flex gap-5 overflow-x-auto items-center w-full">
                    {cardData.map((data) => (
                        <div key={data.id} className="flex-shrink-0">
                        <Card data={data} />
                        </div>
                    ))}
                    </div>
                    <div className="absolute right-0 bottom-0 mt-8">
                    <button
                        onClick={scrollPrev}
                        className="mr-4 px-4 py-2 bg-[#100F21] text-[#FE8A16] text-2xl rounded-l-md hover:bg-[#FFFAF0] hover:text-[#100F21] transition-colors duration-500"
                    >
                        ◀
                    </button>
                    <button
                        onClick={scrollNext}
                        className="px-4 py-2 bg-[#100F21] text-[#FE8A16] text-2xl rounded-r-md hover:bg-[#FFFAF0] hover:text-[#100F21] transition-colors duration-500"
                    >
                        ▶
                    </button>
                    </div>
                </div>

             
                <div className="relative pr-[112px] pt-[100px] py-[200px] text-right">
                    <h1 className={`${Montserrat.className} text-[60px] font-bold text-black`}>Kompetisi</h1>
                    <p className={`${Montserrat.className} tracking-tight text-black pl-10`}>
                    &quot;Kompetisi ini menjadi ajang bagi para peserta untuk mengasah kemampuan, berinovasi, dan menunjukkan potensi terbaik mereka. Dengan berbagai kategori dan tantangan menarik, kompetisi ini memberikan pengalaman berharga serta kesempatan untuk meraih prestasi. Bersiaplah untuk bersaing dan tunjukkan kemampuan terbaikmu!&quot;
                    </p>
                </div>
                

            </div>
        </div>
    )
}