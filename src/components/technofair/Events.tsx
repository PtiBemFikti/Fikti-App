import { Montserrat, OpenSauceSans, poppins } from "@/styles/font";

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
            {/* Optionally add an image here */}
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
                {/* Replace with an icon component if needed */}
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
  
  

export function Events() {

    const item = [
        { nama: "UI/UX" },
        { nama: "Database" },
        { nama: "Innovation" },
        { nama: "Tech" },
        { nama: "Future" },
        { nama: "3D" },
        { nama: "Webinars" },
        { nama: "Machine Learning" },
    ]

    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-teal-500", "bg-orange-500"];

    return(
        <div className="my-52">
            <div>
                <h1 className={`${poppins.className} text-[155px] font-extrabold leading-[109%] text-center`}>OUR UPCOMING EVENTS</h1>
                <div className="relative">

                    <div className="absolute w-[400px] h-[400px] left-[-200px] top-[-120px] bg-[#100F21] blur-[100px] z-10"></div>
                    <div className="absolute w-[400px] h-[400px] right-[-200px] top-[-120px] bg-[#100F21] blur-[100px] z-10"></div>

                    <div className="relative flex overflow-x-hidden mt-28">
                        <div className="py-3 animate-marquee whitespace-nowrap">
                            {item.map((data, index) => (
                                <span 
                                key={index} 
                                className={`text-2xl mx-4 px-10 py-2 rounded-full text-black ${colors[index % colors.length]}`}
                                >
                                {data.nama}
                                </span>
                            ))}
                        </div>

                        <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap">
                             {item.map((data, index) => (
                                <span 
                                key={index} 
                                className={`text-2xl mx-4 px-10 py-2 rounded-full text-black ${colors[index % colors.length]}`}
                                >
                                {data.nama}
                                </span>
                                
                            ))}
                        </div>
                    </div>

                    <div className="relative flex overflow-x-hidden">
                        <div className="py-3 animate-marqueereverse whitespace-nowrap">
                            {item.map((data, index) => (
                                <span 
                                key={index} 
                                className={`text-2xl mx-4 px-10 py-2 rounded-full text-black ${colors[index % colors.length]}`}
                                >
                                {data.nama}
                                </span>
                            ))}
                        </div>

                        <div className="absolute top-0 py-3 animate-marqueereverse2 whitespace-nowrap">
                             {item.map((data, index) => (
                                <span 
                                key={index} 
                                className={`text-2xl mx-4 px-10 py-2 rounded-full text-black ${colors[index % colors.length]}`}
                                >
                                {data.nama}
                                </span>
                                
                            ))}
                        </div>
                    </div>
                        
                </div>

                <div className="mt-[144px]  ">
                    <div className="relative ">
                        <div className="absolute left-0 top-0 bg-[#FE8A16] rounded-r-[50px] w-[70%] h-[600px]"></div>
                        <div className="grid grid-cols-[40%_60%]">
                            <div className="relative ml-[112px] pt-[100px] py-[200px]">
                                <h1 className={`${Montserrat.className} text-[60px] font-bold text-black`}>Seminar</h1>
                                <p className={`${Montserrat.className} tracking-tight text-black`}>&quot;Seminar ini menghadirkan para ahli dan profesional di bidangnya untuk berbagi wawasan, pengalaman, serta tren terbaru. Dapatkan pemahaman mendalam melalui diskusi interaktif dan materi yang relevan dengan perkembangan industri. Jangan lewatkan kesempatan untuk belajar dan memperluas jaringan bersama peserta lainnya!&quot;</p>
                            </div>

                            <div className="relative flex gap-5 overflow-x-auto items-center mt-8">
                              {cardData.map((data) => (
                                <div key={data.id} className="flex-shrink-0">
                                  <Card data={data} />
                                </div>
                              ))}
                          </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}