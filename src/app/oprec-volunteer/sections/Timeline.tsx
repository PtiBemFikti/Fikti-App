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
        className={`${MonumentExtendedRegular.className} text-[3rem] max-md:text-[1.5rem] font-bold leading-tight text-center`}
      >
        <span className="text-black ">Timeline Recruitment</span>
        <br />
        <span className="text-[5.5rem] max-md:text-[2.5rem] bg-gradient-to-r from-[#20202C] via-[#377DFF] to-[#49E0A2] bg-clip-text text-transparent">
          VOLUNTEER
        </span>
      </h1>

      <div className="flex items-center justify-center w-full mt-10 max-md:flex-col">
        <Image
          height={600}
          width={600}
          src={timelineImage}
          alt="Timeline"
          className="hidden lg:block max-md:block max-md:w-[70%] max-md:h-fit"
        />

        <div
          className={`${MonumentExtendedRegular.className} ml-0 lg:ml-20 max-md:ml-5`}
        >
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[20px] top-0 h-full w-[4px] bg-gradient-to-b from-green-400 to-black rounded-full max-md:left-[10px] max-md:w-[2px]" />

            {/* Tahap 1 */}
            <div className="flex items-start mb-16 relative max-md:mb-10">
              <div className="w-10 h-10 bg-green-500 flex-shrink-0 shadow-[0px_0px_10px_2px] shadow-green-300 rounded-full z-10 max-md:w-6 max-md:h-6" />
              <div className="ml-8 max-md:ml-6">
                <h3 className="text-black font-bold text-2xl max-md:text-lg">
                  OPEN REGISTRATION
                </h3>
                <p className="text-gray-600 text-xl max-md:text-base">
                  20 Januari - 26 Januari 2025
                </p>
              </div>
            </div>

            {/* Tahap 2 */}
            <div className="flex items-start mb-16 relative max-md:mb-10">
              <div className="w-10 h-10 bg-green-500 hover:shadow-[0px_0px_10px_2px] hover:shadow-green-300 flex-shrink-0 transition-all duration-200 rounded-full z-10 max-md:w-6 max-md:h-6" />
              <div className="ml-8 max-md:ml-6">
                <h3 className="text-black font-bold text-2xl max-md:text-lg">
                  SELEKSI BERKAS
                </h3>
                <p className="text-gray-600 text-xl max-md:text-base">
                  5 Februari 2025
                </p>
              </div>
            </div>

            {/* Tahap 3 */}
            <div className="flex items-start mb-16 relative max-md:mb-10">
              <div className="w-10 h-10 bg-green-500 hover:shadow-[0px_0px_10px_2px] hover:shadow-green-300 flex-shrink-0 transition-all duration-200 rounded-full z-10 max-md:w-6 max-md:h-6" />
              <div className="ml-8 max-md:ml-6">
                <h3 className="text-black font-bold text-2xl max-md:text-lg">
                  PENGUMUMAN SELEKSI BERKAS
                </h3>
                <p className="text-gray-600 text-xl max-md:text-base">
                  6 Februari 2025
                </p>
              </div>
            </div>

            {/* Tahap 4 */}
            <div className="flex items-start mb-16 relative max-md:mb-10">
              <div className="w-10 h-10 bg-green-500 hover:shadow-[0px_0px_10px_2px] hover:shadow-green-300 flex-shrink-0 transition-all duration-200 rounded-full z-10 max-md:w-6 max-md:h-6" />
              <div className="ml-8 max-md:ml-6">
                <h3 className="text-black font-bold text-2xl max-md:text-lg">
                  WAWANCARA
                </h3>
                <p className="text-gray-600 text-xl max-md:text-base">
                  9 Februari 2025
                </p>
              </div>
            </div>

            {/* Tahap 5 */}
            <div className="flex items-start mb-16 relative max-md:mb-10">
              <div className="w-10 h-10 bg-green-500 hover:shadow-[0px_0px_10px_2px] hover:shadow-green-300 flex-shrink-0 transition-all duration-200 rounded-full z-10 max-md:w-6 max-md:h-6" />
              <div className="ml-8 max-md:ml-6">
                <h3 className="text-black font-bold text-2xl max-md:text-lg">
                  SELEKSI FINAL
                </h3>
                <p className="text-gray-600 text-xl max-md:text-base">
                  15 Februari 2025
                </p>
              </div>
            </div>

            {/* Tahap 6 */}
            <div className="flex items-start pb-32 relative max-md:pb-16">
              <div className="w-10 h-10 bg-green-500 hover:shadow-[0px_0px_10px_2px] hover:shadow-green-300 flex-shrink-0 transition-all duration-200 rounded-full z-10 max-md:w-6 max-md:h-6" />
              <div className="ml-8 max-md:ml-6">
                <h3 className="text-black font-bold text-2xl max-md:text-lg">
                  PENGUMUMAN
                </h3>
                <p className="text-gray-600 text-xl max-md:text-base">
                  16 Februari 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
