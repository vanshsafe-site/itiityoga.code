import React from 'react';
import styles from './MissionFeatures.module.css';
import Image from 'next/image';
import { FaUsers, FaGraduationCap, FaBriefcase, FaHeart, FaGlobeAsia, FaHandHoldingHeart } from 'react-icons/fa';
import Link from 'next/link';

const MissionFeatures = () => {
  const stats = [
    {
      number: '50,000+',
      label: 'lives touched',
      icon: <FaUsers />
    },
    {
      number: '5,000+',
      label: 'underprivileged children taught',
      icon: <FaGraduationCap />
    },
    {
      number: '100+',
      label: 'schools and organizations',
      icon: <FaBriefcase />
    },
    {
      number: 'Growing',
      label: 'global community',
      icon: <FaGlobeAsia />
    }
  ];

  return (
    <>
      {/* Our Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p>
                At Iti Iti Yogashram, our mission is to transform 1 crore 
                lives by making yoga simple to follow, accessible to all, 
                and affordable for every household.
              </p>
              <p>
                We're building a global wellness movement that 
                supports <span className={styles.highlight}>students, children, corporates, families</span>, and 
                anyone seeking peace and purpose in their daily lives.
              </p>
              <p>
                Yoga is not just what we teach—it's how we live.<br />
                It's how we serve.<br />
                It's how we uplift.
              </p>
            </div>
            <div className={styles.missionImage}>
              <Image
                src="/yogapractice.png"
                alt="Yoga Practice at Iti Iti Yoga"
                width={500}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seva Section */}
      <section className={styles.sevaSection}>
        <div className={styles.container}>
          <div className={styles.sevaContent}>
            <div className={styles.sevaText}>
              <h2 className={styles.sectionTitle}>Seva is Our Param Dharma</h2>
              <p className={styles.sevaIntro}>
                For us, Seva is not charity—it is our sacred duty.
              </p>
              
              <div className={styles.sevaPoints}>
                <div className={styles.sevaPoint}>
                  <FaGraduationCap className={styles.sevaIcon} />
                  <p>We teach underprivileged children for free</p>
                </div>
                <div className={styles.sevaPoint}>
                  <FaUsers className={styles.sevaIcon} />
                  <p>We offer free yoga classes to those in need</p>
                </div>
                <div className={styles.sevaPoint}>
                  <FaBriefcase className={styles.sevaIcon} />
                  <p>We create employment and training opportunities for youth</p>
                </div>
                <div className={styles.sevaPoint}>
                  <FaHeart className={styles.sevaIcon} />
                  <p>We believe true wellness belongs to everyone, not just those who can afford it.</p>
                </div>
              </div>
            </div>
            <div className={styles.sevaImages}>
              <div className={styles.sevaImagesGrid}>
                <div className={styles.sevaImageWrapper}>
                  <Image
                    src="/yogaforchildren.jpg"
                    alt="Yoga for Children at Iti Iti Yoga"
                    width={800}
                    height={400}
                    className={styles.sevaImage}
                    priority
                  />
                </div>
                <div className={styles.sevaImageWrapper}>
                  <Image
                    src="/deepmeditation.png"
                    alt="Deep Meditation and Mental Health"
                    width={400}
                    height={300}
                    className={styles.sevaImage}
                  />
                </div>
                <div className={styles.sevaImageWrapper}>
                  <Image
                    src="/internationalyogaday.jpeg"
                    alt="International Yoga Day Celebration"
                    width={400}
                    height={300}
                    className={styles.sevaImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Philosophy</h2>
          
          <div className={styles.philosophyCards}>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>
                <div className={styles.iconPlaceholder}></div>
              </div>
              <h3 className={styles.philosophyTitle}>Lokah Samastah Sukhino Bhavantu</h3>
              <p className={styles.philosophyDesc}>May all beings be happy and free</p>
            </div>
            
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>
                <div className={styles.iconPlaceholder}></div>
              </div>
              <h3 className={styles.philosophyTitle}>Vasudhaiva Kutumbakam</h3>
              <p className={styles.philosophyDesc}>The world is one family</p>
            </div>
            
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>
                <div className={styles.iconPlaceholder}></div>
              </div>
              <h3 className={styles.philosophyTitle}>Seva is Param Dharma</h3>
              <p className={styles.philosophyDesc}>Service is our highest duty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Journey So Far</h2>
          
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Movement Section */}
      <section className={styles.joinSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Join the Movement for Conscious Wellness</h2>
          <p className={styles.joinText}>
            Whether you're seeking inner peace, better health, or a way to give back—<br />
            you belong here.
          </p>
          <p className={styles.joinSubtext}>
            Come be a part of a mission that's transforming bodies, minds, and lives<br />
            across the world.
          </p>
          <div className={styles.joinButtons}>
            <Link href="/contact" className={styles.primaryButton}>Start Your Yoga Journey</Link>
            <Link href="/contact" className={styles.secondaryButton}>Support a Child's Wellness</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionFeatures; 