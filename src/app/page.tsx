'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/Button';
import LightboxGallery from '@/components/LightboxGallery';
import styles from './Home.module.css';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const mediaImages = [
    { src: '/media-location-one.jfif', alt: 'The Bunker Golf Sim Bay 1' },
    { src: '/media-location-one-2.jfif', alt: 'The Bunker Golf Sim Bay 2' },
    { src: '/media-location-one-3.jfif', alt: 'The Bunker Golf Sim Setup' },
    { src: '/media-location-one-2.jfif', alt: 'The Bunker Golf Sim Bay 2' },
  ];

  return (
    <>
      <section 
        className={styles.hero} 
        ref={heroRef}
      >
        <motion.div className={styles.heroBackground} style={{ y: yParallax }}>
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="auto"
            poster="/media-location-one.jfif"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'center',
            }}
          >
            <source src="/medio/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            The Ultimate Indoor Golf Experience
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Fully automated, 24/7 access to world-class Trackman golf simulation.
            Play on your schedule with no interruptions.
          </motion.p>
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer">
              Book Bloomfield Township
            </Button>
            <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer" variant="outline">
              Book Lake Orion
            </Button>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.locationSection}`}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Locations
          </motion.h2>
          <div className="grid grid-cols-2">
            <motion.div 
              className={styles.locationCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className={styles.locationTitle}>Bloomfield Township</h3>
              <p className={styles.locationAddress}>43207 Woodward Avenue<br />Bloomfield Township, MI 48302</p>
              <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer" variant="secondary">
                Book
              </Button>
            </motion.div>

            <motion.div 
              className={styles.locationCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className={styles.locationTitle}>Lake Orion</h3>
              <p className={styles.locationAddress}>784 S Lapeer Rd<br />Lake Orion, MI</p>
              <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer" variant="secondary">
                Book
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.mediaSection}`}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Experience The Bunker
          </motion.h2>
          <LightboxGallery images={mediaImages} />
        </div>
      </section>
    </>
  );
}
