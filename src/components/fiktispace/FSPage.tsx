"use client";

import AboutPage from "@/components/fiktispace/about";
import DashboardPage from "@/components/fiktispace/dashboard";
import Navbar from "@/components/fiktispace/navbar";
import CompetitionPage from "@/components/fiktispace/competition";
import DocumentationPage from "@/components/fiktispace/documentation";
import TimelinePage from "@/components/fiktispace/timeline";
import FaqPage from "@/components/fiktispace/faq";
import FooterPage from "@/components/fiktispace/footer";
export default function FSPage() {
  return (
    <div>
      <main className="bg-[#112C70] bg-cover bg-no-repeat scroll-smooth overflow-x-hidden scroll-m-48">
        <Navbar />
        <DashboardPage />
        <section>
          <AboutPage />
        </section>
        <div>
          <section id="compe-list">
            <div className="bg-[url('/fiktispace/bg-desktop.png')] bg-cover bg-repeat">
              <CompetitionPage />
            </div>
          </section>
          <section id="schedule">
            <div>
            <TimelinePage />
            </div>
          </section>
          <section id="documentation">
            <div>
              <DocumentationPage />
            </div>
          </section>
          <section id="contact">
            <FaqPage />
          </section>
        </div>
        <div className="bg-[#FECB62]">
          <FooterPage />
        </div>
      </main>
    </div>
  );
}
