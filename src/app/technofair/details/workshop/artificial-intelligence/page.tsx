import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';
import { Footer } from '@/components/technofair/footer';
import { Metadata } from 'next';
import AI from '@/components/technofair/details/ArtificialIntelligence';

export const metadata: Metadata = {
  title: 'Data Science - TechnoFair 12.0',
  description: 'Data Science || TechnoFair 12.0',
  icons: {
    icon: '/technofair/logoTF12/Logo TF 12 Putih.png',
  }
};

export default function aiPage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <AI />
      </div>
      <Footer />
    </div>
  );
}
