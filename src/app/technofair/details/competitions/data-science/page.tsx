import DataSciencePage from '@/components/technofair/details/DataScience';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';
import { Footer } from '@/components/technofair/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Science - TechnoFair 12.0',
  description: 'Data Science || TechnoFair 12.0',
  icons: {
    icon: '/technofair/logoTF12/Logo TF 12 Putih.png',
  }
};

export default function dataSciencePage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <DataSciencePage />
      </div>
      <Footer />
    </div>
  );
}
