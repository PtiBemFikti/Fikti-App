
import { Metadata } from 'next';
import TfPage from '@/components/technofair/TfPage';

export const metadata: Metadata = {
  title: 'TechnoFair 12.0',
  description: 'TechnoFair 12.0',
  icons: {
    icon: '/technofair/logo-tf.png',
  }
};
// eslint-disable-next-line @next/next/no-async-client-component
export default function TechnofairPage() {
  return (
    <TfPage/>
  );
}
