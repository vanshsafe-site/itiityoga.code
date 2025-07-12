import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import PricingHero from '../src/components/PricingHero';
import PricingPlans from '../src/components/PricingPlans';
import PricingFeatures from '../src/components/PricingFeatures';
import CTA from '../src/components/CTA';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Iti Yogashram</title>
        <meta name="description" content="Choose your transformative yoga journey with our flexible pricing plans designed for mind, body, and soul alignment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon configuration */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#6b21a8" />
        <meta name="theme-color" content="#6b21a8" />
      </Head>
      
      <Navbar />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingFeatures />
        <CTA />
      </main>
      <Footer />
    </>
  );
} 