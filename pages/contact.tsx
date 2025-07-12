import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ContactHero from '../src/components/ContactHero';
import ContactInfo from '../src/components/ContactInfo';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Iti Yogashram</title>
        <meta name="description" content="Get in touch with Iti Yogashram. We're here to answer your questions and help you start your yoga journey." />
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
        <ContactHero />
        <div className="contact-container">
          <div className="contact-grid">
            <ContactInfo />
            <div className="image-container">
              <Image
                src="/imageontheright.png"
                alt="Yoga Practice at Iti Iti Yoga"
                width={600}
                height={800}
                className="contact-image"
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .contact-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 3rem 1rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 2rem 1.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <style jsx global>{`
        .contact-image {
          width: 100%;
          height: auto;
          max-height: 600px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        .image-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 1rem;
        }

        @media (max-width: 768px) {
          .image-container {
            padding: 1.5rem;
          }

          .contact-image {
            max-height: 400px;
          }
        }
      `}</style>
    </>
  );
} 