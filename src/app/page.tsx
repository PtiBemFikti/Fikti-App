"use client";

import Dashboard from "../components/landing-page/dashboard";
import Dept from "@/components/landing-page/dept";
import VisiMisi from "@/components/landing-page/visimisi";
import CoreValue from "@/components/landing-page/coreValue";
import ParallaxText from "@/components/landing-page/parallaxText";
import { motion, useScroll, useSpring } from "framer-motion";
import { Example } from "@/components/landing-page/slider";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="flex max-w-full min-h-screen flex-col items-center justify-between">
      <Dashboard />
      <section className="relative w-full border-b-2 border-gray-700 bg-[#060e23] z-[1] shadow-2xl">
        <ParallaxText baseVelocity={8}></ParallaxText>
      </section>
      <CoreValue />
      <VisiMisi />
      {/* <section className="flex justify-center items-center overflow-hidden w-full">
        <div className="w-96 h-96 relative flex justify-center items-center my-20">
          <Example />
        </div>
      </section> */}
      <motion.div
        className="progress fixed left-0 right-0 h-[5px] bg-orangeText top-[67px] md:top-[76px] z-10"
        style={{ scaleX }}
      />
    </main>
  );
}
