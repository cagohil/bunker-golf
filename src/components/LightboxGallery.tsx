'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './LightboxGallery.module.css';

interface LightboxGalleryProps {
  images: { src: string; alt: string }[];
}

export default function LightboxGallery({ images }: LightboxGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className={styles.gallery}>
        {images.map((img, index) => (
          <motion.div 
            key={index} 
            className={styles.thumbnail} 
            onClick={() => openLightbox(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} className={styles.image} />
            <div className={styles.thumbnailOverlay}>
              <span className={styles.viewText}>View</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.lightbox} 
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close">
              <X size={32} strokeWidth={1.5} />
            </button>
            
            <button className={styles.prevBtn} onClick={prevImage} aria-label="Previous">
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>
            
            <motion.div 
              className={styles.imageContainer} 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt}
                fill
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
            
            <button className={styles.nextBtn} onClick={nextImage} aria-label="Next">
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
