'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Button from './Button';
import VideoModal from './VideoModal';
import styles from './LocationsSection.module.css';

interface LocationInfo {
  id: string;
  title: string;
  addressLine1: string;
  addressLine2: string;
  bookingUrl: string;
  videoSrc: string;
  videoType: 'youtube' | 'local';
  thumbnailSrc: string;
}

const LOCATIONS_DATA: LocationInfo[] = [
  {
    id: 'bloomfield',
    title: 'Bloomfield Township',
    addressLine1: '43207 Woodward Avenue',
    addressLine2: 'Bloomfield Township, MI 48302',
    bookingUrl: 'https://yourgolfbooking.com/venues/the-bunker-2/booking',
    videoSrc: 'https://www.youtube.com/embed/Xw2mGgHijKI?si=MwHAtQdXaA1L_lT2',
    videoType: 'youtube',
    thumbnailSrc: '/media-images/bloomfield-township/01.jfif',
  },
  {
    id: 'lake-orion',
    title: 'Lake Orion',
    addressLine1: '784 S Lapeer Rd',
    addressLine2: 'Orion Township, MI 48362',
    bookingUrl: 'https://yourgolfbooking.com/venues/the-bunker-2/booking',
    videoSrc: '/videos/lake-orion-video.mp4',
    videoType: 'local',
    thumbnailSrc: '/media-images/lake-orion/01.jpg',
  },
];

export default function LocationsSection() {
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenVideo = (location: LocationInfo) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  return (
    <>
      <div className={styles.grid}>
        {LOCATIONS_DATA.map((loc, index) => (
          <motion.div
            key={loc.id}
            className={styles.locationCard}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Elegant preview image with interactive play button overlay */}
            <div className={styles.imageWrapper} onClick={() => handleOpenVideo(loc)}>
              <Image
                src={loc.thumbnailSrc}
                alt={`${loc.title} Simulator Facility`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
                style={{ objectFit: 'cover' }}
                className={styles.thumbnail}
              />
              <div className={styles.playOverlay}>
                <div className={styles.playBtn} aria-label="Play Tour Video">
                  <Play size={24} fill="currentColor" className={styles.playIcon} />
                </div>
              </div>
            </div>

            {/* Content & Action Buttons */}
            <div className={styles.cardDetails}>
              <h3 className={styles.locationTitle}>{loc.title}</h3>
              <p className={styles.locationAddress}>
                {loc.addressLine1}
                <br />
                {loc.addressLine2}
              </p>
            </div>

            <div className={styles.buttonGroup}>
              <Button href={loc.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Now
              </Button>
              <Button onClick={() => handleOpenVideo(loc)} variant="outline">
                Watch Tour
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Shared Video Player Dialog */}
      {selectedLocation && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseVideo}
          videoSrc={selectedLocation.videoSrc}
          videoType={selectedLocation.videoType}
        />
      )}
    </>
  );
}
