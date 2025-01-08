import { MonumentExtendedRegular } from "@/styles/font";
import Link from "next/link";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export default function Information() {
  return (
    <section
      id="information"
      className="w-full h-[70vh] flex flex-col items-center justify-center mb-20"
    >
      <div className="text-center mb-12">
        <h1
          className={`${MonumentExtendedRegular.className} text-[4rem] md:text-[5rem] font-bold leading-tight`}
        >
          <span className="bg-gradient-to-r from-[#20202C] via-[#377DFF] to-[#49E0A2] bg-clip-text text-transparent">
            EMBRACE YOUR
          </span>{" "}
          <br />
          <span className="bg-gradient-to-r from-[#20202C] via-[#377DFF] to-[#49E0A2] bg-clip-text text-transparent">
            POTENTIAL WITH US!
          </span>
        </h1>
      </div>
      <button className="bg-[#10B981] hover:bg-[#059669] text-white text-3xl font-semibold px-16 py-6 rounded-full hover:shadow-[0px_0px_20px_5px] hover:shadow-[#10B981] transition-all">
        Apply Now!
      </button>

      {/* Additional Information */}
      <div className="text-center mt-16 max-w-3xl">
        <p className="text-lg text-gray-700">
          Bingung atau ingin tahu lebih banyak informasi? Jangan ragu untuk
          menghubungi kami! Kami selalu siap membantu menjawab pertanyaanmu.
        </p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Link
            href="https://wa.me/6285724467159?text=Halo,%20saya%20ingin%20bertanya%20seputar%20oprec%20volunteer."
            target="_blank"
            rel="noopener noreferrer" // Untuk keamanan
            className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-xl font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0px_0px_10px_2px] hover:shadow-[#10B981]"
          >
            <AiOutlinePhone size={24} />
            Hotline
          </Link>
          {/* Button for Email */}
          <Link
            href="mailto:bemfikti.ug@gmail.com"
            className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-xl font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0px_0px_10px_2px] hover:shadow-[#10B981]"
          >
            <AiOutlineMail size={24} />
            Email Us
          </Link>
        </div>
      </div>
    </section>
  );
}
