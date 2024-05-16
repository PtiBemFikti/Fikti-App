import DigitalInfo from '@/components/technofair/details/DigitalInfo';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

export default function digitalInfographicPage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <DigitalInfo />
      </div>
      <Footer />
    </div>
  );
}
