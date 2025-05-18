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
        <title>Pricing - Iti Iti Yogashram</title>
        <meta name="description" content="Choose your transformative yoga journey with our flexible pricing plans designed for mind, body, and soul alignment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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