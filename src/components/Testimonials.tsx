import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Yoga Enthusiast',
      image: '/images/testimonial-1.jpg',
      content: 'Iti Iti Yogashram has completely transformed my life. The instructors are amazing and the community is so supportive.',
      rating: 5
    },
    {
      id: 2,
      name: 'Kevin Johnson',
      role: 'Yoga Enthusiast',
      image: '/images/testimonial-2.jpg',
      content: 'Iti Iti Yogashram has completely transformed my life. The instructors are amazing and the community is so supportive.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Yoga Enthusiast',
      image: '/images/testimonial-3.jpg',
      content: 'Iti Iti Yogashram has completely transformed my life. The instructors are amazing and the community is so supportive.',
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