import { poppins } from "@/styles/font";

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

            </div>
        </div>
    )
}