import Image from 'next/image';
import Button from '@/components/Button';
import LocationsSection from '@/components/LocationsSection';

export default function AboutUs() {
  return (
    <div className="container section pt-safe">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 className="text-center" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>About The Bunker</h1>

        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3rem' }}>
          <Image src="/media-images/lake-orion/12.jpg" alt="The Bunker Simulator" fill style={{ objectFit: 'cover' }} />
        </div>

        <div style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '4rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to The Bunker, where innovation meets convenience in the world of golf. We offer 3 premium simulator bays, each available 24/7, allowing you the flexibility to play whenever you want. Book a session remotely from anywhere, and step into one of our high-tech bays at a time that works best for you.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Whether you're a seasoned golfer or a beginner, our simulators provide a realistic and interactive experience, giving you access to hundreds of courses around the world. At The Bunker, you can focus on perfecting your game solo or have fun with friends in a relaxed, no-pressure environment.
          </p>
          <p>
            Our mission is to make golf accessible, convenient, and enjoyable—no matter the weather or time of day.
          </p>
        </div>

        <div style={{ marginTop: '5rem' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem', fontWeight: 300 }}>Our Locations</h2>
          <LocationsSection />
        </div>
      </div>
    </div>
  );
}
