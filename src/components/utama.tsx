"use client";

import { useScroll, useSpring } from "framer-motion";
import HeroSection from "./landing-page/HeroSection";
import ProjekKamiSection from "./landing-page/Projects";
import Hotline from "./landing-page/Hotline";
import AboutSection from "./landing-page/CompanyProfile";
import UpcomingEventSection from "./landing-page/UpcomingEvent";

export default function UtamaPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="flex max-w-full min-h-screen flex-col items-center justify-between bg-cream-fikti">
      <HeroSection />
      <AboutSection />
      <ProjekKamiSection />
      <UpcomingEventSection />
      <Hotline />
    </div>
  );
}
