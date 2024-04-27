'use client';
import { usePathname } from 'next/navigation';
import { Lato, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/landing-page/navbar';
import Footer from '@/components/landing-page/footer';
import { SessionProvider } from 'next-auth/react';

const disableNavbar = ['/filing', '/technofair', '/technofair/details/seminar/data-analyst', '/technofair/details/seminar/artificial-intelligence', '/technofair/details/workshop/uiux', '/technofair/details/workshop/product-management'];
const disableFooter = ['/technofair', '/technofair/details/seminar/data-analyst', '/technofair/details/seminar/artificial-intelligence', '/technofair/details/workshop/uiux', '/technofair/details/workshop/product-management'];

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
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
          {!disableFooter.includes(pathname) && <Footer />}
        </SessionProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
