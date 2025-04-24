import GelbudFooter from "@/components/gelar-budaya/layout/footer";
import GelbudNavbar from "@/components/gelar-budaya/layout/navbar";
import GelbudAboutSection from "@/components/gelar-budaya/section/About";
import GelbudContactUsSection from "@/components/gelar-budaya/section/Contact";
import GelbudCountdown from "@/components/gelar-budaya/section/Countdown";
import GelbudFAQSection from "@/components/gelar-budaya/section/Faq";
import GelbudHeroSection from "@/components/gelar-budaya/section/HeroSection";
import GelbudSlidingText from "@/components/gelar-budaya/section/SlidingText";
import GelbudTicketSection from "@/components/gelar-budaya/section/Ticket";

export default function GelarBudayaPage() {
  return (
    <>
      <GelbudNavbar />
      <GelbudHeroSection />
      <GelbudSlidingText />
      <GelbudCountdown />
      <GelbudSlidingText />
      <GelbudAboutSection />
      <GelbudSlidingText />
      <GelbudTicketSection />
      <GelbudSlidingText />
      <GelbudFAQSection />
      <GelbudContactUsSection />
      <GelbudFooter />
    </>
  );
}
