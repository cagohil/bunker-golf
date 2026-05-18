import Image from 'next/image';
import Button from '@/components/Button';

export default function AboutUs() {
  return (
    <div className="container section">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="text-center" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>About The Bunker</h1>
        
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3rem' }}>
          <Image src="/media-location-one-3.jfif" alt="The Bunker Simulator" fill style={{ objectFit: 'cover' }} />
        </div>

        <div style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem', textAlign: 'center' }}>
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

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer">
            Book Bloomfield Township
          </Button>
          <Button href="https://yourgolfbooking.com/venues/the-bunker-2/booking" target="_blank" rel="noopener noreferrer" variant="outline">
            Book Lake Orion
          </Button>
        </div>

        <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              src="https://www.youtube.com/embed/Xw2mGgHijKI?si=MwHAtQdXaA1L_lT2" 
              title="YouTube video player" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
