"use client";

import HeroSectionOprec from "./sections/HeroSection";
import OprecNavbar from "./sections/Navbar";
import OprecFooter from "./sections/Footer";
import Timeline from "./sections/Timeline";
import Requirement from "./sections/Requirement";
import Benefit from "./sections/Benefit";
import Information from "./sections/Information";
import ProjectList from "./sections/ProjectList";

export default function OprecVolunteerPage() {
  return (
    <>
      <OprecNavbar />
      <HeroSectionOprec />
      <Benefit />
      <Timeline />
      <ProjectList />
      <Requirement />
      <Information />
      <OprecFooter />
    </>
  );
}
