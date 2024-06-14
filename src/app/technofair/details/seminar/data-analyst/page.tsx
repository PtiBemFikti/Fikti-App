import DataAnalyst from '@/components/technofair/details/DataAnalyst';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';
import { Metadata } from 'next';

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
      <Navbar />
      <div className=''>
        <DataAnalyst />
      </div>
      <Footer />
    </div>
  );
}
