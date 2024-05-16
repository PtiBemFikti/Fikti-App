import CompProg from '@/components/technofair/details/CompProg';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

export default function captureTheFlagPage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <CompProg />
      </div>
      <Footer />
    </div>
  );
}
