import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is it for beginners? Can I join?',
      answer: 'Yes, our classes are designed for all levels, including complete beginners. Our instructors provide modifications for different skill levels.'
    },
    {
      question: 'What are the batch timings? Can I join any batch?',
      answer: 'We offer multiple batches throughout the day starting from early morning to evening. You can join any batch that fits your schedule.'
    },
    {
      question: 'Why is the duration 1 hour 15 minutes?',
      answer: 'Our sessions are designed to provide a comprehensive yoga experience including asanas, pranayama, and meditation. The 75-minute duration allows for proper warm-up, practice, and cool-down.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={styles.accordionContent}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 