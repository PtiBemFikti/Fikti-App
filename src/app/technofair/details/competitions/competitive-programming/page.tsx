import CompProg from '@/components/technofair/details/CompProg';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';
import { Metadata } from 'next';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';


export const metadata: Metadata = {
  title: 'Competitive Programming - TechnoFair 11.0',
  description: 'Competitive Programming - TechnoFair 11.0',
  icons: {
    icon: '/technofair/logo-tf.png',
  }
};

export default function competitiveProgrammingPage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className=''>
        <CompProg />
      </div>
      <Footer />
    </div>
  );
}
