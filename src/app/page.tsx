'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/Button';
import LightboxGallery from '@/components/LightboxGallery';
import LocationsSection from '@/components/LocationsSection';
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
    // Bloomfield Township Images
    { src: '/media-images/bloomfield-township/01.jfif', alt: 'The Bunker Golf Sim Bloomfield 1' },
    { src: '/media-images/bloomfield-township/02.jfif', alt: 'The Bunker Golf Sim Bloomfield 2' },
    { src: '/media-images/bloomfield-township/03.jfif', alt: 'The Bunker Golf Sim Bloomfield 3' },
    // Lake Orion Images
    { src: '/media-images/lake-orion/01.jpg', alt: 'The Bunker Golf Sim Lake Orion 1' },
    { src: '/media-images/lake-orion/02.jpg', alt: 'The Bunker Golf Sim Lake Orion 2' },
    { src: '/media-images/lake-orion/03.jpg', alt: 'The Bunker Golf Sim Lake Orion 3' },
    { src: '/media-images/lake-orion/04.jpg', alt: 'The Bunker Golf Sim Lake Orion 4' },
    { src: '/media-images/lake-orion/05.jpg', alt: 'The Bunker Golf Sim Lake Orion 5' },
    { src: '/media-images/lake-orion/06.jpg', alt: 'The Bunker Golf Sim Lake Orion 6' },
    { src: '/media-images/lake-orion/07.jpg', alt: 'The Bunker Golf Sim Lake Orion 7' },
    { src: '/media-images/lake-orion/08.jpg', alt: 'The Bunker Golf Sim Lake Orion 8' },
    { src: '/media-images/lake-orion/09.jpg', alt: 'The Bunker Golf Sim Lake Orion 9' },
    { src: '/media-images/lake-orion/10.jpg', alt: 'The Bunker Golf Sim Lake Orion 10' },
    { src: '/media-images/lake-orion/11.jpg', alt: 'The Bunker Golf Sim Lake Orion 11' },
    { src: '/media-images/lake-orion/12.jpg', alt: 'The Bunker Golf Sim Lake Orion 12' },
    { src: '/media-images/lake-orion/13.jpg', alt: 'The Bunker Golf Sim Lake Orion 13' },
    { src: '/media-images/lake-orion/14.jpg', alt: 'The Bunker Golf Sim Lake Orion 14' },
    { src: '/media-images/lake-orion/15.jpg', alt: 'The Bunker Golf Sim Lake Orion 15' },
    { src: '/media-images/lake-orion/16.jpg', alt: 'The Bunker Golf Sim Lake Orion 16' },
    { src: '/media-images/lake-orion/17.jpg', alt: 'The Bunker Golf Sim Lake Orion 17' },
    { src: '/media-images/lake-orion/18.jpg', alt: 'The Bunker Golf Sim Lake Orion 18' },
    { src: '/media-images/lake-orion/19.jpg', alt: 'The Bunker Golf Sim Lake Orion 19' },
    { src: '/media-images/lake-orion/20.jpg', alt: 'The Bunker Golf Sim Lake Orion 20' },
    { src: '/media-images/lake-orion/21.jpg', alt: 'The Bunker Golf Sim Lake Orion 21' },
    { src: '/media-images/lake-orion/22.jpg', alt: 'The Bunker Golf Sim Lake Orion 22' },
    { src: '/media-images/lake-orion/23.jpg', alt: 'The Bunker Golf Sim Lake Orion 23' },
    { src: '/media-images/lake-orion/24.jpg', alt: 'The Bunker Golf Sim Lake Orion 24' },
    { src: '/media-images/lake-orion/25.jpg', alt: 'The Bunker Golf Sim Lake Orion 25' },
    { src: '/media-images/lake-orion/26.jpg', alt: 'The Bunker Golf Sim Lake Orion 26' },
    { src: '/media-images/lake-orion/27.jpg', alt: 'The Bunker Golf Sim Lake Orion 27' },
    { src: '/media-images/lake-orion/28.jpg', alt: 'The Bunker Golf Sim Lake Orion 28' },
    { src: '/media-images/lake-orion/29.jpg', alt: 'The Bunker Golf Sim Lake Orion 29' },
    { src: '/media-images/lake-orion/30.jpg', alt: 'The Bunker Golf Sim Lake Orion 30' },
    { src: '/media-images/lake-orion/31.jpg', alt: 'The Bunker Golf Sim Lake Orion 31' },
    { src: '/media-images/lake-orion/32.jpg', alt: 'The Bunker Golf Sim Lake Orion 32' },
    { src: '/media-images/lake-orion/33.jpg', alt: 'The Bunker Golf Sim Lake Orion 33' },
    { src: '/media-images/lake-orion/34.jpg', alt: 'The Bunker Golf Sim Lake Orion 34' },
    { src: '/media-images/lake-orion/35.jpg', alt: 'The Bunker Golf Sim Lake Orion 35' },
    { src: '/media-images/lake-orion/36.jpg', alt: 'The Bunker Golf Sim Lake Orion 36' },
    { src: '/media-images/lake-orion/37.jpg', alt: 'The Bunker Golf Sim Lake Orion 37' },
    { src: '/media-images/lake-orion/38.jpg', alt: 'The Bunker Golf Sim Lake Orion 38' },
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
            poster="/media-images/lake-orion/11.jpg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source src="/videos/the_bunker-golf-hero-bg.mp4" type="video/mp4" />
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
            <Button href="https://yourgolfbooking.com/venues/the-bunker-orion-twp/booking" target="_blank" rel="noopener noreferrer" variant="outline">
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
          <LocationsSection />
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
