import React from 'react';
import styles from './ContactHero.module.css';

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          We're here to answer your questions and help you start your yoga journey.
          <br />Reach out to us and become part of our growing community.
        </p>
      </div>
    </section>
  );
};

export default ContactHero; 