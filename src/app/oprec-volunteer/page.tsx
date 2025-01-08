import { Metadata } from "next";
import HeroSectionOprec from "./sections/HeroSection";
import OprecNavbar from "./sections/Navbar";
import OprecFooter from "./sections/Footer";
import Timeline from "./sections/Timeline";
import Requirement from "./sections/Requirement";
import Benefit from "./sections/Benefit";
import Information from "./sections/Information";
import ProjectList from "./sections/ProjectList";

export const metadata: Metadata = {
  title: "Oprec Volunteer - BEM FIKTI",
  description: "Oprec Volunteer - BEM FIKTI",
  icons: {
    icon: "/logo-fikti.png",
  },
};

export default function OprecVolunteerPage() {
  return (
    <main className="w-full h-fit bg-[#FFFFF4] overflow-x-hidden">
      <OprecNavbar />
      <HeroSectionOprec />
      <Benefit />
      <Timeline />
      <ProjectList />
      <Requirement />
      <Information />
      <OprecFooter />
    </main>
  );
}
