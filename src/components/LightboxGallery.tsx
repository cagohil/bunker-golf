'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './LightboxGallery.module.css';

interface GalleryImage {
  src: string;
  alt: string;
}

interface LightboxGalleryProps {
  images: GalleryImage[];
}

type FilterType = 'all' | 'bloomfield' | 'lake-orion';

const INITIAL_LIMIT = 6;

export default function LightboxGallery({ images }: LightboxGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expansion state when changing filter
  useEffect(() => {
    setIsExpanded(false);
  }, [activeFilter]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Filter images based on selected location
  const filteredImages = images.filter((img) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bloomfield') return img.src.includes('bloomfield-township');
    if (activeFilter === 'lake-orion') return img.src.includes('lake-orion');
    return true;
  });

  // Paginated visible images list
  const visibleImages = isExpanded ? filteredImages : filteredImages.slice(0, INITIAL_LIMIT);

  const openLightbox = (imgSrc: string) => {
    const index = filteredImages.findIndex((img) => img.src === imgSrc);
    setCurrentIndex(index >= 0 ? index : 0);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <>
      {/* Premium Filter Tabs */}
      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabBtn} ${activeFilter === 'all' ? styles.activeTab : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Locations
        </button>
        <button
          className={`${styles.tabBtn} ${activeFilter === 'lake-orion' ? styles.activeTab : ''}`}
          onClick={() => setActiveFilter('lake-orion')}
        >
          Lake Orion
        </button>
        <button
          className={`${styles.tabBtn} ${activeFilter === 'bloomfield' ? styles.activeTab : ''}`}
          onClick={() => setActiveFilter('bloomfield')}
        >
          Bloomfield Township
        </button>
      </div>

      {/* Grid of Images with Framer Motion entry */}
      <motion.div layout className={styles.gallery}>
        <AnimatePresence mode="popLayout">
          {visibleImages.map((img, index) => (
            <motion.div
              layout
              key={img.src}
              className={styles.thumbnail}
              onClick={() => openLightbox(img.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className={styles.image}
              />
              <div className={styles.thumbnailOverlay}>
                <span className={styles.viewText}>View</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More / See Less Toggle Button */}
      {filteredImages.length > INITIAL_LIMIT && (
        <div className={styles.seeMoreContainer}>
          <button
            className={styles.seeMoreBtn}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Show fewer gallery images' : 'Show all gallery images'}
          >
            {isExpanded ? (
              <>
                See Less <ChevronUp size={20} />
              </>
            ) : (
              <>
                See More ({filteredImages.length - INITIAL_LIMIT} more) <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      )}

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {isOpen && filteredImages.length > 0 && (
          <motion.div
            className={styles.lightbox}
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close Lightbox">
              <X size={32} strokeWidth={1.5} />
            </button>

            <button className={styles.prevBtn} onClick={prevImage} aria-label="Previous image">
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>

            <motion.div
              className={styles.imageContainer}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={filteredImages[currentIndex].src}
                alt={filteredImages[currentIndex].alt}
                fill
                sizes="90vw"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>

            <button className={styles.nextBtn} onClick={nextImage} aria-label="Next image">
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
