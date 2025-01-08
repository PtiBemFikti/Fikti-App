import { MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import timelineImage from "../../../../public/oprec-volunteer/timeline.png";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="flex flex-col items-center justify-center w-full h-fit pt-24"
    >
      <h1
        className={`${MonumentExtendedRegular.className} text-[3rem] font-bold leading-tight text-center`}
      >
        <span className="text-black ">Timeline Recruitment</span>
        <br />
        <span className="text-[5.5rem] bg-gradient-to-r from-[#20202C] via-[#377DFF] to-[#49E0A2] bg-clip-text text-transparent">
          VOLUNTEER
        </span>
      </h1>

      <div className="flex items-center justify-center w-full mt-10">
        <Image
          height={600}
          width={600}
          src={timelineImage}
          alt="Timeline"
          className="hidden lg:block"
        />

        <div className={`${MonumentExtendedRegular.className} ml-0 lg:ml-20`}>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[20px] top-0 h-full w-[4px] bg-gradient-to-b from-green-400 to-black rounded-full" />

            {/* Tahap 1 */}
            <div className="flex items-start mb-16 relative">
              <div className="w-10 h-10 bg-green-500 flex-shrink-0 shadow-lg shadow-green-300 rounded-full z-10" />
              <div className="ml-8">
                <h3 className="text-black font-bold text-2xl">
                  OPEN REGISTRATION
                </h3>
                <p className="text-gray-600 text-xl">
                  20 Januari - 26 Januari 2025
                </p>
              </div>
            </div>

            {/* Tahap 2 */}
            <div className="flex items-start mb-16 relative">
              <div className="w-10 h-10 bg-green-500 flex-shrink-0 shadow-md rounded-full z-10" />
              <div className="ml-8">
                <h3 className="text-black font-bold text-2xl">
                  SELEKSI BERKAS
                </h3>
                <p className="text-gray-600 text-xl">5 Februari 2025</p>
              </div>
            </div>

            <div className="flex items-start mb-16 relative">
              <div className="w-10 h-10 bg-green-500 flex-shrink-0 shadow-md rounded-full z-10" />
              <div className="ml-8">
                <h3 className="text-black font-bold text-2xl">
                  PENGUMUMAN SELEKSI BERKAS
                </h3>
                <p className="text-gray-600 text-xl">6 Februari 2025</p>
              </div>
            </div>

            {/* Tahap 3 */}
            <div className="flex items-start mb-16 relative">
              <div className="w-10 h-10 bg-green-500 flex-shrink-0 shadow-md rounded-full z-10" />
              <div className="ml-8">
                <h3 className="text-black font-bold text-2xl">WAWANCARA</h3>
                <p className="text-gray-600 text-xl">9 Februari 2025</p>
              </div>
            </div>

            {/* Tahap 4 */}
            <div className="flex items-start mb-16 relative">
              <div className="w-10 h-10 bg-green-500 flex-shrink-0 shadow-md rounded-full z-10" />
              <div className="ml-8">
                <h3 className="text-black font-bold text-2xl">SELEKSI FINAL</h3>
                <p className="text-gray-600 text-xl">15 Februari 2025</p>
              </div>
            </div>

            <div className="flex items-start pb-32 relative">
              <div className="w-10 h-10 bg-green-500 flex-shrink-0 shadow-md rounded-full z-10" />
              <div className="ml-8">
                <h3 className="text-black font-bold text-2xl">PENGUMUMAN</h3>
                <p className="text-gray-600 text-xl">16 Februari 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
