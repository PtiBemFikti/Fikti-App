import Navbar from '@/components/pemira/navbar';
import { Metadata } from 'next';
import Dashboard from '@/components/pemira/dashboard';

export const metadata: Metadata = {
  title: 'Pemira UG 2024/2025',
  description: 'Pemira UG 2024/2025',
  icons: {
    icon: '/technofair/logo-tf.png',
  },
};

export default function PemiraPage() {
  return (
    <main>
      <Navbar />
      <div className="md:w-full md:h-96 md:bg-[url('/pemira/dashboard.png')] md:bg-cover md:bg-no-repeat md:bg-center bg-[#101415E5]">
        <Dashboard />
      </div>
    </main>
  );
}
