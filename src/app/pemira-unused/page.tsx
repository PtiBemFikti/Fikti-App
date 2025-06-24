import Navbar from "@/components/pemira-unused/navbar";
import { Metadata } from "next";
import Dashboard from "@/components/pemira-unused/dashboard";
import Halo from "@/components/pemira-unused/greetings";
import Candidates from "@/components/pemira-unused/candidates";
import Footer from "@/components/pemira-unused/footer";
import VoteResult from "@/components/pemira-unused/voteResult";
export const metadata: Metadata = {
  title: "PEMIRA UG 2024/2025",
  description: "PEMIRA UG 2024/2025",
  icons: {
    icon: "/pemira/logo-pemira.png",
  },
};

export default function PemiraPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-white scroll-smooth bg-cover bg-no-repeat">
        <div className="bg-[#101415] md:w-full md:h-[38rem] h-52 md:bg-[url('/pemira/bgdesktop.png')] bg-cover bg-no-repeat bg-center">
          <Dashboard />
          <div className="py-2 md:py-28">
            <Halo />
          </div>
        </div>
        <div>
          <section id="candidates" className="py-8 md:py-0">
            <Candidates />
          </section>
        </div>
        <div>
          <section id="vote">
            <VoteResult />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
