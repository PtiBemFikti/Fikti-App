"use client";

import Image from "next/image";
import Dashboard from "../components/dashboard";
import Dept from "@/components/dept";
import Biro from "@/components/biro";
import VisiMisi from "@/components/visimisi";
import CoreValue from "@/components/coreValue";
import Load from "@/components/parallaxText";
import ParallaxText from "@/components/parallaxText";

import { motion, useScroll } from "framer-motion";
import { Example } from "@/components/slider";

export default function Home() {
  return (
    <main className="flex max-w-full min-h-screen flex-col items-center justify-between">
      <Dashboard />
      <section className="relative w-[100%] bg-gradient-to-b  from-[#091534]  to-[#060E23] to-[84%] shadow-2xl">
        <ParallaxText baseVelocity={-5}>#fikti</ParallaxText>
        <ParallaxText baseVelocity={5}>#harsasi</ParallaxText>
      </section>
      <CoreValue />
      <Dept />
      <section className="flex justify-center items-center overflow-hidden w-full">
        <div className="w-96 h-96 relative flex justify-center items-center my-20">
          <Example />
        </div>
      </section>

      <VisiMisi />
    </main>
  );
}
