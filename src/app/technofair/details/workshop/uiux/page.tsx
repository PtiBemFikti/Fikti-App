import UiUx from '@/components/technofair/details/UIUX';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

export default function uiUxPage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <UiUx />
      </div>
      <Footer />
    </div>
  );
}