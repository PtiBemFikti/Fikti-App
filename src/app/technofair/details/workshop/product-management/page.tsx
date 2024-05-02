import ProductManagement from '@/components/technofair/details/ProductManagement';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

export default function productManagementPage() {
  return (
    <div>
      <Navbar />
      <div className=''>
        <ProductManagement />
      </div>
      <Footer />
    </div>
  );
}
