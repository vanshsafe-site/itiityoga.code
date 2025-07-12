import React from 'react';
import styles from './ContactInfo.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.infoTitle}>Contact Information</h2>
      <p className={styles.infoSubtitle}>
        Connect with us through any of these channels or visit our center in person.
      </p>
      
      <div className={styles.infoList}>
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>
            <FaMapMarkerAlt />
          </div>
          <div className={styles.infoContent}>
            <h3>Our Location</h3>
            <p>Near Meerapur Gol Park Chauraha</p>
            <p>Prayagraj, India</p>
          </div>
        </div>
        
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>
            <FaPhone />
          </div>
          <div className={styles.infoContent}>
            <h3>Phone Number</h3>
            <p>(+91) 808-150-6872</p>
          </div>
        </div>
        
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>
            <FaEnvelope />
          </div>
          <div className={styles.infoContent}>
            <h3>Email Address</h3>
            <p>contact@itiitiyoga.com</p>
          </div>
        </div>
        
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>
            <FaClock />
          </div>
          <div className={styles.infoContent}>
            <h3>Working Hours</h3>
            <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
            <p>Saturday - Sunday: 7:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
      
      <div className={styles.socialMedia}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/profile.php?id=100094601637698" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaFacebookF /></a>
          <a href="https://api.whatsapp.com/send/?phone=918081506872&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaWhatsapp /></a>
          <a href="https://www.instagram.com/iti_iti_yogashram/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram /></a>
          <a href="https://www.youtube.com/@ItiItiYogashram" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 