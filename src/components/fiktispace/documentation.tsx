import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { AkiraExpanded, Lato } from "@/styles/font";

const images = [
  "/fiktispace/documentation/1.JPG",
  "/fiktispace/documentation/2.JPG",
  "/fiktispace/documentation/3.JPG",
  "/fiktispace/documentation/4.JPG",
  "/fiktispace/documentation/5.JPG",
  "/fiktispace/documentation/6.JPG",
  "/fiktispace/documentation/7.JPG",
  "/fiktispace/documentation/doc5.png",
  "/fiktispace/documentation/9.JPG",
  "/fiktispace/documentation/10.JPG",
  "/fiktispace/documentation/11.JPG",
  "/fiktispace/documentation/12.JPG",
  "/fiktispace/documentation/13.JPG",
  "/fiktispace/documentation/14.JPG",
  "/fiktispace/documentation/15.JPG",
  "/fiktispace/documentation/16.JPG",
  "/fiktispace/documentation/17.JPG",
  "/fiktispace/documentation/18.JPG",
  "/fiktispace/documentation/19.JPG",
  "/fiktispace/documentation/20.JPG",
];

const positions = [
  { top: "5%", left: "0%" },
  { top: "5%", left: "20%" },
  { top: "5%", left: "40%" },
  { top: "5%", left: "60%" },
  { top: "5%", left: "80%" },

  { top: "25%", left: "5%" },
  { top: "25%", left: "25%" },
  { top: "25%", left: "45%" },
  { top: "25%", left: "65%" },
  { top: "25%", left: "85%" },

  { top: "58%", left: "0%" },
  { top: "58%", left: "20%" },
  { top: "58%", left: "40%" },
  { top: "58%", left: "60%" },
  { top: "58%", left: "80%" },

  { top: "80%", left: "5%" },
  { top: "80%", left: "25%" },
  { top: "80%", left: "45%" },
  { top: "80%", left: "65%" },
  { top: "80%", left: "85%" },
];

export default function FloatingGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".floating-image").forEach((image) => {
        gsap.to(image, {
          y: "random(-20, 20)",
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 1.5),
        });
      });
    }, containerRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="hidden md:flex relative w-full md:min-h-[120vh] lg:min-h-[150vh] bg-[#FAACB3] overflow-hidden items-center justify-center pb-6"
      style={{
        background: "linear-gradient(to bottom, #0A2352 3%, #3D4F9E 6%, #FF8797 9%, #FF8797 91%, #3D4F9E 94%, #0A2352 97%)"
      }}
    >
      {/* Centered Title */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center">
        <h1 className={`text-lg md:text-4xl text-[#0A2352] ${AkiraExpanded.className}`}>
          Documentation
        </h1>
        <span className={`text-sm italic md:text-lg text-[#0A2352] ${Lato.className}`}>
          Celebrating Moments Together
        </span>
      </div>

      {/* Floating Images */}
      <div className="absolute w-[90%] h-[85%] z-0">
        {images.map((src, i) => (
          <div
            key={i}
            className="floating-image absolute w-[18%] h-[18%]"
            style={positions[i]}
          >
            <Image
              src={src}
              alt={`doc${i + 1}`}
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}