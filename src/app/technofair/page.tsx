import Navbar from '@/components/technofair/navbar';
import Dashboard from '@/components/technofair/dashboard';
import VidYoutube from '@/components/technofair/video';

export default function TechnofairPage() {
  return (
    <main>
      <Navbar />
      <Dashboard />
      {/* <section className='-mt-[580px] px-4 py-4 flex justify-center items-center mb-5'>
        <VidYoutube />
      </section> */}
    </main>
  );
}
