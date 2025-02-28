import ArtificialIntelligence from '@/components/technofair/details/ArtificialIntelligence';
import { Footer } from '@/components/technofair/Footer';
import { Metadata } from 'next';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';

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
      <NavbarNoComponents />
      <div className=''>
        <ArtificialIntelligence />
      </div>
      <Footer />
    </div>
  );
}
