import React from 'react';
import Image from 'next/image';
import styles from './Instructor.module.css';

const Instructor = () => {
  return (
    <section className={styles.instructor}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image 
            src="/groupyoga.png" 
            alt="Group yoga session" 
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Meet Nishant Sir</h2>
          <p className={styles.description}>
            With over 15 years of experience in teaching yoga, Nishant Sir brings 
            authentic traditional yoga practices to the modern world. His unique 
            teaching style combines ancient wisdom with contemporary wellness 
            practices.
          </p>
          <blockquote className={styles.quote}>
            "Yoga is not just exercise - it's a way of life that transforms your 
            body, mind, and soul."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Instructor; 