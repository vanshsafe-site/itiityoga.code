import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <h3 className={styles.logo}>Iti Iti Yoga</h3>
            <p>
              Transforming lives through authentic yoga practices and mindful living.
            </p>
          </div>
          
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/our-mission">Our Mission</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>contact@itiitiyoga.com</p>
            <p>(+91) 808-150-6872</p>
            <p>Near Meerapur Gol Park Chauraha, Prayagraj</p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2025 Iti Iti Yoga. All rights reserved.</p>
          <div className={styles.social}>
            <Link href="https://www.facebook.com/profile.php?id=100094601637698" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=918081506872&text&type=phone_number&app_absent=0" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </Link>
            <Link href="https://www.instagram.com/iti_iti_yogashram/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link href="https://www.youtube.com/@ItiItiYogashram" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 