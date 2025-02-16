import HeroSection from "@/components/struktur-organisasi/section/HeroSection";
import BiroDepartemenSection from "@/components/struktur-organisasi/section/BiroDepartemen";
import PengurusIntiSection from "@/components/struktur-organisasi/section/PengurusInti";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEM FIKTI UG 2025",
  description: "BEM FIKTI UG 2025",
  icons: {
    icon: "/logo-fikti.png",
  },
};

export default function StrukturAnggotaPage() {
  return (
    <div className="h-fit flex flex-col items-center justify-center">
      <HeroSection />
      <PengurusIntiSection />
      <BiroDepartemenSection />
    </div>
  );
}
