import React from 'react';
import Link from 'next/link';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Start Your Transformation Today</h2>
        <p className={styles.subtitle}>Join our community of mindful practitioners and begin your journey to wellness</p>
        <Link href="/contact" className={styles.button}>Get Started Now</Link>
      </div>
    </section>
  );
};

export default CTA; 