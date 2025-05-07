import { Lato, AkiraExpanded } from "@/styles/font";
import Image from "next/image";

export default function TimelinePage() {
  return (
    <div>
      <div className="pt-[7.5rem] pb-20 -mb-10">
        <div className="text-center">
          <h1 className={`text-3xl md:text-[2.8rem] lg:text-[3rem] bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className}`}>
            SCHEDULE
          </h1>
          <p className={`text-md italic lg:mt-2 text-gray-200 ${Lato.className}`}>
            Stay Updated with Our Upcoming Events
          </p>
        </div>
        <div className="relative px-4 md:px-16 lg:px-40 mt-10">
          <div className="absolute top-0 bottom-0 w-[0.25rem] bg-white"></div>{/* Garis vertikal di pinggir kiri */}
          <div className="space-y-5 pl-[1.6rem]">
            {[
              { date: "19-28 May", title: "Pendaftaran", location: "Online" },
              { date: "13 June", title: "Technical Meeting", location: "Online" },
              { date: "15 June", title: "Opening Ceremony", location: "Online" },
              { date: "15 June", title: "Day 1 Competition", location: "Venue" },
              { date: "21 June", title: "Grand Closing", location: "Venue" },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center gap-4">
                {/* Lingkaran dan garis */}
                <div className="absolute -left-8 items-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>

                {/* Konten */}
                <div className="flex w-full gap-4 py-3 px-5 items-center bg-[#FECB62]">
                  <div className="text-center w-5/12 lg:w-2/12 bg-gradient-to-r from-[#FF8797] to-[#FAACB3] px-1">
                    <p className={`${Lato.className} text-base md:text-xl text-center font-seminold text-[#0A2352] py-2`}>{item.date}</p>
                  </div>
                  <div className="w-4/12 lg:w-8/12">
                    <p className={`${Lato.className} text-base md:text-xl text-left text-[#0A2352] font-semibold`}>{item.title}</p>
                  </div>
                  <div className="w-3/12 lg:w-3/8">
                    <p className="py-2 text-[#0A2352] text-sm md:text-xl font-semibold text-right">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
