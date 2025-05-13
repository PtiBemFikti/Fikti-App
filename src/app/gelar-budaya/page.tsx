import GelbudFooter from "@/components/gelar-budaya/layout/footer";
import GelbudNavbar from "@/components/gelar-budaya/layout/navbar";
import GelbudAboutSection from "@/components/gelar-budaya/section/About";
import GelbudContactUsSection from "@/components/gelar-budaya/section/Contact";
import GelbudCountdown from "@/components/gelar-budaya/section/Countdown";
import GelbudLokasi from "@/components/gelar-budaya/section/Lokasi";
import GelbudFAQSection from "@/components/gelar-budaya/section/Faq";
import GelbudHeroSection from "@/components/gelar-budaya/section/HeroSection";
import GelbudSlidingText from "@/components/gelar-budaya/section/SlidingText";
import GelbudTicketSection from "@/components/gelar-budaya/section/Ticket";
import GelbudGs from "@/components/gelar-budaya/section/GuestStar";
import GelbudDenahGedung from "@/components/gelar-budaya/section/Denah";
import GelbudPendaftaran from "@/components/gelar-budaya/section/PendaftarnPenampil";

export default function GelarBudayaPage() {
  return (
    <>
      <GelbudNavbar />
      <GelbudHeroSection />
      <GelbudSlidingText direction="right" />
      <GelbudGs />
      <GelbudCountdown />
      <GelbudSlidingText direction="left" />
      <GelbudAboutSection />
      <GelbudSlidingText bgColor="white" textColor="black" direction="right" />
      <GelbudLokasi />
      <GelbudSlidingText bgColor="white" textColor="black" direction="left" />
      <GelbudDenahGedung />
      <GelbudSlidingText bgColor="black" textColor="white" direction="right" />
      <GelbudTicketSection />
      <GelbudPendaftaran />
      <GelbudSlidingText bgColor="white" textColor="black" />
      <GelbudFAQSection />
      <GelbudContactUsSection />
      <GelbudFooter />
    </>
  );
}
