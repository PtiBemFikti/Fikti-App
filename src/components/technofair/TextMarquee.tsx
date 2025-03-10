
interface EventItem {
    nama: string;
  }
interface EventItem2 {
    nama: string;
  }

export default function Textmarquee() {

    const item: EventItem[] = [
        { nama: "UI/UX" },
        { nama: "Database" },
        { nama: "Innovation" },
        { nama: "Tech" },
        { nama: "Future" },
        { nama: "3D" },
        { nama: "Webinars" },
        { nama: "Machine Learning" },
      ];
    const item2: EventItem2[] = [
        { nama: "Data Science" },
        { nama: "Content Wiriting" },
        { nama: "Teamwork" },
        { nama: "2D" },
        { nama: "Algorithm" },
        { nama: "Cyber Security" },
        { nama: "AI" },
        { nama: "Graphics Design" },
      ];
    
      const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-teal-500",
        "bg-orange-500",
      ];

    return (
        <div className="relative">
          <div className="absolute w-[200px] h-[100px] left-[-100px] lg:w-[400px] lg:h-[400px] lg:left-[-200px] lg:top-[-120px] bg-[#100F21] blur-[50px] lg:blur-[100px] z-10"></div>
          <div className="absolute w-[200px] h-[100px] right-[-100px] lg:w-[400px] lg:h-[400px] lg:right-[-200px] lg:top-[-120px] bg-[#100F21] blur-[50px] lg:blur-[100px] z-10"></div>
          <div className="hidden relative lg:flex overflow-x-hidden mt-28">
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
          <div className="relative flex overflow-x-hidden mt-10 mb-10 lg:mb-0 lg:mt-0">
            <div className="py-3 animate-marqueereverse whitespace-nowrap">
              {item2.map((data, index) => (
                <span
                  key={index}
                  className={`text-2xl mx-4 px-10 py-2 rounded-full text-black ${colors[index % colors.length]}`}
                >
                  {data.nama}
                </span>
              ))}
            </div>
            <div className="absolute top-0 py-3 animate-marqueereverse2 whitespace-nowrap">
              {item2.map((data, index) => (
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
    )
} 