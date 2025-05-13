"use client";

import HeroSection from "@/components/tentang/section/HeroSection";
import BiroDepartemenSection from "@/components/tentang/section/BiroDepartemen";
import PengurusIntiSection from "@/components/tentang/section/PengurusInti";
import VisiMisiSection from "@/components/tentang/section/VisiMisi";
import CoreValueSection from "@/components/tentang/section/CoreValueSection";
import Hotline from "@/components/landing-page/Hotline";

export default function StrukturAnggotaPage() {
  return (
    <div className="h-fit flex flex-col items-center justify-center">
      <HeroSection />
      <VisiMisiSection />
      <CoreValueSection />
      <PengurusIntiSection />
      <BiroDepartemenSection />
      <Hotline />
    </div>
  );
}
