import UiUxCompe from '@/components/technofair/details/UIUXCompe';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

export default function captureTheFlagPage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <UiUxCompe />
      </div>
      <Footer />
    </div>
  );
}
