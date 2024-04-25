import DataAnalyst from '@/components/technofair/details/DataAnalyst';
import Navbar from '@/components/technofair/navbar';
import Footer from '@/components/technofair/footer';

export default function dataAnalystPage() {
  return (
    <div>
      <Navbar />
      <div className='bg-gradient-to-t from-[#F7F9FA] to-[##F3E5EA]'>
        <DataAnalyst />
      </div>
      <Footer />
    </div>
  );
}
