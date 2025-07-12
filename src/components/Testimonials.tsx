import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Vansh',
      role: 'Yoga Student',
      image: '/vansh.png',
      content: 'Nishanth Sir is an excellent yoga teacher! He is calm, well-disciplined, and truly understands each student\'s needs. His teaching style is slow and steady, ensuring that everyone can follow along comfortably. His yoga teachings have been extremely helpful, and I highly recommend him to anyone looking for a dedicated and professional instructor!',
      rating: 5
    },
    {
      id: 2,
      name: 'Karla',
      role: 'Student from Mexico',
      image: '/karla.png',
      content: 'Thank you so much for this months with yoga sessions, my life going better with my health condition Thank you Nishant for your patience, support and learning about my inner peaceful self, my online classes from Mexico helped me a lot, and changed my life totally.',
      rating: 5
    },
    {
      id: 3,
      name: 'Yoga Student',
      role: 'Student',
      image: '/yogastu.png',
      content: 'Exceptional experience! This yoga class is not like other yoga classes that only focuses on you physical health but this one also focuses on your mental health. Since the day I started doing yoga I\'ve started feeling stress free and happy. Thank you so much sir for you expert guidance and ever smiling yoga.',
      rating: 5
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Members Say</h2>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
              </div>
              <p className={styles.content}>{testimonial.content}</p>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={50} 
                    height={50}
                  />
                </div>
                <div className={styles.info}>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 