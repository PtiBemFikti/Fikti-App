import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';
import { Footer } from '@/components/technofair/footer';
import { Metadata } from 'next';
import DataAnalyst from '@/components/technofair/details/DataAnalystKomp';

export const metadata: Metadata = {
  title: 'Data Science - TechnoFair 12.0',
  description: 'Data Science || TechnoFair 12.0',
  icons: {
    icon: '/technofair/logoTF12/Logo TF 12 Putih.png',
  }
};

export default function dataAnalystPage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <DataAnalyst />
      </div>
      <Footer />
    </div>
  );
}
