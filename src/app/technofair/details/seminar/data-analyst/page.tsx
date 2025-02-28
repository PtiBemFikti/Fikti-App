import DataAnalyst from '@/components/technofair/details/DataAnalyst';
import { Footer } from '@/components/technofair/Footer';
import { Metadata } from 'next';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';

export const metadata: Metadata = {
  title: 'Data Analyst - TechnoFair 11.0',
  description: 'Data Analyst - TechnoFair 11.0',
  icons: {
    icon: '/technofair/logo-tf.png',
    apple: '/technofair/logo-tf.png',
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
