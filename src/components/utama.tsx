"use client";

import Dept from "@/components/landing-page/dept";
import VisiMisi from "@/components/landing-page/visimisi";
import CoreValue from "@/components/landing-page/coreValue";
import ParallaxText from "@/components/landing-page/parallaxText";
import { motion, useScroll, useSpring } from "framer-motion";
import { Example } from "@/components/landing-page/slider";
import HeroSection from "./landing-page/dashboard";
import AboutPage from "./landing-page/about";
import ProjekKamiSection from "./landing-page/project";

export default function UtamaPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="flex max-w-full min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutPage />
      <CoreValue />
      <ProjekKamiSection />
      {/* <VisiMisi /> */}
      {/* <section className="flex justify-center items-center overflow-hidden w-full">
        <div className="w-96 h-96 relative flex justify-center items-center my-20">
          <Example />
        </div>
      </section> */}
      {/* <motion.div
        className="progress fixed left-0 right-0 h-[5px] bg-orangeText top-[67px] md:top-[76px] z-10"
        style={{ scaleX }}
      /> */}
    </div>
  );
}
