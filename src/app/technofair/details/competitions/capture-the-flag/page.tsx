import CtfPage from '@/components/technofair/details/CTF';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';
import { Footer } from '@/components/technofair/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capture The Flag - TechnoFair 11.0',
  description: 'Capture The Flag || TechnoFair 11.0',
  icons: {
    icon: '/technofair/logo-tf.png',
  }
};

export default function captureTheFlagPage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <CtfPage />
      </div>
      <Footer />
    </div>
  );
}
