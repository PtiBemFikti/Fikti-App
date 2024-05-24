import Dashboard from "../components/landing-page/dashboard";
import Dept from "@/components/landing-page/dept";
import VisiMisi from "@/components/landing-page/visimisi";
import CoreValue from "@/components/landing-page/coreValue";
import ParallaxText from "@/components/landing-page/parallaxText";
import { motion, useScroll, useSpring } from "framer-motion";
import { Example } from "@/components/landing-page/slider";
import UtamaPage from "@/components/utama";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'BEM FIKTI UG 2024',
  description: 'BEM FIKTI UG 2024',
  icons: {
    icon: '/logo-fikti.png',
  }
};

export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  return (
    <main>
      <UtamaPage/>
    </main>
  );
}
