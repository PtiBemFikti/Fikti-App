import Navbar from '@/components/pemira/navbar';
import { Metadata } from 'next';
import Dashboard from '@/components/pemira/dashboard';
import Halo from '@/components/pemira/greetings';
import Nominees from '@/components/pemira/nominees';
import Footer from '@/components/pemira/footer';
import VoteResult from '@/components/pemira/voteResult';
export const metadata: Metadata = {
  title: 'PEMIRA UG 2024/2025',
  description: 'PEMIRA UG 2024/2025',
  icons: {
    icon: '/pemira/logo-pemira.png',
  },
};

export default function PemiraPage() {
  return (
    <div>
      <main className="bg-white scroll-smooth bg-cover bg-no-repeat">
        <Navbar />
        <div className="bg-[#101415] md:w-full md:h-[38rem] h-52 md:bg-[url('/pemira/bgdesktop.png')] bg-cover bg-no-repeat bg-center">
          <Dashboard />
          <div className="py-2 md:py-28">
            <Halo />
          </div>
        </div>
        <div>
          <section id="nominees">
            <Nominees />
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
