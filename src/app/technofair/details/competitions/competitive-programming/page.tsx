import CompProg from '@/components/technofair/details/CompProg';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'TechnoFair 11.0',
  description: 'TechnoFair 11.0',
  icons: {
    icon: '/tehcnofair/logo-tf.png',
  }
};

export default function captureTheFlagPage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <CompProg />
      </div>
      <Footer />
    </div>
  );
}
