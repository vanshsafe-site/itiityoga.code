import React from 'react';
import styles from './PricingFeatures.module.css';
import { FaClock, FaUsers, FaPrayingHands, FaHandsHelping, FaYinYang } from 'react-icons/fa';

const PricingFeatures = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: 'Daily Yoga Sessions',
      description: 'Join our expert-led classes every day'
    },
    {
      icon: <FaClock />,
      title: '75-Minute Classes',
      description: 'Perfect duration for complete practice'
    },
    {
      icon: <FaPrayingHands />,
      title: 'Meditation & Mindfulness',
      description: 'Develop inner peace and awareness'
    },
    {
      icon: <FaYinYang />,
      title: 'Multiple Yoga Styles',
      description: 'From Ashtanga to Yin Yoga'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Yoga Therapy',
      description: 'Personalized therapeutic approaches'
    },
    {
      icon: <FaUsers />,
      title: 'Community Support',
      description: 'Connect with fellow practitioners'
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Everything You Need for Your Yoga Journey</h2>
        
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconContainer}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures; 