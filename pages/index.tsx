import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import Testimonials from '../src/components/Testimonials';
import Instructor from '../src/components/Instructor';
import FAQ from '../src/components/FAQ';
import CTA from '../src/components/CTA';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Iti Iti Yogashram - Transform Your Life Through Yoga</title>
        <meta name="description" content="Join Iti Iti Yogashram for authentic yoga practices, daily classes, and a supportive community. Transform your body, mind, and soul." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Instructor />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
