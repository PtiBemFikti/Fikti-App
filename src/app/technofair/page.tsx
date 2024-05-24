import Navbar from '@/components/technofair/navbar';
import Dashboard from '@/components/technofair/dashboard';
import AboutPage from '@/components/technofair/about';
import EventPage from '@/components/technofair/event';
import SponsorPage from '@/components/technofair/sponsor';
import SchedulePage from '@/components/technofair/schedule';
import StoryPage from '@/components/technofair/story';
import FaqPage from '@/components/technofair/faq/faq';
import Footer from '@/components/technofair/footer';
import Layout from '../layout';
import { Metadata } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import TfPage from '@/components/technofair/TfPage';

export const metadata: Metadata = {
  title: 'TechnoFair 11.0',
  description: 'TechnoFair 11.0',
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
