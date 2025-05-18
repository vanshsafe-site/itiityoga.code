import React from 'react';
import styles from './ContactInfo.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

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
            <p>123 Yoga Street, Wellness City</p>
            <p>Harmony District, 400001</p>
          </div>
        </div>
        
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>
            <FaPhone />
          </div>
          <div className={styles.infoContent}>
            <h3>Phone Number</h3>
            <p>+1 (555) 123-4567</p>
            <p>+1 (555) 765-4321</p>
          </div>
        </div>
        
        <div className={styles.infoItem}>
          <div className={styles.infoIcon}>
            <FaEnvelope />
          </div>
          <div className={styles.infoContent}>
            <h3>Email Address</h3>
            <p>contact@itiyogashram.com</p>
            <p>info@itiyogashram.com</p>
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
      
      <div className={styles.mapContainer}>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapText}>Google Map Location</div>
        </div>
      </div>
      
      <div className={styles.socialMedia}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
          <a href="#" className={styles.socialIcon}><FaTwitter /></a>
          <a href="#" className={styles.socialIcon}><FaInstagram /></a>
          <a href="#" className={styles.socialIcon}><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 