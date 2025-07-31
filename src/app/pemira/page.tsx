import PemiraHeroSection from "@/components/pemira/section/HeroSection";
import PemiraNavbar from "@/components/pemira/layout/navbar";
import PemiraAboutSection from "@/components/pemira/section/AboutSection";
import CandidateSection from "@/components/pemira/section/CandidateSection";
import PemiraCountdownSection from "@/components/pemira/section/CountdownSection";
import PemiraFooter from "@/components/pemira/layout/footer";

export default function LoginPage() {
  return (
    <>
      <PemiraNavbar />
      <PemiraHeroSection />
      <PemiraAboutSection />
      <CandidateSection />
      <PemiraCountdownSection />

      <PemiraFooter />
    </>
  );
}
