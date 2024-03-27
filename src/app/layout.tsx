'use client';
import { usePathname } from 'next/navigation';
import { Lato, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';

const disableNavbar = ['/filing', '/technofair'];

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>BEM FIKTI UG 2024</title>
      </head>
      <body className={`${lato.className}`}>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
        <Footer />
      </body>
    </html>
  );
}
