"use client";

import DashboardPage from "@/components/fiktispace/dashboard";
import Navbar from "@/components/fiktispace/navbar";


export default function FiktispacePage() {
  return (
    <div>
      <main className="bg-[#010417] bg-cover bg-no-repeat scroll-smooth">
        <Navbar />
        <DashboardPage />
      </main>
    </div>
  );
}
