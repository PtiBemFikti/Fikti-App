import CtfPage from '@/components/technofair/details/CTF';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

export default function captureTheFlagPage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <CtfPage />
      </div>
      <Footer />
    </div>
  );
}
