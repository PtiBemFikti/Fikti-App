import UiUx from '@/components/technofair/details/UIUX';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';
import { Metadata } from 'next';

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
      <Navbar />
      <div className=''>
        <UiUx />
      </div>
      <Footer />
    </div>
  );
}