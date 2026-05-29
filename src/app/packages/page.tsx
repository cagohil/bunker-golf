'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import styles from './Packages.module.css';

interface PackageLocation {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  membershipUrl: string;
}

const PACKAGE_LOCATIONS: PackageLocation[] = [
  {
    id: 'bloomfield',
    title: 'Bloomfield Township',
    description: 'Get unlimited, fully automated 24/7 simulator access with premium Trackman features at our Bloomfield Township location.',
    imageSrc: '/media-images/bloomfield-township/01.jfif',
    membershipUrl: 'https://yourgolfbooking.com/venues/the-bunker-2/memberships',
  },
  {
    id: 'lake-orion',
    title: 'Lake Orion',
    description: 'Enjoy exclusive perks, modern golf amenities, and fully automated simulator play at our Lake Orion facility.',
    imageSrc: '/media-images/lake-orion/01.jpg',
    membershipUrl: 'https://yourgolfbooking.com/venues/the-bunker-orion-twp/memberships',
  },
];

export default function Packages() {
  return (
    <div className={`container ${styles.packagesSection} pt-safe`}>
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Packages & Memberships
      </motion.h1>
      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Select your location below to explore available memberships and exclusive packages. Play on your own terms with 24/7 keycard access.
      </motion.p>
      
      <div className={styles.grid}>
        {PACKAGE_LOCATIONS.map((loc, index) => (
          <motion.div
            key={loc.id}
            className={styles.packageCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={loc.imageSrc}
                alt={`${loc.title} Golf Simulator`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.thumbnail}
                priority={index === 0}
              />
            </div>
            
            <div className={styles.cardDetails}>
              <h2 className={styles.packageTitle}>{loc.title}</h2>
              <p className={styles.packageDescription}>{loc.description}</p>
            </div>
            
            <div className={styles.buttonGroup}>
              <Button 
                href={loc.membershipUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Memberships
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

