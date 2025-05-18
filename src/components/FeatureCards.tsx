import React from 'react';
import styles from './FeatureCards.module.css';
import { FaClock, FaUsers, FaHeart, FaCalendarAlt, FaUserCheck, FaClock as FaClockAlt, FaHeadset, FaMobile } from 'react-icons/fa';

const FeatureCards = () => {
  const features = [
    {
      icon: <FaClock />,
      title: '1 Hour Live Classes',
      description: 'Authentic Yoga Philosophy, Pranayam and Mindfulness'
    },
    {
      icon: <FaUsers />,
      title: 'Authentic Yoga',
      description: 'Traditional and modern practices for real transformation'
    },
    {
      icon: <FaHeart />,
      title: 'Loving Community',
      description: 'Join our supportive yoga community'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Free Access to Events',
      description: 'Exclusive online events and workshops'
    },
    {
      icon: <FaUserCheck />,
      title: 'Accountability Support',
      description: 'Stay motivated with community support'
    },
    {
      icon: <FaClockAlt />,
      title: 'Multiple Batches',
      description: 'Flexible timing for your convenience'
    },
    {
      icon: <FaHeadset />,
      title: 'Habit Tracking',
      description: 'Regular reminders for consistent practice'
    },
    {
      icon: <FaMobile />,
      title: 'Easy Accessibility',
      description: 'Practice anywhere, anytime'
    }
  ];

  return (
    <section className={styles.featureCards}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards; 