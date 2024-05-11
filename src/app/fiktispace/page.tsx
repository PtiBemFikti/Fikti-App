"use client";

import AboutPage from "@/components/fiktispace/about";
import DashboardPage from "@/components/fiktispace/dashboard";
import Navbar from "@/components/fiktispace/navbar";
import CompetitionPage from "@/components/fiktispace/competition";
import DocumentationPage from "@/components/fiktispace/documentation";
export default function FiktispacePage() {
  return (
    <div>
      <main className="bg-[#010417] bg-cover bg-no-repeat scroll-smooth">
        <Navbar />
        <DashboardPage />
        <AboutPage />
        <div className=" md:hidden bg-[url('/fiktispace/bgmobile.png')] bg-cover bg-no-repeat">
          <CompetitionPage />
          <DocumentationPage />
        </div>
      </main>
    </div>
  );
}
