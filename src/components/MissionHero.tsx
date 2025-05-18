import React from 'react';
import styles from './MissionHero.module.css';
import Link from 'next/link';

const MissionHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Touching 1 Crore Lives with<br />the Power of Yoga
        </h1>
        <p className={styles.subtitle}>
          Making yoga easy, accessible, and affordable for all—so that every child,
          student, professional, and soul can live a happier, healthier, and more
          <span className={styles.holistic}>holistic life.</span>
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/contact" className={styles.primaryButton}>Join Us</Link>
          <Link href="/contact" className={styles.secondaryButton}>Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default MissionHero; 