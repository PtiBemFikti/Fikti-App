import IotPageContent from '@/components/technofair/details/InternetOfThings';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';
import { Footer } from '@/components/technofair/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internet of Things - TechnoFair 12.0',
  description: 'Internet of Things || TechnoFair 12.0',
  icons: {
    icon: '/technofair/logoTF12/Logo TF 12 Putih.png',
  }
};

export default function IotPage() {
  return (
    <div>
      <NavbarNoComponents />
      <div>
        <IotPageContent />
      </div>
      <Footer />
    </div>
  );
}
