import { poppins } from "@/styles/font";
import Image from "next/image";

const sponsors = [
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
    { src: "/technofair/dicoding.png", alt: "dicoding" },
];

export function Sponsor() {
    return (
        <div className="mt-80 mb-60">
            <div>
                <h1 className={`${poppins.className} text-[65px] font-extrabold text-center`}>Sponsorship</h1>
            </div>

            <div className="container m-auto grid grid-cols-5 w-full mt-40">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className={`border border-gray-400 p-12 
                            ${index < 5 ? "border-t-0" : ""} 
                            ${index % 5 === 0 ? "border-l-0" : ""} 
                            ${(index + 1) % 5 === 0 ? "border-r-0" : ""} 
                            ${index >= sponsors.length - 5 ? "border-b-0" : ""}`
                        }
                    >
                        <Image src={sponsor.src} alt={sponsor.alt} width={230} height={75} className="hover:scale-125 transition-transform duration-200"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
