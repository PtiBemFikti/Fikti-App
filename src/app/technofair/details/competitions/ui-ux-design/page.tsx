import UIUXCompePage from '@/components/technofair/details/UIUXCompe';
import { Footer } from '@/components/technofair/Footer';
import { Metadata } from 'next';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';

export const metadata: Metadata = {
  title: 'UI/UX Design Competition - TechnoFair 11.0',
  description: 'UI/UX Design Competition - TechnoFair 11.0',
  icons: {
    icon: '/technofair/logo-tf.png',
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
