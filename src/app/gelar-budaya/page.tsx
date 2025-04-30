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
      <GelbudTicketSection />
      <GelbudSlidingText bgColor="white" textColor="black" />
      <GelbudFAQSection />
      <GelbudContactUsSection />
      <GelbudFooter />
    </>
  );
}
