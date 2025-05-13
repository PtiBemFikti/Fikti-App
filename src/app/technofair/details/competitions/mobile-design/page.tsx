import MobilePage from '@/components/technofair/details/MobileDesign';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';
import { Footer } from '@/components/technofair/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capture The Flag - TechnoFair 12.0',
  description: 'Capture The Flag || TechnoFair 12.0',
  icons: {
    icon: '/technofair/logoTF12/Logo TF 12 Putih.png',
  }
};

export default function cyberSecurity() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <MobilePage />
      </div>
      <Footer />
    </div>
  );
}
