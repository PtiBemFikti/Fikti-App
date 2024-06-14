import ProductManagement from '@/components/technofair/details/ProductManagement';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';
import { Metadata } from 'next';
import NavbarNoComponents from '@/components/technofair/NavbarNoComponents';

export const metadata: Metadata = {
  title: 'Product Management - TechnoFair 11.0',
  description: 'Product Management - TechnoFair 11.0',
  icons: {
    icon: '/technofair/logo-tf.png',
    apple: '/technofair/logo-tf.png',
  },
};

export default function productManagementPage() {
  return (
    <div>
      <NavbarNoComponents />
      <div className="">
        <ProductManagement />
      </div>
      <Footer />
    </div>
  );
}
