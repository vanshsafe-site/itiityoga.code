import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import MissionHero from '../src/components/MissionHero';
import MissionFeatures from '../src/components/MissionFeatures';
import CTA from '../src/components/CTA';

export default function OurMission() {
  return (
    <>
      <Head>
        <title>Our Mission - Iti Yogashram</title>
        <meta name="description" content="Discover our mission to transform lives through authentic yoga practices designed for mind, body, and soul alignment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <main>
        <MissionHero />
        <MissionFeatures />
        <CTA />
      </main>
      <Footer />
    </>
  );
} 