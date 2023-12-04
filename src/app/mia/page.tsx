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

function MiaImage({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const imagePath = `/imagesMia/${id}.jpg`;

  return (
    <section className="h-[100vh] flex justify-center items-center relative snap-center">
      <div
        className="w-[300px] h-[400px] relative max-h-[90vh] m-[20px] bg-white overflow-hidden"
        ref={ref}
      >
        <Image
          width={800}
          height={400}
          src={imagePath}
          alt={`/${id}.jpg`}
          className="absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%]"
        />
      </div>
      <motion.h2
        className="left-[50% + 130px] bottom-48 font-medium text-6xl absolute"
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <MiaImage key={image} id={image} />
      ))}
      <motion.div
        className="progress fixed left-0 right-0 h-[5px] bg-orangeText top-[68px]"
        style={{ scaleX }}
      />
    </>
  );
}
