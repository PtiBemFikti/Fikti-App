import DataAnalyst from '@/components/technofair/details/DataAnalyst';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

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
