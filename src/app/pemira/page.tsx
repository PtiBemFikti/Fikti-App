import Navbar from "@/components/pemira/navbar";
import { Metadata } from "next";
import Dashboard from "@/components/pemira/dashboard";
import Halo from "@/components/pemira/greetings";
import Nominees from "@/components/pemira/nominees";
export const metadata: Metadata = {
  title: "PEMIRA UG 2024/2025",
  description: "PEMIRA UG 2024/2025",
  icons: {
    icon: "/pemira/logo-fikti.png",
  },
};

export default function PemiraPage() {
  return (
    <main className="bg-white scroll-smooth">
      <div className="bg-[#101415] h-80 md:w-full md:h-[38rem] md:bg-[url('/pemira/bgdesktop.png')] md:bg-cover md:bg-no-repeat md:bg-center">
        <Navbar />
        <Dashboard />
        <Halo />
      </div>
      <Nominees />
    </main>
  );
}
