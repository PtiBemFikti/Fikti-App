import UIUXCompePage from '@/components/technofair/details/UIUXCompe';
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

export default function uiUxCompePage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <UIUXCompePage />
      </div>
      <Footer />
    </div>
  );
}
