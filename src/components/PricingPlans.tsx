import React from 'react';
import Link from 'next/link';
import styles from './PricingPlans.module.css';
import { FaCheck } from 'react-icons/fa';

const PricingPlans = () => {
  const planFeatures = [
    'Daily Yoga',
    '1 hours 15 min class',
    'Asanas',
    'Prayanam',
    'Ashtang Yoga',
    'Hand Mudras',
    'Yog nidra',
    'Yin Yoga',
    'Raj Yoga',
    'Yoga Therapy',
    'Daily Meditation',
    'Mindfulness'
  ];

  const extraFeatures12Month = [
    'Flexible Batch Timings (6 classes a day)',
    'Water Reminders',
    'Yoga Tracking',
    'Community Support'
  ];

  const extraFeatures6Month = [
    'Flexible Batch Timings (6 classes a day)'
  ];

  return (
    <section className={styles.pricingPlans}>
      <div className={styles.container}>
        <div className={styles.plansContainer}>
          {/* 12 Months Plan */}
          <div className={styles.planCard}>
            <div className={styles.popularTag}>Most Popular</div>
            <h3 className={styles.planDuration}>12 Months</h3>
            <div className={styles.planPrice}>
              <span className={styles.price}>₹5,999</span>
              <span className={styles.period}>/year</span>
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <FaCheck className={styles.checkIcon} />
                <span>Free Starter Pack</span>
              </div>
              {planFeatures.map((feature, index) => (
                <div key={`12month-${index}`} className={styles.feature}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{feature}</span>
                </div>
              ))}
              {extraFeatures12Month.map((feature, index) => (
                <div key={`12month-extra-${index}`} className={styles.feature}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className={styles.ctaButton}>Start Your Journey</Link>
          </div>

          {/* 6 Months Plan */}
          <div className={styles.planCard}>
            <h3 className={styles.planDuration}>6 Months</h3>
            <div className={styles.planPrice}>
              <span className={styles.price}>₹4,999</span>
              <span className={styles.period}>/6 months</span>
            </div>
            <div className={styles.features}>
              {planFeatures.map((feature, index) => (
                <div key={`6month-${index}`} className={styles.feature}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{feature}</span>
                </div>
              ))}
              {extraFeatures6Month.map((feature, index) => (
                <div key={`6month-extra-${index}`} className={styles.feature}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className={styles.ctaButton}>Start Your Journey</Link>
          </div>

          {/* 3 Months Plan */}
          <div className={styles.planCard}>
            <h3 className={styles.planDuration}>3 Months</h3>
            <div className={styles.planPrice}>
              <span className={styles.price}>₹2,999</span>
              <span className={styles.period}>/3 months</span>
            </div>
            <div className={styles.features}>
              {planFeatures.map((feature, index) => (
                <div key={`3month-${index}`} className={styles.feature}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className={styles.ctaButton}>Start Your Journey</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans; 