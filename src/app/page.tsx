import Image from 'next/image';
import Button from '@/components/Button';
import LightboxGallery from '@/components/LightboxGallery';
import styles from './Home.module.css';

export default function Home() {
  const mediaImages = [
    { src: '/media-location-one.jfif', alt: 'The Bunker Golf Sim Bay 1' },
    { src: '/media-location-one-2.jfif', alt: 'The Bunker Golf Sim Bay 2' },
    { src: '/media-location-one-3.jfif', alt: 'The Bunker Golf Sim Setup' },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/media-location-one.jfif"
            alt="Golf Simulator Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>The Ultimate Indoor Golf Experience</h1>
          <p className={styles.heroSubtitle}>
            Fully automated, 24/7 access to world-class Trackman golf simulation.
            Play on your schedule with no interruptions.
          </p>
          <div className={styles.heroButtons}>
            <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer">
              Book Bloomfield Township
            </Button>
            <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer" variant="outline">
              Book Lake Orion
            </Button>
          </div>
        </div>
      </section>

      <section className={`section ${styles.locationSection}`}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '4rem' }}>Our Locations</h2>
          <div className="grid grid-cols-2">
            <div className={styles.locationCard}>
              <h3 className={styles.locationTitle}>Bloomfield Township</h3>
              <p className={styles.locationAddress}>43207 Woodward Avenue<br />Bloomfield Township, MI 48302</p>
              <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer">
                Book Now
              </Button>
            </div>

            <div className={styles.locationCard}>
              <h3 className={styles.locationTitle}>Lake Orion</h3>
              <p className={styles.locationAddress}>784 S Lapeer Rd<br />Lake Orion, MI</p>
              <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.mediaSection}`}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Experience The Bunker</h2>
          <LightboxGallery images={mediaImages} />
        </div>
      </section>
    </>
  );
}
