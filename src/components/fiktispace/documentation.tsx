"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, useMotionValue, animate } from "framer-motion";
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

const DokumSlider = ({ image }: { image: string }) => {
  const [imgSize, setImgSize] = useState({ width: 200, height: 200 });

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-white"
      style={{ width: `${imgSize.width}px`, height: `${imgSize.height}px`, flexShrink: 0 }}
    >
      <Image
        src={image}
        alt={image}
        quality={75}
        loading="lazy"
        width={imgSize.width}
        height={imgSize.height}
        className="rounded-xl object-cover w-full h-full"
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          const targetHeight = 200;
          const calcWidth = (naturalWidth / naturalHeight) * targetHeight;
          setImgSize({ width: calcWidth, height: targetHeight });
        }}
      />
    </motion.div>
  );
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setBounds(entry.contentRect);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, bounds] as const;
};

export default function Documentation() {
  const containerRef = useRef(null);

  // GSAP animation for desktop
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

  const images1 = images.slice(0, 10);
  const images2 = images.slice(10, 20);

  const fast = 5;

  const [ref1, { width: width1 }] = useMeasure();
  const [ref2, { width: width2 }] = useMeasure();

  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);

  useEffect(() => {
    const final = -width1 / 2 - 8;
    const control = animate(x1, [0, final], {
      ease: "linear",
      duration: fast,
      repeat: Infinity,
      repeatType: "loop",
    });
    return control.stop;
  }, [x1, width1]);

  useEffect(() => {
    const final = -width2 / 2 - 8;
    const control = animate(x2, [final, 0], {
      ease: "linear",
      duration: fast,
      repeat: Infinity,
      repeatType: "loop",
    });
    return control.stop;
  }, [x2, width2]);

  return (
    <div>
      {/* desktop */}
      <section
        ref={containerRef}
        className="hidden md:flex relative w-full md:min-h-[120vh] lg:min-h-[150vh] overflow-hidden items-center justify-center pb-6"
        style={{
          background:
            "linear-gradient(to bottom, #0A2352 3%, #3D4F9E 6%, #FF8797 9%, #FF8797 91%, #3D4F9E 94%, #0A2352 97%)",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center">
          <h1 className={`text-lg md:text-4xl text-[#0A2352] ${AkiraExpanded.className}`}>
            Documentation
          </h1>
          <span className={`text-sm italic md:text-lg text-[#0A2352] ${Lato.className}`}>
            Celebrating Moments Together
          </span>
        </div>

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

      {/* mobile */}
      <div className="block md:hidden -mt-14 pt-24 pb-14 text-[#0A2352] px-4" style={{
          background:
            "linear-gradient(to bottom, #0A2352 3%, #3D4F9E 6%, #FF8797 9%, #FF8797 91%, #3D4F9E 94%, #0A2352 97%)",
        }}>
        <div className="text-center mb-6">
          <h1 className={`${AkiraExpanded.className} text-3xl`}>Documentation</h1>
          <p className={`${Lato.className} italic text-sm`}>
            Celebrating Moments Together
          </p>
        </div>

        <div className="overflow-hidden py-4">
          <motion.div ref={ref1} style={{ x: x1 }} className="flex gap-4">
            {images1.map((img, idx) => (
              <DokumSlider key={idx} image={img} />
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden py-4">
          <motion.div ref={ref2} style={{ x: x2 }} className="flex gap-4">
            {images2.map((img, idx) => (
              <DokumSlider key={idx} image={img} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
