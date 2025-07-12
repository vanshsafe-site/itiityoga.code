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
        <link rel="icon" href="/favicon.ico" />
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
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style jsx global>{`
        .contact-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        .image-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
      `}</style>
    </>
  );
} 