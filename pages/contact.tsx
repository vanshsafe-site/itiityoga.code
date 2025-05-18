import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ContactHero from '../src/components/ContactHero';
import ContactForm from '../src/components/ContactForm';
import ContactInfo from '../src/components/ContactInfo';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Iti Yogashram</title>
        <meta name="description" content="Get in touch with Iti Yogashram. We're here to answer your questions and help you start your yoga journey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <main>
        <ContactHero />
        <div className="contact-container">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 3rem 1rem;
        }
        
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
} 