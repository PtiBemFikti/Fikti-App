import ArtificialIntelligence from '@/components/technofair/details/ArtificialIntelligence';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artificial Intelligence - TechnoFair 11.0',
  description: 'Artificial Intelligence - TechnoFair 11.0',
  icons: {
    icon: '/technofair/logo-tf.png',
    apple: '/technofair/logo-tf.png',
  }
}

export default function artificialIntelligencePage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <ArtificialIntelligence />
      </div>
      <Footer />
    </div>
  );
}
