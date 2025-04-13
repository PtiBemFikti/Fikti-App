import GelbudFooter from "@/components/gelar-budaya/layout/footer";
import GelbudNavbar from "@/components/gelar-budaya/layout/navbar";
import GelbudAboutSection from "@/components/gelar-budaya/section/About";
import GelbudHeroSection from "@/components/gelar-budaya/section/HeroSection";
import GelbudSlidingText from "@/components/gelar-budaya/section/SlidingText";

export default function GelarBudayaPage() {
  return (
    <>
      <GelbudNavbar />
      <GelbudHeroSection />
      <GelbudSlidingText />
      <GelbudAboutSection />
      <GelbudFooter />
    </>
  );
}
