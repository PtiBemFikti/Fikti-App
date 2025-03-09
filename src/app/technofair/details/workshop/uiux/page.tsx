import UiUx from '@/components/technofair/details/UIUX';
import { Footer } from '@/components/technofair/footer';
import { Metadata } from 'next';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';

export const metadata: Metadata = {
  title: 'UI/UX Design - TechnoFair 11.0',
  description: 'UI/UX Design - TechnoFair 11.0',
  icons: {
    icon: '/technofair/logo-tf.png',
    apple: '/technofair/logo-tf.png',
  }
};

export default function uiUxPage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <UiUx />
      </div>
      <Footer />
    </div>
  );
}