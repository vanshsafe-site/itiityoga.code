import React from 'react';
import styles from './Features.module.css';
import FeatureCards from './FeatureCards';
import { FaOm, FaYinYang, FaFire, FaGraduationCap } from 'react-icons/fa';

const Features = () => {
  const topFeatures = [
    {
      icon: <FaOm />,
      title: 'Be Calm',
      description: 'Find inner peace through meditation'
    },
    {
      icon: <FaYinYang />,
      title: 'Become Flexible',
      description: 'Improve your body\'s flexibility'
    },
    {
      icon: <FaFire />,
      title: 'Burn Fat',
      description: 'Effective weight management'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Learn from the Best',
      description: 'Expert instructors guide you'
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Join Iti Yogashram?</h2>
        
        <div className={styles.topFeatures}>
          {topFeatures.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <FeatureCards />
    </section>
  );
};

export default Features; 