import CyberSPage from '@/components/technofair/details/CyberSecurity';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';
import { Footer } from '@/components/technofair/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyber Security - TechnoFair 12.0',
  description: 'Cyber Security || TechnoFair 12.0',
  icons: {
    icon: '/technofair/logoTF12/Logo TF 12 Putih.png',
  }
};

export default function cyberSecurity() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <CyberSPage />
      </div>
      <Footer />
    </div>
  );
}
