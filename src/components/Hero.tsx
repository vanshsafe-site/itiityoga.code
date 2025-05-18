import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Join the movement.<br />
            Feel the difference.<br />
            Live the change.
          </h1>
          <p className={styles.subtitle}>Daily yoga. Lifelong wellness.</p>
          <Link href="/contact" className={`btn ${styles.cta}`}>Start Free Trial</Link>
          <p className={styles.members}>
            <span>74K+</span> Community members already enrolled.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image 
              src="/images/yoga-pose.jpg" 
              alt="Woman in yoga pose at sunset" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 