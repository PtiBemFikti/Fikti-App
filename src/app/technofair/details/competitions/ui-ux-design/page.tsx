import UIUXCompePage from '@/components/technofair/details/UIUXCompe';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

export default function uiUxCompePage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <UIUXCompePage />
      </div>
      <Footer />
    </div>
  );
}
