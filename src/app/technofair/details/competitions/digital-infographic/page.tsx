import DigitalInfo from '@/components/technofair/details/DigitalInfo';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';
import { Metadata } from 'next';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';

export const metadata: Metadata = {
  title: 'TechnoFair 11.0',
  description: 'TechnoFair 11.0',
  icons: {
    icon: '/tehcnofair/logo-tf.png',
    apple: '/technofair/logo-tf.png',
  }
};

export default function digitalInfographicPage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <DigitalInfo />
      </div>
      <Footer />
    </div>
  );
}
