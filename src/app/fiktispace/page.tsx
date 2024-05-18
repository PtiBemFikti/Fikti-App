"use client";

import AboutPage from "@/components/fiktispace/about";
import DashboardPage from "@/components/fiktispace/dashboard";
import Navbar from "@/components/fiktispace/navbar";
import CompetitionPage from "@/components/fiktispace/competition";
import DocumentationPage from "@/components/fiktispace/documentation";
import TimelinePage from "@/components/fiktispace/timeline";
import FaqPage from "@/components/fiktispace/faq";
import FooterPage from "@/components/fiktispace/footer";
export default function FiktispacePage() {
  return (
    <div>
      <main className="bg-[#010417] bg-cover bg-no-repeat scroll-smooth overflow-x-hidden">
        <Navbar />
        <DashboardPage />
        <AboutPage />
        <div className=" md:hidden bg-[url('/fiktispace/bgmobile.png')] bg-cover bg-no-repeat">
          <CompetitionPage />
          <TimelinePage />
          <DocumentationPage />
        </div>
        <div className="bg-gradient-to-b from-[#010417] to-[#261441]">
          <FaqPage />
          <FooterPage />
        </div>
      </main>
    </div>
  );
}
