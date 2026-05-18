'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './LightboxGallery.module.css';

interface LightboxGalleryProps {
  images: { src: string; alt: string }[];
}

export default function LightboxGallery({ images }: LightboxGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <div key={index} className={styles.thumbnail} onClick={() => openLightbox(index)}>
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close">&times;</button>
          
          <button className={styles.prevBtn} onClick={prevImage} aria-label="Previous">&#10094;</button>
          
          <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
            <Image 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <button className={styles.nextBtn} onClick={nextImage} aria-label="Next">&#10095;</button>
        </div>
      )}
    </>
  );
}
