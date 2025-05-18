import React from 'react';
import styles from './PricingHero.module.css';

const PricingHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Choose Your Transformative Journey.</h1>
        <p className={styles.subtitle}>
          Transform your life with our comprehensive yoga programs 
          designed for mind, body, and soul alignment.
        </p>
      </div>
    </section>
  );
};

export default PricingHero; 