import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <h3 className={styles.logo}>Iti Iti Yogashram</h3>
            <p>
              Transforming lives through authentic yoga practices and mindful living.
            </p>
          </div>
          
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/pricing">Classes</Link></li>
              <li><Link href="/blog">Schedule</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>info@itiyogashram.com</p>
            <p>+1 (555) 123-4567</p>
            <p>123 Yoga Street, Pune, India</p>
          </div>
          
          <div className={styles.newsletter}>
            <h4>Newsletter</h4>
            <p>Enter your email to receive updates</p>
            <div className={styles.form}>
              <input type="email" placeholder="Your email" />
              <button className="btn">Go</button>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2023 Iti Iti Yogashram. All rights reserved.</p>
          <div className={styles.social}>
            <Link href="#" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 