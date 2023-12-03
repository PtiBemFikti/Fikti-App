"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ParallaxImage({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const imagePath = `/images/${id}.jpg`;

  return (
    <section className="mx-8">
      {" "}
      {/* Tambahkan kelas Tailwind mb-16 untuk memberikan jarak bawah */}
      <div ref={ref}>
        <Image
          className="mx-auto mb-16 shadow-2xl backdrop-contrast-75 rounded-lg hue-rotate-90"
          src={imagePath}
          alt={`#${id}`}
          width={800}
          height={400}
        />
      </div>
      <motion.h2
        className="-mt-4 text-3xl font-semibold font-Bricolage_Grotesque text-orange-700"
        style={{ y }}
      >{`#
        ${id}`}</motion.h2>{" "}
      {/* Tambahkan kelas Tailwind mt-4 untuk memberikan jarak atas */}
    </section>
  );
}

export default function ParallaxApp() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <ParallaxImage key={image} id={image} />
      ))}
      <motion.div className=" progress h-1 bg-white mt-20" style={{ scaleX }} />
    </>
  );
}
